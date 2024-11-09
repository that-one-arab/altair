import lightTheme from './defaults/light';
import darkTheme from './defaults/dark';
import { ICustomTheme, ITheme, createTheme, hexToRgbStr } from './theme';

const asCSSVariablesString = (theme: ITheme) => {
  return `
  :root {
    --baseline-size: ${theme.type.fontSize.base};
    --rem-base: ${theme.type.fontSize.remBase};
    --body-font-size: ${theme.type.fontSize.body};

    --app-easing: ${theme.easing};

    --black-color: ${theme.colors.black};
    --dark-grey-color: ${theme.colors.darkGray};
    --grey-color: ${theme.colors.gray};
    --light-grey-color: ${theme.colors.lightGray};
    --white-color: ${theme.colors.white};
    --green-color: ${theme.colors.green};
    --blue-color: ${theme.colors.blue};
    --cerise-color: ${theme.colors.cerise};
    --red-color: ${theme.colors.red};
    --rose-color: ${theme.colors.rose};
    --orange-color: ${theme.colors.orange};
    --yellow-color: ${theme.colors.yellow};
    --light-red-color: ${theme.colors.lightRed};
    --dark-purple-color: ${theme.colors.darkPurple};

    --primary-color: ${theme.colors.primary};
    --secondary-color: ${theme.colors.secondary};
    --tertiary-color: ${theme.colors.tertiary};

    --shadow-bg: rgba(${hexToRgbStr(theme.shadow.color)}, ${theme.shadow.opacity});

    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 'Helvetica Neue', Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    --rgb-black: ${hexToRgbStr(theme.colors.black)};
    --rgb-dark-grey: ${hexToRgbStr(theme.colors.darkGray)};
    --rgb-grey: ${hexToRgbStr(theme.colors.gray)};
    --rgb-light-grey: ${hexToRgbStr(theme.colors.lightGray)};
    --rgb-white: ${hexToRgbStr(theme.colors.white)};
    --rgb-green: ${hexToRgbStr(theme.colors.green)};
    --rgb-blue: ${hexToRgbStr(theme.colors.blue)};
    --rgb-cerise: ${hexToRgbStr(theme.colors.cerise)};
    --rgb-red: ${hexToRgbStr(theme.colors.red)};
    --rgb-orange: ${hexToRgbStr(theme.colors.orange)};
    --rgb-yellow: ${hexToRgbStr(theme.colors.yellow)};
    --rgb-light-red: ${hexToRgbStr(theme.colors.lightRed)};
    --rgb-dark-purple: ${hexToRgbStr(theme.colors.darkPurple)};

    --editor-font-family: ${theme.editor.fontFamily.default};
    --editor-font-size: ${theme.editor.fontSize};

    --theme-bg-color: ${theme.colors.bg};
    --theme-off-bg-color: ${theme.colors.offBg};
    --theme-font-color: ${theme.colors.font};
    --theme-off-font-color: ${theme.colors.offFont};
    --theme-border-color: ${theme.colors.border};
    --theme-off-border-color: ${theme.colors.offBorder};
    --header-bg-color: ${theme.colors.headerBg || theme.colors.offBg};

    --rgb-primary: ${hexToRgbStr(theme.colors.primary)};
    --rgb-secondary: ${hexToRgbStr(theme.colors.secondary)};
    --rgb-tertiary: ${hexToRgbStr(theme.colors.tertiary)};

    --rgb-theme-bg: ${hexToRgbStr(theme.colors.bg)};
    --rgb-theme-off-bg: ${hexToRgbStr(theme.colors.offBg)};
    --rgb-theme-font: ${hexToRgbStr(theme.colors.font)};
    --rgb-theme-off-font: ${hexToRgbStr(theme.colors.offFont)};
    --rgb-theme-border: ${hexToRgbStr(theme.colors.border)};
    --rgb-theme-off-border: ${hexToRgbStr(theme.colors.offBorder)};
    --rgb-header-bg: ${hexToRgbStr(theme.colors.headerBg || theme.colors.offBg)};

    --editor-comment-color: ${theme.editor.colors.comment};
    --editor-string-color: ${theme.editor.colors.string};
    --editor-number-color: ${theme.editor.colors.number};
    --editor-variable-color: ${theme.editor.colors.variable};
    --editor-attribute-color: ${theme.editor.colors.attribute};
    --editor-keyword-color: ${theme.editor.colors.keyword};
    --editor-atom-color: ${theme.editor.colors.atom};
    --editor-property-color: ${theme.editor.colors.property};
    --editor-punctuation-color: ${theme.editor.colors.punctuation};
    --editor-cursor-color: ${theme.editor.colors.cursor};
    --editor-def-color: ${theme.editor.colors.definition};
    --editor-builtin-color: ${theme.editor.colors.builtin};
  }
  `;
};

export const getCSS = (
  appTheme: ICustomTheme,
  appDarkTheme?: ICustomTheme,
  accentColor?: string
) => {
  const extraTheme = accentColor ? { colors: { primary: accentColor } } : {};
  if (appTheme && appDarkTheme) {
    return `
      ${asCSSVariablesString(createTheme(appTheme, extraTheme))}
      @media (prefers-color-scheme: dark) {
        ${asCSSVariablesString(createTheme(appDarkTheme, extraTheme))}
      }
    `;
  }

  if (!appTheme || appTheme.isSystem) {
    return `
      ${asCSSVariablesString(createTheme(lightTheme, appTheme, extraTheme))}
      @media (prefers-color-scheme: dark) {
        ${asCSSVariablesString(createTheme(darkTheme, appTheme, extraTheme))}
      }
    `;
  }

  return asCSSVariablesString(createTheme(appTheme, extraTheme));
};

<!-- [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fimolorhe%2Faltair.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fimolorhe%2Faltair?ref=badge_shield) -->
[![Crowdin](https://d322cqt584bo4o.cloudfront.net/altair-gql/localized.svg)](https://crowdin.com/project/altair-gql)

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/flnheeellpciglgpaodhkhmapeljopja.svg)](https://chrome.google.com/webstore/detail/altair-graphql-client/flnheeellpciglgpaodhkhmapeljopja)
[![Mozilla Add-on](https://img.shields.io/amo/v/altair-graphql-client.svg)](https://addons.mozilla.org/en-US/firefox/addon/altair-graphql-client/)
[![npm](https://img.shields.io/npm/v/altair-express-middleware.svg)](https://www.npmjs.com/package/altair-express-middleware)
[![Altair GraphQL Client](https://snapcraft.io/altair/badge.svg)](https://snapcraft.io/altair)
[![GitHub release](https://img.shields.io/github/release/altair-graphql/altair.svg)](https://github.com/altair-graphql/altair/releases)
[![Github All Releases](https://img.shields.io/github/downloads/altair-graphql/altair/total.svg)](https://github.com/altair-graphql/altair/releases)

[![Backers on Open Collective](https://opencollective.com/altair/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/altair/sponsors/badge.svg)](#sponsors)

![Maintenance](https://img.shields.io/maintenance/yes/2025.svg)

[Deploying?](.github/DEPLOY.md)

<div align="center" style="text-align: center;">

<img src="icons/android-icon-192x192.png" alt="Altair GraphQL Client">

<h1><a href="https://altairgraphql.dev/" target="_blank">Altair GraphQL Client</a></h1>

</div>

![set url](packages/altair-app/src/assets/img/readme/app-shot.png "Altair GraphQL Client")

**Altair** is a beautiful feature-rich GraphQL Client IDE for all platforms. Available for [MacOS, Windows, Linux](https://altairgraphql.dev/), [Chrome](https://chrome.google.com/webstore/detail/altair-graphql-client/flnheeellpciglgpaodhkhmapeljopja), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/altair-graphql-client/).
It enables you interact with any GraphQL server you are authorized to access from any platform you are on.


_-- the GraphQL IDE that does not require running a web server_


## Features

*See details here: https://altairgraphql.dev/docs/features*

## Sponsors
Thanks to all our sponsors for sponsoring this project! Do you use Altair GraphQL client at your company? Consider supporting this project as a major sponsor (primary, gold, silver or bronze) on [open collective](https://opencollective.com/altair/contribute).
### Primary Sponsor
[![XKojiMedia](packages/altair-app/src/assets/img/readme/xk.png "XKojiMedia")](https://www.xkoji.dev/)

To be a primary sponsor, [reach out](mailto:sponsor@sirmuel.design) to us.

### Gold Sponsor
Become a [Gold sponsor](https://opencollective.com/altair/contribute/gold-sponsor-27470/checkout) of Altair to appear here.
<!-- ### Silver Sponsor -->

<!-- ### Bronze Sponsor -->

### Other Sponsors

<p>
  <a href="https://www.digitalocean.com/">
    <img src="https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/PoweredByDO/DO_Powered_by_Badge_blue.svg" width="201px">
  </a>
</p>

## Usage


For mac users, you can also install using cask:

```
$ brew install --cask altair-graphql-client
```

For linux users, you can also install using [snap](https://snapcraft.io/altair):

```
$ snap install altair
```

For arch linux users, an AUR package [aur/altair](https://aur.archlinux.org/packages/altair/) exists:

```
$ yay -S altair
```

For windows users, you can install using [chocolatey](https://chocolatey.org/packages/altair-graphql):

```
$ choco install altair-graphql
```

...or [winget](https://winget.run/pkg/altair-graphql/altair):

```
$ winget install -e --id altair-graphql.altair
```

*You can find other available integrations here: https://altairgraphql.dev/docs/integrations*

### Configuration Options
When using a custom instance of Altair, there are [couple of options](https://github.com/altair-graphql/altair/blob/master/packages/altair-core/src/config.ts#L10) you can use to customize Altair based on your needs:

- `endpointURL` `string` - URL to set as the server endpoint
- `subscriptionsEndpoint` `string` - URL to set as the subscription endpoint
- `initialSubscriptionsProvider` `"websocket" | "graphql-ws" | "app-sync" | "action-cable"` - Initial subscriptions provider
- `initialQuery` `string` - Initial query to be added
- `initialVariables` `string` - Initial variables to be added (in JSON format) e.g. `'{ "var1": "first variable" }'`
- `initialPreRequestScript` `string` - Initial pre-request script to be added e.g. `'altair.helpers.getEnvironment("api_key")'`
- `initialHeaders` `IDictionary` - Initial headers object to be added
```js
{
  'X-GraphQL-Token': 'asd7-237s-2bdk-nsdk4'
}
```
- `initialEnvironments` `IInitialEnvironments` - Initial Environments to be added
```js
{
  base: {
    title: 'Environment',
    variables: {}
  },
  subEnvironments: [
    {
      title: 'sub-1',
      variables: {}
    }
  ]
}
```
- `instanceStorageNamespace` `string` - Namespace for storing the data for the altair instance. Use this when you have multiple altair instances running on the same domain. e.g. `'altair_dev_'`

Example usage:
```js
AltairGraphQL.init({
  endpointURL: 'https://www.example.com/graphql',
  initialVariables: '{ "username": "imolorhe" }',
});
```

## Supported Browsers

Altair has been tested in the latest versions of Google Chrome and Mozilla Firefox. It might not work as expected in other browsers like Safari and Edge.

## Community 🙏🏾

You can learn more about how to get help [here](.github/community.md).

## Contributing

Would you like to help with translations? https://altair-gql-translate.surge.sh/ [Click here](https://crwd.in/altair-gql).

<div align="center" style="text-align: center;">
  
[![Donate to Altair](https://opencollective.com/altair/donate/button.png?color=blue)](https://opencollective.com/altair/donate)

</div>

<a href="https://opencollective.com/altair#sponsors" target="_blank"><img src="https://opencollective.com/altair/sponsors.svg?width=1000"></a>

Learn more about contributing to Altair [here](.github/CONTRIBUTING.md) and [here](https://altairgraphql.dev/docs/contributing.html).

## Development

Read more [here](.github/development.md).

## Deployment
### API
#### Docker
The docker image can be built from the [Dockerfile](./Dockerfile) at the root of the repo.

#### Digitalocean
[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/altair-graphql/altair/tree/master)

#### Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Faltair-graphql%2Faltair&env=JWT_ACCESS_SECRET,EVENTS_JWT_ACCESS_SECRET,JWT_REFRESH_SECRET,GOOGLE_OAUTH_CLIENT_ID,GOOGLE_OAUTH_CLIENT_SECRET,POSTGRES_DB,POSTGRES_USER,POSTGRES_PASSWORD,DATABASE_URL,STRIPE_SECRET_KEY&project-name=altair-graphql-api&redirect-url=https%3A%2F%2Faltairgraphql.dev%2F)


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fimolorhe%2Faltair.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fimolorhe%2Faltair?ref=badge_large)

# ng-workspace

This is mostly for tinkering around with an angular workspace that has multiple projects. Doing this to prep for angular migration 😬.

Get setup by checking out the source and installing node modules. `yarn start` runs the dev server. Other available commands are listed in the `scripts` section of `package.json`. Gulp only exists for running the templatecache process for angularJS projects. Any other build/dev tasks should be added as npm scripts.

## Helpful Resources

- [tsconfig.json documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [angular.json documentation](https://angular.io/guide/workspace-config)
- [tsconfig from an angular view](https://angular.io/guide/typescript-configuration)
- [browser sync options](https://www.browsersync.io/docs/options). We're only using browsersync as an auto-reloading, local dev-server and proxy. We build all the projects and output them to local disk and watch these built files so that browsersync will reload when they've changed, while proxying us to the "api" server to actually get the files.

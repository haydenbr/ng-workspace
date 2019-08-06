# ng-workspace

This is mostly for tinkering around with an angular workspace that has multiple projects. Doing this to prep for angular migration for a large, messy project 😬.

## Helpful Resources

- [tsconfig.json documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [angular.json documentation](https://angular.io/guide/workspace-config)
- [tsconfig from an angular view](https://angular.io/guide/typescript-configuration)
- [browser sync options](https://www.browsersync.io/docs/options). We're only using browsersync as an auto-reloading, local dev-server and proxy. We build all the projects and output them to local disk and watch these built files so that browsersync will reload when they've changed, while proxying us to the "api" server to actually get the files.

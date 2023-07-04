# Introduction

Progressive Web App (PWA) starter template for [Angular](https://angular.io/)-based Single-page application (SPA) development, leveraging [Omni Components](https://github.com/capitec/omni-components) library.

# Usage

1️⃣ &nbsp; Create a new [repository from this template](https://github.com/capitec/template-pwa-angular/generate) (or fork) and clone locally:

```bash
git clone https://github.com/{your-repo-name}.git
cd {your-repo-name}
```

2️⃣ &nbsp; Restore all package dependencies:

```bash
npm i
```

3️⃣ &nbsp; Open it in VS Code:

```bash
code .
```

# Scripts
The following NPM scripts within `package.json` should be noted:

- `serve` - Launches Angular's dev server (Automated via F5 debugging in VS Code 😎).
- `build` - Bundles code and copies artifacts for production from the `src` directory to the `dist` directory.
- `preview` - Launches a simple web server, serving the `dist` directory (Remember to `build` first! 🎗️).
- `test` - Launches the [Angular](https://angular.io/guide/testing) test runner & executes all tests.
- `format` - Runs the Prettier formatter on all `.ts` files, applying format updates where necessary.
- `lint`- Runs the ESLint analyzer on all `.ts` files, applying code updates where necessary.

# Features
|     Feature    |  Availability | Description |
|-------------------------------|-----|-----------------------------------------------------------------|
|    Components                 | ✅  | [Omni Components](https://github.com/capitec/omni-components)   |
|    Component Intellisense     | ✅  |                                          |
|    Routing                    | ✅  | [Angular](https://angular.io/guide/routing-overview)    |
|    VS Code Debugging          | ✅  | [.vscode/launch.json](./.vscode/launch.json)                                       |
|    Tests                      | ✅  | [Angular](https://angular.io/guide/testing)                     |
|    Serve                      | ✅  | [Angular CLI](https://angular.io/cli)                           |
|    Build                      | ✅  | [Angular CLI](https://angular.io/cli)                           |
|    Build chunking             | ✅  | `/* webpackChunkName: */` compiler hints                        |
|    Preview built output       | ✅  | [http-server](https://github.com/http-party/http-server)        |
|    Formatting                 | ✅  | [Prettier](https://prettier.io/)                                |
|    Linting                    | ✅  | [ESLint](https://eslint.org/)                                   |

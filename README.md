# Synergy Design System
<img src="./packages/docs/public/synergy-logo-light.png" alt="Synergy-Logo" width="400"/><br>
Welcome to the home of the Synergy Design System.
This project is mainly intended for usage in [SICK](https://www.sick.com) applications to ensure a unique look and feel across applications, however you may also use it [for your own projects for free](./LICENSE) as well.

## Packages
This repository is comprised of several sub-packages.
|package|description|
|--|--|
|tokens|design tokens which contain basic design variables for colors, spacings, sizes, fonts etc. They are always in sync with the Figma library, and the base for CSS styles|
|assets|icons and logos|
|components|user interface components based on custom elements and lit|
|docs|storybook documentation showing all components and their properties in an interative environment |
|angular|angular wrappers for better DX in Angular (auto generated)|
|react|react wrappers for better DX in React (auto generated)|
|vue|vue wrappers for better DX in VueJS (auto generated)|


---

## Development environment

SDS uses a monorepo setup, using [node.js](https://nodejs.org) as a runtime and [pnpm](https://pnpm.io) for dependency management and build scripts. If not already installed, install and configure these tools.

1. `pnpm install --recursive` installs all dependencies.
2. `pnpm build` in the root directory forces a build all packages that provide a build job.
3. `pnpm lint` in the root directory will run all configured lint jobs.

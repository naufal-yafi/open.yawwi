![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

# Spotify Clone - Music Player: Music for everyone

![node version](https://img.shields.io/badge/node-v_20.11.0-green) ![pnpm version](https://img.shields.io/badge/pnpm-v_8.15.3-orange)

open.yawwi is a cutting-edge Spotify clone that aims to bring the ultimate music streaming experience to everyone. Built with modern web technologies, it offers seamless performance, a beautiful user interface, and comprehensive testing to ensure quality.

# Table of Contents

- [Spotify Clone - Music Player: Music for everyone](#spotify-clone---music-player-music-for-everyone)
- [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Tech](#tech)
  - [Installation](#installation)
  - [Development](#development)
    - [Run code analyst to create your own code consistent:](#run-code-analyst-to-create-your-own-code-consistent)
    - [Testing functional method:](#testing-functional-method)
    - [User interface testing:](#user-interface-testing)
  - [ESLint Plugins](#eslint-plugins)
  - [License](#license)

## Requirements

- [Node.js](https://nodejs.org/en/download/package-manager)
- [PNPM](https://pnpm.io/installation)

## Tech

open.yawwi uses a number of open source projects to work properly:

- Typescript
- Next.js
- Tailwind.css
- Cypress
- Jest
- Eslint
- Prettier

## Installation

open.yawwi requires [Node.js](https://nodejs.org/) v20+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd open.yawwi
pnpm i
pnpm dev
```

For production environments...

```sh
pnpm i
pnpm build && pnpm start
```

## Development

**Want to contribute? Great!**  
Before pull request, please run this all command below!!!  
Make sure no report errors occur.

### Run code analyst to create your own code consistent:

```sh
pnpm lint
```

### Testing functional method:

```sh
pnpm test
```

### User interface testing:

```sh
pnpm dev
```

```sh
pnpm cypress
```

## ESLint Plugins

open.yawwi uses an additional eslint plugin to provide much better configuration and code writing.

| Plugin                                                                                             |
| -------------------------------------------------------------------------------------------------- |
| [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) |
| [eslint-plugin-cypress](https://www.npmjs.com/package/eslint-plugin-cypress)                       |
| [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)                           |

## License

[MIT](./LICENSE)

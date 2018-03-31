# Selfystic

[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/alertbox/selfystic)
[![Join the chat at https://gitter.im/alertbox/selfystic](https://badges.gitter.im/alertbox/selfystic.svg)](https://gitter.im/alertbox/selfystic?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Stories in Ready](https://badge.waffle.io/alertbox/selfystic.svg?label=ready&title=ready)](http://waffle.io/alertbox/selfystic)
[![license](https://img.shields.io/npm/l/serverless-dynamodb-local.svg)](https://opensource.org/licenses/MIT)

"Selfystic" is an app to capture and share selfies/groupies with your social networks. A progressive web app using Angular5 and Service Worker. The app uses the [Hammer Gestures](https://hammerjs.github.io/) plugin in the [Angular Platform Browser](https://angular.io/api/platform-browser/HammerGestureConfig).

## Table of Contents

 - [Requirements](#requirements)
 - [Getting Started](#getting-started)
 - [File Structure of App](#file-structure-of-app)

## Requirements

1. node.js - `brew install node`
2. TypeScript - `npm i -g typescript`
3. Angular5 - `npm i -g @angular/cli`

## Getting Started

With VS Code:
* Clone this repository.
* Run `npm run start` from the project root.
* Success

## File Structure of App

```
pwa-selfystic/
├── dist/                               * Contains all deployable assets
|
├── node_modules/                       * Node dependencies
|
├── src/                                * Folder that is compiled and copied over to dist directory
│   │
│   ├── app/                            * Working directory for the main application
│   │    └── app.module.ts
│   │
│   ├── assets/                         * App images, svc, etc.
│   │
│   ├── environments/                   * App configurations, variables that should not be commited to DSCV
│   │    └── environment.prod.ts
│   │
│   ├── manifest.json                   * PWA configuration file
│   │
│   ├── ngsw-config.json                * Service Worker configuration files for Angular
│   │
│   ├── styles.scss                     * App styles compiled into CSS
│   │
│   └── main.ts                         * Main entry point
|
├── .angular-cli.json                   * Angular configuration file
├── .editorconfig                       * Defines coding styles between editors
├── .gitignore                          * Example git ignore file
├── package.json                        * Our app dependencies
├── README.md                           * This file
└── tsconfig.json                       * TypeScript configuration file
```

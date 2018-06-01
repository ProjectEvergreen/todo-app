# todo-app
[![GitHub release](https://img.shields.io/github/tag/ProjectEvergreen/todo-app.svg)](https://github.com/ProjectEvergreen/todo-app/tags)
![CircleCI branch](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser/master.svg?style=plastic)
[![GitHub issues](https://img.shields.io/github/issues-raw/ProjectEvergreen/todo-app.svg)](https://github.com/ProjectEvergreen/todo-app/issues)
[![GitHub issues](https://img.shields.io/github/issues-pr-raw/ProjectEvergreen/todo-app.svg)](https://github.com/ProjectEvergreen/todo-app/issues)
[![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://raw.githubusercontent.com/ProjectEvergreen/todo-app/master/LICENSE.md)

## Overview
An example repo reproducing the ever so classic "Todo" app.  Loosely follows the [app specification](https://github.com/tastejs/todomvc/blob/master/app-spec.md) as defined by the [Todo MVC project](http://todomvc.com/).

![Todo App](https://s3.amazonaws.com/uploads.thegreenhouse.io/project-evergreen/todo-app-0.1.0.png)

## Development
Tasks to get you going working on this project:
- `yarn build` - build the app for production
- `yarn develop` - develop locally with live reload
- `yarn serve` - build the app and serve it locally (good for quick demos / debugging)

### Misc
- Visual Studio Code has [an extenstion to support lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html)

## Release Management / GitHub Pages
GitHub pages has been setup for this repo.  The URL `https://projectevergreen.github.io/todo-app`.  

To generate a new release and generate an updated version of the code for GitHub pages, do the following:
1. Make sure all changes to be released have gone into the `master` branch
1. Run `yarn gh-pages`
1. Commit this changes
1. Bump `package.json` and `git tag` the release
1. Push to `master` with `--tags` and and verify the deployment
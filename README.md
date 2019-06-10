# NGX Copy to clipboard

[![Dependency Status](https://david-dm.org/willmendesneto/ngx-copy-to-clipboard.svg)](https://david-dm.org/willmendesneto/ngx-copy-to-clipboard)
[![npm](https://img.shields.io/badge/stackblitz-online-orange.svg)](https://stackblitz.com/edit/ngx-copy-to-clipboard-sample)

[![NPM](https://nodei.co/npm/ngx-copy-to-clipboard.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/ngx-copy-to-clipboard)
[![NPM](https://nodei.co/npm-dl/ngx-copy-to-clipboard.png?height=3&months=3)](https://npmjs.org/ngx-copy-to-clipboard)

[![Build Status](https://circleci.com/gh/willmendesneto/ngx-copy-to-clipboard.svg?style=shield)](https://circleci.com/gh/willmendesneto/ngx-copy-to-clipboard)
[![Coverage Status](https://coveralls.io/repos/willmendesneto/ngx-copy-to-clipboard/badge.svg?branch=master)](https://coveralls.io/r/willmendesneto/ngx-copy-to-clipboard?branch=master)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/ngx-copy-to-clipboard.svg)](https://bundlephobia.com/result?p=ngx-copy-to-clipboard)
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)

Your module to copy content to clipboard in Angular applications easier 🎯.

## Why Copy to clipboard?

> This is a common concept, but why use this directive instead solve it via server-side rendering?

The idea of this directive is make this process transparent and easier. So the main point is integrate this directive with other tooling process, such as:

- Server-side rendering;
- Progressive rendering;
- Any other that you like :)

You can integrate with WebSockets or handling this in a EventSourcing architecture. It's totally transparent for you and you can integrate easier in your application.

- [Demo](#demo)
- [Install](#install)
- [Setup](#setup)
- [Development](#development)
- [Contribute](#contribute)

## Demo

Try out our [demo on Stackblitz](https://ngx-copy-to-clipboard-sample.stackblitz.io)!

## Install

You can get it on NPM installing `ngx-copy-to-clipboard` module as a project dependency.

```shell
npm install ngx-copy-to-clipboard --save
```

## Setup

You'll need to add `NgxCopyToClipboardModule` to your application module. So that, the `<ngx-copy-to-clipboard>` components will be accessible in your application.

```typescript
@NgModule({
  declarations: [
    YourAppComponent
  ],
  imports: [
    NgxCopyToClipboardModule,
    ...
  ],
  providers: [],
  bootstrap: [YourAppComponent]
})

export class YourAppComponent {}

```

Now you just need to add a configuration in your components and, after that, you can use the `ngx-copy-to-clipboard` component in your templates, passing the required attributes to make it work properly.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'component-docs',
  template: `
    <section class="section">
      <h2>Copying data from textarea element</h2>
      <textarea name="text-content" id="text-content" rows="5" cols="33">
Demonstration content...
      </textarea
      >
      <ngx-copy-to-clipboard
        target="#text-content"
        [action]="cut"
        [success]="onSuccess"
        [error]="onError"
        >Copy</ngx-copy-to-clipboard
      >
    </section>
  `,
})
export class ComponentDocsComponent {
  copiedText = '';

  constructor() {
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
  }

  onSuccess(e) {
    this.copiedText = e.text;
  }

  onError(e) {
    this.copiedText = 'Error trying to copy your text';
  }
}
```

> You should bind the `success` and `error` function callbacks before passing through the component to make sure your component will be running based on the same scope.

## Development

### Run demo locally

1. This project uses [Angular CLI](https://cli.angular.io/) as base. That means you just need to run `npm start` and access the link `http://localhost:4200` in your browser

### Run tests

1. Run `npm test` for run tests. In case you want to test using watch, please use `npm run tdd`

### Publish

this project is using `np` package to publish, which makes things straightforward. EX: `np <patch|minor|major> --contents=dist/ngx-copy-to-clipboard`

> For more details, [please check np package on npmjs.com](https://www.npmjs.com/package/np)

## Contribute

For any type of contribution, please follow the instructions in [CONTRIBUTING.md](https://github.com/willmendesneto/ngx-copy-to-clipboard/blob/master/CONTRIBUTING.md) and read [CODE_OF_CONDUCT.md](https://github.com/willmendesneto/ngx-copy-to-clipboard/blob/master/CODE_OF_CONDUCT.md) files.

## Author

**Wilson Mendes (willmendesneto)**

- <https://twitter.com/willmendesneto>
- <http://github.com/willmendesneto>

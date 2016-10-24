# bragg-decode-components [![Build Status](https://travis-ci.org/SamVerschueren/bragg-decode-components.svg?branch=master)](https://travis-ci.org/SamVerschueren/bragg-decode-components)

> Decode [bragg](https://github.com/SamVerschueren/bragg) URI components


## Install

```
$ npm install --save bragg-decode-components
```


## Usage

```js
const bragg = require('bragg');
const decodeComponents = require('bragg-decode-components');

const app = bragg();
app.use(decodeComponents());
app.use(ctx => {
    console.log(ctx.params);
    //=> {id: 'foo bar'}

    console.log(ctx.query);
    //=> {select: 'unicorn rainbow'}
});

exports.handler = app.listen();
```


## API

### decodeComponents()

Decodes the `query` and `params` object of the [bragg](https://github.com/SamVerschueren/bragg) context with `decodeURIComponent`.


## Related

- [bragg](https://github.com/SamVerschueren/bragg) - AWS λ web framework


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)

# babel-plugin-data-stylename

Replace all `styleName` attributes with `data-styleName`.


## Install

```shell
npm install babel-plugin-data-stylename --save-dev
```

or

```shell
yarn add babel-plugin-data-stylename --dev
```

## Use

To use this in a test environment, in your Babel config (shown here as a `package.json` property):

```json
  "babel": {
    "env": {
      "test": {
        "plugins": [
          [ "data-stylename" ]
        ]
      }
    }
  }
```

Obviously, your test runner will need to be configured to use Babel. Note that Jest agressively caches transpiled code, and might need to be run with a `--no-cache` for you to see the change after installing the plugin.

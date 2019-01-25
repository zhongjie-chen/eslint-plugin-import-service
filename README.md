# eslint-plugin-import-service

import xxx from 'dubbo/service/com.dianwoxx.xxx.<ClassName>'
ClassName: should be lowercase

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@dwd/eslint-plugin-import-service`:

```
$ npm install @dwd/eslint-plugin-import-service --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@dwd/eslint-plugin-import-service` globally.

## Usage

Add `@dwd/import-service` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@dwd/import-service"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@dwd/import-service/lowercase-service-path": "error"
    }
}
```

## Supported Rules

* Fill in provided rules here






# Carpages Eslint Base Configuration

## Installation
**NPM**
```shell
npm install --save-dev eslint eslint-config-carpages
```
**Yarn**
```shell
yarn add --dev eslint eslint-config-carpages
```

## Usage
`.eslintrc.js` - If you prefer JS
```js
module.exports = {
  // ...
  extends: ['carpages']
  // ...
}
```

`.eslintrc.json` - If you prefer JSON
```json
{
  "extends": ["carpages"]
}
```

**OR**

`.eslintrc` - If you prefer JSON without extension
```json
{
  "extends": ["carpages"]
}
```

### A base config for React development is also included
```js
module.exports = {
  // ...
  extends: ['carpages/react']
  // ...
}
```

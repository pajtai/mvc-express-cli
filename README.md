# mvc-express-cli

This is a cli tool for [mvc-express](https://pajtai.github.io/mvc-express/).

## Installation

```bash
npm install -g mvc-express-cli
```

## Usage

`mvc controllers new <name> [type]`

```bash
mvc controller Pages
```

This creates a new controller relative to the nearest `package.json`. It is created at
`app/http/controllers/resource/${name}.controller.js` if no type is specified. If you
 specify `basic` for the type, it would get created in the basic directory.


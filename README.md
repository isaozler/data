# isaozler.com data provider

This package provides the data used for [isaozler.com](https://isaozler.com).

## Installation

To install this package, you can use npm or yarn:

```sh
npx jsr add @isaozler/data
```

### Add types

Until I figure out how to correctly setup JSR types you need to add the type definition reference to the tsconfig paths

```json
...
  "paths": [
    ...
    "@isaozler/data": [
        "node_modules/@isaozler/data/_dist/mod.d.ts"
      ],
    ...
  ]
```

## Usage

### Data Structure

The package exports a JSON object containing data for various sections of the portfolio website. Here is an example of the structure:

```json
{
  "sections": [
    "id": "section-id",
    "title": "section-title",
    "cards": [
      // section data cards based on types
    ]
  ]
}
```

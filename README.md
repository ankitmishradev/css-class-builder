# CSS Class Builder

A small typescript package built to work with `ReactJS` to shorten manipulation and handling of css classnames by combining useful methods and functions into one single package.

## How to use

### Installation

You can install the package to your javascript/typescript project, using below command

```cmd
npm i css-class-builder
```

### Setup

After installation import the package in your project file,

```js
import cssClassBuilder from 'css-class-builder';
```

Then initialize the builder function,

```js
const classname = cssClassBuilder();
```

This initialization creates a store where we can add, remove or toggle classnames. We can use `classname` to interact with the store.

## Features

### Initializing with value

The builder function can be initialized with a single or multiple classnames.

```js
const classname = cssClassBuilder('initial'); // -> initial
const headingClass = cssClassBuilder('heading h-6'); // -> heading h-6
```

### Extending css class

Once you have initialized the builder function you can use `extend` method to add classname(s) to the store.

```js
const classname = cssClassBuilder();
classname.extend('another-css-class'); // -> another-css-class
classname.extend('red green'); // -> another-css-class red green
```

### Removing css class

`remove` method can be used to remove classname(s) from the store.

```js
const classname = cssClassBuilder('bold italic');
classname.remove('italic'); // -> bold
```

### Toggling class dynamically

Classname(s) can be extended or removed from the store. We can use `toggle` method to toggle classname(s) over a boolean value.

- For `true`, the classname will be added to the current classname.
- For `false`, the class will be removed from the current classname.

```js
const classname = cssClassBuilder('initial');
let anotherBooleanValue: boolean = true;
classname.toggle('blue', anotherBooleanValue); // -> initial blue
otherValue = false;
classname.toggle('blue', anotherBooleanValue); // -> initial
```

## Using stored classnames

When ready to use the classname(s) stored in the builder for the `className` or `class` attribute of the HTML/JSX tags, `unzip` method can be used to get all classname(s) as a single string.

```jsx
const classname = cssClassBuilder('initial');
classname.extend('bold italic');

return <div class={classname.unzip}></div>;
```

Above `div` will have the following classnames: `initial`, `bold`, `italic`.

## Changelog

Please see the [changelog](https://github.com/ankitmishradev/css-class-builder/blob/main/CHANGELOG.md) to know about the latest updates.

## Contributions

Contribution to this project are most welcomed.

If you find bugs or want more features, but don't know how to fix/implement them, please fill an [issue](https://github.com/ankitmishradev/css-class-builder/issues).

If you fixed bugs or implemented new features, please send a [pull request](https://github.com/ankitmishradev/css-class-builder/pulls).

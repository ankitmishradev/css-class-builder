# CSS class builder

A typescript microframework built to work with `ReactJS` to shortened daily use css class manipulator methods in ReactJS by adding them all into a single method.

## How to use

### Installation

You can install this package to your js or ts project via below command

```cmd
npm i css-class-builder
```

### Setup

After installation import this package in your project file,

```js
import CSSClassBuilder from 'CSSClassBuilder';
```

Then, create a new instance of the builder,

```js
const cssClass = new CSSClassBuilder();
```

Now you can use `cssClass` to interact.

## Features

### Initializing with value

The builder can be instanciated with a single or multiple initial css classes.

```js
const cssClass = new CSSClassBuilder('initial'); // -> initial
const headingClass = new CSSClassBuilder('heading h-6'); // -> heading h-6
```

### Extending css class

Once you have created an instance of the builder you can extend a single or multiple css classes on the builder

```js
const cssClass = new CSSClassBuilder();
cssClass.extend('another-css-class'); // -> another-css-class
cssClass.extend('red green'); // -> another-css-class red green
```

### Removing css class

You can also remove a single or multiple css classes from the builder.

```js
const cssClass = new CSSClassBuilder('bold italic');
cssClass.remove('italic'); // -> bold
```

### Toggling class dynamically

A single or multiple classes can be extended or removed from builder dynamically. We can use `toggle` function of the builder to toggle class over a boolean value.

- For `true`, the class will be extended on builder.
- For `false`, the class will be removed from builder.

```js
const cssClass = CSSClassBuilder('initial');
let otherValue: boolean = true;
classes.toggle('blue', anotherBooleanValue); // -> initial blue
otherValue = false;
classes.toggle('blue', anotherBooleanValue); // -> initial
```

### Connecting builder to HTML tag's class attribute

After all the operations are done, we can connect the `class` attribute of the HTML tags with our builder using `unzip` method of the builder.

```jsx
const cssClass = new CSSClassBuilder('initial');
cssClass.extend('bold italic');

return <div class={cssClass.unzip}></div>;
```

Above `div` will have the following classes: `initial`, `bold`, `italic`.

## Changelog

Please see the [changelog](https://github.com/ankitmishradev/css-class-builder/blob/main/CHANGELOG.md) to know about the latest updates.

## Contributions

Contribution to this project are most welcomed.

If you find bugs or want more features, but don't know how to fix/implement them, please fill an [issue](https://github.com/ankitmishradev/css-class-builder/issues).

If you fixed bugs or implemented new features, please send a [pull request](https://github.com/ankitmishradev/css-class-builder/pulls).

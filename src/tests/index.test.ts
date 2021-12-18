import cssClassBuilder from '../index';

test('Initialize builder with initial class/es.', () => {
  expect(cssClassBuilder('initial-class').unzip).toBe('initial-class');
  expect(cssClassBuilder('initial class').unzip).toBe('initial class');
});

test('Extend another class/es on builder.', () => {
  const classes = cssClassBuilder('initial-class');
  classes.extend('extended-class');
  expect(classes.unzip).toBe('initial-class extended-class');
});

test('Remove class/es from the builder', () => {
  const classes = cssClassBuilder('initial-class');
  classes.extend('extended-class');
  classes.remove('extended-class');
  expect(classes.unzip).toBe('initial-class');
});

test('Toggle class/es depending on some other boolean value', () => {
  const classes = cssClassBuilder('initial-class');
  let anotherBooleanValue: boolean;
  anotherBooleanValue = true;
  classes.toggle('toggleable-class', anotherBooleanValue);
  expect(classes.unzip).toBe('initial-class toggleable-class');
  anotherBooleanValue = false;
  classes.toggle('toggleable-class', anotherBooleanValue);
  expect(classes.unzip).toBe('initial-class');
});

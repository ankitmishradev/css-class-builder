import CSSClassBuilder from '../index';

test('Initialize builder with initial class/es.', () => {
  expect(new CSSClassBuilder('initial-class').unzip).toBe('initial-class');
  expect(new CSSClassBuilder('initial class').unzip).toBe('initial class');
});

test('Extend another class/es on builder.', () => {
  const classes = new CSSClassBuilder('initial-class');
  classes.extend('extended-class');
  expect(classes.unzip).toBe('initial-class extended-class');
});

test('Remove class/es from the builder', () => {
  const classes = new CSSClassBuilder('initial-class');
  classes.extend('extended-class');
  classes.remove('extended-class');
  expect(classes.unzip).toBe('initial-class');
});

test('Toggle class/es depending on some other boolean value', () => {
  const classes = new CSSClassBuilder('initial-class');
  let anotherBooleanValue: boolean;
  anotherBooleanValue = true;
  classes.toggle('toggleable-class', anotherBooleanValue);
  expect(classes.unzip).toBe('initial-class toggleable-class');
  anotherBooleanValue = false;
  classes.toggle('toggleable-class', anotherBooleanValue);
  expect(classes.unzip).toBe('initial-class');
});

/**
 * A builder function to create a store and introduce helper functions to handle css classnames.
 * @param {string} initial - initial classname.
 */
const cssClassBuilder = (initial?: string | string[]): CSSClassBuilderInterface => {
  let store: string;

  const resolveProps = (prop: string | string[]) => {
    return typeof prop === 'string' ? (prop as string) : (prop as string[]).join(' ');
  };

  if (initial) {
    store = resolveProps(initial);
  }

  /**
   * Add classname(s) to the store. If classname(s) are already present at the store, they won't be added again.
   */
  const extend = (className: string | string[]) => {
    if (store) {
      const classList = store.split(' ');
      if (!classList.find((c) => c === className)) {
        store = store?.concat(' ', resolveProps(className));
      }
    } else {
      store = resolveProps(className);
    }
    return store;
  };

  /**
   * Remove classname(s) from the store.
   */
  const remove = (className: string | string[]) => {
    if (store) {
      const classList = store.split(' ');
      store = classList.filter((c) => c !== resolveProps(className)).join(' ');
    }
    return store;
  };

  /**
   * Toggle classname(s) from the store.
   * @param className - classname(s) that will be toggled from the store
   * @param watch  - a boolean value over which the builder will decide whether to add or remove the classname(s) from the store.
   */
  const toggle = (className: string | string[], watch: boolean) => {
    if (watch) {
      store = extend(className);
    } else {
      store = remove(className);
    }
  };

  return {
    extend,
    remove,
    toggle,
    /**
     * Retrieve classname(s) from the store as a single string.
     */
    get unzip(): string | undefined {
      return store;
    },
  };
};

export default cssClassBuilder;

interface CSSClassBuilderInterface {
  extend: (className: string | string[]) => string;
  remove: (className: string | string[]) => string;
  toggle: (className: string | string[], watch: boolean) => void;
  unzip: string | undefined;
}

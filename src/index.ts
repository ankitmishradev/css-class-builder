class CSSClassBuilder {
  protected classes?: string;

  constructor(className?: string) {
    this.classes = className;
  }

  protected resolveProps = (prop: string | string[]) => {
    return typeof prop === 'string' ? (prop as string) : (prop as string[]).join(' ');
  };

  extend(className: string | string[]) {
    if (this.classes) {
      const classList = this.classes.split(' ');
      if (!classList.find((c) => c === className)) {
        this.classes = this.classes?.concat(' ', this.resolveProps(className));
      }
    } else {
      this.classes = this.resolveProps(className);
    }
    return this.classes;
  }

  remove(className: string | string[]) {
    if (this.classes) {
      const classList = this.classes.split(' ');
      this.classes = classList.filter((c) => c !== this.resolveProps(className)).join(' ');
    }
    return this.classes;
  }

  toggle = (className: string | string[], watch: boolean) => {
    if (watch) {
      this.classes = this.extend(className);
    } else {
      this.classes = this.remove(className);
    }
  };

  public get unzip(): string | undefined {
    return this.classes;
  }
}

export default CSSClassBuilder;

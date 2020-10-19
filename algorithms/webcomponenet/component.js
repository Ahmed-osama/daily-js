class ProgressBar extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.createShadowRoot();
    this.complete = 0;
  }

  get complete() {
    return this.complete;
  }

  set complete(value) {
    this.setAttribute('complete', value);
  }

  static get observedAttributes() {
    return ['complete'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'complete':
        this.complete = parseInt(newValue, 10) || 0;
        break;
      default
        this.complete = 0
        break;
    }
  }
}

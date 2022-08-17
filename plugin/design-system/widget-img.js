export default class WidgetImg extends HTMLElement {
  static get observerdAttributes() {
    return ['src', 'style', 'fullscreen'];
  }
  get style() {
    return this.getAttribute('style') || '';
  }
  get src() {
    return this.getAttribute('src') || '';
  }
  get baseUrl() {
    const $base = document.querySelector('head base')
    if ($base && $base.href) {
      return $base.href
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.src) {
      const $img = document.createElement('img');
      $img.setAttribute('style', this.style)
      $img.setAttribute('loading', 'lazy')
      $img.addEventListener('load', () => {
        this.setAttribute('is-loaded', true)
      })
      if (this.baseUrl) {
        $img.src = `${this.baseUrl}/${this.src}`;
      } else {
        $img.src = this.src;
      }
      this.append($img);
    }
  }
}

window.customElements.define('afip-qr', class AfipQR extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const AFIP_QR_TEMPLATE = `
      <a
        target="_F960AFIPInfo"
        rel="noopener noreferrer"
      >
        <img
          src="https://www.afip.gob.ar/images/f960/DATAWEB.jpg"
        />
      </a>
    `;

    this.shadowRoot.innerHTML = AFIP_QR_TEMPLATE;

    this.ui = {
      a: this.shadowRoot.querySelector('a'),
      img: this.shadowRoot.querySelector('img'),
    };

    this.code = this.getAttribute('code');
    this.className = this.getAttribute('class');
    this.title = this.getAttribute('title');
  }

  get code() {
    return this.getAttribute('code') || '';
  }

  set code(value) {
    this.ui.a.href = `http://qr.afip.gob.ar/?qr=${value},,`;
  }

  get className() {
    return this.ui.a.className || '';
  }

  set className(value) {
    this.ui.a.className = value;
  }

  get title() {
    return this.ui.a.title || '';
  }

  set title(value) {
    this.ui.a.title = value;
    this.ui.img.alt = value;
    this.ui.img.title = value;
  }
});

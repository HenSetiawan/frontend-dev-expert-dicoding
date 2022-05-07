class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="container">
      <a href="/" class="brand">
        <img src="./images/logo.png" alt="foodie brand logo" />
        <p>Foodie</p>
      </a>
      <a href="#" class="menu-icon">
        <img src="./images/menu-icon.png" alt="menu" />
      </a>
    </nav>
      `;
  }
}

customElements.define('nav-bar', NavBar);

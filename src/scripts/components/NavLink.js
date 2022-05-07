class NavLink extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <ul class="nav-link">
        <li><a class="link" href="#/home">Home</a></li>
        <li><a class="link" href="#/favorite">Favorite</a></li>
        <li>
          <a class="link" href="https://github.com/hensetiawan">About Us</a>
        </li>
      </ul>
      `;
  }
}

customElements.define('nav-link', NavLink);

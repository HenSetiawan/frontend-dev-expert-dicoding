class TitleSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="text-center container mt-2" id="main-menu">
      <p class="text-title">Menu</p>
      <h2 class="text-primary">Food Full of treaty Love</h2>
      <p class="text-secondary">
        There are many things are needed to start the Fast Food Business. You
        need not only Just Food Stalls with Persons but also specialized
        equipment, Skills to manage Customers,
      </p>
      </div>
      `;
  }
}

customElements.define('title-section', TitleSection);

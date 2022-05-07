class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero mt-2">
      <img 
        src='./images/hero-image-large.jpg' 
        alt="cafe menu"></img>
      <div class="hero-description">
        <h1>Good Food is A Good Mood.</h1>
        <p>
          Food is the ingredient that bind us together! And nothing brings
          people together like a Good Food!
        </p>
        <a href="#main-menu" class="btn">Let's Eat it!</a>
      </div>
    </section>
      `;
  }
}

customElements.define('jumbotron-element', Jumbotron);

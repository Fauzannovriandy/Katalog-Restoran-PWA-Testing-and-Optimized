class Title extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section>
      <div class="title">
        <div tabindex="0" class="title__inner">
          <h1 class="title__apps">Selamat Berhave Fun Have Fun </h1>
          <p class="title__jargon">Kami menyajikan tempat-tempat yang cocok buat anda yang sedang bersenang-senang, tempat-tempat yang sudah terdaftar disini terjamin membuat anda nyaman dan ketagihan untuk selalu ber-HAVE FUN HAVE FUN.</p>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('title-resto', Title);

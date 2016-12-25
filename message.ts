class Message {
  constructor(private elem: HTMLElement) {}

  /**
   * Parse a message from the URL hash and display it in a box.
   * If there is no message the box is hidden.
   */
  parseMessage(input: string) {
    let message = window.atob(input);
    if (message === '') {
      return;
    }
    this.elem.textContent = message;
    // Replace any newline with a <br />.
    this.elem.innerHTML = this.elem.innerHTML.replace(/(?:\r\n|\r|\n)/g, '<br />');
    this.elem.style.display = 'block';

    this.updateMetaTags(message);
  }

  /**
   * Update metatags based on the message.
   * @param {string} message The message to put in the metatags.
  */
  private updateMetaTags(message: string) {
    let selectors = [
      'meta[name="description"]',
      'meta[property="og:description"]',
      'meta[property="twitter:description"]'
    ];
    selectors.forEach(selector => {
      document.querySelector(selector).setAttribute('content', message);
    });
  }
}

export interface Config {
  santa: HTMLElement;
}

class Christmas {
  private santa: HTMLElement;

  public constructor(config: Config) {
    this.santa = config.santa;

    this.setupSanta();
  }

  /**
   * Setup the santa element to keep moving up and down.
   * We toggle between `up` and `down` css classes and when the
   * `transitionend` event fires to keep him moving smoothly.
   */
  private setupSanta() {
    this.santa.addEventListener("transitionend", () => {
      switch (this.santa.className) {
        case "up":
          this.santa.className = "down";
          break;
        case "down":
          this.santa.className = "up";
          break;
        default:
          this.santa.className = "up";
      }
    }, false);
    // Kick it off by moving down.
    window.getComputedStyle(this.santa).top;
    this.santa.className = "down";
  }
}

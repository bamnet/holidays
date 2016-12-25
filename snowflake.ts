class Snowflakes {
  // max_group holds the maximum number of snowflakes to add at a time.
  public max_group: number = 5;

  // group_interval stores the number of milliseconds between adding groups
  // of snowflakes.
  public group_interval: number = 250;

  // min and max milliseconds to spend transitioning the snowflake
  // down the page.
  public transition_min: number = 3000;
  public transition_max: number = 4000;

  // enabled controls if snowflakes are or are not added to the page.
  public enabled: boolean = true;

  public constructor(private elem: Node, private count: number) {
    let groups = Math.ceil(count / this.max_group);
    for (let i = 0; i < groups; i++) {
      window.setTimeout(() => {
        for (let j = 0; j < this.max_group; j++) {
          this.addSnowflake();
        }
      }, this.group_interval * i);
    }
  }

  private addSnowflake() {
    if (!this.enabled) {
      return;
    }
    let flake = document.createElement("i");
    flake.innerHTML = "ac_unit";
    flake.className = "material-icons snowflake";

    let left = Math.random() * 100;
    flake.style.left = left + "%";

    let duration = Math.random() * (this.transition_max - this.transition_min) + this.transition_min;
    flake.style.transitionDuration = duration + "ms";

    flake.addEventListener("transitionend", () => {
      flake.parentNode.removeChild(flake);
      this.addSnowflake();
    });

    this.elem.appendChild(flake);

    // Force an initial top value to be computed.
    // Without this, the flake skips animating and jumps straight down.
    window.getComputedStyle(flake).top;

    flake.style.top = "100%";
  }
}

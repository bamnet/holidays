"use strict";
var Christmas = (function () {
    function Christmas(config) {
        this.santa = config.santa;
        this.setupSanta();
    }
    Christmas.prototype.setupSanta = function () {
        var _this = this;
        this.santa.addEventListener("transitionend", function () {
            switch (_this.santa.className) {
                case "up":
                    _this.santa.className = "down";
                    break;
                case "down":
                    _this.santa.className = "up";
                    break;
                default:
                    _this.santa.className = "up";
            }
        }, false);
        window.getComputedStyle(this.santa).top;
        this.santa.className = "down";
    };
    return Christmas;
}());
//# sourceMappingURL=christmas.js.map
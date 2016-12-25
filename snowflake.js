var Snowflakes = (function () {
    function Snowflakes(elem, count) {
        var _this = this;
        this.elem = elem;
        this.count = count;
        this.max_group = 5;
        this.group_interval = 250;
        this.transition_min = 3000;
        this.transition_max = 4000;
        this.enabled = true;
        var groups = Math.ceil(count / this.max_group);
        for (var i = 0; i < groups; i++) {
            window.setTimeout(function () {
                for (var j = 0; j < _this.max_group; j++) {
                    _this.addSnowflake();
                }
            }, this.group_interval * i);
        }
    }
    Snowflakes.prototype.addSnowflake = function () {
        var _this = this;
        if (!this.enabled) {
            return;
        }
        var flake = document.createElement("i");
        flake.innerHTML = "ac_unit";
        flake.className = "material-icons snowflake";
        var left = Math.random() * 100;
        flake.style.left = left + "%";
        var duration = Math.random() * (this.transition_max - this.transition_min) + this.transition_min;
        flake.style.transitionDuration = duration + "ms";
        flake.addEventListener("transitionend", function () {
            flake.parentNode.removeChild(flake);
            _this.addSnowflake();
        });
        this.elem.appendChild(flake);
        window.getComputedStyle(flake).top;
        flake.style.top = "100%";
    };
    return Snowflakes;
}());
//# sourceMappingURL=snowflake.js.map
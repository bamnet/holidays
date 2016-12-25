var Message = (function () {
    function Message(elem) {
        this.elem = elem;
    }
    Message.prototype.parseMessage = function (input) {
        var message = window.atob(input);
        if (message === "") {
            return;
        }
        this.elem.textContent = message;
        this.elem.innerHTML = this.elem.innerHTML.replace(/(?:\r\n|\r|\n)/g, "<br />");
        this.elem.style.display = "block";
        this.updateMetaTags(message);
    };
    Message.prototype.updateMetaTags = function (message) {
        var selectors = [
            "meta[name=\"description\"]",
            "meta[property=\"og:description\"]",
            "meta[property=\"twitter:description\"]"
        ];
        selectors.forEach(function (selector) {
            document.querySelector(selector).setAttribute("content", message);
        });
    };
    return Message;
}());
//# sourceMappingURL=message.js.map
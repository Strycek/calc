let View = {
    clear: function () {
        this.set(0);
    },
    get: function () {
        return this.display.innerHTML;
    },
    getNumber: function () {
        return parseFloat(this.get(), 10);
    },
    set: function (value) {
        this.display.innerHTML = value;
    },
    init: function () {
        this.display = document.getElementById('display');
    }
}
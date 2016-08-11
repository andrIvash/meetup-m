module.exports = (function () {
    var btn = document.getElementById('menu-btn'),
        menu  = document.getElementById('menu');

    function init () {
        _setUpListners();
    }

    function _setUpListners () {
        btn.addEventListener('click', _toggleMenu);
    }

    function _toggleMenu() {
        this.classList.toggle('menu__btn--active');
        menu.classList.toggle('menu--open');
        document.body.classList.toggle('fixed');

    }

    return {
        init: init
    };

})();

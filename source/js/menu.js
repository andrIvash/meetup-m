module.exports = (function () {
    var btn = document.getElementById('menu-btn'),
        menu  = document.getElementById('menu');

    function init () {
        _setUpListners();
    }

    function _setUpListners () {
        btn.addEventListener('click', _toggleMenu);
        menu.addEventListener('click', _scrollScreenTo);
    }

    function _toggleMenu() {
        btn.classList.toggle('menu__btn--active');
        menu.classList.toggle('menu--open');
        document.body.classList.toggle('fixed');

    }

    function _scrollScreenTo(e) {
        var elem = e.target;
        if (elem.classList.contains('menu__link')) {
            var id =  elem.getAttribute('href').slice(1);
            var block = document.getElementById(id);
            document.body.scrollTop = block.offsetTop;
            _toggleMenu();
        }
    }

    return {
        init: init
    };

})();


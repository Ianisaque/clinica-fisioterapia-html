// Menu lateral (direita): abre e fecha pelo botão do cabeçalho
(function () {
    var menu = document.getElementById('menu');
    var abrir = document.querySelector('.menu-toggle');
    var fechar = document.querySelector('.menu-close');
    if (!menu || !abrir) return;

    var overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    function alternar(aberto) {
        menu.classList.toggle('aberto', aberto);
        overlay.classList.toggle('aberto', aberto);
        abrir.setAttribute('aria-expanded', aberto);
        document.body.classList.toggle('menu-aberto', aberto);
        (aberto ? menu.querySelector('a') : abrir).focus();
    }

    abrir.addEventListener('click', function () { alternar(true); });
    if (fechar) fechar.addEventListener('click', function () { alternar(false); });
    overlay.addEventListener('click', function () { alternar(false); });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menu.classList.contains('aberto')) alternar(false);
    });
})();

// Formulário de contato (simulado: não há servidor para receber a mensagem)
(function () {
    var form = document.getElementById('form-contato');
    var status = document.getElementById('status');
    if (!form || !status) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        form.reset(); // dispara o evento reset, que esconde a mensagem
        status.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
        status.hidden = false;
    });
    form.addEventListener('reset', function () { status.hidden = true; });
})();

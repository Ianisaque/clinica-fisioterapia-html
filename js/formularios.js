// Formulários simulados (não há servidor para receber as mensagens)
(function () {
    document.querySelectorAll('form.form-simulado').forEach(function (form) {
        var status = form.querySelector('.status');
        if (!status) return;
        var mensagem = form.getAttribute('data-mensagem') || 'Mensagem enviada com sucesso! Entraremos em contato em breve.';

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            form.reset(); // dispara o evento reset, que esconde a mensagem
            status.textContent = mensagem;
            status.hidden = false;
        });
        form.addEventListener('reset', function () { status.hidden = true; });
    });
})();

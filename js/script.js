document.querySelectorAll('.cadastro').forEach(button => {
    button.addEventListener('click', () => {
        // Remover 'ativo' de todos os botões e seções
        document.querySelectorAll('.cadastro').forEach(btn => btn.classList.remove('ativo'));
        document.querySelectorAll('.sessao-cadastro').forEach(section => section.classList.remove('ativo'));

        // Adicionar 'ativo' ao botão clicado e à seção correspondente
        button.classList.add('ativo');
        const escolhido = button.getAttribute('data-escolhido');
        document.getElementById(escolhido).classList.add('ativo');
    });
});

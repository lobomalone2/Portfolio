// DESCRIÇÃO: Este script controla a interatividade do menu de navegação em dispositivos móveis.

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão hambúrguer e a lista de links
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    const links = navLinks.querySelectorAll('a');

    // Função para abrir/fechar o menu
    const toggleMenu = () => {
        // Adiciona ou remove a classe 'active' para mostrar/esconder o menu
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    };

    // Adiciona o evento de clique ao botão hambúrguer
    hamburgerMenu.addEventListener('click', toggleMenu);

    // Adiciona evento de clique para cada link do menu
    // DESCRIÇÃO: Isso faz com que o menu se feche automaticamente após clicar em um link.
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});
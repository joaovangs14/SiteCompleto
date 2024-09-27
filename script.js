const form = document.getElementById('meuForm');
        const nomeExibe = document.getElementById('exibeNome');
        const emailExibe = document.getElementById('exibeEmail');
        const mensagemExibe = document.getElementById('exibeMensagem');
        const limparButton = document.getElementById('limparButton');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('msg').value;

            // Exibe os dados preenchidos
            nomeExibe.textContent = nome;
            emailExibe.textContent = email;
            mensagemExibe.textContent = mensagem;
        });

        limparButton.addEventListener('click', function() {
            // Limpa os campos do formulário
            form.reset();

            // Limpa a exibição dos resultados
            nomeExibe.textContent = '';
            emailExibe.textContent = '';
            mensagemExibe.textContent = '';
        });
    
    
    let currentIndex = 0;
    function moveSlide(direction) {
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        currentIndex += direction;
        
        if (currentIndex < 0) {
            currentIndex = totalItems - 1;
        } else if (currentIndex >= totalItems) {
            currentIndex = 0;
        }

        const offset = -currentIndex * 100; 
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    }
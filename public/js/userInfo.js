
    const nome = sessionStorage.getItem('NOME_USUARIO')

    if(!nome) {
        alert('Você precisa estar logado para acessar essa tela!');
        window.location.href = '../login.html';
    } else {
        document.getElementById('NOME_USUARIO').textContent = nome;
    }

    function logout() {
        localStorage.removeItem('NOME_USUARIO');
        localStorage.removeItem('ID_USUARIO');
    }   

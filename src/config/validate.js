function validarLogin() {
    let email = ipt_email.value;
    let senha = ipt_senha.value;
    let temArroba = false;


    if(email == '' || senha == '') {
        alerts.innerHTML = `Preencha todos os campos!`;
    } else {
        for(let i = 0; i < email.length; i++) {
            letraAtual = email[i];
            if(letraAtual == '@') {
            temArroba = true;
            }
        }
    
        if(temArroba) {
            
            if(email == 'lucas@gmail.com' && senha == 'santos') {
                alerts.innerHTML = `<span style="color: #2bff32;">Login efetuado com sucesso!</span>`
            } else {
                alerts.innerHTML = `Login ou senha incorretos!`
            }

        } else {
            alerts.innerHTML = `Preencha o email corretamente!`;
        }
    }

    
}





function validarCad() {
    let nome = ipt_nome.value;
    let email = ipt_email.value;
    let tel = ipt_tel.value;
    let senha = ipt_senha.value;
    let Csenha = ipt_Csenha.value;
    let temArroba = false;

    if(nome == '' ||  email == '' || tel == '' || nome == '' || Csenha == '' ) {
        alerts.innerHTML = `Preencha todos os campos!`;
    } else {
        for(let i = 0; i < email.length; i++) {
            letraAtual = email[i];
            if(letraAtual == '@') {
            temArroba = true;
            }
        }
    
        if(nome.length < 2) {
            alerts.innerHTML = `O nome deve conter mais de 1 letra.`
        } else {
            if(!temArroba) {
                alerts.innerHTML = `Preencha o email corretamente!`;
            } else {
                if(tel.length > 13) {
                    alerts.innerHTML = `O telefone deve conter 13 números.`;
                } else {
                    if(senha.length < 3) {
                        alerts.innerHTML = `Senha deve conter pelo menos 3 caracteres.`;
                    } else {
                        if(Csenha == senha) {
                            alerts.innerHTML = `<span style="color: #2bff32;">Registrado com sucesso!</span>`;
                        } else {
                            alerts.innerHTML = `As senhas devem ser iguais!`;  
                        }
                    }
                }
            }
        }
    }
}
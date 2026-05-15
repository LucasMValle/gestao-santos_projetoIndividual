const btn_receita = document.querySelector("#add-receita")
const receita_popup = document.querySelector("#receita-modal")
const btn_fechar = document.querySelector("#btn-x")

btn_receita.onclick = function () {
    receita_popup.showModal()
}

btn_fechar.onclick = function () {
    receita_popup.close();
}

const checkboxBonus = document.querySelector("#check-bonus");
const inputBonus = document.querySelector("#ipt_bonus");

checkboxBonus.addEventListener("change", function() {
    if (this.checked) {
        // Se estiver marcado, remove o bloqueio
        inputBonus.disabled = false;
        inputBonus.focus(); // Coloca o cursor automaticamente lá
    } else {
        // Se desmarcar, bloqueia de novo e limpa o texto
        inputBonus.disabled = true;
        inputBonus.value = ""; 
    }
});



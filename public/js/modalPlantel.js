const containerJogadores = document.querySelector(".jogadores-box")
const plantel_popup = document.querySelector("#modal-plantel")
const btn_fecharPlantel = document.querySelector("#btn-x-plantel")


// containerJogadores.addEventListener("click", function (event) {
//     const botao = event.target.closest(".jogador-card");
//     if (botao) {
//         plantel_popup.showModal();
//     }
// });

btn_fecharPlantel.onclick = function () {
    plantel_popup.close();
}

const btn_plantel2 = document.querySelector("#add-jogador")
const plantel_popup_jogador = document.querySelector("#modal-plantel-cad")
const btn_fecharPlantel2 = document.querySelector("#btn-x-plantel2")

btn_plantel2.onclick = function () {
    plantel_popup_jogador.showModal()
}

btn_fecharPlantel2.onclick = function () {
    plantel_popup_jogador.close();
}
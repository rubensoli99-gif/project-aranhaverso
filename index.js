
const botao = document.querySelector("#entrar");
const teia = document.querySelector("#teia");

botao.addEventListener("click", function () {

    // Ativa a animação da teia
    teia.classList.add("ativa");

    // Depois da animação, vai para a página inicial
    setTimeout(function () {

        window.location.href = "aranhaverso.html";

    }, 1500);

});


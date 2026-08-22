const botao = document.querySelector("#entrar");
const usuario = document.querySelector("#usuario");

const teia = document.querySelector("#teia");

const popup = document.querySelector("#popup");
const mensagem = document.querySelector("#mensagem");
const continuar = document.querySelector("#continuar");


// BOTÃO ENTRAR

botao.addEventListener("click", function () {

    const nome = usuario.value.trim();

    if (nome === "") {
        alert("Digite seu nome de usuário!");
        return;
    }

    teia.classList.add("ativa");

    setTimeout(function () {

        mensagem.textContent =
            `Bem-vindo ao AranhaVerse, ${nome}! 🕷️`;

        popup.classList.add("ativo");

    }, 1500);

});


// BOTÃO DO POPUP

continuar.addEventListener("click", function () {

    window.location.href = "aranhaverso.html";

});


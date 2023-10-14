  document.addEventListener("DOMContentLoaded", function () {
    const botaoRelatorio = document.getElementById("botao-relatorio"); // pegar id do html para ser usado
    const botoesDeNavegacao = document.getElementById("botoes-de-navegacao");
    const meuFormulario = document.getElementById("meu-formulario");
    const treinoH1 = document.querySelector(".treinos"); // Seleciona o elemento h1

    botaoRelatorio.addEventListener("click", function () { //função para o furmulario sumir
        meuFormulario.style.display = "none";
        treinoH1.style.display = "none"; // Oculta o elemento h1 "Treino"
    });

    botaoRelatorio.addEventListener("click", function () { //fução para quando relatorio for clickado exibirá os butoes
      // Alternar a exibição dos botões de navegação
      if (botoesDeNavegacao.style.display === "none" || botoesDeNavegacao.style.display === "") {
        // Defina a propriedade de display como "grid" para usar CSS Grid
        botoesDeNavegacao.style.display = "block";
    } else {
        botoesDeNavegacao.style.display = "none";
    }
      // Crie e insira os botões de navegação quando o botão "Relatório" for clicado
      if (botoesDeNavegacao.style.display === "block") {
        // Limpe o conteúdo atual dos botões de navegação
        botoesDeNavegacao.innerHTML = "";

        // Crie e insira os botões de navegação
        const voltar = document.createElement("button");
        voltar.innerText = "voltar";
        voltar.classList.add("botao-voltar"); //Adicione uma classe ao botão
        voltar.addEventListener("click", function () {
          // Redirecione para o destino 1
          window.location.href = "";
        });
        botoesDeNavegacao.appendChild(voltar);

        const tituloH2 = document.createElement("h2");
        tituloH2.innerText = "Relatorio Semanal";
        botoesDeNavegacao.appendChild(tituloH2);

        const imagem = document.createElement("img");
        imagem.src = "/docs/img/4435924.png";
        botoesDeNavegacao.appendChild(imagem);

        
      }
    });
  });

  // javascript PROFESSOR

  document.addEventListener("DOMContentLoaded", function () {
    const treinoLinks = document.querySelectorAll(".treino-link");

    treinoLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const dia = link.getAttribute("data-dia");
            const formulario = document.querySelector(`.formulario[data-dia="${dia}"]`);

            if (formulario.style.display === "none" || formulario.style.display === "") {
                formulario.style.display = "grid";
                initializeForm(dia);
            } else {
                formulario.style.display = "none";
            }
        });
    });

    function initializeForm(dia) {
        const formulario = document.querySelector(`.formulario[data-dia="${dia}"] .treino-form`);
        const exerciciosContainer = document.querySelector(`.formulario[data-dia="${dia}"] .exercicios-container`);
        const adicionarExercicioButton = document.querySelector(`.formulario[data-dia="${dia}"] .adicionar-exercicio`);

        adicionarExercicioButton.addEventListener("click", function () {
            // Crie dinamicamente os campos de entrada para exercícios
            const exercicioInput = document.createElement("input");
            exercicioInput.setAttribute("type", "text");
            exercicioInput.setAttribute("name", `${dia}-exercicio[]`);
            exercicioInput.setAttribute("placeholder", "Exercício");

            const seriesInput = document.createElement("input");
            seriesInput.setAttribute("type", "text");
            seriesInput.setAttribute("name", `${dia}-series[]`);
            seriesInput.setAttribute("placeholder", "Séries");

            const cargaInput = document.createElement("input");
            cargaInput.setAttribute("type", "text");
            cargaInput.setAttribute("name", `${dia}-Peso[]`);
            cargaInput.setAttribute("placeholder", "Peso");

            exerciciosContainer.appendChild(exercicioInput);
            exerciciosContainer.appendChild(seriesInput);
            exerciciosContainer.appendChild(cargaInput);
        });
    }
});

const quiz = document.getElementById("quiz");

if (quiz) {
    quiz.addEventListener("submit", function (event) {
        event.preventDefault();

        const respostas = {
            q1: "a",
            q2: "b",
            q3: "c"
        };

        let pontos = 0;

        for (const pergunta in respostas) {
            const selecionada = quiz.querySelector(`input[name="${pergunta}"]:checked`);

            if (selecionada && selecionada.value === respostas[pergunta]) {
                pontos++;
            }
        }

        document.getElementById("resultado").textContent =
            `Você acertou ${pontos} de 3 questões.`;
    });

    quiz.addEventListener("reset", function () {
        document.getElementById("resultado").textContent = "";
    });
}

const formContato = document.getElementById("formContato");

if (formContato) {
    formContato.addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("mensagemContato").textContent =
            "Mensagem preenchida com sucesso! Este formulário é apenas uma demonstração.";
        formContato.reset();
    });
}

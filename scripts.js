const form = document.getElementById("formCadastro");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const idade = document.getElementById("idade").value;

    if(nome === "" || email === "" || senha === "" || idade === "") {
        alert("Preencha todos os campos!");
        return;
    }

    if(senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres!");
        return;
    }

    if(idade < 18) {
        alert("Você deve ser maior de idade!");
        return;
    }

    alert("Cadastro realizado com sucesso!");
});
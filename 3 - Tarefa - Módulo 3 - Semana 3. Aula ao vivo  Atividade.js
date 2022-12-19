const aluno = {
    nome: "João",
    email: "joao@gmail.com",
    dataNascimento: "1995/05/28",
    sexo: "masculino",
    cidade: "João Pessoa",
    matricula: "123456789",

    detalhes: function(){
        console.log(this.matricula, this.nome, this.email,
        this.dataNascimento, this.sexo, this.cidade);
    }
}

aluno.detalhes();
//Permitir o cadastro da peça somente se ela pesar mais de 100g.
//Número de peças na lista é de 10 unidades, caso tenha 10 ou mais peças, usuário receberá mensagem: lista de peças está lotada.
//Validar se o nome da peça possui mais de 3 caracteres.
var listadepeca = ["filtro de Ar","Amortecedor", "Disco de Freio"]

//existe espaco na lista
if (listadepeca.length < 10){
// é possivel cadastrar 
console.log("é possivel cadastrar mais peças")
} else{
    //não é possivel cadastrar
    console.log("A lista esta de buxim cheio")
}

let peso =500

if(peso<100){
    console.log("a peça precisa ter no minimo 100g")
}else{
    console.log("a peça possui peso adequado")
}

let nomePeca = "Doce de leite é bão"
if (nomePeca.length>3){
    //length conta qts caracteris tem dentro da questao >3, ele ve qts caracteris tem dentro de "Doce de leite é bão"
   
    console.log("O tamanho do nome do doce esta adequado")
}else{
    console.log("O nome deve ter mais que 3 caracteres, digite um nome adequado")
}

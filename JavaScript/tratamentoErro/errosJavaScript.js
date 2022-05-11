const array = [1, 2, 3, 4, 5, 6];
const array1 = [];

function validaArray(arr, numero) {

    try {

        if (!arr && !numero) {
            throw new ReferenceError("Envie os parâmetros");
        } else if (typeof arr !== 'object') {
            throw new TypeError("Array precisa ser do tipo object");
        } else if (typeof numero !== 'number') {
            throw new TypeError("Numero precisa ser do tipo number");
        } else if (arr.length !== numero) {
            throw new RangeError("Tamanho inválido");
        } else if (arr.length === 6) {
            throw new Error("O tamanho deve ser menor que  " + numero);
        }

        return arr;

    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("Este Erro é um ReferenceError!");
            console.log(error.message);
        }
        else if (error instanceof TypeError) {
            console.log("Este Erro é um TypeError!");
            console.log(error.message);
        }
        else if (error instanceof RangeError) {
            console.log("Este Erro é um RangeError!");
            console.log(error.message);
        }
        else {
            console.log('Tipo de Erro não esperado ' + error);
        }
    }
}

function menuInicial() {
    let menu = [
        {
            id: 1,
            operacao: 'validaRefereError'
        },
        {
            id: 2,
            operacao: 'TypeError Object'
        },
        {
            id: 3,
            operacao: 'TypeError Number'
        },
        {
            id: 4,
            operacao: 'RangeError'
        },
        {
            id: 5,
            operacao: 'Teste com output correto'
        },
        {
            id: 6,
            operacao: 'erro não tratado'
        }
    ]


    let readline = require('readline');

    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let resp = '';

    console.table(menu);

    leitor.question("Informe valor desejado da operação " + "\n", function (answer) {
        resp = answer
        console.log(executaValidaArra(resp));
        console.log("\nSua Resposta da operação " + resp + " Foi executada com sucesso");


        leitor.close();

    });


    return '';
}

function executaValidaArra(tipo) {
    switch (tipo) {
        case '1':
            return validaArray();
        case '2':
            return validaArray(5, 5);
        case '3':
            return validaArray([], 'a');
        case '4':
            return validaArray([1, 2, 3, 4, 5], 4);
        case '5':
            return validaArray([1, 2, 3, 4, 5], 5);
        case '6':
            return validaArray([1, 2, 3, 4, 5,6], 6);
        default:
            try {
                throw Error("Operação não tratada ou tipo nullo " + tipo);
            } catch (error) {
                console.log(error.message);
            }
    }
}

menuInicial(); 
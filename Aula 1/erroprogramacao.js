/*é um processo fundamental em qualquer sistema de software, que
consiste na identificação, correção e prevenção de erros que possam
ocorrer durante a execução de um programa.
O tratamento de erros em JavaScript é feito com as instruções
try, catch, finally e throw. Essas instruções ajudam a gerenciar
erros que possam ocorrer durante a execução de um programa,
permitindo que sejam tratados de maneira controlada.
try: Bloco onde o código é executado e erros são monitorados.
catch: Executado se ocorrer um erro no bloco try. Exibe a mensagem
de erro.
finally: Executado sempre, independentemente de erro ou sucesso
no bloco try.
throw: Lança um erro manualmente, especificando uma mensagem
de erro.*/

function dividir(a, b) {
    try {
        if (b === 0) {
            throw new Error("Divisão por zero não permitida.");
        }
        return a / b;
    } catch (erro) {
        console.log("Erro: " + erro.message);
    } finally {
        console.log("Operação finalizada.");
    }
}

console.log(dividir(10, 2)); // Saída: 5, Operação finalizada.
console.log(dividir(10, 0)); // Saída: Erro: Divisão por zero não permitida
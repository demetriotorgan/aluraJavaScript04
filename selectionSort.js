const livros = require('./listaLivros');
const menorValor = require('./exemplo03');

    for(let atual =0; atual < livros.length; atual++){
        let menor = menorValor(livros, atual)

        let livroAtual = livros[atual];
        console.log('Posiçao atual', atual);
        let livroMenorPreco = livros[menor];
        console.log('Livro Atual,', livros[atual]);
        console.log('Livro Menor Preço,', livros[menor]);

        livros[atual] = livroMenorPreco;
        livros[menor] = livroAtual;
    }

    console.log(livros);

# Conversor de Escalas Musicais v.2.0.1

  

**A biblioteca tem como finalidade exibir e/ou converter escalas**. Na versão atual a biblioteca faz transposição para as escalas Maior, Menor, Pentatônica, Pentatônica Maior, Menor Melódica, Menor Harmônica, Menor de Blues em diferentes tonalidades.

Valores em semitons: <br>
2 semitons (S) = 1 tom (T).

A biblioteca poderá ser testada através da função:

>libConvert(*fNote*, *transpositionKey*, *scale*);

  

## Parâmetros

`fNote`  <br>

Uma __string__ que situa a nota fundamental, ponto inicial da conversão.<br>

`transpositionKey`  <br>

Um __inteiro__ positivo, negativo ou zero que indica a chave de transposição de semitons acima ou abaixo para conversão da escala.<br>

`scale`  <br>

Uma __string__ que situa a escolha da estrutura da escala a ser convertida.<br>

# Como instalar

$ npm install lib-scale-chord-convert

  

# Como utilizar

  

```js

> const libConvert = require("lib-scale-chord-convert");

> // Para Escala Maior, ex. em 3 semitons abaixo

> console.log(libConvert('D', -3, 'majorScale'))

> // returns 'F', 'G', 'A', 'A#', 'C', 'D', 'E'

  

> // Para Escala Menor, ex. em 8 semitons acima

> console.log(libConvert('f', 8, 'minorscale'))

> // returns 'C#', 'D#', 'E', 'F#', 'G#', 'A', 'B'

  

> // Para Escala Pentatônica, ex. em -5 semitons abaixo

> console.log(libConvert('F', -5, 'PENTASCALE'))

> // returns 'A#', 'C#', 'D#', 'F', 'G#'

  

> // Para Escala Menor Melódica, ex. em 2 semitons acima

> console.log(libConvert('c#', 2, 'melodicminorScale'))

> // returns 'D#', 'F', 'F#', 'G#', 'A#', 'C', 'D'

  

> // Para Escala Menor Harmônica, ex. em 7 semitons acima

> console.log(libConvert('g', 7, 'HARMONICMINORSCALE'))

> // returns 'D', 'E', 'F', 'G', 'A', 'A#', 'C#'

  

> // Para Escala Menor de Blues, ex. em -4 semitons abaixo

> console.log(libConvert('c#', -4, 'bluesMinorScale'))

> // returns 'F', 'G#', 'A#', 'B', 'C', 'D#'

  

> // Para Escala Pentatônica Maior de Blues, ex. em 5 semitons acima

> console.log(libConvert('d#', 5, 'PENTATONicMaJorsCALe'))

> // returns 'G#', 'A#', 'C', 'D#', 'F'

```

  

# Roadmap Oficial do Projeto

**versão 2.0.1 (released)**

- Implementação da conversão para escalas

	- Menor Melódica,
	- Menor Harmônica,
	- Menor de Blues,
	- Pentatônica Maior de Blues.

- Ampliação da cobertura de testes, refatoração de funcionalidades otimizando modo de execução e chamada.


**versão 1.1.0 (released)**
- Minor feature, refatora funcionalidades mantendo modo de execução e chamada.

**versão 1.0.9 (released)**
- Funcionalidades: transposição de escalas musicais **(Maior, Menor ou Pentatônica)** de acordo com tonalidades e semitons definidos.
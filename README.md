# Conversor de Escalas Musicais v.1.0.8

**A biblioteca tem como finalidade exibir e/ou converter escalas**. Na versão inicial a biblioteca faz transposição para as escalas Maior, Menor e Pentatônica em diferentes tonalidades. 

Valores em semitons: <br>

2 semitons (S) = 1 tom (T).


A biblioteca poderá ser testada através de três funções: 
>majorScale();  <br>
>minorScale();   <br>
>pentaScale();

# Como instalar
$  npm install lib-scale-chord-convert

# Como utilizar

```js
> const libConvert = require("lib-scale-chord-convert");

> // Para Escala Maior, ex. em 3 semitons abaixo
> console.log(libConvert.majorScale("b", -3))
> // returns 'D','E','F#','G','A','B','C#'

> // Para Escala Menor, ex. em 4 semitons acima
> console.log(libConvert.minorScale("C", 4))
> // returns 'E','F#','G','A','B','C','D'

> // Para Escala Pentatônica, ex. em 7 semitons acima
> console.log(libConvert.pentaScale("A#", 7))
> // returns 'F','G#','A#','C','D#','F'
```
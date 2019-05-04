// Dada duas peças de xadrez, qual peça ganha?

function chordValidator (tom, escala) {

  if (tom === "D" || escala === "maior") {

    return "D, E, F#, G, A, B, C#, D";
  
  } 

}

module.exports.chordValidator = chordValidator;
const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
// Corpo da escala maior
// 0, 2, 4, 5, 7, 9, 11
//    T  T  S  T  T  T
const majorScale = [0, 2, 4, 5, 7, 9, 11];

const libConvert = {
  majorScale: function convertMajorScale (tonality, num) {

    const newScale = [];
    let indexNote = notes.indexOf(tonality.toUpperCase());
    let noteChoiced = majorScale.map((x) => {

      return (x + indexNote + num) % 12;

    });

    for (let el of noteChoiced) {

      newScale.push(notes[el]);

    }
    return newScale;

  }


};


module.exports = libConvert;
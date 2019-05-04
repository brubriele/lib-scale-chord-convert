const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
// Corpo da escala maior
// 0, 2, 4, 5, 7, 9, 11
//    T  T  S  T  T  T
const majorScale = [0, 2, 4, 5, 7, 9, 11];

// Corpo da escala menor
// 0, 2, 3, 5, 7, 8, 10
//    T  S  T  T  S  T
const minorScale = [0, 2, 3, 5, 7, 8, 10];

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

  },

  minorScale: function convertMinorScale (tonality, num) {

    const newScale = [];
    const originalNote = [];
    let indexNote = notes.indexOf(tonality.toUpperCase());
    let noteChoiced = minorScale.map((x) => {

      return (x + indexNote + num) % 12;
  
    });
    for (let el of noteChoiced) {

      newScale.push(notes[el]);
    
    }
  
    let originalChoiced = minorScale.map((x) => {

      return (x + indexNote) % 12;
  
    });
  
    for (let el of originalChoiced) {

      originalNote.push(notes[el]);
    
    }
    return newScale;
  
  }

};


module.exports = libConvert;
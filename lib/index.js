const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const majorScale = [0, 2, 4, 5, 7, 9, 11];
const minorScale = [0, 2, 3, 5, 7, 8, 10]; 
const pentaScale = [0, 3, 5, 7, 10, 12];

const libConvert = {
  majorScale: function convertMajorScale (tonality, transpositionKey) {

    const newScale = [];
    let indexNote = notes.indexOf(tonality.toUpperCase());
    let noteChoiced = majorScale.map((note) => {

      return transpositionKey > 0 ? (note + indexNote + transpositionKey) % 12 : (note + indexNote - transpositionKey) % 12;

    });

    for (let el of noteChoiced) {

      newScale.push(notes[el]);

    }
    return newScale;

  },

  minorScale: function convertMinorScale (tonality, num) {

    const newScale = [];
    let indexNote = notes.indexOf(tonality.toUpperCase());
    let noteChoiced = minorScale.map((x) => {

      return num > 0 ? (x + indexNote + num) % 12 : (x + indexNote - num) % 12;

    });

    for (let el of noteChoiced) {

      newScale.push(notes[el]);

    }
    return newScale;
  
  },

  pentaScale: function convertPentaScale (tonality, num) {

    const newScale = [];
    let indexNote = notes.indexOf(tonality.toUpperCase());
    let noteChoiced = pentaScale.map((x) => {

      return num > 0 ? (x + indexNote + num) % 12 : (x + indexNote - num) % 12;

    });

    for (let el of noteChoiced) {

      newScale.push(notes[el]);

    }
    return newScale;
  
  }
  

};


module.exports = libConvert;
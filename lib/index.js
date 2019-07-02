const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const libConvert = {
  majorScale: (tonality, transpositionKey) => {
    const majorScale = [0, 2, 4, 5, 7, 9, 11];
    let indexNote = notes.indexOf(tonality.toUpperCase());
    let noteChoiced = majorScale.map((note) => {
      return transpositionKey > 0 ? (note + indexNote + transpositionKey) % 12 : (note + indexNote - transpositionKey) % 12;
    });
    const newScale = noteChoiced.map(note => notes[note]);
    return newScale;
  },

  minorScale: (tonality, transpositionKey) => {
    const minorScale = [0, 2, 3, 5, 7, 8, 10];
    let indexNote = notes.indexOf(tonality.toUpperCase());
    let noteChoiced = minorScale.map((note) => {
      return transpositionKey > 0 ? (note + indexNote + transpositionKey) % 12 : (note + indexNote - transpositionKey) % 12;
    });
    const newScale = noteChoiced.map(note => notes[note]);
    return newScale;
  },

  pentaScale: (tonality, transpositionKey) => {
    const pentaScale = [0, 3, 5, 7, 10, 12];
    let indexNote = notes.indexOf(tonality.toUpperCase());
    let noteChoiced = pentaScale.map((note) => {
      return transpositionKey > 0 ? (note + indexNote + transpositionKey) % 12 : (note + indexNote - transpositionKey) % 12;
    });
    const newScale = noteChoiced.map(note => notes[note]);
    return newScale;
  }
};

module.exports = libConvert;
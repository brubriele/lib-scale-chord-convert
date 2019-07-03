const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const scaleGroup = {
  'majorscale': [0, 2, 4, 5, 7, 9, 11],
  'minorscale': [0, 2, 3, 5, 7, 8, 10],
  'pentascale': [0, 3, 5, 7, 10],
  'melodicminorscale': [0, 2, 3, 5, 7, 9, 11],
  'harmonicminorscale': [0, 2, 3, 5, 7, 8, 11],
  'bluesminorscale': [0, 3, 5, 6, 7, 10],
  'pentatonicmajorscale': [0, 2, 4, 7, 9]
}

const libConvert = (fNote, transpositionKey, scale) => {    
    let indexNote = notes.indexOf(fNote.toUpperCase());
    let chosenNote = scaleGroup[scale.toLowerCase()].map((note) => {
      return transpositionKey > 0 ? (note + indexNote + transpositionKey) % 12 : (note + indexNote - transpositionKey) % 12;
    });
    const newScale = chosenNote.map(note => notes[note])
    return newScale
  }
  
module.exports = libConvert;
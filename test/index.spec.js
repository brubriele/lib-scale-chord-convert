const chai = require("chai");
const expect = chai.expect;
const chordValidator = require("../lib/index")

describe('Conversor de acordes', () => {
    it('Deve retornar escala menor', () => {
        expect(chordValidator.chordValidator("D", 0)).to.equal("D, E, F#, G, A, B, C#, D")
    });
});
   

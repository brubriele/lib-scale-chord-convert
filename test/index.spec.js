let chai = require("chai");
let expect = chai.expect;
let chordValidator = require("../lib/index")

describe('Conversor de acordes', () => {
    it('Deve retornar escala menor', () => {
        expect(chordValidator.chordValidator("D", "maior")).to.equal("D, E, F#, G, A, B, C#, D")
    });
})
   

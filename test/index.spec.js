const chai = require("chai");
const expect = chai.expect;
const libConvert = require("../lib/index")

describe('Conversor de escalas', () => {
    it('Deve retornar escala maior de D de acordo semitom(num)', () => {
        expect(libConvert.majorScale("D", 0)).to.eql(['D', 'E', 'F#', 'G', 'A', 'B', 'C#']);
    });
    it('Deve retornar escala maior de D# de acordo semitom(num)', () => {
        expect(libConvert.majorScale("D#", 2)).to.eql(['F','G','A','A#','C','D','E']);
    });
    it('Deve retornar escala maior de D# de acordo semitom(num)', () => {
        expect(libConvert.majorScale("D#", 2)).to.eql(['F','G','A','A#','C','D','E']);
    });
});
   

const chai = require("chai");
const expect = chai.expect;
const libConvert = require("../lib/index")

describe('Conversor de escalas', () => {
    describe('Escala Maior', () => {
        it('Deve retornar escala maior de D de acordo com semitom(num)', () => {
            expect(libConvert.majorScale("D", 0)).to.eql(['D', 'E', 'F#', 'G', 'A', 'B', 'C#']);
        });
        it('Deve retornar escala maior de D# de acordo com semitom(num)', () => {
            expect(libConvert.majorScale("D#", 2)).to.eql(['F', 'G', 'A', 'A#', 'C', 'D', 'E']);
        });
        it('Deve retornar escala maior de B de acordo com semitom(num)', () => {
            expect(libConvert.majorScale("b", 5)).to.eql(['E','F#','G#','A','B','C#','D#']);
        });
    });
    describe('Escala Menor', () => {
        it('Deve retornar escala menor de C de acordo com semitom(num)', () => {
            expect(libConvert.minorScale("C", -8)).to.eql(['C','D',"D#",'F','G','G#','A#']);
        });
    });

});


const chai = require("chai");
const expect = chai.expect;
const libConvert = require("../lib/index.js")

describe('Conversor de escalas', () => {
    describe('Escala Maior', () => {
        it('Deve retornar escala maior de D de acordo com semitom(num)', () => {
            expect(libConvert.majorScale("D", 0)).to.eql(['D', 'E', 'F#', 'G', 'A', 'B', 'C#']);
        });
        it('Deve retornar escala maior de D# de acordo com semitom(num)', () => {
            expect(libConvert.majorScale("D#", 2)).to.eql(['F', 'G', 'A', 'A#', 'C', 'D', 'E']);
        });
        it('Deve retornar escala maior de B de acordo com semitom(num)', () => {
            expect(libConvert.majorScale("b", 5)).to.eql(['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#']);
        });
    });
    describe('Escala Menor', () => {
        it('Deve retornar escala menor de C de acordo com semitom(num)', () => {
            expect(libConvert.minorScale("C", 0)).to.eql(['C', 'D', "D#", 'F', 'G', 'G#', 'A#']);
        });
        it('Deve retornar escala menor de F de acordo com semitom(num)', () => {
            expect(libConvert.minorScale("f", 8)).to.eql(['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B']);
        });
        it('Deve retornar escala menor de G# de acordo com semitom(num)', () => {
            expect(libConvert.minorScale("G#", -4)).to.eql(['C', 'D', 'D#', 'F', 'G', 'G#', 'A#']);
        });

    });

    describe('Escala Pentatônica', () => {
        it('Deve retornar escala pentatônica de A# de acordo com semitom(num)', () => {
            expect(libConvert.pentaScale("A#", 7)).to.eql(['F','G#','A#','C','D#','F']);
        });
        it('Deve retornar escala pentatônica de E de acordo com semitom(num)', () => {
            expect(libConvert.pentaScale("e", 0)).to.eql(['E','G','A','B','D','E']);
        });
        it('Deve retornar escala pentatônica de F de acordo com semitom(num)', () => {
            expect(libConvert.pentaScale("F", 5)).to.eql(["A#",'C#','D#','F','G#','A#']);
        });
        
    });

});


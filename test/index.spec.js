const chai = require("chai");
const expect = chai.expect;
const libConvert = require("../lib/index.js");



describe('Conversor de escalas', () => {
    describe('Escala Maior', () => {
        it('Deve retornar escala maior de D de acordo com semitom(transpositionKey)', () => {
            expect(libConvert("D", 0, "majorScale")).to.eql(['D', 'E', 'F#', 'G', 'A', 'B', 'C#']);
        });
        it('Deve retornar escala maior de D# de acordo com semitom(transpositionKey)', () => {
            expect(libConvert("D#", 2, "majorScale")).to.eql(['F', 'G', 'A', 'A#', 'C', 'D', 'E']);
        });
        it('Deve retornar escala maior de B de acordo com semitom(transpositionKey)', () => {
            expect(libConvert("b", 5, "majorScale")).to.eql(['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#']);
        });
    });


    describe('Escala Menor', () => {
        it('Deve retornar escala menor de C de acordo com semitom(transpositionKey)', () => {
            expect(libConvert("C", 0, 'minorScale')).to.eql(['C', 'D', "D#", 'F', 'G', 'G#', 'A#']);
        });
        it('Deve retornar escala menor de F de acordo com semitom(transpositionKey)', () => {
            expect(libConvert("f", 8, 'minorscale')).to.eql(['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B']);
        });
        it('Deve retornar escala menor de G# de acordo com semitom(transpositionKey)', () => {
            expect(libConvert("G#", -4, 'MINORSCALE')).to.eql(['C', 'D', 'D#', 'F', 'G', 'G#', 'A#']);
        });

    });

    describe('Escala Pentatônica', () => {
        it('Deve retornar escala pentatônica de A# de acordo com semitom(transpositionKey)', () => {
            expect(libConvert("A#", 7, 'pentaScale')).to.eql(['F', 'G#', 'A#', 'C', 'D#']);
        });
        it('Deve retornar escala pentatônica de E de acordo com semitom(transpositionKey)', () => {
            expect(libConvert("e", 0, 'pentaScale')).to.eql(['E', 'G', 'A', 'B', 'D']);
        });
        it('Deve retornar escala pentatônica de F de acordo com semitom(transpositionKey)', () => {
            expect(libConvert("F", 5, 'PENTASCALE')).to.eql(["A#", 'C#', 'D#', 'F', 'G#']);
        });
    });

    describe('Escala Menor Melódica', () => {
        it('Deve retornar escala menor melódica de B de acordo com semitom(transpositionKey)', () => {
            expect(libConvert('b', 2, 'melodicMinorScale')).to.eql(['C#', 'D#', 'E', 'F#', 'G#', 'A#', 'C']);
        });
        it('Deve retornar escala menor melódica de A de acordo com semitom(transpositionKey)', () => {
            expect(libConvert('A', -5, 'MELODICMINORSCALE')).to.eql(['D', 'E', 'F', 'G', 'A', 'B', 'C#']);
        });
        it('Deve retornar escala menor melódica de C# de acordo com semitom(transpositionKey)', () => {
            expect(libConvert('c#', 2, 'melodicminorScale')).to.eql(['D#', 'F', 'F#', 'G#', 'A#', 'C', 'D']);
        });
    }); 

    describe('Escala Menor Harmônica', () => {
        it('Deve retornar escala menor melódica de D de acordo com semitom(transpositionKey)', () => {
            expect(libConvert('D', 5, 'harmonicminorscale')).to.eql(['G', 'A', 'A#', 'C', 'D', 'D#', 'F#']);
        });
        it('Deve retornar escala menor melódica de A de acordo com semitom(transpositionKey)', () => {
            expect(libConvert('f#', 5, 'harmonicMinorScale')).to.eql(['B', 'C#', 'D', 'E', 'F#', 'G', 'A#']);
        });
        it('Deve retornar escala menor melódica de C# de acordo com semitom(transpositionKey)', () => {
            expect(libConvert('g', 7, 'HARMONICMINORSCALE')).to.eql(['D', 'E', 'F', 'G', 'A', 'A#', 'C#']);
        });
    }); 
});


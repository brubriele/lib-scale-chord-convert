const chai = require("chai");
const expect = chai.expect;
const convertMajorScale = require("../lib/index")

describe('Conversor de acordes', () => {
    it('Deve retornar escala maior', () => {
        expect(convertMajorScale("D", 0)).to.eql(['D', 'E', 'F#', 'G', 'A', 'B', 'C#']);
    });
});
   

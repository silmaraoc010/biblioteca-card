const chai = require('chai');
const expect = chai.expect;
const card = require('../index');

describe('card', function () {
  describe('#cardValidator', function () {
    describe('Quando não houver parametro.', function () {
      it('Deve lancar um erro.', function () {
        var badFn = function () { card.cardValidator(); };
        expect(badFn).to.throw(Error);
      });
    });

    describe('Quando for uma string.', function () {
      it('Deve lancar um erro.', function () {
        var badFn = function () { card.cardValidator('Teste'); };
        expect(badFn).to.throw(Error);
      });
    });

    describe('Quando o numero for inteiro e houver um digito, deve lançar um erro.', function () {
      it('Deve lancar um erro.', function () {
        var badFn = function () { card.cardValidator(12345); };
        expect(badFn).to.throw(Error);
      });
    });

    // Quando o numero for um inteiro e for um cartão válido deve retornar true,
    describe('Quando o numero for um inteiro e for um cartão válido deve retornar true.', function () {
      it('Deve lancar um erro.', function () {
        expect(card.cardValidator(5555666677778884)).to.be.true;
      });
    });
    // Quando o numero for um inteiro e for invalido deve retornar false.
    describe('Quando se o cartao for invalido deve retornar false.', function () {
      it('Deve lancar um erro.', function () {
        expect(card.cardValidator(5555666677778883)).to.be.false;
      });
    });
  });
});

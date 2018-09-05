const chai = require('chai');
const expect = chai.expect;
const card = require('../index');

describe('card', function () {
  describe('#cardValidator', function () {
    describe('Quando não houver parametro.', function () {
      it('Deve mostrar um erro.', function () {
        let badFn = function () { card.cardValidator(); };
        expect(badFn).to.throw(Error);
      });
    });

    describe('Quando for uma string.', function () {
      it('Deve mostrar um erro.', function () {
        let badFn = function () { card.cardValidator('Teste'); };
        expect(badFn).to.throw(Error);
      });
    });

    describe('Quando o numero for inteiro e houver apenas um digito.', function () {
      it('Deve mostrar um erro..', function () {
        let badFn = function () { card.cardValidator(12345); };
        expect(badFn).to.throw(Error);
      });
    });


    describe('Quando o numero for válido deve retornar true.', function () {
      it('Deve mostrar um erro..', function () {
        expect(card.cardValidator(5555666677778884)).to.be.true;
      });
    });
 
    describe('Quando se o cartao for invalido deve retornar false.', function () {
      it('Deve mostrar um erro.', function () {
        expect(card.cardValidator(5390830298398279)).to.be.false;
      });
    });
  });
});

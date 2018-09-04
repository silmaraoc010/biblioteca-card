function cardValidator (credNum){
  if (!credNum){
    throw new Error("Não pode ser vazio");
  }
  if (typeof credNum === "string"){
    throw new Error("Contém string");
  }
  if (credNum.toString().length<10){
    throw new Error("Digitos menor do que o esperado");
  }

  var numberCard = credNum.toString().split('').reverse();

  var totalSum = 0;

  for (var i = 0; i < numberCard.length; i++){
    if (i % 2 === 1){
      var quant = parseInt(numberCard[i])*2;
      if (quant >= 10){
        totalSum += parseInt(quant / 10) + (quant % 10);
      }
    }else {
      totalSum += parseInt(numberCard[i]);
    }
  }

  if (totalSum %10 === 0){
    return true;
  }else{
    return false;
  }
 }

 module.exports.cardValidator = cardValidator;
function calculateImc(weight = null, height = null) {
    height = Math.pow(height, 2);
    let Imc = weight / height;

    if (Imc < 18.5) return `Seu IMC é ${Imc.toFixed(2)}, voce esta magro!!`
    else if (Imc < 24.9) return `Seu imc é ${Imc.toFixed(2)} voce esta no peso ideal`
    else if (Imc < 30) return `Seu imc é ${Imc.toFixed(2)} voce esta com sobrepeso!`
    else if (Imc > 30) return `Seu imc é ${Imc.toFixed(2)} voce esta obeso!`
};
console.log(calculateImc(92.5, 1.72));
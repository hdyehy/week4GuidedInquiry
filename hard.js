
//objects for tom and jerry
const tom = {
    height: 9,
    weight: 8
}
const jerry = {
    height: 10,
    weight: 45
}

//calculates bmi
function bmi(height, weight) {
    const nBMI = weight / (height ** 2);
    return nBMI
}

//stores bmi
const tomBMI = bmi(tom.height, tom.weight);
const jerryBMI = bmi(jerry.height, jerry.weight);

console.log(tomBMI, jerryBMI);

//stores boolean for comparison
const bmiCompare = tomBMI > jerryBMI;

console.log(`Is Tom's BMI higher than Jerry's? ${bmiCompare}.`);
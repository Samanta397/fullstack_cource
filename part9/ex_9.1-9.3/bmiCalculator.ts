export const calculateBmi = (height: number, weight: number) => {
  const res = weight / ((height/100) ** 2)

  if (res < 16) {
    return 'Underweight (Severe thinness)'
  } else if (res > 16 && res < 16.9) {
    return 'Underweight (Moderate thinness)'
  } else if (res > 17 && res < 18.4) {
    return 'Underweight (Mild thinness)'
  } else if (res > 18.5 && res < 24.9) {
    return 'Normal'
  } else if (res > 25 && res < 29.9) {
    return 'Overweight (Pre-obese)'
  } else if (res > 30 && res < 34.9) {
    return 'Obese (Class I))'
  } else if (res > 35.0 && res < 39.9) {
    return 'Obese (Class II)'
  } else {
    return 'Obese (Class III)'
  }

}

console.log(calculateBmi(Number(process.argv[2]), Number(process.argv[3])))

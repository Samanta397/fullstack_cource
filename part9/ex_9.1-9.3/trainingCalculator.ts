type TargetType = {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateExercises = (target: number, hours: number[]): TargetType => {
  const periodLength = hours.length;
  const trainingDays = hours.filter(hours => hours !== 0).length;
  const average = hours.reduce((a, b) => a + b, 0) / hours.length;
  const success = average >= target

  let rating = 0
  let ratingDescription = ''

  if (average < 1.5) {
    rating = 1;
    ratingDescription = 'too less training'
  } else if (average >= target/2 && average < target) {
    rating = 2;
    ratingDescription = 'not too bad but could be better'
  } else {
    rating = 3;
    ratingDescription = 'it is complete success'
  }

  return {
    periodLength,
    trainingDays,
    target,
    average,
    success,
    rating,
    ratingDescription
  }
}

console.log(calculateExercises(Number(process.argv[2]), process.argv.slice(3).map(arg => Number(arg))))
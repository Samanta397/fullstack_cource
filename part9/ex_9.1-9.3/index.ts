import express from 'express';
const app = express();
import {calculateBmi} from './bmiCalculator'
import {calculateExercises} from './trainingCalculator'

app.get('/', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req , res) => {
  // @ts-ignore
  const result = calculateBmi(req.params.height, req.params.height)
  res.send(result);
});

app.post('/exercises', (req , res) => {
  const { target, hours } = req.body;

  if (!target || !hours) {
    res.status(400).json({error: "parameters missing"})
  }

  const result = calculateExercises(target, hours)
  res.json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

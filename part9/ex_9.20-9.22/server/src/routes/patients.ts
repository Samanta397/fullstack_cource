import express from 'express';
import patientService from '../services/patientService'

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getPatients());
});

router.post('/', (req, res) => {
  const addedEntry = patientService.addPatient(req.body);
  res.json(addedEntry);
});

router.post('/:id/entries', (req, res) => {
  const addedEntry = patientService.addPatient(req.body);
  res.json(addedEntry);
});

router.get('/:id', (req, res) => {
  console.log(req.params)
  const patient = patientService.getPatient(req.params.id);

  console.log(req.params.id)
  res.json(patient);
});

export default router;
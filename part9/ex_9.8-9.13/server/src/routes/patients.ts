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

export default router;
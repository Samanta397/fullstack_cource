import diagnoseData from '../data/diagnoses';
import {Diagnose, } from '../types'

const diagnoses: Diagnose[] = diagnoseData as Diagnose[]

const getDiagnoses = () => {
  return diagnoses;
};

const addDiagnose = () => {
  return null;
};

export default {
  getDiagnoses,
  addDiagnose
};
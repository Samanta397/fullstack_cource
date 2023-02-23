import {Patient} from '../types'
import patientsData from '../data/patients'
import { v1 as uuid } from 'uuid'

type ReturnedPatient = Omit<Patient, 'ssn'>

const patients: ReturnedPatient[] = patientsData as Patient[]

const getPatients = (): ReturnedPatient[] => {
  return patients;
};

const addPatient = (patient: Omit<Patient, 'id'>) => {
  const id: string = uuid();
  const newPatientData: Patient = {
    id,
    ...patient
  }

  patientsData.push(newPatientData)
  return newPatientData;
};

export default {
  getPatients,
  addPatient
};
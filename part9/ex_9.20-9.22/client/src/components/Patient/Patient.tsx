import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import patientService from '../../services/patients'
import {Patient} from "../../types";
import EntryDetails from "../EntryDetails/EntryDetails";


const PatientPage = () => {
  const {id} = useParams();
  const [patient, setPatient] = useState<Patient | null>(null)

  useEffect( () => {
    const fetchPatient = async (id: string) => {
      const patient = await patientService.getById(id);
      setPatient(patient);
    };
    if (id) {
      void fetchPatient(id);
    }
  }, [id])

  if (!patient) {
    return null
  }

  return (
    <div>
      <h3>{patient.name}</h3>
      <p>ssn: {patient.ssn}</p>
      <p>ocupation: {patient.occupation}</p>

      <h3>entries</h3>
      {
        patient.entries.map(entry => {
          switch (entry.type) {
            case "HealthCheck":
              return <EntryDetails date={entry.date}
                                   description={entry.description}/>
            case 'Hospital':
              return  <EntryDetails date={entry.discharge.date}
                                    description={entry.description}
                                    diagnosisCodes={entry.diagnosisCodes}/>
            case 'OccupationalHealthcare':
              return <EntryDetails date={entry.sickLeave.startDate}
                                   description={entry.description}
                                   diagnosisCodes={entry.diagnosisCodes}/>
            default:
              return null
          }
        })
      }
    </div>
  );
};

export default PatientPage;
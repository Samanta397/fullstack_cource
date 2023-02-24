import React, {useEffect, useState} from 'react';
import {Diagnosis, EntryDetailsType} from '../../types'
import patientService from "../../services/patients";

const EntryDetails = ({date, description, diagnosisCodes}: EntryDetailsType) => {
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([])

  useEffect(() => {
    const fetchDiagnoses = async () => {
      const data = await patientService.getDiagnoses();
      setDiagnoses(data.filter(d => {
        return diagnosisCodes?.map(code => d.code === code)
      }));
    };
    void fetchDiagnoses()
  }, [])

  return (
    <div>
      <p>{date} {description}</p>
      <ul>
        {diagnoses?.map(d => <li>{d.code} {d.name}</li>)}
      </ul>
    </div>
  );
};

export default EntryDetails;
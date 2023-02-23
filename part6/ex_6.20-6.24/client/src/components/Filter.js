import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {filterChange} from "../reducers/filterReducer";

const Filter = () => {
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const handleChange = ({target}) => {
    dispatch(filterChange(target.value))
  }

  console.log(filter)

  return (
    <div style={{marginBottom: '2rem'}}>
      filter: <input type="text" value={filter} onChange={handleChange}/>
    </div>
  );
};

export default Filter;
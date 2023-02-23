import React from 'react';
import Input from "../Input/Input";

const Filter = ({filter, setFilter}) => (
    <>
      Filter shown with <Input value={filter} onChange={setFilter}/>
    </>
);

export default Filter;
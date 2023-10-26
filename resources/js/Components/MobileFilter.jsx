import React, {useState} from 'react';
import '@/scss/components/Dropdown.scss';
import Select from 'react-select';
import Dropdown from './Dropdown';
import Btn from './Btn';

const options = [
    {value: 'Uploaded', label: 'Uploaded'},
    {value: 'Downloaded', label: 'Downloaded'},
  ];

const MobileFilter = props => {
  const [isClearable, setIsClearable] = useState ();
  const selectedDataHandler = v => {
    // console.log (v);
  };

  return (
    <form>
      <Dropdown
        onSelectedData={selectedDataHandler}
        label="Select CV"
        dropdownTitle="Student Filter"
        options={options}
      />

      <Btn className="filterSubmit-btn">Submit</Btn>
    </form>
  );
};

export default MobileFilter;

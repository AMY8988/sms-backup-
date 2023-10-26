import React, {useState} from 'react';
import '@/scss/components/Dropdown.scss';
import Select from 'react-select';
import { useContext } from 'react';
import AppContext from '../Store/app-context';
import { useRef } from 'react';

const Dropdown = props => {
  const [isClearable, setIsClearable] = useState ();
  const [selected, setSelected] = useState (props.options[0].value);
  const { isChange , setIsChange } = useContext(AppContext);
  const selectData = useRef('');
  //   console.log (selected.value);

//   const changeHandler = selectedOptions => {
//     setSelected (selectedOptions);
//     props.onSelectedData (selectedOptions.value);
//     setIsChange(true)
//     // console.log(isChange)
//     console.log(selectData.current.props.value.value , 'useRef')
//   };

  return (
    <div>

      <p className="text-center filter_header">{props.dropdownTitle}</p>
      <label className="dropdown-label">{props.label}</label>

      <Select
        defaultValue={selected}
        options={props.options}
        onChange={props.onSelectedData}
        ref={selectData}
        // onChange={changeHandler}
        isClearable={isClearable}
      />
    </div>
  );
};

export default Dropdown;

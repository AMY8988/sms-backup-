import React, {useContext, useState} from 'react';
import '@/scss/components/Filter.scss';
import Btn from '@/js/Components/Btn';
import {FaFilter, FaTimes} from 'react-icons/fa';
import AppContext from '../Store/app-context';

const Filter = ({onKeywordChange}) => {
  const {isFilter, setIsFilter, isChange, setIsChange , searchData , setSearchData} = useContext (
    AppContext
  );

  const clearHandler = ()=>{
        // console.log('clear!!!')
        // setSearchData('')
        onKeywordChange('')
        setIsChange(false)

  }

  const changeHandler = () => {
    if(isFilter === false){
        setIsFilter(true)
    }else if(isFilter === true){
        setIsFilter(false)
    }
};
  // console.log(isChange)

  return (
    <div className="filterBtn_container">
      <h3 className="count-mobile">Total-20</h3>
      {isChange
        ? <Btn onClick={clearHandler}  className="clear-btn">
            <FaTimes />
            Clear
          </Btn>
        : ''}
      <Btn onClick={changeHandler} filter={isFilter} className="filter-btn">
        <FaFilter />
      </Btn>
    </div>
  );
};

export default Filter;

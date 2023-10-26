import React from 'react';
import '@/scss/components/SearchBox.scss';
import {BsSearch} from 'react-icons/bs';
import {useContext} from 'react';
import AppContext from '../Store/app-context';
import Btn from './Btn';
import {FaTimes} from 'react-icons/fa';

const SearchBox = ({onKeywordChange}) => {
  const {isChange, setIsChange, searchData, setSearchData} = useContext (
    AppContext
  );

  const changeInput = e => {
    let keyword = e.target.value;
    // console.log(keyword , "aa")
    setSearchData (keyword);
    onKeywordChange (keyword);

    if (keyword === '') {
      setIsChange (false);
    } else {
      setIsChange (true);
    }
  };

  const clearHandler = () => {
    // console.log('clear!!!')
    setSearchData ('');
    onKeywordChange ('');
    setIsChange (false);
  };

  return (
    <form>

      <div className="search_container ">
        <h3 className="count">Total-20</h3>

          {isChange
            ? <Btn onClick={clearHandler} className="clear-btn">
                <FaTimes />
                Clear
              </Btn>
            : ''}
          <input
            value={searchData}
            onChange={changeInput}
            placeholder="Search..."
            className="search_bar "
          />
          <BsSearch className="search_icon" />
       
      </div>
    </form>
  );
};

export default SearchBox;

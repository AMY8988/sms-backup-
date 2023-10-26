import {useEffect} from 'react';
import {createContext, useState} from 'react';

const AppContext = createContext ({
  test: false,
  getTest: () => {},
});


export function AppContextProvider (props) {
  const [test, setTest] = useState (false);
  const [menulist, setMenulist] = useState (false);
  const [isFilter, setIsFilter] = useState (false);
  const [isChange, setIsChange] = useState (false);
  const [searchData, setSearchData] = useState ('');
  const [studentsArr, setStudentsArr] = useState ([]);
  const [ urlPath , setUrlPath ] = useState('');
  const [isStudentCreate, setIsStudentCreate] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [ query , setQuery ] = useState({
    keyword : '',
    cv : ''
  })


  useEffect (() => {}, []);

  async function getTest () {}

  const context = {
    test,
    getTest,
    setMenulist,
    menulist,
    isFilter,
    setIsFilter,
    isChange,
    setIsChange,
    searchData,
    setSearchData,
    query,
    setQuery,
    setStudentsArr,
    studentsArr,
    isStudentCreate,
    setIsStudentCreate,
    urlPath,
    setUrlPath,
    totalPages,
    setTotalPages,
    setPageNumber,
    pageNumber,
    loading,
    setLoading
  };

    return (
        <AppContext.Provider value={context}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContext;

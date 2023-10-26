import Table from '@/js/Components/Table';
import '@/scss/Students/index.scss';
import MenuTab from '@/js/Components/MenuTab';
import AuthenticatedLayout from '@/js/Layouts/AuthenticatedLayout';
import {Head, router} from '@inertiajs/react';
import SearchBox from '@/js/Components/SearchBox';
import Dropdown from '@/js/Components/Dropdown';
import Filter from '@/js/Components/Filter';
import {useContext} from 'react';
import AppContext from '@/js/Store/app-context';
import {useEffect} from 'react';
import MobileFilter from '@/js/Components/MobileFilter';
import Btn from '@/js/Components/Btn';
import '@/scss/components/menutab.scss';
import {IoPeopleSharp} from 'react-icons/io5';
import Profile from '@/images/login-profile.png';
import {FaRightFromBracket} from 'react-icons/fa6';
import StudentCreateModal from '@/js/Components/StudentCreateModal';
import {useState} from 'react';
import {useInfiniteLoad} from '@/js/Components/InfiniteLoad/InfiniteLoad';
import {useCallback} from 'react';
import {useRef} from 'react';

const options = [
  {value: 'uploaded', label: 'Uploaded'},
  {value: 'not-uploaded', label: 'Not Uploaded'},
];

export default function Index({students, searchUrl}) {
  const [url, setUrl] = useState(new URL(searchUrl));
  const {
    query,
    setQuery,
    isFilter,
    setIsFilter,
    searchData,
    setSearchDate,
    studentsArr,
    setStudentsArr,
    totalPages,
    setTotalPages,
    pageNumber,
    setPageNumber,
    loading,
    setLoading,
  } = useContext (AppContext);


  // const createUrlPath = () => {
  //   const url = new URL (searchUrl);

  //   url.searchParams.append ('keyword', query.keyword);
  //   url.searchParams.append ('cv', query.cv);

  //   return url;
  // };



  // const urlPath = createUrlPath ();

  const {data, isLoading, hasMore} = useInfiniteLoad (url, pageNumber);
  console.log (data, 'data', isLoading, 'loading', hasMore, 'hasMore');

  /////// infinite load /////////////

  let optionsForLoad = {
    root: document.querySelector ('#dataContainer'),
    rootMargin: '0px',
    threshold: 0.1,
  };
  const observer = useRef ();
  const lastItemElementRef = useCallback (
    node => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect ();
      observer.current = new IntersectionObserver (
        entries => {
          if (entries[0].isIntersecting && hasMore) {
            setLoading (true);
            setTimeout (() => {
              setPageNumber (prevPageNumber => prevPageNumber + 1);
            }, 1000);
            console.log (observer.current);
          }
        },
        {
          optionsForLoad,
        }
      );

      if (node) observer.current.observe (node);
    },
    [isLoading, hasMore]
  );

  // filter resize with window and set student
  useEffect (() => {
    window.addEventListener ('resize', () => {
      if (window.innerWidth > 768) {
        setIsFilter (false);
      }
    });
    // setStudentsArr (students.data);
  }, []);

  useEffect (
    () => {
      if (!data) return;
      setStudentsArr (data);
    },
    [data]
  );

  // fetch data when search or filter
  useEffect (
    () => {
      if(!query) return;
    setUrl((url)=>{

          url.searchParams.set ('keyword', query.keyword);
          url.searchParams.set ('cv', query.cv);

          return url
        })

      },
    [query]
  );

  //// Search Data /////
  const keywordHandler = value => {
    setPageNumber(1)
    // console.log(value);
    setQuery (pre => {
      // console.log({ ...pre, keyword: value })
      return {...pre, keyword: value};
    });
  };

  const selectedDataHandler = data => {
    setPageNumber(1)

    console.log (data.value);
    setQuery (pre => {
      return {...pre, cv: data.value};
    });
  };

  // const { test } = useContext(AppContext);

  // console.log(test);
  return (
    <AuthenticatedLayout className="">
      <Head title="Students" />
      <div className="h-100 ">
        <div className="module_container">
          <p>Current Page : {pageNumber}</p>
          <SearchBox onKeywordChange={keywordHandler} />
          <Filter onKeywordChange={keywordHandler} />
          <div className="body_container">
            <div id="dataContainer" className="card table_card card-table w-8 ">
              {!isFilter
                ? <Table
                    currentPage={pageNumber}
                    isLoading={isLoading}
                    infiniteLoad={lastItemElementRef}
                  />
                : <MobileFilter />}
            </div>
            <div className="card  w-2 filter_container">
              <p className="text-center filter_header">
                Student Filter
              </p>
              <Dropdown
                label="Select CV"
                onSelectedData={selectedDataHandler}
                options={options}
              />
            </div>
          </div>
        </div>
        <MenuTab className="primary-effect">
          <div className="d-flex flex-direction-column flex-align-item-center flex-justify-content-space-between vh-100">
            <div />
            <ul className="d-flex flex-align-item-center mobile-menu__list__item">
              <Btn className="mobile-icon__card mobile-icon__card__active d-flex">
                <IoPeopleSharp size={25} />
                <h6>Students</h6>
              </Btn>
              <Btn className="mobile-icon__card d-flex">
                <IoPeopleSharp size={25} />
                <h6>Students</h6>
              </Btn>
              <Btn className="mobile-icon__card d-flex">
                <IoPeopleSharp size={25} />
                <h6>Students</h6>
              </Btn>
              <Btn className="mobile-icon__card d-flex">
                <IoPeopleSharp size={25} />
                <h6>Students</h6>
              </Btn>
              <Btn className="mobile-icon__card d-flex">
                <IoPeopleSharp size={25} />
                <h6>Students</h6>
              </Btn>
              <Btn className="mobile-icon__card d-flex">
                <IoPeopleSharp size={25} />
                <h6>Students</h6>
              </Btn>
              <Btn className="mobile-icon__card d-flex">
                <IoPeopleSharp size={25} />
                <h6>Students</h6>
              </Btn>

              <Btn className="mobile-icon__card">
                <IoPeopleSharp size={25} />
                <h6>Students</h6>
              </Btn>
            </ul>

            <div className="mobile-menu__list__footer d-flex flex-justify-content-space-between">
              <div className="d-flex menu-list__footer-left__mobile">
                <div>
                  <img src={Profile} alt="" className="rounded-pill" />
                </div>
                <div className="d-flex flex-direction-column flex-justify-content-center">
                  <h4>Luctus enim</h4>
                  <h4>Admin</h4>
                </div>
              </div>
              <div className="d-flex flex-align-item-center">
                <FaRightFromBracket size={20} color="black" />
              </div>
            </div>
          </div>
        </MenuTab>
        <StudentCreateModal />
      </div>
    </AuthenticatedLayout>
  );
}

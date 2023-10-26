import React from 'react';
import {useEffect} from 'react';
import '@/scss/components/table.scss';
import DateFormat from './DateFormat';
import {usePage} from '@inertiajs/react';
import {useContext} from 'react';
import AppContext from '../Store/app-context';
import Swal from 'sweetalert2';
import Loader from './Loader';

const Table = props => {
  //   const {students} = usePage ().props;
  const {studentsArr, setStudentsArr} = useContext (
    AppContext
  );


  useEffect(()=>{
    console.log(studentsArr)
  },[studentsArr])

  // console.log(date.toLocaleDateString('en-GB'))
  const deleteStudent = async (id, e) => {
    e.preventDefault ();

    const isConfirm = await Swal.fire ({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then (result => {
      return result.isConfirmed;
    });

    if (!isConfirm) {
      return;
    }

    // await setStudentsArr( studentsArr.filter((student)=>{
    //     student.id !== id
    // }) )
    await setStudentsArr (studentsArr.filter (student => student.id !== id));
  };

  return (
    <div className="table">

      <div className="table-container">

        <table className="table-text-color">
          {/* <caption>The last 14</caption> */}
          <thead>
            <tr className="table-header-text">
              <th>Date</th>
              <th>Profile</th>
              <th>Email</th>
              <th>Upload CV</th>
              <th>Download CV</th>
              <th>Control</th>
            </tr>
          </thead>

          <tbody>
            {studentsArr?.map ((student, i) => {
              let obRef = null;
              if (studentsArr.length === i + 1) {
                obRef = props.infiniteLoad;
                {
                  /* console.log(obRef) */
                }
              }

              return (
                <tr key={i} ref={obRef}>
                  <td data-cell="Date" className=" tx-nowrap">
                    <DateFormat date={student.created_at} />
                  </td>
                  <td data-cell="Profile">
                    <div className="profile">
                      <div className="image-container">
                        <img src={student.photo} alt="ggwpp" />
                      </div>
                      <div className="profile-text">
                        <span>{student.name}</span>
                        <span className="mild-text-color">
                          SID_0001
                        </span>
                      </div>
                    </div>
                  </td>
                  <td data-cell="Email">
                    <div className="email-text">
                      <span>{student.email}</span>
                      <span className="mild-text-color">{student.phone}</span>
                    </div>
                  </td>
                  <td data-cell="Upload CV">
                    <a href="" className="upload-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-cloud-upload"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                        />
                      </svg>
                      <span>
                        {/* {
                                student.cv_data === '' ? 'upload' : 'uploaded'
                            } */}
                        Upload
                      </span>
                    </a>
                  </td>
                  <td data-cell="Download CV">
                    <a
                      href=""
                      className={
                        student.cv_data == '' ? 'disable' : '' + 'download-btn'
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-cloud-download"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                        <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z" />
                      </svg>
                      <span>Download</span>
                    </a>
                  </td>
                  <td data-cell="Control">
                    <div className="control">
                      <a href="" className="edit-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fillRule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </a>
                      <a
                        href=""
                        onClick={e => {
                          deleteStudent (student.id, e);
                        }}
                        className="delete-btn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
            {props.isLoading
              ? <tr>
                  <td colSpan="6">
                    <Loader />
                  </td>
                </tr>
              : ''}


          </tbody>

          {/* data */}
          {/* data */}

        </table>
      </div>
    </div>
  );
};

export default Table;

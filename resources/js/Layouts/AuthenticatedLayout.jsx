import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import Index from '../Pages/Students/Index';
import '@/scss/Layouts/authenticated-layout.scss'

import {AppContextProvider} from '../Store/app-context';

export default function AuthenticatedLayout({user, header, children}) {
  return (
    <div className=" container w-100">
      <Sidebar />

      <div className="d-flex flex-direction-column right-side">
        <Navbar />
        {/* <Index /> */}
        <main className='main-container'>{children}</main>
      </div>
    </div>
  );
}

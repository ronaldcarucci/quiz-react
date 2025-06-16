import {Outlet} from "react-router";
import {Menubar} from "primereact/menubar";

const AppLayout = () => {
  return (
    <>
      <nav>
        <Menubar
          className='flex justify-center'
          start={
            <span className='text-2xl'>Quiz Game</span>
          }
        />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout;

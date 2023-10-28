import { Outlet } from 'react-router-dom';
import Header from '../header-component/header-component';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

import { Outlet } from 'react-router-dom';
import Header from '../common/header/header';

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

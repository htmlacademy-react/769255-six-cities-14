import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Login from './Content';

function LoginPage() {
  return (
    <>
      <Helmet>
        <title>6 cities. Login</title>
      </Helmet>
      <Header />
      <Login />
    </>
  );
}

export default LoginPage;

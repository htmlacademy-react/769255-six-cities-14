import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import NotFound from './Content';

function NotFoundPage(): React.ReactNode {
  return (
    <>
      <Helmet>
        <title>6 cities. Not found</title>
      </Helmet>
      <Header />
      <NotFound />
    </>
  );
}

export default NotFoundPage;

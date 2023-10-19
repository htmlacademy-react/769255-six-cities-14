import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Offer from './Content';

function OfferPage() {
  return (
    <>
      <Helmet>
        <title>6 cities. Offer</title>
      </Helmet>
      <Header />
      <Offer />
    </>
  );
}

export default OfferPage;

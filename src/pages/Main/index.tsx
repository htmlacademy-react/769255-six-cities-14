import { Helmet } from 'react-helmet-async';
import { Place } from '../../App';
import Header from '../../components/Header';
import Main from './Content';

type MainPageProps = {
  places: Place[];
};

function MainPage({ places }: MainPageProps): React.ReactNode {
  return (
    <>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header />
      <Main places={places} />
    </>
  );
}

export default MainPage;

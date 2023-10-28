import Main from '../../components/main-component/main-component';
import { TOffer } from '../../types/offer';

type MainPageProps = {
  offers: TOffer[];
};

function MainPage({ offers }: MainPageProps): React.ReactNode {
  return <Main offers={offers} />;
}

export default MainPage;

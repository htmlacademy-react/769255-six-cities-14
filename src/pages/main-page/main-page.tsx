import Main from '../../components/main/main';
import { TOffer } from '../../types/offer';

type MainPageProps = {
  offers: TOffer[];
};

function MainPage({ offers }: MainPageProps): React.ReactNode {
  return <Main offers={offers} />;
}

export default MainPage;

import { Place } from '../../App';
import Main from '../../components/Main/Main';

type MainPageProps = {
  places: Place[];
};

function MainPage({ places }: MainPageProps): React.ReactNode {
  return <Main places={places} />;
}

export default MainPage;

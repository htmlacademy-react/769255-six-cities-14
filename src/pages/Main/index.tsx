import { Place } from '../../App';
import Main from './Content';

type MainPageProps = {
  places: Place[];
};

function MainPage({ places }: MainPageProps): React.ReactNode {
  return <Main places={places} />;
}

export default MainPage;

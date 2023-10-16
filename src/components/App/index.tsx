import MainPage from '..//../pages/Main';

export type Place = {
  mark: string;
  image: string;
  price: number;
  priceText: string;
  bookmark?: boolean;
  rating?: number;
  name: string;
  type: string;
  id?: number;
};

type AppProps = {
  places: Place[];
};

function App({ places }: AppProps): JSX.Element {
  return <MainPage places={places} />;
}

export default App;

import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar'

export const App = () => {
  return (
     <Layout>
      <GlobalStyle />
      <Searchbar />
    </Layout>
  );
};

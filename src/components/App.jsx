import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar'

export const App = () => {
  // state = {
  //     searchImage: "Leaf",
  // }
  return (
     <Layout>
      <GlobalStyle />
      <Searchbar />        
    </Layout>
  );
};

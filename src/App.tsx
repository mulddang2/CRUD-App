import GlobalStyles from './GlobalStyles ';
import styled from 'styled-components';
import AddList from './components/AddList';
import ViewList from './components/ViewList';

const Layout = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;

  h1 {
    margin: 1.5rem 0;
    line-height: 1.2;

    @media (min-width: 600px) {
      font-size: 2.25rem;
    }
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;
    margin-right: -1rem;

  > div {
    padding: 0 1rem;
  }
`;

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <h1>CRUD App with Hooks</h1>
        <ListContainer>
          <AddList />
          <ViewList />
        </ListContainer>
      </Layout>
    </>
  );
};

export default App;

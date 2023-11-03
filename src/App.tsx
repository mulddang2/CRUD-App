import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { selectedItemIdState } from './atom';
import GlobalStyles from './styles/GlobalStyles ';
import AddListForm from './components/AddListForm';
import EditListForm from './components/EditListForm';
import PlayListTable from './components/PlayListTable';

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
  margin-bottom: 1rem;

  > div {
    padding: 0 1rem;
  }
`;

const App = (): JSX.Element => {
  const selectedItemId = useRecoilValue(selectedItemIdState);

  return (
    <>
      <GlobalStyles />
      <Layout>
        <h1>My 2023 Music Playlist</h1>
        <ListContainer>
          {selectedItemId === null ? (
            <>
              <AddListForm />
            </>
          ) : (
            <EditListForm />
          )}
          <PlayListTable />
        </ListContainer>
      </Layout>
    </>
  );
};

export default App;

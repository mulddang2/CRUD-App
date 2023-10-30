import GlobalStyles from './GlobalStyles ';
import styled from 'styled-components';
import AddListForm from './components/AddListForm';
import PlayListTable from './components/PlayListTable';
import { useState } from 'react';
import { IBasePlayList, IPlayList } from './interface';
import EditListForm from './components/EditListForm';

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
  // NOTE: Data
  const playListData: Array<IPlayList> = [
    {
      id: 1,
      title: `Pfitzner: Sieben Lieder, Op. 2 - II. Ist der Himmel darum im Lenz so blau(with Matthias Goerne) 7개의 가곡집 중 '왜 봄에 하늘은 그렇게 푸르게 빛나는 걸까요?`,
      artist: '조성진',
    },
    {
      id: 2,
      title: 'Chopin: Scherzo No. 1 in B Minor, Op. 20',
      artist: '임동혁',
    },
    {
      id: 3,
      title: 'William Bolcom: Graceful Ghost Rag',
      artist: '양인모',
    },
  ];

  const initialFormState: IPlayList = { title: '', artist: '', id: null };

  const [lists, setLists] = useState(playListData);
  const [editList, setEditList] = useState(initialFormState);
  const [editing, setEdit] = useState(false);

  const addList = (newList: IBasePlayList) => {
    const id = lists.length + 1;
    setLists([...lists, { ...newList, id }]);
  };

  const onCurrentList = (list: IPlayList) => {
    setEditList(list);
    setEdit(true);
  };

  const onUpdateList = (id: number, newList: IPlayList) => {
    setEdit(false);
    setLists(lists.map((i) => (i.id === id ? newList : i)));
  };

  const onDeleteList = (currentList: IPlayList) => {
    setLists(lists.filter((i) => i.id !== currentList.id));
  };

  return (
    <>
      <GlobalStyles />
      <Layout>
        <h1>CRUD App with Hooks</h1>
        <ListContainer>
          {editing ? (
            <EditListForm
              onUpdateList={onUpdateList}
              setEdit={setEdit}
              currentList={editList}
            />
          ) : (
            <>
              <AddListForm onAddList={addList} />
            </>
          )}
          <PlayListTable
            playLists={lists}
            onEdit={onCurrentList}
            onDelete={onDeleteList}
          />
        </ListContainer>
      </Layout>
    </>
  );
};

export default App;

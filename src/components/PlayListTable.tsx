import { BsFillEraserFill, BsPencilFill } from 'react-icons/bs';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { listState, selectedItemIdState } from '../atom';

const ViewListContainer = styled.div`
  flex-basis: 100%;

  @media (min-width: 1000px) {
    flex: 1;
    margin-bottom: 0;
  }

  h2 {
    font-size: 1.5rem;
    margin: 1.5rem 0;

    @media (min-width: 600px) {
      font-size: 2rem;
    }
  }
`;

const Table = styled.table`
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;

  th,
  td {
    text-align: left;
    padding: 0.5rem;
    width: 33.3%;
  }

  tr {
    border-bottom: 1px solid #dedede;
  }

  thead th {
    border-bottom: 2px solid #dedede;
  }

  button {
    display: inline-block;
    background: transparent;
    border: 1px solid #cdcdcd;
    color: #4e4e4e;
    margin-right: 0.5rem;

    &:hover {
      color: #4e4e4e;
      border: 1px solid #818181;
    }
  }
`;

const PlayListTable: React.FunctionComponent = () => {
  const [list, setList] = useRecoilState(listState);
  const setSelectedItemId = useSetRecoilState(selectedItemIdState);

  const onSelectItem = (id: number) => {
    setSelectedItemId(id);
  };

  const onDeleteItem = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <ViewListContainer>
      <h2>View My 2023 Music Playlist</h2>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? (
            list.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.artist}</td>
                <td className='actions'>
                  <button onClick={() => onSelectItem(item.id)}>
                    <BsPencilFill />
                  </button>
                  <button onClick={() => onDeleteItem(item.id)}>
                    <BsFillEraserFill />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No List</td>
            </tr>
          )}
        </tbody>
      </Table>
    </ViewListContainer>
  );
};

export default PlayListTable;

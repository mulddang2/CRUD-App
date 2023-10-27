import styled from 'styled-components';
import { BsPencilFill } from 'react-icons/bs';
import { BsFillEraserFill } from 'react-icons/bs';

const ViewListContainer = styled.div`
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

const ViewList = () => {
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
          <tr>
            <td>
              Shostakovich: Symphony No.5 In D Minor, Op.47 - 2.
              AllegrettoShostakovich: Symphony No.5 In D Minor, Op.47 - 2.
              AllegrettoShostakovich: Symphony No.5 In D Minor, Op.47 - 2.
              AllegrettoShostakovich: Symphony No.5 In D Minor, Op.47 - 2.
              AllegrettoShostakovich: Symphony No.5 In D Minor, Op.47 - 2.
              Allegretto
            </td>
            <td>
              로열 필하모닉 오케스트라 및 Vladimir Ashkenazy • Shostakovich
            </td>
            <td className='actions'>
              <button>
                <BsPencilFill />
              </button>
              <button>
                <BsFillEraserFill />
              </button>
            </td>
          </tr>
          <tr>
            <td>당신은 참...</td>
            <td>성시경</td>
            <td className='actions'>
              <button>
                <BsPencilFill />
              </button>
              <button>
                <BsFillEraserFill />
              </button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td className='actions'>
              <button>
                <BsPencilFill />
              </button>
              <button>
                <BsFillEraserFill />
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </ViewListContainer>
  );
};

export default ViewList;

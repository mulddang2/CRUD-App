import styled from 'styled-components';

const Label = styled.label`
  font-weight: 500;
  max-width: 100%;
  display: block;
  margin: 1rem 0 0.5rem;
`;

const AddListContainer = styled.div`

  flex: 1;

  h2 {
    font-size: 1.5rem;
    margin: 1.5rem 0;

    @media (min-width: 600px) {
      font-size: 2rem;
    }
  }

  button {
    border: 1px solid #7F19E6;
    background-color: #7F19E6;
    color: #ffffff;
    font-size: 1rem;

    &:hover {
      border: 1px solid #5702ab;
    background-color: #5702ab;

    }
  }

  [type=text]:focus {
    border: 1px solid #7F19E6;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 6px #d5abff
  }
`;

const AddList = () => {
  return (
    <AddListContainer>
      <div>
        <h2>Add My 2023 Music Playlist</h2>
        <form>
          <Label>Title</Label>
          <input type='text' />
          <Label>Artist</Label>
          <input type='text' />
          <button>Add new music</button>
        </form>
      </div>
    </AddListContainer>
  );
};

export default AddList;

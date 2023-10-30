import styled from 'styled-components';
import { useState } from 'react';
import { IBasePlayList } from '../interface';

interface IProps {
  onAddList: (list: IBasePlayList) => void;
}

export const Label = styled.label`
  font-weight: 500;
  max-width: 100%;
  display: block;
  margin: 1rem 0 0.5rem;
`;

export const AddListContainer = styled.div`
  flex: 1;

  h2 {
    font-size: 1.5rem;
    margin: 1.5rem 0;

    @media (min-width: 600px) {
      font-size: 2rem;
    }
  }

  button {
    border: 1px solid #7f19e6;
    background-color: #7f19e6;
    color: #ffffff;
    font-size: 1rem;

    &:hover {
      border: 1px solid #5702ab;
      background-color: #5702ab;
    }
  }

  [type='text']:focus {
    border: 1px solid #7f19e6;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 6px #d5abff;
  }
`;

const initialFormState = { title: '', artist: '' };

const AddListForm: React.FunctionComponent<IProps> = (props) => {
  const [list, setList] = useState(initialFormState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setList({ ...list, [name]: value });
  };

  return (
    <AddListContainer>
      <h2>Add My 2023 Music Playlist</h2>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (!list.title || !list.artist)
            return alert('모든 칸을 입력해주세요😀 (한 글자 이상)');
          props.onAddList(list);
          setList(initialFormState);
        }}
      >
        <Label>Title</Label>
        <input
          type='text'
          name='title'
          value={list.title}
          onChange={handleInputChange}
        />
        <Label>Artist</Label>
        <input
          type='text'
          name='artist'
          value={list.artist}
          onChange={handleInputChange}
        />
        <button>Add new music</button>
      </form>
    </AddListContainer>
  );
};

export default AddListForm;

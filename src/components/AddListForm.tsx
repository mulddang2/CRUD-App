import styled from 'styled-components';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { listState } from '../atom';

export const Label = styled.label`
  font-weight: 500;
  max-width: 100%;
  display: block;
  margin: 1rem 0 0.5rem;
`;

export const AddListContainer = styled.div`
  flex-basis: 100%;
  margin-bottom: 1rem;

  @media (min-width: 1000px) {
    flex: 1;
  }

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

const initialFormState: NewItem = { title: '', artist: '' };

type NewItem = {
  title: string;
  artist: string;
};

const AddListForm: React.FunctionComponent = () => {
  const [list, setList] = useRecoilState(listState);
  const [newItem, setNewItem] = useState<NewItem>(initialFormState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value.trimStart() });
  };

  const onAddItem = () => {
    if (!newItem.title || !newItem.artist) {
      alert('모든 칸을 입력해주세요😀 (한 글자 이상)');
      return;
    }

    setList([
      ...list,
      {
        id: list.length + 1,
        title: newItem.title.trim(),
        artist: newItem.artist.trim(),
      },
    ]);

    setNewItem(initialFormState);
  };

  return (
    <AddListContainer>
      <h2>Add Playlist</h2>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          onAddItem();
        }}
      >
        <Label>Title</Label>
        <input
          type='text'
          name='title'
          value={newItem.title}
          onChange={handleInputChange}
        />
        <Label>Artist</Label>
        <input
          type='text'
          name='artist'
          value={newItem.artist}
          onChange={handleInputChange}
        />
        <button type='submit'>Add new music</button>
      </form>
    </AddListContainer>
  );
};

export default AddListForm;

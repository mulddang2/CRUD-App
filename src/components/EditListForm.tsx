import styled from 'styled-components';
import { AddListContainer, Label } from './AddListForm';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { listState, selectedItemIdState } from '../atom';
import { PlayListItem } from '../types/playListItem';

const EditListContainer = styled(AddListContainer)`
  button.disable {
    border: 1px solid #cdcdcd;
    color: #4e4e4e;
    background-color: #fff;
    margin-left: 0.5rem;
  }
`;

const initialFormState = { id: -1, title: '', artist: '' };

const EditListForm = () => {
  const [list, setList] = useRecoilState(listState);
  const [selectedItemId, setSelectedItemId] =
    useRecoilState(selectedItemIdState);
  const [selectedPlayListItem, setSelectedPlayListItem] =
    useState<PlayListItem>(initialFormState);

  useEffect(() => {
    const foundItem = list.filter((item) => item.id === selectedItemId);
    if (foundItem.length === 0) {
      return;
    }
    setSelectedPlayListItem(foundItem[0]);
  }, [list, selectedItemId]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSelectedPlayListItem({ ...selectedPlayListItem, [name]: value });
  };

  const onUpdateItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setList(
      list.map((item) =>
        item.id === selectedItemId
          ? {
              id: selectedPlayListItem.id,
              title: selectedPlayListItem.title.trim(),
              artist: selectedPlayListItem.artist.trim(),
            }
          : item
      )
    );
    setSelectedItemId(null);
  };

  return (
    <EditListContainer>
      <h2>Edit</h2>
      <form onSubmit={onUpdateItem}>
        <Label>Title</Label>
        <input
          type='text'
          name='title'
          value={selectedPlayListItem?.title ?? ''}
          onChange={onInputChange}
        ></input>
        <Label>Artist</Label>
        <input
          type='text'
          name='artist'
          value={selectedPlayListItem?.artist ?? ''}
          onChange={onInputChange}
        ></input>
        <button type='submit'>Update</button>
        <button
          type='button'
          className='disable'
          onClick={() => setSelectedItemId(null)}
        >
          Cancel
        </button>
      </form>
    </EditListContainer>
  );
};

export default EditListForm;

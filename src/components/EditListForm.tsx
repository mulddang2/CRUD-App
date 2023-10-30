import styled from 'styled-components';
import { IPlayList } from '../interface';
import { AddListContainer, Label } from './AddListForm';
import { useEffect, useState } from 'react';

interface IProps {
  currentList: IPlayList;
  onUpdateList: (id: number, list: IPlayList) => void;
  setEdit: (bool: boolean) => void;
}

const EditListContainer = styled(AddListContainer)`
  button.disable {
    border: 1px solid #cdcdcd;
    color: #4e4e4e;
    background-color: #fff;
    margin-left: 0.5rem;
  }
`;

const EditListForm = (props: IProps) => {
  const [playList, setPlayList] = useState(props.currentList);

  useEffect(() => {
    setPlayList(props.currentList);
  }, [props]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPlayList({ ...playList, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!playList.title || !playList.artist) {
      console.log("업로드실패")
      alert('한 글자 이상 입력해주세요')
      return false;
    }
    props.onUpdateList(playList.id!, playList);
  }

  return (
    <EditListContainer>
      <h2>Edit</h2>
      <form onSubmit={onSubmit}>
        <Label>Title</Label>
        <input type='text'
          name='title'
          value={playList.title}
          onChange={onInputChange}
        ></input>
        <Label>Artist</Label>
        <input type='text'
          name='artist'
          value={playList.artist}
          onChange={onInputChange}
        ></input>
        <button>Update</button>
        <button className='disable' onClick={() => props.setEdit(false)}>Cancel</button>
      </form>
    </EditListContainer>
  );
};

export default EditListForm;

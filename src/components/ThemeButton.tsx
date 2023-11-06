import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { isDarkModeState } from '../store/theme';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const Button = styled.button`
  border-radius: 50%;
  padding: 0;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  margin-left: 1rem;
  background: none;
  transition: 0.3s ease-in-out;
  transform: ${({ theme }) => theme.rotate};

  &:hover {
    background-color: ${({ theme }) => theme.iconHoverBgColor};
  }
`;

const ThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkModeState);

  return (
    <Button onClick={() => setIsDarkMode(!isDarkMode)}>
      {isDarkMode ? (
        <BsFillMoonFill size='23' color='#fff' />
      ) : (
        <BsFillSunFill size='23' />
      )}
    </Button>
  );
};

export default ThemeButton;

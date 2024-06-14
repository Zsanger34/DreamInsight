import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CommonButton = styled(Link)`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.success};
  }
`;

export default CommonButton;

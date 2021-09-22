import styled from 'styled-components'

export const ButtonStyled = styled.button`
  background-color: #f4bc00;
  border-radius: ${(props) => (props.large ? '5px' : '3px')};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  color: #fff;
  padding: 4px 8px;
  font-size: ${(props) => (props.large ? '15px' : '12px')};
  height: ${(props) => props.large && '45px'};
  width: ${(props) => props.large && '200px'};
  max-width: 100%;
  transition: background 0.2s;
  position: relative;
  z-index: 1;
  cursor: pointer;
  margin-bottom: ${(props) => (props.large ? '150px' : '0px')};

  @media (min-width: 512px) {
    padding: 4px 15px;
  }

  @media (min-width: 768px) {
    padding: 10px 30px;
    font-size: ${(props) => (props.large ? '24px' : '16px')};
    height: ${(props) => props.large && '72px'};
    width: ${(props) => props.large && '320px'};
  }

  &::before {
    border-radius: ${(props) => (props.large ? '5px' : '3px')};
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgb(204, 51, 50);
    background: linear-gradient(rgba(244, 188, 0, 1), rgba(255, 126, 0, 1));
    z-index: -1;
    transition: opacity 0.2s linear;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`

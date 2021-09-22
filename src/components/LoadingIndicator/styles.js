import styled from 'styled-components'

export const Background = styled.section`
  background: rgb(204, 51, 50);
  background: linear-gradient(
    120deg,
    rgba(204, 51, 50, 1) 50%,
    rgba(234, 141, 51, 1) 90%,
    rgba(255, 204, 51, 1) 100%
  );
  height: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }
`

export const Image = styled.img`
  max-width: 100px;
  width: 100%;
  padding-right: 33px;
`

export const LoadingIcon = styled.img`
  margin-top: 10px;
`

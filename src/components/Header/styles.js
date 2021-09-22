import styled from 'styled-components'
import { Row } from 'react-flexbox-grid'

export const Container = styled(Row)`
  padding: 25px 20px;

  @media (min-width: 768px) {
    padding: 40px 0px;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: #fff;
    font-size: 12px;
    margin: 2px 8px 0px;
    text-decoration: none;
    transition: border-bottom 0.2s;
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid #fff;
    }

    @media (min-width: 768px) {
      font-size: 16px;
      margin: 2px 15px 0px;
    }
  }
`

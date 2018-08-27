import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Title = styled.a`
  font-weight: var(--bold);
  font-size: 3rem;
  color: #192a34;
`

const NavBarTitle = () => (
  <Link to='/'>
    <Title />
  </Link>
)

export default NavBarTitle

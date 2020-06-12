import React from "react"
import styled from "styled-components"

const ActualHeader = styled.header`
  background-color: #212121;
  padding: 3.2rem;
`

const Title = styled.h1`
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 0.8px;
  font-size: 3.2rem;
  color: #fafafa;
`

const Header = ({ siteTitle }) => (
  <ActualHeader>
    <Title>{siteTitle}</Title>
  </ActualHeader>
)

export default Header

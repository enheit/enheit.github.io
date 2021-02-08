import styled from 'styled-components';
import typography from '../../utils/typography';

export const $Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${typography.rhythm(2)}
`

export const $Title = styled.h1`
  margin: 0;
`

export const $Button = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background: none;
  display: flex;
`
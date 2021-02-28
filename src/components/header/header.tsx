import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode';
import React, { FC } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import typography from '../../utils/typography';
import { AuthorThumbnail } from '../author-thumbnail/author-thumbnail';
import { $Button, $Header } from './header.styles';

const ICON_SIZE = typography.scale(1).fontSize;

export const Header: FC = props => {
  const { isDark, toggleDark } = useStyledDarkMode();

  const handleThemeToggle = () => {
    toggleDark(!isDark)
  }

  return (
    <$Header>
      <AuthorThumbnail />

      <$Button onClick={handleThemeToggle}>
        {isDark ? <FaMoon color="#fff" size={ICON_SIZE} /> : <FaSun color="orange" size={ICON_SIZE} />}
      </$Button>
    </$Header>
  )
}
import React, { FC, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import typography from '../../utils/typography';
import { AuthorThumbnail } from '../author-thumbnail/author-thumbnail';
import { $Button, $Header } from './header.styles';

const ICON_SIZE = typography.scale(1).fontSize;

export const Header: FC = props => {
  const [isLight, setIsLight] = useState(true)

  const handleThemeToggle = () => {
    setIsLight(!isLight)
  }

  return (
    <$Header>
      {/* <$Title><FaArrowLeft /></$Title> */}
      {/* <$Title><$Link to="/">enheit</$Link></$Title> */}
      <AuthorThumbnail />

      <$Button onClick={handleThemeToggle}>
        {isLight ? <FaSun color="orange" size={ICON_SIZE} /> : <FaMoon size={ICON_SIZE} />}
      </$Button>
    </$Header>
  )
}
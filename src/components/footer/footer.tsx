import React, { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { $Contacts, $ExternalLink, $FaEnvelope, $FaGithub, $FaTwitter, $Footer } from './footer.styles';

export const Footer: FC = props => {
  const theme = useContext(ThemeContext);

  return (
    <$Footer>
      <$Contacts>
          <$ExternalLink href="https://twitter.com/enheit">
            <$FaTwitter />
          </$ExternalLink>
          
          <$ExternalLink href="https://github.com/enheit">
            <$FaGithub color={theme.isDark ? 'white' : 'black'} />
          </$ExternalLink>
          
          <a href="mailto: roman.mahotskyi@gmail.com">
            <$FaEnvelope />
          </a>
        </$Contacts>
    </$Footer>
  )
}
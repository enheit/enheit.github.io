import React, { FC } from 'react'
import { $Link } from '../../styles/Link'
import { $Contacts, $FaEnvelope, $FaGithub, $FaTwitter, $Footer } from './footer.styles'

export const Footer: FC = props => {
  return (
    <$Footer>
      {/* <small>❤  {format(new Date(), "yyyy")}</small> */}

      <$Contacts>
          <$Link to="https://twitter.com/enheit">
            <$FaTwitter />
          </$Link>
          
          <$Link to="https://github.com/enheit">
            <$FaGithub />
          </$Link>
          
          <a href="mailto: roman.mahotskyi@gmail.com">
            <$FaEnvelope />
          </a>
        </$Contacts>
    </$Footer>
  )
}
import { FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';
import typography from '../../utils/typography';

export const $Footer = styled.footer`
  display: flex;
  justify-content: center;
`

export const $FaEnvelope = styled(FaEnvelope)`
  color: #f5cc62;
`

export const $FaGithub = styled(FaGithub)`
  color: #171515;
  margin-right: ${typography.rhythm(1)};
`

export const $FaTwitter = styled(FaTwitter)`
  margin-right: ${typography.rhythm(1)};
  color: #1DA1F2;
`

export const $ExternalLink = styled.a`
  text-decoration: none;
  font-weight: bold;
`

export const $Contacts = styled.p`
  margin: 0;
  margin-top: ${typography.rhythm(0.1)}
`

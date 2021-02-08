import { FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';
import typography from '../../utils/typography';

export const $FaEnvelope = styled(FaEnvelope)`
  color: #f5cc62;
`

export const $FaGithub = styled(FaGithub)`
  color: #171515;
  margin-right: ${typography.rhythm(0.2)};
`

export const $FaTwitter = styled(FaTwitter)`
  margin-right: ${typography.rhythm(0.2)};
  color: #1DA1F2;
`

export const $Contacts = styled.p`
  margin: 0;
  margin-top: ${typography.rhythm(0.1)};
`


export const $Thumbnail = styled.div`
  display: flex;
  align-items: center;
`

export const $Title = styled.h4`
  margin: 0;
`

export const $Avatar = styled.img`
  display: flex;
  border-radius: 50%;
  width: ${typography.rhythm(2)};
  height: ${typography.rhythm(2)};
  margin: 0;
  margin-right: ${typography.rhythm(0.5)};
`

export const $Info = styled.div`

`
import { FaArrowLeft } from 'react-icons/fa';
import styled from 'styled-components';
import { $Link } from '../../styles/Link';
import typography from '../../utils/typography';

export const $Title = styled.h1`
  font-family: "Biryani";
  font-weight: 900;
  font-size: ${typography.scale(2).fontSize};
  margin: 0;
`;

export const $Content = styled.section`
  margin: ${typography.rhythm(1.5)} 0;
  text-align: justify;
`

export const $AuthorThumbnailContainer = styled.div`
  margin-bottom: ${typography.rhythm(1)};
`;

export const $BackLink = styled($Link)`
  display: flex;
  align-items: center;
  margin-bottom: ${typography.rhythm(1)}
`

export const $FaArrowLeft = styled(FaArrowLeft)`
  margin-right: ${typography.rhythm(0.5)}
`
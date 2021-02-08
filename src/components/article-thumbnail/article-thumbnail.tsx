import React, { FC } from 'react';
import { $Link } from '../../styles/Link';
import { ArticleInfo } from '../article-info/article-info';
import { $Spoiler, $Thumbnail, $Title } from './article-thumbnail.styles';
import { ArticleThumbnailProps } from './article-thumbnail.types';

export const ArticleThumbnail: FC<ArticleThumbnailProps> = props => {
  return (
    <$Thumbnail>
      <$Link to={props.slug}>
        <$Title>{props.title}</$Title>
      </$Link>

      <ArticleInfo date={props.date} timeToRead={props.timeToRead} />
      
      <$Spoiler>{props.spoiler}</$Spoiler>
    </$Thumbnail>
  )
}
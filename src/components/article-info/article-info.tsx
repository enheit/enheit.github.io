import React, { FC } from 'react';
import { $Info } from './article-info.styles';
import { ArticleInfoProps } from './article-info.types';

export const ArticleInfo: FC<ArticleInfoProps> = props => {
  return (
    <$Info>{props.date} / {props.timeToRead} min read</$Info>
  )
}

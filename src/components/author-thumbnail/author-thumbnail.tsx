import React, { FC } from "react";
import avatar from "../../images/avatar.jpg";
import { $Link } from "../../styles/Link";
import { $Avatar, $Thumbnail, $Title } from "./author-thumbnail.styles";

export const AuthorThumbnail: FC = (props) => {
  return (
    <$Link to="/">
      <$Thumbnail>
        <$Avatar src={avatar} />

        <$Title>Blog by Roman Mahotskyi</$Title>
      </$Thumbnail>
    </$Link>
  );
};

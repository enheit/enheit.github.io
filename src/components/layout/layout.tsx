import React, { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { GlobalStyle } from '../../styles/global';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { $Container } from './layout.styles';

export const Layout: FC = (props) => {
  const theme = useContext(ThemeContext);
  
  return (
    <$Container>
      <GlobalStyle theme={theme} />
      <Header />
      {props.children}
      <Footer />
    </$Container>
  );
};

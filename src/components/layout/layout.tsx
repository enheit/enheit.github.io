import React, { FC } from 'react'
import { Footer } from '../footer/footer'
import { Header } from '../header/header'
import { $Container } from './layout.styles'

export const Layout: FC = props => {
  return (
    <$Container>
      <Header />
      {props.children}
      <Footer />
    </$Container>
  )
}
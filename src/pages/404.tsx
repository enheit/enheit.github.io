import React from "react"
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import styled from 'styled-components'
import { Layout } from '../components/layout/layout'
import typography from '../utils/typography'

const $FaHeart = styled(FaHeart)`
  color: red;
`

const $FaRegHeart = styled(FaRegHeart)`
  color: red;
  margin: 0 ${typography.rhythm(0.2)};
`

const $Container = styled.div`
  margin: ${typography.rhythm(1)} 0;
`

const NotFoundPage = () => {
  return (
    <Layout>
      <$Container>
        <$FaHeart />
        <$FaRegHeart />
        <$FaHeart />
      </$Container>
    </Layout>
  )
}

export default NotFoundPage

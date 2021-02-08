import "@fontsource/biryani/900.css"
import { graphql, PageProps } from 'gatsby'
import React, { FC, useMemo } from "react"
import styled from 'styled-components'
import { ArticleThumbnail } from '../components/article-thumbnail/article-thumbnail'
import { Layout } from '../components/layout/layout'
import typography from '../utils/typography'

const $AuthorContainer = styled.div`
  margin-bottom: ${typography.rhythm(2)};
`

interface IndexPageQueryDatum {
  node: {
    id: string
    frontmatter: {
      date: string
      title: string
      spoiler: string
    }
    fields: {
      slug: string
    }
    html: string
    timeToRead: number
  }
}

interface IndexPageDataType {
  allMarkdownRemark: {
    edges: IndexPageQueryDatum[]
  }
}

const IndexPage: FC<PageProps<IndexPageDataType>> = props => {

  const postCount = useMemo(() => props.data.allMarkdownRemark.edges.length, props.data.allMarkdownRemark.edges)

  const renderItem = (item: IndexPageQueryDatum) => {
    return (
      <ArticleThumbnail
        slug={item.node.fields.slug}
        key={item.node.id}
        date={item.node.frontmatter.date}
        title={item.node.frontmatter.title}
        spoiler={item.node.frontmatter.spoiler}
        timeToRead={item.node.timeToRead}
      />
    )
  }

  return (
    <Layout>
      {/* <$AuthorContainer>
        <AuthorThumbnail />
      </$AuthorContainer>
       */}

      
      {postCount > 0 
        ? props.data.allMarkdownRemark.edges.map(renderItem)
        : <p>There are no blog posts</p>
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            date(formatString: "d MMM, YYYY")
            title
            spoiler
          }
          fields {
            slug
          }
          timeToRead
          html
          id
        }
      }
    }
  }
`

export default IndexPage

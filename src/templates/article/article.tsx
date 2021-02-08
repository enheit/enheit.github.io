import { graphql, PageProps } from "gatsby";
import React, { FC } from 'react';
import { ArticleInfo } from '../../components/article-info/article-info';
import { Layout } from '../../components/layout/layout';
import { $BackLink, $Content, $FaArrowLeft, $Title } from './article.styles';
import { ArticleQueryDatum } from './article.types';


const Article: FC<PageProps<ArticleQueryDatum>> = props => {
  const post = props.data.markdownRemark

  return (
    <Layout>

      <article>
        <header>
          <$Title>{props.data.markdownRemark.frontmatter.title}</$Title>

          <ArticleInfo
            date={props.data.markdownRemark.frontmatter.date} 
            timeToRead={props.data.markdownRemark.timeToRead}
          />
        </header>

        <$Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>


      <$BackLink to="/"><$FaArrowLeft /> Back to home</$BackLink>

      {/* <$AuthorThumbnailContainer>
        <AuthorThumbnail />
      </$AuthorThumbnailContainer> */}
    </Layout>

  )
}

export default Article

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "d MMM, YYYY")
      }
      timeToRead
    }
  }
`
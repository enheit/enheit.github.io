export interface ArticleQueryDatum {
  markdownRemark: {
    id: string
    frontmatter: {
      date: string
      title: string
    }
    html: string
    timeToRead: number
  }
}
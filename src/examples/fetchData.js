import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)

  return <div>
    {/* <h1>Name: {data.site.siteMetadata.person.name}</h1> */}
    <h2>site stitle is: {title}</h2>
    </div>
}

export default FetchData

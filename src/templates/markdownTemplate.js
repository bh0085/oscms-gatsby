// import React from 'react';
// import { StaticQuery, graphql } from 'gatsby';
//
// export default props => (
//   <StaticQuery
//     query = { graphql`
//       query($path: String!) {
//         markdownRemark(frontmatter: { path: { eq: $path } }) {
//           html
//           frontmatter {
//             path
//           }
//         }
//       }
//     `}
//     render = { data => {
//       console.log(data);
//       return (
//         <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} { ...props }></div>
//       );
//     }}
//   />
// );

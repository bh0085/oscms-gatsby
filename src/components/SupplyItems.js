import React from 'react'
import { Link } from "gatsby"
import { RichText, Date } from 'prismic-reactjs'
import { linkResolver } from '../utils/linkResolver'


// A summary of the Blog Post
const ItemSummary = ({ supplyItem }) => {
  
  
  return (
    <div className="post-summary" key={ supplyItem.id } >
      <h2>
        {/* We render a link to a particular post using the linkResolver for the url and its title */}
        <Link to={ linkResolver(supplyItem._meta) }>
            { RichText.asText(supplyItem.item_title) }
        </Link>
      </h2>
      <div>
          { RichText.asText(supplyItem.the_problem)}
      </div>
    </div>
  );
}

export default ({ supplyItems }) => {
  if(!supplyItems) return null;
  
  return(
    <div className="blog-posts container">
      {supplyItems.map((supplyItem) => {
        return <ItemSummary supplyItem={ supplyItem.node } key={ supplyItem.node._meta.id }/>
      })}
    </div>
  )
}

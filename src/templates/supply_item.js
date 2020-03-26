import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import Layout from '../components/layouts' 

// Query for the custom content type in Prismic
/*
GG: quick python script to list all fields from custom type JSON (from e.g. https://open-source-medical-supplies.prismic.io/masks/medical_supply_item_detailed.json/ => JSON Editor)

import json
a = JSON HERE
dat = json.loads(a)
items = [x for x in dat['Main']]
for item in items:
    print(item)
*/
export const query = graphql`
query SupplyItemQuery($id: String) {
  prismic{
    allMedical_supply_item_detaileds(id: $id){
      edges{
        node{
          _meta{
            id
            type
          }
          item_title
          item_image
          the_problem
          current_us_resources
          worst_case_expectation
          why_well_need_it
          why_we_wont_need_it
          engineering_requirements
          assembly_fabrication_requirements
          projects_resources
          reviewed_designs_intro
          reviewed_designs_item {
            project_name
            date_reviewed
            reviewed_by
            note
          }
          not_recommended_design_item {
            project_name
            reviewed_by
            reason
          }
        }
      }
    }
  }
}
`
// Display the title, date, and content of the Item 
const ItemBody = ({ supplyItem }) => {
  return (
    <div>
      <div className="container post-header">
        <div className="back">
          <Link to="/">back to list</Link>
        </div>
        {/* Render the edit button */}
        <h1 data-wio-id={ supplyItem._meta.id }>
          { RichText.asText(supplyItem.item_title) }
        </h1>
        <h2>The Problem</h2>
        <div>
            { RichText.asText(supplyItem.the_problem)}
        </div>
        <h2>Current Resources</h2>
        <div>
            { RichText.asText(supplyItem.current_us_resources)}
        </div>
        <img src={supplyItem.item_image.url} />
      </div>
    </div>
  );
}

export default (props) => {
  // Define the Item content returned from Prismic
  const doc = props.data.prismic.allMedical_supply_item_detaileds.edges.slice(0,1).pop();

  if(!doc) return null;

  return(
    <Layout>
      <ItemBody supplyItem={ doc.node } />
    </Layout>
  )
}

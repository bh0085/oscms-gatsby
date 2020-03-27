import React from 'react'
import { RichText } from 'prismic-reactjs'
import { graphql } from 'gatsby';
import Layout from '../components/layouts'
import SupplyItems from '../components/SupplyItems'

export const query = graphql`
{
  prismic{
    allMedical_supply_item_detaileds{
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


const Header = () => {
  return (
    <div>
    <div><h2>Summary of COVID19 Situation & Supply Needs
    </h2>
    <h3>The Problem</h3>
    <h3>Treating Covid 1</h3>
    <h3>A Note About Safety and Liability</h3>
    <h3>Good Samaritan Laws in the United States</h3>
    </div>
    <div>
    
    <h2>Feedback</h2>
    </div><div>
    <h2>Design, Manufacturing, & Engineering Projects</h2>
    <h3>Supplies</h3>
    <h4>PPE</h4>
    <h4>Medical Supplies</h4>
    <h3>Devices</h3>
    </div>
    <div>
    <div>
      <h2>FAQ</h2>
    <h4>[TODO] There's nothing here!</h4>
    </div>
    </div>
    </div>
    )
    
  }
  
  
  export default ({ data }) => {
    const items = data.prismic.allMedical_supply_item_detaileds.edges;
    
    
    return(
      <Layout>
      <Header />
      <SupplyItems supplyItems={ items }/>
      </Layout>
      )
    }
    
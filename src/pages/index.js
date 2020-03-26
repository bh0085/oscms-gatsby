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
            <h1>OSCMS</h1>
            <div>Mission statement.</div>
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

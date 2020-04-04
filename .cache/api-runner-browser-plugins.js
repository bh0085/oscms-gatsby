module.exports = [{
      plugin: require('../node_modules/gatsby-source-prismic-graphql/gatsby-browser.js'),
      options: {"plugins":[],"repositoryName":"open-source-medical-supplies","path":"/preview","previews":true,"pages":[{"type":"Medical_supply_item_detailed","match":"/item/:id","path":"/item-preview","component":"/Users/joshleslie/repos/oscms-gatsby/src/templates/supply_item.js"}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/favicon.png"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

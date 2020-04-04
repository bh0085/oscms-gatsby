const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-source-prismic-graphql-components-preview-page-js": hot(preferDefault(require("/Users/joshleslie/repos/oscms-gatsby/node_modules/gatsby-source-prismic-graphql/components/PreviewPage.js"))),
  "component---src-templates-supply-item-js": hot(preferDefault(require("/Users/joshleslie/repos/oscms-gatsby/src/templates/supply_item.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/joshleslie/repos/oscms-gatsby/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/joshleslie/repos/oscms-gatsby/src/pages/index.js")))
}


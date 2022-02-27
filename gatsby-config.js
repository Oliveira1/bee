/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    /* Your site config here */
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {name: 'images', path: `${__dirname}/static`}
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ],
}

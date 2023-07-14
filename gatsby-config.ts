import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Vladimir Perfilev, Software Developer`,
        siteUrl: `https://persoff68.com`
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
        resolve: 'gatsby-plugin-manifest',
        options: {
            "icon": `${__dirname}/static/images/favicon.png`
        }
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: "images",
            path: `${__dirname}/static/images`,
        },
        __key: "images"
    }, {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: "files",
            path: `${__dirname}/static/files`,
        },
        __key: "files"
    }]
};

export default config;

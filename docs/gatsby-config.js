const themeOptions = require('gatsby-theme-apollo-docs/theme-options');

module.exports = {
  pathPrefix: '/docs/react',
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: 'Apollo Client',
        description: 'A guide to using the Apollo GraphQL Client with React',
        githubRepo: 'apollographql/apollo-client',
        defaultVersion: 3.0,
        /*
        versions: {
          2.6: 'version-2.6',
          2.5: 'version-2.5',
          2.4: 'version-2.4',
        },
        */
        checkLinksOptions: {
          exceptions: [
            '/api/core/',
            '/v2.4/api/core/',
            '/v2.5/api/core/',
            '/v2.6/api/core/',
            '/v3.0/api/core/'
          ],
        },
        typescriptApiBox: {
          data: require('./docs.json'),
          filepathPrefix: 'src/',
        },
        sidebarCategories: {
          null: ['index', 'why-apollo', 'integrations', 'hooks-migration'],
          Essentials: [
            'essentials/get-started',
            'essentials/queries',
            'essentials/mutations',
            'essentials/local-state',
          ],
          Features: [
            'features/error-handling',
            'features/pagination',
            'features/optimistic-ui',
            'features/server-side-rendering',
            'features/developer-tooling',
          ],
          Advanced: [
            'advanced/subscriptions',
            'advanced/network-layer',
            'advanced/caching',
            'advanced/fragments',
          ],
          Recipes: [
            'recipes/authentication',
            'recipes/testing',
            'recipes/client-schema-mocking',
            'recipes/static-typing',
            'recipes/performance',
            'recipes/react-native',
            'recipes/babel',
            'recipes/webpack',
            'recipes/meteor',
            'recipes/recompose',
          ],
          'Apollo Client API': [
            'api/core',
            'api/react-hooks',
            'api/react-testing',
            'api/react-ssr',
            'api/react-components',
            'api/react-hoc'
          ],
        },
      },
    },
  ],
};

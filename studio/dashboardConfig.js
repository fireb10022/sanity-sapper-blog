export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e24195bf6ce4c807789b730',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-2isavfs8',
                  apiId: 'ed692fec-8e0f-4993-9d51-8a5f4573addd'
                },
                {
                  buildHookId: '5e24195cf9bf74a2bf6a0ab3',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-64uistuo',
                  apiId: '988c05e3-9f48-4122-8b4d-9443412819fb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fireb10022/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-64uistuo.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

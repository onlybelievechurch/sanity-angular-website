export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'onlybelievechurch/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
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
                  buildHookId: '62e30aaf08a2960098f67997',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-4wsz6k3s',
                  apiId: '03b52a62-09f6-40f6-8354-c66e482db497'
                },
                {
                  buildHookId: '62e30ab092136d005a7cfa26',
                  title: 'Website',
                  name: 'sanity-angular-website-web-2mnmzei4',
                  apiId: '86a36411-d673-498f-a5df-5d76d59cdfcf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/onlybelievechurch/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-2mnmzei4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Architecture',
      link: {
        type: 'doc',
        id: 'architecture/mds',
      },
      collapsed: true,
      items: [
      ],
      },    
      {
        type: 'category',
        label: 'Resource Guides',
        link: {
          type: 'doc',
          id: 'resource_guides/intro',
        },
        collapsed: false,
        items: [
          'resource_guides/a_style_guides/sql_style_guide',
        ]
        },
/*     {
      type: 'category',
      label: 'Business Process',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'business_process/intro',
      ],
    }, */
    {
      type: 'category',
      label: 'Data Modeling',
      link: {
        type: 'doc',
        id: 'data_modeling/b_kimball_resources/kimball_intro',

      },
      collapsed: true,
      items: [        
        'data_modeling/b_kimball_resources/kimball_subsystem',
      ],
    },            
  ],
};


module.exports = sidebars;

### CDP Project Documentation 

This repo hosts the code for the [CDP Documentation Center](https://cdp-ucsc.github.io/doc) site, and is intended to be 
the documentation center for the CDP Project. The site is based on the [Docusaurus](https://docusaurus.io/), framework which is an open source project developed in house at Facebook. The CDP Documentation Center website, is deployed to [Github Pages](https://pages.github.com/) and is publically accessible. 

The team is currently evaluating the viablitly of the product, in the hopes of landing on a solution that will allow building a robust workflow around documentation and communication, while leveraging git as a source of truth.

This site is deployed to GitHub through the use of GitHub actions, when a Pull Request (PR) is merged to main, The site will be re-deployed to include the changes from the PR.

#### Docusaurus Installation Instructions

1. [Download](https://nodejs.org/en/download) and install Node.js

2. Create a site (sample or cdp)
   * Create your own site to test and edit
     ```
     npx create-docusaurus@latest my-website classic
     ```
   * Clone the Github CDP Doc site
  
     This will create a new "doc" directory in your current directory to house the contents of the repository
     ```
     git clone https://github.com/cdp-ucsc/doc.git
     ```
3. Launch the site locally for viewing (sample or cdp)
   * Launch the sample site
     ```
     cd my-website
     npx docusaurus start
     ```
   * Launch the CDP site locally
     ```
     cd \doc\cdp-docs
     npm install [this command only needs to be run once to load dependencies]
     npx docusaurus start
     ```
     The vulnerability warnings encountered when running `npm install` can be safely ignored. 
     
     ![npm-install-warnings](https://user-images.githubusercontent.com/103523675/234999670-ecd06290-202b-4123-bd94-da1d607e8a39.png)
     
     These are false positives due to the audit differences of building an app vs generating static content with react([more info](https://github.com/facebook/create-react-app/issues/11174)).
    
    Note: While the site is running locally, any changes in the page source files are reflected immediately on the website
#### Creating Pages and Documents
* Docusaurus uses markdown to create its webpages
  ```
  # Title 1
  ## Title 2
  
  This is a markdown page
  ```
* **/src/pages** contains individual pages hosted at http://localhost:3000/mypage
* **/docs** contains markdown pages that are organized into sections, presented via the sidebar

  See [Create a Document](https://tutorial.docusaurus.io/docs/tutorial-basics/create-a-document)

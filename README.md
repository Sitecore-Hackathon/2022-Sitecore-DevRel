![Hackathon Logo](docs/images/hackathon.png?raw=true "Hackathon Logo")
# Sitecore Hackathon 2022

## Team name
Sitecore DevRel

## Category
1. Build an e-commerce Minimum Viable Product to sell community t-shirts
   * The submissino must include the following technologies:
     * Sitecore XM - Rendering host (.net or jss)
     * Sitecore Send
     * Sitecore Order Cloud
   * Authentication is not required
   * Payment processing is not required

## Description
We built an instance of Next.js Commerce. On the backend we used Sitecore OrderCloud. We used Sitecore XM as a content repository. This provides similar functionality to many headless CMS solutions. We also integrated Sitecore Send functionality.

## Video link
⟹ [Video link](https://www.youtube.com/watch?v=95Mw6sOHykk&t=248s)

## Pre-requisites and Dependencies

- Dependencies:
  - npm 8.3.1 
  - yarn 1.22.17
  - nodejs 16.14.0  


## Installation instructions

1. Clone the repository: `git clone https://github.com/Sitecore-Hackathon/2022-Sitecore-DevRel.git`.
2. Copy sitecore license.xml to `/docker/License` folder
3. Run `Start-Hackathon.ps1` - Note: this tends to launch the browser too soon, you'll have to check the docker status
4. Ensure all containers are healthy
5. Deserialise Sitecore content by running the following commands from the root of the repo
   * `dotnet tool restore`
   * `dotnet sitecore login --cm https://cm.sitecoredevrel.localhost/ --auth https://id.sitecoredevrel.localhost/ --allow-write true`
      - Credentials are admin/b
   * `dotnet sitecore ser push --publish`

6. From the command line, navigate to the `./src/project/NextStore/rendering` folder.
7. Run:
   * `npm i`
   * `yarn install`
   * `yarn build`
   * `yarn dev`
8. In a web browser, navigate to [http://localhost3000](http://localhost3000).

### Configuration

Configuration is done in `/src/Project/NextStore/rendering/site/.env`. We've preconfigured it for you so there's nothing extra to do.


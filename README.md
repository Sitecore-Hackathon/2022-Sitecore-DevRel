![Hackathon Logo](docs/images/hackathon.png?raw=true "Hackathon Logo")
# Sitecore Hackathon 2022

- MUST READ: **[Submission requirements](SUBMISSION_REQUIREMENTS.md)**
- [Entry form template](ENTRYFORM.md)
- [Starter kit instructions](STARTERKIT_INSTRUCTIONS.md)
  

### ⟹ [Insert your documentation here](ENTRYFORM.md) <<

# Hackathon Submission Entry form

## Team name
⟹ Sitecore DevRel

## Category
⟹  

1. Build an e-commerce Minimum Viable Product to sell community t-shirts
   * The submissino must include the following technologies:
     * Sitecore XM - Rendering host (.net or jss)
     * Sitecore Send
     * Sitecore Order Cloud
   * Authentication is not required
   * Payment processing is not required

## Description
⟹ Write a clear description of your hackathon entry.  

  - Module Purpose
  - What problem was solved (if any)
    - How does this module solve it

_You can alternately paste a [link here](#docs) to a document within this repo containing the description._

## Video link
⟹ Provide a video highlighing your Hackathon module submission and provide a link to the video. You can use any video hosting, file share or even upload the video to this repository. _Just remember to update the link below_

⟹ [Replace this Video link](#video-link)



## Pre-requisites and Dependencies

⟹ Does your module rely on other Sitecore modules or frameworks?

- Dependencies:
  - npm 8.3.1 
  - yarn 1.22.17
  - nodejs 16.14.0  
- Or other modules that must be installed
- Or services that must be enabled/configured

_Remove this subsection if your entry does not have any prerequisites other than Sitecore_

## Installation instructions
⟹ Write a short clear step-wise instruction on how to install your module.  

> _A simple well-described installation process is required to win the Hackathon._  
> Feel free to use any of the following tools/formats as part of the installation:
> - Sitecore Package files
> - Docker image builds
> - Sitecore CLI
> - msbuild
> - npm / yarn
> 
> _Do not use_
> - TDS
> - Unicorn
 
f. ex. 

1. Clone the repository: `git clone https://github.com/Sitecore-Hackathon/2022-Sitecore-DevRel.git`.
2. Copy sitecore license.xml to `/docker/License` folder
3. Run `Start-Hackathon.ps1`
4. Ensure all containers are healthy
5. Deserialise Sitecore content by running the following commands from the root of the project
  - `dotnet tool restore`
  - `dotnet sitecore login --cm https://cm.sitecoredevrel.localhost/ --auth https://id.sitecoredevrel.localhost/ --allow-write true`
  - `dotnet sitecore ser push --publish`

6. From the command line, navigate to the `/src/project/NextStore/rendering` folder.
7. Run:
   * `npm i`
   * `yarn install`
   * `yarn build`
   * `yarn dev`
4. In a web browser, navigate to [http://localhost3000](http://localhost3000).
5. ...
6. profit

### Configuration
⟹ If there are any custom configuration that has to be set manually then remember to add all details here.

_Remove this subsection if your entry does not require any configuration that is not fully covered in the installation instructions already_

Configuration is done in `/src/Project/NextStore/rendering/site/.env`. We've preconfigured it for you so there's nothing extra to do.

## Usage instructions
⟹ Provide documentation about your module, how do the users use your module, where are things located, what do the icons mean, are there any secret shortcuts etc.

Include screenshots where necessary. You can add images to the `./images` folder and then link to them from your documentation:

![Hackathon Logo](docs/images/hackathon.png?raw=true "Hackathon Logo")

You can embed images of different formats too:

![Deal With It](docs/images/deal-with-it.gif?raw=true "Deal With It")

And you can embed external images too:

![Random](https://thiscatdoesnotexist.com/)

## Comments
If you'd like to make additional comments that is important for your module entry.

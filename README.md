# Ogham in 3d

<img src="ux/responsive-desing.png" height="300" title="Screenshot of website on different devices">

The aim of this website is to explore digital archiving, and create a repository for a local community digital archaeology project. A group of volunteers, with the help of Dublin Institute of Advanced Studies and The Discovery Programme conducted research on ancient antiquities of the Dingle Peninsula, starting with starting with ogham stones. They gathered text, photos and created 3d scans of the stones, using Structure from Motion, a technique to create a 3-D structure of a scene from a set of 2-D images. This website is the beginning of a digital archive of the research carried out.

View deployed site here: https://orlabr.github.io/ogham-mapping-project/index.html


---

## Table of Contents:

1. [Project outline](#project-outline)
2. [User Experience](#user-experience)
3. [Design](#design)
4. [Features](#features)
5. [Technologies](#technologies)
6. [Testing](#testing) 
7. [Deployment](#deployment)
8. [Future Development](#future-development)
9. [Credits](#credits)
10. [Acknowledgements](#Acknowledgements)


***
<img src="ux/oghamstone.jpg" height="200" alt="Screenshot of 3d model of ogham stone">

## Project Outline

This website has a dual purpose. It was created as a digital archive to showcase some of the Ogham Stones the project has been looking into, their location, information about the stone, and incorporate the 3d mapped scan. It also deploys all my course learning to date with the Code Institute. The elements I used in creating this website, are all practical techniques I have been learning,  working through the Interactive Front End Development modules of the Full Stack Developer Bootcamp

----

## User Experience

### Research:
Before starting my UX research for this project, I did some research on creating ‘Interactive Maps’ and found lots of great websites and articles, (links and further reading below).
> - Making Maps -  is a blog about diy cartography. Based on the  book Making Maps 3nd edition. It has some excellent blog posts about creating maps.
> - Victor Gerard Temprano of Mapster has written some great articles too, on creating Interactive Maps. One particular article describes the user in detail, and this influenced my user story and design...“Don't assume your users will know how to use an online map...You need to consider how your grandmother (no offense to techie grandmas!) might react if she landed on the map. Where would she look, what would she click and be interested in?”
> - Robert E. Roth has written many papers on creating interactive maps. I particularly liked his work explaining The Three U’s of Interface Success. A successful interactive map in practice is contingent upon three components: the user, its utility, and its usability.

><img src="ux/interactive-map.png" alt="diagram of interactive map pyramid" width="175">



---

### User Stories:

The website is a digital public archive of the research carried out by volunteers of ‘Corca Dhuibhne 3d. It holds some of  the research carried out by volunteers, as well as a map of the stones that have been scanned.

There is already a website, run by the [Dublin Institute of Advanced Studies](https://ogham.celt.dias.ie/menu.php?lang=en) of research they have conducted across Ireland, with archival information, and a map of ancient antiquities they have 3d scanned. There is also a website created for the ancient antiquities that have been scanned called [Corca Dhuibhne 3d](http://www.corcadhuibhne3d.ie/). However both of the websites are more academic based, and not particularly user friendly. 

The Ogham in 3d map on the DIAS website is quite annoying to use, if you are looking for stones particular to the Dingle Peninsula. It doesn’t focus on the stones, provides links to other pages but with no backlinks to the map. And you constantly have to zoom in on the map, to get to the stones, in order to pick one in particular. The Corca Dhuibhne 3d website is particular to the pilot project, but does not contain a map, and is also not user friendly, proving too much academic style information to the average viewer. This website I have designed, is harnessing the information from both the existing websites, but in a more modern, responsive style, that will appeal to participants of the project, but also to a generic user. It is an experiment in presenting blocks of information in a minimal way.

<img src="ux/ogham-mock-up.jpg" alt="ogham website mockup" width="500">

_For the Generic User:_

I designed this website with a particular type of user. The user is aged 60+, holidaymaker or retired, with a keen interest in local history, and while visiting the Dingle Peninsula, would like to know more about local sites. They have limited digital knowledge and experience, but have researched and prepared for their holiday. They have read about the Dingle Peninsula's wealth of history and ancient antiquities, came across this website and have studied and bookmarked it to view when they reach their destination. They want to see some ogham stones. They have looked and marvelled at the 3d scans of the stones and have picked which ones they want to visit, which they can perfectly locate on the map. They used the website in two ways:
 - research of local sites of interest on the Dingle Peninsula before visiting - desktop or tablet viewing. 
 - Being about to see the location of the stones, while accessing information, images and access to the 3d models
 - Actual location of the stones while outdoors on the move - mobile view

_For the Developer:_
            
As a developer, I wanted to create a fully responsive website with a clean modern take on digital archiving. As a history fan I regularly visit online digital archives, but find a lot of them usually feel heavy and clunky, too academic focused, and are not mobile friendly.
* This website would help me practice my new coding skills, develop logic and understanding of responsive interactive front end development.
* Development of coding skills using HTML, CSS and Javascript in unison, and in different ways to create a website that is simple, extremely user friendly, with easy navigation, and yet capable of providing large bodies of information.
* I decided to create a website that incorporated a map as opposed to a single page website which consisted of just the map. My plan was to incorporate as many simple yet effective elements in a website, that could make it interesting but self contained.
 <img src="ux/ogham-map-mock-up.jpg" alt="Ogham map mock up" width="200"> 

---

## Design

#### Strategy & Scope:
The website is designed to have a minimal and clean interface. With most of the information contained in just one scrollable page. I selected 10 stones to work with. If I was using more stones, I probably would move to a slightly different format, perhaps using more pages, but for the purpose of this project, I kept it to a minimal amount. I decided against using modals, and used an accordion, because firstly on mobile pop ups can be annoying, and secondly to try test out the accordian/hidden information concept, with Javascript DOM manipulation. The information needed to be on the same page. The website uses a single index.html file to host most of the information, using the Bootstrap Framework to ensure mobile first fully responsive design.

_Style:_
 - Design - minimalist, clean design
 - Fonts - I used Google Fonts to personalize the text. Most sites when discussing ‘Celtic’ antiquities use a ‘celtic style font, however I don’t think it looks great on a web page, particularly mobile. I chose ‘Aramath’ and ‘Forum’, as they are stylised but clean and readably fonts.
 - Color Scheme - The color scheme is simple, and kept to a minimum to ensure full eligibility. Off white background, dark text with headings and buttons a shade of brown. These browns are  based on colouring from old medieval maps.
 - Map markers -  I played around with map marker types, and decided to stick with generic map markers rather than stylized markers with an icon. This kept within my design remit of simplicity and ease of use. I personalized the markers colours using [Icons8](https://icons8.com/).

  <img src="ux/map-theme.jpg" alt="colour scheme for website design" width="600">  

_Photos and 3D Models:_

The Corca Dhuibhne 3d models were created by volunteers, of which I was one, using an educational copy of Agisoft donated by the Discovery Programme. They are in the public domain, but are copyright to Corca Dhuibhne 3d group. I have full permission to use the information, photos, and 3 models on my website, which I have listed as educational use. I have written a tutorial about using Agisoft, you can read it on my blog [here](http://fitefuaite.com/digital-artefact/agisoft-photoscan/). The Corca Dhuibhne 3d website is currently under review, and I am hoping to incorporate some of the elements of this website and in particular develop a map into the website.
    

#### Structure, Skeleton & Surface:
Keeping the pyramid of interface success, 'user - utility- usability', and my user story in mind, simplicity and ease of use were the most important design elements, when creating the wireframe and mock up. Keeping images to a minimum, with simple explanations of how to use the site, with a very deliberate colour scheme and simple fonts.

_Wireframing:_

I created a wireframe for this website using Balsamiq, but found the original design, using a bootstrap collapsible sidebar did not work well on mobile. The design only worked in landscape view on a mobile, and to me this meant it was not fully responsive. So I changed the layout to have a collapsible accordion bootstrap style beneath the map.
 - PDF of <img src="https://github.com/OrlaBr/ogham-mapping-project/blob/master/ux/wire-frame-mapping-project.pdf" alt="wireframe of mapping project">

<img src="ux/ogham-mock-up.jpg" height="300" alt="website mock-up">

_Detailed mockup:_

After I had started the project, and realised the fault of the wireframe design, I edited my design using Canva, to create a more detailed mock up of the website. This enabled me to test the details such as fonts, imagery etc, in more detail.
 - PDF of <img src="https://github.com/OrlaBr/ogham-mapping-project/blob/master/ux/ogham-in-3d.pdf" alt="ogham mapping mock up">



[Back to Top](#table-of-contents)


---

## Features 


#### Existing Features
 - *Javascript and DOM manipulation* - using javascript and DOM manipulation to create a responsive and interactive website.
 - *Google Maps API* - incorporate a fully functioning Google Map with locations of ogham stones. Personalized infowindow with image and link to further information in the bootstrap accordion.
 - *Embedded iframes* - css styled iframes embedded online platform 'Sketchfab'
 - *Contact Form* - Simple contact form to connect to the project for information
 
 ----

## Technologies
 - Programming languages used: HTML5, CSS3 & Javascript 
 - Frameworks used: <a href="https://getbootstrap.com/"> Bootstrap</a> 
 - Editors used:
	* <a href="https://repl.it/@orlabr">Repl</a> ~ I use Repl to write and test code snippets. 
	* <a href="https://gitpod.com">Gitpod</a> ~ I used Gitpod to build the full website. 
 - Hosting: <a href="https://github.com">Github</a> ~ Github is where I am hosting my deployed website
 - Frameworks ~ <a href="https://getbootstrap.com/">Bootstrap</a> 
 - API ~ <a href="https://developers.google.com/maps/documentation">Google Maps Platform</a> 
 - iFrames ~ using <a href="https://sketchfab.com/"></a>Sketchfab embedded iframe, manipulated and styled through CSS

*Other web applications used:*

- <a href="https://balsamiq.com/">Balsamiq<a/> - to create initial wireframe
- <a href="https://www.canva.com/">Canva<a/> - to create a detailed mock-up
- <a href="https://www.adobe.com/">Adobe Photoshop<a/> - to edit the photographs
- <a href="https://fonts.google.com/">Google Fonts<a/> - stylesheet linked to customize fonts
- <a href="https://fontawesome.com/">Font Awesome<a/> - stylesheet linked to customize icons
- <a href="https://www.emailjs.com//">EmailJS<a/> - create usable contact form

<img src="ux/emailjs.png" height="200" alt="Screenshot of emailjs setup">

---

## Building	

#### Website Build
The main body of the website was built using Gitpod. but I used Repl heavily throughout the build, for 2 reasons. It helped me create and play with elements and sections before incorporating them in the main build on Gitpod. Once I had played with a section and developed it to suit my needs, I then rebuilt it in Gitpod and added the styling. 
Using Repl in this way is also helping me build my own personal library of code snippets and hacks that I can use in different projects in the future. Being new to Gitpod, it also helped me overcome my fear of commits and undoing, by knowing my code was safely stored elsewhere.

#### Sections Build
I had started the website build based on the wireframe, when I decided to change structural elements. This was because of the lack of responsiveness of the toggled side panel. Following Victor Gerard Temprano's advice on not presuming your user knows how to use the map, decided to incorporate a section on how to use the map as a side panel and put the main body of the content in the bootstrap accordion.

<img src="ux/how-to-use.jpg" height="200" alt="Screenshot of how to use section on the website">

_Google Maps_
 - I used a Google API key in developer mode to start with, using tutorials from the Code Institute and [YouTube](https://www.youtube.com/) notably Travesty Media, Envato Tuts and Google DDevelopers. The Javascript is stored in the script.js file
 - From research, not all the stones were already located on a public Google Maps, or on official Archaeology map records, so I decided not to pull the information from online sources, but input it all myself. I tried a few different ways of inputting the content, either as a string, or array, but decided on a simple div in the end, because there was not a huge amount of content, it was easier to input the material myself. I could then style the div using classes and CSS.
 - I had some issues with linking the button in the infowindow with the bootstrap accordian. I tried several different ways to connect. I changed the content to a string and tried calling it. I tried jquery to call a class to open the accordion. However keeping my user story in mind, I didnt want the screen jumping about too much and I wanted to link the the information, but I didn't want the accordion to actually open, it is better to give the user the option to open. Otherwise it would take too many clicks to return to the map, and possibly frustrate the user. Eventually I found the solution from [Digiplek](https://www.digiplek.nl/open-jquery-ui-panel-via-an-external-link-url-with-hash.html#1)
  ```var hash = window.location.hash;
        var anchor = $('a[href$="'+hash+'"]');
        if (anchor.length > 0){
        anchor.click();
        }
 ```

_Bootstrap Accordion:_

I used a bootstrap accordion to hold the main body of content. I used tutorials from [YouTube](https://www.youtube.com/), notably The Net Ninja & Quentin Watt. This uses Javascript, to help the smooth scrolling action. This is stored in stones.js file.

_Sketchfab iFrames:_

I decided to embed the 3d models of the Ogham Stones as they are a major feature of the project, and it is really interesting to be able to see the stones in such detail. The scanning process picks up much more detail than the human eye.
When I embedded the iframes, I got several console log errors because the styling was incorporated within the iframe element from Sketchfab, but it is not an accepted element. So I removed the styling from the iframes, and altered them using CSS instead.
I also used a variant of the model that was pre-loaded and user controlled to try cut down on the pressure of the devices capabilities.

 _Contact Form:_

 My original design didn't have a contact form on it, but I decided to incorporate a small one, firstly because I wanted to practice building a working contact form. Also, as the Corca Dhuibhne 3d project doesnt have a very visible social media presence, contact the project would have to be through email.
 I used the Code Institute tutorial to build the contact form, using Bootstrap, HTML, CSS and EMail JS. The Javascript is stored in the sendEmail.js file.

_Date Stamp:_

So many websites fail to update their copyright notice in their footer. A small, but noticable factor when trying to validate the authority of a site. I decided to incorporate an automated javascript date. This javascript code is help in script tags in the bottom of the body, even though the date coding itself is in the footer
        
        ```var year = new Date().getFullYear().toString();
        document.getElementById("year").innerHTML = year;
        ```


_About Page:_

My wireframe did not contain an 'About Page', although I did want to build one. One of the reasons for this is because I have a lot of external links. Being a community project, and an archive, it is necessary to fully credit all organisations involved. Originally I had external links on the landing page for the Músaeum Chorca Dhuibhne, Dublin Institute for Advanced Studies and The Discovery Programme. I decided to remove these links from the landing page, as it is probably not good practice to put external links on the landing page. Instead I decided to remove those links to a 'Further Reading' section on the about page, and add a button to the landing page instead.



## Testing
_Dev Tools_:
    These tools were used throughout the project build.
* Google Chrome DevTools ~ used throughout the project for testing and debugging
* Firefox Developer Tools ~ used throughout the project for testing and debugging

_Code Validation:_
    I used a few online validators and formatters to check the code at regular intervals throughout the build.
* <a href="https://validator.w3.org/">W3C HTML Validator</a> 
* <a href="https://validator.w3.org/">W3C CSS Validator</a> 
* <a href="https://jshint.com/">JSHint</a> - Javascript validator
* <a href="https://esprima.org/demo/validate.html">Esprima</a> - Javascript syntax validator
* <a href="https://chrome.google.com/webstore/detail/chromelens/idikgljglpfilbhaboonnpnnincjhjkd?hl=en">Chrome Lens</a> - Accessibility validator

_Notes_ 
        - error on Google Fonts link (double checked that it is the prescribed Google Fonts format of link)
        - Warning on Text type - this is the Ogham Script, as it doesnt recognise this type of writing

_Elements testing_

| Feature      	| Elements                             	| Tested 	| Working 	|
|--------------	|--------------------------------------	|--------	|---------	|
| Navbar       	| section link, html links, responsive 	| ✔      	| ✔       	|
| HTML Links   	| internal, external links             	| ✔      	| ✔       	|
| Map          	| infowindow, centering, links         	| ✔      	| ✔       	|
| Accordion    	| toggle, responsive                   	| ✔      	| ✔       	|
| Sketchfab    	| Showing, Load on user request        	| ✔      	| ✔       	|
| Modal        	| toggle, responsive                   	| ✔      	| ✔       	|
| Contact form 	| required fields, send                	| ✔      	| ✔       	|

<img src="ux/browser-testing.jpg" height="200" alt="Samples of cross browser testing">

| Testing   | Cross-browser/ cross-device           |
|---------	|--------------------------------------	|
| Browser   |Chrome, Firefox, Safari, Opera         |
| Device    | Mobile, Tablet, Desktop               |
| Systems   | iOS, Android, Linux                   |

---

## Deployment
This website was developed using Gitpod and hosted using Github, generated from a template created by the Code Institute, and then deployed directly from the master branch. 
Regular changes were made and all updates were then committed to the master branch. The first or home page is called index.html, as servers expect index.html to be the 
name of the main file of a website folder. An assets folder was then created, to include the CSS stylesheet, Javascript files and an sub folder with images used on the site. 
I proceeded to work on sections, committing as I went. I created a UX folder to hold any wireframes, designs or other research material.

#### Changes made: 
Originally I wanted the accordion to be inside a toggles side panel, but after building it, I discovered it just didn't work in mobile view, so I adapted my design 
so I fixed the navbar to the top. This caused issues with the first section, so I had to adjust the margin and paddings to fit. The 'about' and 'contact' 
Throughout the design and implementation of the website I kept code snippets in Repl and notes in Google Docs. I then cross referenced the Read Me page and the website, 
working through the sections, eg UX, UI, testing, validation, correcting errors when I came across them. 

1. Make sure you have these installed
   - [node.js](http://nodejs.org/)
   - [git](http://git-scm.com/)
2. Clone this repository into your local machine using the terminal (mac) or Gitbash (PC) `$ git clone CLONEURL`
3. CD to the folder `cd FOLDERNAME`
4. Run `$ npm install` to install the project dependencies
5. Run `$ npm start` to start live preview server

#### Post Deployment Snag List_

I had a number of small bugs to fix after deployment.
- Image paths - image paths differ on Gitpod and Github. I had to modify the paths of the images to display properly - corrected
- About Page - social media favicons in the footer were not working as font awesome link was not in header - added
- Overflow of text on viewing on tablet at the map section - added overflow scroll option
- Missing metatags in header - added
- Spelling errors - fixed
- Console log errors:
    - Too many Active WebGL contexts. Oldest context will be lost - In the testing phase I was constantly refreshing the page, this created too many calls to the WebGl from the 3d scans. When I tested usage in real life of the average user, this was not an issue. 
    - Favicon missing  - A favicon is a small, iconic image that represents a website, in the address bar of a web browser. Although it seems insignificant, its a small but importnt feature, that users have come to expect to see. It adds an air of authenticity and authority to a website. I tried to use falvicon generators, but they didnt work well. So, I created my own using Photoshop, added it to ux folder, and added links to the head section in my html pages. Its good practice to use favicons, and I wanted to add it to my set of web development toolbox. 
            <link rel="icon" type="image/png" href="ux/favicon.png"> suggested from [W3Schools](https://www.w3.org/2005/10/howto-favicon)
    - Chrome 'SameSite' cookies error - New Chrome cookie policy. Added suggested Javascript code from [Google Chrome Labs](https://github.com/GoogleChromeLabs/samesite-examples), but it didnt seem to work. I dont feel too bad about this error as it is such a new development, and if Google have this error showing, I think I'm ok for now.
            document.cookie = 'same-site-cookie=foo; SameSite=Lax';
            document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';
     
I had 1 big bug to fix after deployment - Sketchfab models not displaying properly - the appear black.
- I had regularly checked the website during build using Chrome and Firefox dev tools. 
The 3d models worked perfectly, when checking the responsive mode, different devices and models. However these were all still on a desktop computer.
When I deployed the site and checked the models on actual physical devices, phones, tablets, in some cases the 3d models didn't display properly. 
Although Sketchfab is a very powerful platform and fully responsive, there can be some issues with ram capacity and different browsers on different makes and ages of mobiles.
I looked into working with Sketchfab API if that would work better, I changed the 3d models so they were embedded pre-loaded, but there was nothing I can do if people are viewing
the models on a phone that isn't capable of rendering 3d images. On some browsers the WebGL is automatically disabled too. I was very disappointed as it defeated my goal of making digital archives including 3d materials
renderable on a mobile scale. I thought about removing the 3d models altogether, but they worked so well within the site, I decided to keep them in the site but add an information
modal, a disclaimer of sorts, explaining why the models might appear black. This actually fitted in with my user story, of an older, less 'tech savvy person' using the website.
This person is also less likely to regularly upgrade their phones and software. They also have a tendency to be more patient, and not expect immediate answers coming from a pre-digital age.
So I decided to retain the 3d models within the website.

---
## Future Development
I really enjoyed working on this project, testing out my new knowledge of Javascript. Due to time contraints I didnt get to add all the features I would have liked, but am adding them here for furture reference, so I can update the website aber assessment
 - Name Generator - If you look at the original mockup you'll see one of the nav menus is 'Name Generator'. I wanted to create a javascript generator that would allow you to add your name and it would be translated to Ogham. There are several already out there ([Ogh.am](https://ogh.am/) is my favourite). I just didnt have the time. I would love to try generate the letters onto a background image of a stone, so you could see what your name looked like on the stone.
 - Weather App - I had drafted a weather api to include in the website. This would have a fixed loction, the Dingle Peninsula, so people visiting or planning to visit, could see what the weather was like at that moment. Althought the app was working I had too many small errors showing up in the javascript, and decided not to include it the day before the assessment deadline. After the assessment I will definately incorporate it. Open Weather Maps, do a historial data map api, which could be interesting to look into considering the historic nature of the site.
 - Timeline of the Dingle Peninsula. Who doesnt love a good timeline! I absolutely love the interactive map of the [Witcher](https://www.witchernetflix.com/en-gb) TV series, my dream would be to be able to design interactive maps like that. 
 

---
## Credits 
 - Permission granted from Corca Dhuibhne 3d to use material ~ text, images and 3d models.
 - Text collated from online sources - Ogham in 3D, Discovery Programme, Corca Dhuibhne 3d, National Archaeology Records.
 - Sketchfab models - free for educational use. Copyright Corca Dhuibhne 3d
 - Background map image copyright free from <https://pixabay.com/>.
 - Social media icons copyright free from <https://fontawesome.com/>.
 - Map markers  - free from <https://icons8.com/icons>
 - [![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/) Orla Breslin 2020
 
---
## Acknowledgements

_Interactive Maps:_
 - [Making Maps](https://makingmaps.net/) - Blog based on the research and books of The book 'Making Maps' by John Krygier and Denis Wood for the Do It Yourself (DIY) cartographer 
 - [Victor Gerard Temprano](https://www.codementor.io/@victorgerardtemprano/principles-of-interactive-map-design-gpelaseu2) - article on the principles of Interactive Map Design
 - [Robert E. Roth](https://www.researchgate.net/profile/Robert_Roth8) - teaches and researches interactive mapping. He has co-written some interesting papers on interactive mapping design.


_Coding Tutorials:_
- [Code Institute](https://codeinstitute.net) course materials
- [YouTube Tutorials](https://www.youtube.com) eg mmtuts, Traversy Media, Academind, Envoto
- [Stack Overflow](https://stackoverflow.com/) coding issues with map marker links to bootstrap accordion
- [Free Code Camp ](https://www.freecodecamp.org/) coding tutorials and problem solving


<img src="ux/ogham-stones.png" height="200" title="collage of 3 ogham stones">

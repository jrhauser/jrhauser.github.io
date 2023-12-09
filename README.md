# JRHAUSER


#### Description:

    My final project is a portfolio website to show my progress as a developer and advertise myself to the world. It is made using [React](https://reactjs.org/),
    [Tailwind](https://tailwindcss.com/), and [HeadlessUI](https://headlessui.com/). Learning React was tricky, but the background in html and bootstrap from the course allowed
    me to adapt quickly to JSX and using a CSS library like tailwind. I wanted the website to do a couple of things
        1. Look Nice
        2. Be a single page, with navigation
        3. Work on any screen size
        4. Be responsive
        5. Display my resume, contact information, and coding projects


        In order to achieve this I used [create-react-app](https://github.com/facebook/create-react-app) to create a Single Page Application as shown in the [react docs](https://reactjs.org/docs/create-a-new-react-app.html). Next I created a layout.js to hold my content. All of my content ended up being in this file, which is not good practice, but the tab panels seem to need to be in the same file as the Tab group, for each tab to work (there is probably a way to do this with props but react is hard). After that I used this [website](https://uicolors.app/create) to create a color pallete. Tailwind uses a system where a color has a name and it has a lightness value from 50-900. I used the same color (the generator website called it limed-spruce so I did too) with different values for each element of my site. I started by importing this color into tailwind css following [the documentation](https://tailwindcss.com/docs/customizing-colors). Then I created a container to hold all of my content and set it to the width and height of the viewport to act as a background. Then I created an inner div to serve as what I think is called the canvas, but it has margins and is a lighter color than the background.

        I then used the headlessUI [tabs](https://headlessui.com/react/tabs)to work as my navigation. I used the vertical tabs option and placed them to the left side of my canvas container. The tabs come completely unstyled so all of the styling was achieved using tailwind. I changed the color of the selected tab and gave it a border. At this point I created four buttons (tabs?) one for my landing page, one for my contact information, one for my resume, and one for projects. Then I used the tab panel section to create an inner div with an even lighter background. As well as a banner with the page name, and borders to make everything look nice. I then started adding content.

        JRHAUSER - is the landing page
            It has a picture of me I imported into the layout.js file and styled with tailwind, adding a filter and a border. I added some text content from an old resume I had that says a little about me. I realized at this point I was pulling the user's eye downward and then expecting them to look back up to the nav tabs to change pages. I figured extra buttons at the bottom that changed the tabs would increase the UX. So I set about doing so.
        THE TAB BUTTONS
             I needed to look at the [tabs docs](https://headlessui.com/react/tabs) to learn how to handle click events. Then I wrote an anonymous function that changed the selected index, this was pretty much covered in the docs but it did take some figuring out. After I created these buttons, I added them to every page and updated the text and indexes accordingly.
        CONTACT - my contact information
            I wanted to include my school and business email as well as my phone number. So I added a picture of myself similarly styled as the first picture and added the information as text. I made sure to make the emails links so you can just click on them to send me an email. I also did the same for the phone number so you can also click on it to make a call.
            At this point I learned it is generally bad practice to display your email on your website due to webscrapers sending you spam. I don't plan on deploying this site yet, just displaying it on my github. But in the future I may change this to be a form that sends me an email when you submit it.
        Resume - my resume
            I faithfully translated my resume into HTML mainting good spacing and margins. I messed with indents until the formatting matched. I then wanted a button to download the resume if the user clicked it. I orginally thought I would need a function to handle the click etc. After some searching I found I could just include it in the public folder and directly link to it with href. This wrapped up the resume section nicely and left my projects tab.
        Projects - my github projects
            I wanted to display my github projects on this tab, I started with just linking my github, but after some googling, I found someone used the github api to display projects with little card components. I really liked this idea so I decided to try and implement it. I read [this](https://webapps.stackexchange.com/questions/76295/embed-github-repository-overview-and-stats) and decided to brave the REST API. I gathered I would need to make some call to the API that would return me a JSON array. At this point I have no expierence with JSON. Looking at the [API docs](https://docs.github.com/en/rest/repos?apiVersion=2022-11-28) I figured list repository was the way to go.
            The [docs](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-public-repositories) give an example using [octokit.js](https://github.com/octokit/octokit.js/)so I started reading. After getting octokit set up to make API calls. I created a personal access token, and started reading some more. I eventually found [this](https://stackoverflow.com/questions/63669459/request-data-from-github-api) stack overflow post, that gave me the syntax to make the api call in react. I could now at least print the JSON array to the console so now it was time to fill in my card components with the data from the array. I used (this)[https://www.youtube.com/watch?v=27f3B1qndW8] video to learn how to pass data from my JSON array to react components. I had to fiddle with it but got it working. I created the card components and passed them the repository information as props. Then used a map function to generate each component. I messed with the styles a bit more to get the spacing right and I was done!

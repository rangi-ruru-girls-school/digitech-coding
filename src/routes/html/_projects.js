const projects = [
    {
        title: `Introduce Yourself`,
        slug: `introduce-yourself`,
        icon: `fas fa-child`,
        subtitle: `An About page for yourself as a web developer.`,
        progressValue: 1,
        progressMax: 7,
        prev: null,
        next: `why-web-dev`,
        video: ``,
        description: `<h2 class="subtitle">Process</h2>
            <ol>
            <li>Create a new Digitech folder on your laptop</li>
            <li>Open that new folder in <a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
            <li>Create a new file in that folder called <code>about.html</code></li>
            <li>Write the the basic HTML template code into the file</li>
            <li>Open the same file in a browser to see your web page</li>
            <li>Create a new file in the same folder called <code>style.css</code></li>
            <li>Write some basic CSS code to style your page</li>
            <li>Link to the CSS page in the HTML page with <code>&lt;link rel="stylesheet" href="style.css"&gt;</code></li>
            </ol>`,
        test: null,
        skills: []
    },
    {
        title: `Why Web Dev?`,
        slug: `why-web-dev`,
        icon: `fas fa-laptop-code`,
        subtitle: `A three-page website about making websites.`,
        progressValue: 2,
        progressMax: 7,
        prev: `introduce-yourself`,
        next: `coding-tools`,
        video: ``,
        description: `<h2 class="subtitle">Why Web Dev?</h2>
            <p>There are plenty of way to learn coding, but here are some reasons why we focus on web dev.</p>
            <ul>
            <li>You can learn to code starting easy, with HTML and CSS, before getting into the real coding with JavaScript.</li>
            <li>You can be creative with the visual aesthetic of your applications as well as solve problems in coding.</li>
            <li>You can build useful applications to make money, help others, or just make you own life easier.</li>
            <li>Web dev has loads of transferrable skills to other areas, from project management to marketing to accounting to entrepeneurship.</li>
            </ul>
            
            <h2 class="subtitle">Web Dev Opportunities</h2>
            <p>Web development can take you many places in the world and your career. Here are just some of the opportunities you'll have.</p>
            <ul>
            <li>You can reach an enormous audience through the web because clients and customers can use any device they want to access your applications.</li>
            <li>You only have to build your applications once: for the web. You don't need to build one version for iOS, one for Android, one for Windows, and one for MacOS.</li>
            <li>You can earn a great salary - more than 400 jobs on seek.co.nz offering over $100k at the time of writing</li>
            <li>You can work remotely from anywhere in the world.</li>
            </ul>
            
            <h2 class="subtitle">Other Coding Careers</h2>
            <p>Web dev is a great start but it's only one of many different careers in digital technologies. Here are some of the others.</p>
            <ul>
            <li>Application developer</li>
            <li>Server engineer</li>
            <li>Network engineer</li>
            <li>Project manager</li>
            <li>Systems Architect</li>
            <li>Artificial intelligence researcher</li>
            <li>Cyber security consultant (hacker)</li>
            </ul>
        `,
        test: `https://forms.microsoft.com/Pages/ResponsePage.aspx?id=2uSr4UrrGkOh5f81ZvbCeMB7Bm3FAhZHrr7QBRekTu1UNEVJUVBKNTZZWEFES003Uk1VSUtOM0VUSC4u&embed=true`,
        skills: []
    },
    {
        title: `Coding Tools`,
        slug: `coding-tools`,
        icon: `fas fa-tools`,
        subtitle: `What you need to get going.`,
        progressValue: 3,
        progressMax: 7,
        prev: `why-web-dev`,
        next: `the-internet`,
        video: ``,
        description: `<h2 class="subtitle">Visual Studio Code</h2>
            <p>Visual Studio Code is where we do most of our work. It's where we write the code for our web sites.</p>
            
            <h2 class="subtitle">GitHub</h2>
            <p>GitHub is a cloud storage specifically for coders. It includes version control to help track all the code changes.</p>
            
            <h2 class="subtitle">Netlify</h2>
            <p>Netlify puts our websites on the Internet. Whenever we Push to GitHub, Netlify puts the new code on our website.</p>
        `,
        test: `https://forms.microsoft.com/Pages/ResponsePage.aspx?id=2uSr4UrrGkOh5f81ZvbCeMB7Bm3FAhZHrr7QBRekTu1UMFhRREk1WEdQSDNXVUFBNVpUNDg5MDExWi4u&embed=true`,
        skills: []
    },
    {
        title: `The Internet`,
        slug: `the-internet`,
        icon: `fas fa-network-wired`,
        subtitle: `Everyone knows what it is... or do they?`,
        progressValue: 4,
        progressMax: 7,
        prev: `coding-tools`,
        next: `relevant-implications`,
        video: ``,
        description: `<h2 class="subtitle">Browser</h2>
            <p>A web browser (commonly referred to as a browser) is a software application for accessing information on the World Wide Web. When a user requests a particular website, the web browser retrieves the necessary content from a web server and then displays the resulting web page on the user's device.</p>
            <p>A web browser is not the same thing as a search engine, though the two are often confused. For a user, a search engine is just a website, such as Google Search, Bing, or DuckDuckGo, that stores searchable data about other websites. However, to connect to a website's server and display its web pages, a user must have a web browser installed.</p>
            <p>In 2019, an estimated 4.3 billion people used a browser. Google Chrome is the most used browser, with a 64% market share on all platforms, followed by Safari with 17%.</p>
            <p>Source: <a href="https://en.wikipedia.org/wiki/Web_browser">Wikipedia</a></p>
            
            <h2 class="subtitle">World Wide Web</h2>
            <p>The World Wide Web (WWW), commonly known as the Web, is an information system where documents and other web resources are identified by Uniform Resource Locators (URLs, such as https://www.example.com/), which may be interlinked by hypertext, and are accessible over the Internet. The resources of the WWW are transferred via the Hypertext Transfer Protocol (HTTP) and may be accessed by users by a software application called a web browser and are published by a software application called a web server.</p>
            <p>Web resources may be any type of downloaded media, but web pages are hypertext media that have been formatted in Hypertext Markup Language (HTML). Such formatting allows for embedded hyperlinks that contain URLs and permit users to navigate to other web resources. In addition to text, web pages may contain references to images, video, audio, and software components which are displayed in the user's web browser as coherent pages of multimedia content.</p>
            <p>Multiple web resources with a common theme, a common domain name, or both, make up a website. Websites are stored in computers that are running a program called a web server that responds to requests made over the Internet from web browsers running on a user's computer. Website content can be largely provided by a publisher, or interactively where users contribute content or the content depends upon the users or their actions. Websites may be provided for a myriad of informative, entertainment, commercial, governmental, or non-governmental reasons.</p>
            <p>The World Wide Web has been central to the development of the Information Age and is the primary tool billions of people use to interact on the Internet.</p>
            <p>Source: <a href="https://en.wikipedia.org/wiki/World_Wide_Web">Wikipedia</a></p>
            
            <h2 class="subtitle">The Internet</h2>
            <p>The Internet (portmanteau of interconnected network) is the global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to link devices worldwide. It is a network of networks that consists of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies. The Internet carries a vast range of information resources and services, such as the inter-linked hypertext documents and applications of the World Wide Web (WWW), electronic mail, telephony, and file sharing.</p>
            <p>Most traditional communication media, including telephony, radio, television, paper mail and newspapers are reshaped, redefined, or even bypassed by the Internet, giving birth to new services such as email, Internet telephony, Internet television, online music, digital newspapers, and video streaming websites. Newspaper, book, and other print publishing are adapting to website technology, or are reshaped into blogging, web feeds and online news aggregators. The Internet has enabled and accelerated new forms of personal interactions through instant messaging, Internet forums, and social networking. Online shopping has grown exponentially both for major retailers and small businesses and entrepreneurs, as it enables firms to extend their "brick and mortar" presence to serve a larger market or even sell goods and services entirely online. Business-to-business and financial services on the Internet affect supply chains across entire industries.</p>
            <p>Source: <a href="https://en.wikipedia.org/wiki/Internet">Wikipedia</a></p>
        `,
        test: `https://forms.microsoft.com/Pages/ResponsePage.aspx?id=2uSr4UrrGkOh5f81ZvbCeMB7Bm3FAhZHrr7QBRekTu1UQ0s0MUY2QUxMSjJJMzVEMkxHSE5SRTlGVi4u&embed=true`,
        skills: []
    },
    {
        title: `Relevant Implications`,
        slug: `relevant-implications`,
        icon: `far fa-copyright`,
        subtitle: `Things you need to consider when building and designing your website.`,
        progressValue: 5,
        progressMax: 7,
        prev: `the-internet`,
        next: `accessibility`,
        video: ``,
        description: `<h2 class="subtitle">CSS Practice</h2>
            <p>There's no HTML coding involved in this project. Simply copy <a href="https://github.com/rangi-ruru-girls-school/relevant-implications">this template</a> and style it appropriately.</p>
        `,
        code: `https://forms.microsoft.com/Pages/ResponsePage.aspx?id=2uSr4UrrGkOh5f81ZvbCeMB7Bm3FAhZHrr7QBRekTu1UODZJSzczWTRLSVo1S0MxNzNQM0VYSjQ1Wi4u&embed=true`,
        skills: []
    },
    {
        title: `Accessibility`,
        slug: `accessibility`,
        icon: `fab fa-accessible-icon`,
        subtitle: `Website should be for everyone, so you need to buld and design that way.`,
        progressValue: 6,
        progressMax: 7,
        prev: `relevant-implications`,
        next: `usability-heuristics`,
        video: ``,
        description: `<h2 class="subtitle">CSS Practice</h2>
            <p>There's no HTML coding involved in this project. Simply copy <a href="https://github.com/rangi-ruru-girls-school/accessibility">this template</a> and style it appropriately.</p>
        `,
        test: null,
        skills: []
    },
    {
        title: `Usability Heuristics`,
        slug: `usability-heuristics`,
        icon: `fas fa-balance-scale-left`,
        subtitle: `Your website is good - but how do you know for sure?`,
        progressValue: 7,
        progressMax: 7,
        prev: `accessibility`,
        next: null,
        video: ``,
        description: ``,
        test: null,
        skills: []
    }
];

export default projects;
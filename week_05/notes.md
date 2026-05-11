# HTML Basics

## Learning Objectives
This week's lesson will provide an overview of how the web works. A brief introduction/review of HTML and CSS will be covered as well as HTML syntax and strucutre basics. Integrated Development Environments (IDE) will be dscusses and students will begin use an IDE for coding work

## Lesson Materials
### 1.1 How the Web Works

Client-server model 

    Client: Your computer's web browser job is to request information, process that information and display it in a way that the user can see an interact with

    Server: A remote computer that stores the websites files. The client asks for the resources, and the server provides them.

    DNS and URLs: When you type a web adress url, your browser first contacts a Domain Name System(DNS) server. The DNS acts like the internets phone book. 

    HTTP/HTTPS: Once the IP address is known, your browser uses the Hypertext Transfer Protocol(HTTP) or its secure version HTTPS to request data

    The server usually sends back three types of files:
    HTML: Defines the structure and content of the page.
    CSS: Defines how the page should look( layout, colors, fonts)
    JavaScript: Defines how the page behaves and responds to actions

    Then, your browser has a rendering engine that: 
    Builds the DOM (Document Object Model) from the HTML
    Applies styles from the CSSOM (CSS Object Model)
    Executes JavaScript using a JavaScript engine (like V8 in Chrome)


### 1.2 HTML Basics

#### The Odin Project Links

##### Introduction to HTML and CSS 
HTML is the raw data that a webpage is built out of. CSS is what adds style to those plain elements. 

##### Elements and Tags
HTML (HyperText Markup Language) defines the structure and content of webpages.

Elements and Tags
Almost all elements on an HTML page are just pieces of content wrapped in opening and closing HTML tags.
Opening tags tell the browser that is is the start of an HTML element. <p>.
Closing tags tell the browser where an element ends. They have a forward slash before the keyword. </p>
<p>some text content</p>
Using the correct tags can have a big impact on two aspects of your sites: how they are ranked in searh engines; and how accessible they are to users who rely on assistive technologies.
Using the correct elements for content is called semantic HTML.
Void Elements dont havr closing tags, because they are void of any conttent.

##### HTML Boilderplate
All HTML documents have the same basic structure or boilerplate that needs to be in place before anything useful can be done.



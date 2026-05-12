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

##### Working with Text
Most content on the web page is text-based, so you will find yourself needing to work with HTML text elements quite a bit.

Paragraphs
<body>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</body>
It looks like two paragrpahs of text, When the browser encounters new lines like this in your HTML, it will compress them down into one single space. If we want to create paragrpahs in HTML, we need to use the paragraph element.

Headings
There are 6 different levels of headings from <h1> to <h6>

Strong Element
The <strong> element makes textbold.

Em Element
<em> element makes text italic

Nesting and indentation
When we nest elements within other elements, we create a parent and child relationship between them.

HTML comments
In order to write an HTML comment, we just enclose the comment with <!-- and --> 


##### Lists 
Unordered lists
Unordered lists are created using the <ul> element, and each item within the list is created using the list item <li>

Ordered lists
Ordered lists are created using the <ol> elemetn. Each individual item in them is again vrated using the list item element <li>


##### Links and Images


#### HTML Overview

At its core, hypertext is a digital text that can link to other places, such as one website connecting to another.

Html elements are the basic building blocks of a webpage. Each HTML element represents a different type of content, Each element is represented using 1 or 2 tags.
An HTML tag is how we code an HTML element. All tags use brackets <>. 
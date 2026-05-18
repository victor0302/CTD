# CSS Basics

## Learning Objectives
This week's lesson will explore CSS syntax and usuage within web development

## Lesson Materials

### 6.1 Cascading Style Sheets (CSS)
Cascading Style Sheets, or CSS, is a style sheet language that was created to supplement HTML. 

#### The Odin Project Links:

##### Intro to CSS
At the most basic level, CSS is made up of various rules. Each rule is made up of a selector and a semicolon-separated list of declarations, with each of those declarations being made up of a property-value pair.

Selectors refer to the HTML elements to which CSS rules apply; they're what is actually being "selected" for each rule. 

The universal selector will select elements of every type (as in the whole document), and the syntax for it is a simple asterik. 

A type selector (or element selector) will select all elements of the given element type, and the syntax is just the name of the element.

Class Selectors will select all elements with the given class, which is just an attribute you place on an HTML element.

ID selectors are similar to class selectors. They select an element with the given ID, which is another attribute you place on an HTML element. Can only have one ID. For IDS, instead of a period, we use a hashtag immediatelty followed by the case-sensitive value of the ID attribute.

The grouping selector
What if we have two groups of elements that share some of their style declartions?
To cut down on the retition, we can group these two selectors together as a comma-separated list:

Chaining electors
Another way to use selectors to chain them as a list without any separation. subsection.header

Descendant combinator
Combinators allow us to combine multiple selectors differently than either grouping or chaining them, as they show a relationship between the selectors.

Properties to get started with
Color and background-color
Typography basics and text-align, font family can be a single value or a comma-separated list of values that determine what font an element uses. Each font will fall into one of two categories, either a font family like "time new Roman". or generic family like serif 

Adding CSS to HTML
External CSS, most comman method. It involves creating a separate file for the CSS and linking it inside of an HTML's opening and closing <head> tags with a void <link> element.


##### The Cascade
The Cascade is what determines which rules actually get applied to out HTML. There are different factors that the cascade uses to detemine this.

Specificity
A CSS declaration that is more specific will take precedence over less specific ones. Inline styles, have the highest specificty compared to selectors. An ID selector will always beat any number of class selectors, a class selector will always beat any number of type selectors, and a type selector will always beat any number of less specific selector.

Not everything adds to specificity
When comparing selectors, you may across special symbolls for the universal selector. The core concept is that these symbols do not inherently convey any additional specificty.

Inheritance
Inheritance refers to certain CSS properties that, when applied to an element, are inherited by that element's descendants, even if we don't explicity write a rule for those descendant. Typography-based properties are usually inherited, while most other properties aren't.

Rule Order
The final factor, the end of the line, the tie-breaker of the tie-breakers. Whichever rule was the last defined is the winner.


##### Inspecting HTML and CSS
THis lesson will take us through the Chrome Dev Tools, which allow you to see detailed information about your elements and CSS rules, as well as assist you in finding and fixing problems in your code.

The inspector
To open up the inspector, you can right-click on any element of a webpage and click "Inspect" or press F12.

Inspecting elements
In the Elements panel, you can see the enite HTML structure of your page. When an element is selected, the Styles yab will show all the currently applied styles.

Testing styles in the inspector
The Styles panel also allows you to edit styles directly in the browser.


##### The Box Model
The most important skills you need to master with CSS are positioning and layout. 

The box model
Every single thing on a webpage is a rectangular box. These boxes can have other boxes in them and can sit alongside one another. 
The only real complication here is that there are many ways to manipluate the size of these boxes, and the space between them, using padding, border, and margin.
Padding: increases the space between the border of a box and the content of the box
border: adds space(even if its onlt a pixle or two) between the margin and the padding
margin: increases the space between the borders of a box and the borders of adjacent boxes.


##### Block and Inline
CSS has two box types: block and inline boxes, which determine element behvaior and interaction. The display property controls how HTML elements appear on the webpage. 

Block vs inline
Most of the elements that you have learned about so far are block elements. Their default style is diplay: block. By default block elements will appear on the page stacked atop each other, each new element starting on a new line.

Inline, however, do not start on a new line. They appear in line with whatever elements they are places beside.

The middle ground inline-block
Inline-block elements behave like inline elements, but with block-style padding margin. display: inline-block is a useful tool to know about, but in practice, you'll probably end up reaching for flexbot more often if you're trying to line up a bunch of boxes.

Divs and spans
Divs and spans give no particular meaning to their content. They are just generic boxes that can contain anything.
Div is a block-level element by deafult. It is commonly used as a container element to group other elements. Divs allow us to divide the page into different blocks and apply styling to those blocks.
Span is an inline-level element by default. It can be used to group text content and inline HTML elements for styling and should only be used when no other semantic HTML element is appropriate.


##### More CSS Properties

Background
The background property is actually a shorthand for 8 different background-relate properties.

Borders
The border property is another shorthand, but ir is much less complicated than the background shorthand. Just need to define a size,style, and color.


##### Positioning
Static and relative positioning
The default positioning mode that you've gotten used to is position: static. Static is the default position of every element, and properties top,right,bottom, and left do no affect the position of the element.

Absotlute positioning
position: absolute allows you to position something at an exact point on the screen without distrubing the other elements around

Fixed positioning
Fixed elements are also removed from the normal flow of the doucment and are positioned relative to the viewpoint. Useful for things like navigation bars and floating chat buttons.

Sticky postioning
Sticky element will act like normal elements until you scroll past them, then they start behaving like fized elements.























































##### Introduction to Flexbox
Before we get started
Flexbox layouts can get a little complicated. 

Let's flex!
Flexbox is way to arrange items into rows or columns. These otems will flex (i.e grow or shrink) based on some rules that you can define.

Flex containers and flex items
As you've seen, flexbox is not just a single CSS property but a whole toolbox of properties that you can use to put things where you need them. Some of these properties that you can use to put things where you need them. Some of these properties belong on the flex container, while some go on the flex items. 
A flex container is any element that has diplay:flex on it. A flex item is any element that lives directly inside of a flex container.
Any element can be both a flex container and a flex item. you can put display:flex on a flex item and then use flexbot to arrange its children. 
Creating and nesting flex containers and items is the primary way we will be building up complex layouts. 


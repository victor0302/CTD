# Intro to React, App Installation, Vite

## Learning Objectives
Object 1: Intro to React
Understand React at a high level
Highlight the key advantages of React in web development
Define key React terms and concpets

Object 2: App installation
Use the CLI to create a new project using Vite.js and its React project template
List the dependencies and scripts in package.json
Use the CLI to install Vite.js, React, and dependencies

Object 3: Working with Vite
Demonstrate how to run installed app on a local development server
Describe the development workflow using the development server
Describe the role of Vite.js as a developlment server for React projects

## Lesson Materials

Intro to React
React is a frontend library used by developers to build dynamic user interfaces. React takes a declarative approach to DOM manipulation with the help of React DOM to provide interactivity in web applications, also known as single-page applications, or SPA for short. React takes care of
assembling componets to render a UI
listerning for user events- mouse cursor hovering, typng in a field, button clicks, etc
updating state based on events and other inputs
automatiically updating the UI when state changes

In contrast, traditional multi-page websites follow a server-centric model where navigation between pages involces full-page reloads.

SPA revolutionized web development by optimizing performance and user experience through client side rendering and dynamic content updates.  

Most current front end libraries or frameworks use a declarative approach to programming a UI. Declartive programming allows us to descrive the SPA's structure and state. 

React's strength comes from its use of componets and the way its keeps the UI updates. Componets allow us to divide an SPA into smaller modules consisting of page elements, styyling, and state logic. While React handles client-side rendering, most production apps now leverage frameworks such as Next.js or Remix to handle routing, data fetching, and server rendering strategies like SSR and SSG which improve both SEO and performance.

React provides hooks, which are functions that allow us to manage state and logic inside componets. Props(properties) are used to pass data and event information between componets. Many teams adopt external state management solutions like Redux, Toolkit, Zustand, or Recoil. 

React offers hooks like useMemo and useCallback that help optimize performance by avoiding unnecessary re-renders. Tools like React DevTools and features such as StrictMode also assist developers in catching performace issues early.

React use of a Virtual DOM, this is a lightweight copy of the actual DOM in memory. When there are changes in the state of a compound, React first updates the Virtual DOM and then compares it to the real DOM to identify the changes needed. 

To work with a React project, we must choose a build tool and server. One of the best ways to get started is using Vite with a React template.

The scaffolded project includes a starter SPA and a few supporting files.
.git/: is an ivisible directory created by Git to maintain version control.
.eslint.config.js: is used to configure ESLINT, a tool used to identify syntax problems or common anti-patterns
index.html: this file is the entry point for the application
package.json: this file contains details about the project, some scripts aliases, and a list of all the packages that the project is dependent upon
public: this a directory is used to hold static assests like images and fonts that we want to remain unchanged
src: this directory contains the majority of the working files for the application
vite.config.js: this file sets configuration options for vite

## Vite Sub-tools
esbuild: Vite uses esbuild for pre-bundling during development. It converts all of our coded and dependencies into native ESM (ECSMAScript Module) understood by browsers.  It also combies project dependeinces into a single cached noduel to improve page loading/refreshing while we code. 

Rollup: this is another module bundler for JavaScript. Vite uses this t output highly oprimized files for production

PostCSS: PostCSS is a JS tool that tranforms CSS through an exosystem of plugins

CSS Modules: this tool scoopes class selectors in module files to the repsicve compone file.

## Features
HMR: Hot Module Replacement. This is the ability to replace a JavaScript module in the browser while maintainig application state. This mean that the app doesn't need to re-start.

TypeScript support: TypeScript (TS) provides valuable guard rails for developers so that they ccan develop bug-free, perfomant JavaScript. Since browsers and Node don't natively support TS, the code has to be transpiled to JavaScript.

JSX transformation: Similar to TypeScript, browsers do not understand JSX. This extension of JavaScript needs converted to plain JavaScript before being served to a browser.

CSS, JSON importing: JavaScript files are not normally able to import files that are written in other languages. Vite injects CSS onto the page and gives it HMR support

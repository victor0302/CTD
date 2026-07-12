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
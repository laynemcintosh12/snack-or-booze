### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router? 
React Router serves the purpose of facilitating client-side routing in React applications

- What is a single page application? 
A Single Page Application (SPA) is a dynamic web application that loads a single HTML page. It updates content dynamically as users interact, eliminating the need for full page reloads during navigation.

- What are some differences between client side and server side routing? 
Client side routing occurs in the browser without server requests, managed by the router for component rendering.
Server side routing relies on the server to handle page changes and necessitates full page refreshes.

- What are two ways of handling redirects with React Router? When would you use each?
Use the <Redirect> component to redirect to a new location. Use this for imperative redirects.
Return a redirect from a route render function. Use this for conditional redirects.  

- What are two different ways to handle page-not-found user experiences using React Router?
Render a dedicated <NotFound> component.
Return null from a route's render function.

- How do you grab URL parameters from within a component using React Router?
With the useParams hook.

- What is context in React? When would you use it?
Context provides a way to pass data through the component tree without having to pass props down manually at every level. Use it when data needs to be accessible by many components at different nesting levels.

- Describe some differences between class-based components and function
  components in React.
Function components are simpler, don't require extending React.Component, and don't maintain their own state.
Class components allow state and lifecycle methods like componentDidMount.
Hooks like useState bring state and lifecycles to function components.

- What are some of the problems that hooks were designed to solve?
Allow function components to have state and lifecycle methods
Share logic between components instead of just state
Avoid wrappers like render props and higher order components

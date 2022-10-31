## React interview questions

1. What is state and props in reactjs?
   state is an object with local values that can be read and edited within a component while props are read-only values passed down to the component

2. What is high order component? How do you use it?
    HOC is a function that takes a component and returns an updated component. Usually used in reusing logic like adding routers or connecting to store/redux

3. What is context API? What are the benefits of it?
    context API is a way to save data within the component tree. By using the context API, data can be accessed without having to pass it down to child components via props

4. How to assign and change the value of state in a component?
    In class components state can be declared in the constructor. However with the introduction of hooks, functional components can assign and change state values using the `useState` hook.

5. Could you explain the life-cycle of a react component?
    React components starts from `Mounting` where components are rendered until finally triggering `componentDidMount`. After that when a component is already mounted `componentDidUpdate` will be triggered when state or props changes occur. Finally, component will be `Unmounted` and `componentWillUnmount`will then be triggered where cleanups are usually done.

6. What is fragment in react?
    fragment is a way to group or list jsx elements or components without adding additional nodes to the DOM.

7. What is ref in react?
    refs are used to give direct access to DOM properties directly.

8. What is container component? What is presentational component?
    container components can be written as a component that only declares or passes data to other components. Presentational components are usually UI components that only receive data to be displayed and does not have logic to update values. 

9. How to pass a function to a component?
    functions can be passed to child components via props or can also be done through contexts

10. What is portal?
    portals can be used to render an element outside of its parent component's DOM node.

11. How to share state between parent component and child component? How to share state between sibling components?
    to share state between parent and child state can be declared inside the parent then `state` and `setState` function can be passed down to child via props. With sibling components, a parent container component can be used to declare state and same with earlier `state` and `setState` can be passed via props to sibling components.

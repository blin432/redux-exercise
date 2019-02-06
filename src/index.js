const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));

const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT" }));

const incrementfiveButton = document.getElementById('incrementfive');
incrementfiveButton.addEventListener('click', e => dispatch({ type: "INCREMENTFIVE" }));

const decrementfiveButton = document.getElementById('decrementfive');
decrementfiveButton.addEventListener('click', e => dispatch({ type: "DECREMENTFIVE" }));

const color = document.getElementById('color');

color.addEventListener('change', e => 

dispatch({ 
    type: "changeColor",
    newColor: color.value
    
 }),

 );

 const numberInput=document.getElementById('numberChange');
 const submit = document.getElementById('numberButton');
 submit.addEventListener('click', e => 
    dispatch({ 
        type: "CHANGEINPUT" ,
        newInput:numberInput.value
    }));
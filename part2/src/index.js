import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// import Counter from './components/Counter';
// import App from './componentsEx2.6/App';
import App from './componentsCountries/App';
// const initState = {
//   count: 42,
// };
// const reducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         count: state.count + 1,
//       };

//     case 'DECREMENT':
//       return {
//         count: state.count - 1,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// const App = () => (
//   <Provider store={store}>
//     <Counter />
//   </Provider>
// );

ReactDOM.render(<App />, document.getElementById('root'));

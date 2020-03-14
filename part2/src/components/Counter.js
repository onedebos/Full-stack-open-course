import React from 'react';
import { connect } from 'react-redux';
import './counter.css';

const Counter = (props) => {
  const increment = () => {
    props.dispatch({ type: 'INCREMENT' });
  };
  const decrement = () => {
    props.dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{props.counting}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counting: state.count,
});

export default connect(mapStateToProps)(Counter);

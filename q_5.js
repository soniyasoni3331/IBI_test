import React from 'react';

const withColorRed = (WrappedComponent) => {
  // This HOC returns a new component
  return (props) => (
    <WrappedComponent {...props} color="red" />
  );
};

// Usage of HOC
const MyComponent = ({ color }) => {
  return <div style={{ color }}>Hello, I'm using HOC!</div>;
};

const EnhancedComponent = withColorRed(MyComponent);

export default EnhancedComponent;

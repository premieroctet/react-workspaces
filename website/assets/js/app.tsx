import React from 'react';
import ReactDOM from 'react-dom';

type HelloMessageProps = {
  name: String
};

function HelloMessage({ name }: HelloMessageProps) {
  return (
    <div>
      Hello {name}
    </div>
  );
};

ReactDOM.render(
  <HelloMessage name="Premier Octet" />,
  document.getElementById('hello-example')
);

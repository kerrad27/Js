import React from 'react';

import Circle from './circleContent/Circle.jsx';
import Form from './formContent/Form.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Circle />
        <Form />
      </div>
    )
  }
}

export default App;
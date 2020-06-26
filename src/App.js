import React from 'react';
import Courses from './Courses';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="bg-secondary p-2">
        <Courses />
      </div>
    );
  }
}

export default App;

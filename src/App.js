import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/main/main.controller';

const App = () => {
  return (
    <div className="container-fluid">
      <MainComponent />
    </div>
  );
};

// function BgDemo() {
//   return (
//     <React.Fragment>
//       <p>Example image from /src</p>
//       <div className="bg-demo" />
//     </React.Fragment>
//   );
// }

export default App;

ReactDOM.render(<App />, document.getElementById('app'));

import React from "react";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://redux-toolkit.js.org/usage/usage-with-typescript"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <br /><br />
      <a
        className="App-link"
        href="https://redux-toolkit.js.org/usage/usage-with-typescript"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Redux-toolkit
      </a>
      <br /><br />
      <a
        className="App-link"
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn TypeScript
      </a>
      <br /><br />
      <a
        className="App-link"
        href="https://material-ui.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Material-UI
      </a>
    </>
  );
};

export default Home;

import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
const cohere = require('cohere-ai')

const log_entry = (name, text) => [name, text];
// DUM DUM DUM DUM
const API_KEY = "fcCuE2KiwJqdaTYEoR2Al9RaVT13ltr32eo2cIw0";
cohere.init(API_KEY); // bad

/* function cohere_generate(gcc)
 *  */
function SearchBar({add_output}) {
  const [search_string, update_search_string] = useState("");

  return (
    <div className="center-this">
      <div className="search-bar">
        <input type="text"
               onChange={
               function(event) {
                 update_search_string(event.target.value);
               }
               }
               placeholder="Enter a LinkedIn URL..."></input>
      </div>
      <button onClick={() => add_output(log_entry("User", search_string))}>
        Enter
      </button>
    </div>
  )
}

function TextLine(context) {
  return <p className="chat-line"><span className="chat-name">{context.name}: </span><span className="chat-text">{context.text}</span></p>;
}

function OutputBox(context) {
  return (
    <div className="center-this chat-box-holder">
        <div className="chat-box">
        {context.output.map(([name, line]) => <TextLine name={name} text={line} />)}
        </div>
    </div>
  );
}

function App() {
  const [text_line_log, update_text_line_log] = useState([
    log_entry("Bot", "Hello! Welcome to the LinkedIn optimizer bot!"),
    log_entry("Bot", "To get started copy and paste a job link!"),
  ]);

  // garbage collector will fix this later...
  function add_output(entry) {
    const new_text_log = [entry, ...text_line_log];
    update_text_line_log(new_text_log);
  }

  return (
    <div className="App">
      <OutputBox output={text_line_log} />
      <SearchBar add_output={add_output} />
    </div>
  );
}

export default App;

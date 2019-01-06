import React from 'react';
import marked from 'marked';
import './App.css';
import { defaultMarkdown } from './strings.js';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <MarkdownInput />
        <HtmlOutput />
      </div>
    );
  }
}

class MarkdownInput extends React.Component {
  render() {
    return (
      <textarea id='markdown-input'>
        {defaultMarkdown}
      </textarea>
    );
  }
}

class HtmlOutput extends React.Component {
  render() {
    return (
      <div id='html-output' dangerouslySetInnerHTML={{ __html: marked(defaultMarkdown)}} />
    );
  }
}


export default App;
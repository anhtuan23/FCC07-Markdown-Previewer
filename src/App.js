import React from 'react';
import marked from 'marked';
import './App.css';
import { defaultMarkdown } from './strings.js';

class App extends React.Component {
  constructor (props){
    super(props);
    this.state ={
      markdown: defaultMarkdown
    }
  }
  render() {
    return (
      <div className='app'>
        <MarkdownInput markdown={this.state.markdown}/>
        <HtmlOutput html={marked(this.state.markdown)}/>
      </div>
    );
  }
}

class MarkdownInput extends React.Component {
  render() {
    return (
      <textarea id='markdown-input'>
        {this.props.markdown}
      </textarea>
    );
  }
}

class HtmlOutput extends React.Component {
  render() {
    return (
      <div id='html-output' dangerouslySetInnerHTML={{ __html: this.props.html}} />
    );
  }
}


export default App;
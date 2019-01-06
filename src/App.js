import React from 'react';
import marked from 'marked';
import './App.css';
import { defaultMarkdown } from './strings.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: defaultMarkdown
    }
    this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
  }

  handleMarkdownChange(event) {
    this.setState({
      markdown: event.target.value
    });
  }

  render() {
    return (
      <div className='app'>
        <MarkdownInput markdown={this.state.markdown} handleChange={this.handleMarkdownChange}/>
        <HtmlOutput html={marked(this.state.markdown)} />
      </div>
    );
  }
}

class MarkdownInput extends React.Component {
  render() {
    return (
      <textarea id='markdown-input' onChange={this.props.handleChange}>
        {this.props.markdown}
      </textarea>
    );
  }
}

class HtmlOutput extends React.Component {
  render() {
    return (
      <div id='html-output' dangerouslySetInnerHTML={{ __html: this.props.html }} />
    );
  }
}


export default App;
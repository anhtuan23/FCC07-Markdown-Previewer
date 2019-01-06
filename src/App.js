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
        <MarkdownInput markdown={this.state.markdown} handleChange={this.handleMarkdownChange} />
        <HtmlOutput html={marked(this.state.markdown, { breaks: true, renderer })} />
      </div>
    );
  }
}

class MarkdownInput extends React.Component {
  render() {
    return (
      <textarea id='editor' onChange={this.props.handleChange}>
        {this.props.markdown}
      </textarea>
    );
  }
}

class HtmlOutput extends React.Component {
  render() {
    return (
      <div id='preview' dangerouslySetInnerHTML={{ __html: this.props.html }} />
    );
  }
}

//Make link open in new tab
var renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  var link = marked.Renderer.prototype.link.call(this, href, title, text);
  return link.replace("<a", "<a target='_blank' ");
};


export default App;
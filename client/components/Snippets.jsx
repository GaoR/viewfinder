import React, { Component } from 'react';
import Clipboard from 'clipboard';
import snippetData from '../../snippets';

class Snippets extends Component {
  state = {
    snippetIndex: 0,
  };

  componentDidMount() {
    new Clipboard('.copy')
  }

  increment = () => this.setState({ 
    snippetIndex: Math.max(
      snippetData[this.state.prompt].length - 1,
      this.state.snippetIndex + 1
    )
  })
  
  decrement = () => this.setState({ 
    snippetIndex: Math.min(this.state.snippetIndex - 1, 0)
  })

  render() {
    const promptSnippets = snippetData[this.props.prompt];
    const snippet = promptSnippets ? promptSnippets[this.state.snippetIndex] : '';
    return (
      <div>
        <textarea 
          id="snippetField"
          value={snippet}
          readOnly
        />
        <button
          onClick={this.decrement}
        >
          Go back
        </button>
        <button 
          className="copy"
          data-clipboard-target="#snippetField"
        >
          Copy
        </button>
        <button 
          className="copy"
          onClick={this.increment}
          data-clipboard-target="#snippetField"
        >
          Copy and go forward
        </button>
      </div>
    )
  }
}

export default Snippets;
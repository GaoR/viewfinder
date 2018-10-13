import React, { Component } from 'react';
import Clipboard from 'clipboard';
import snippetData from '../../snippets';

class Snippets extends Component {
  state = {
    show: false,
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

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const {
      show,
      snippetIndex,
    } = this.state;
    const promptSnippets = snippetData[this.props.promptSelected];
    const snippet = promptSnippets ? promptSnippets[snippetIndex] : '';
    return (
      <div>
        <h4 onClick={this.toggleShow}> Prompt snippets </h4>
        {show ?
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
          </div> :
          <span>
            &nbsp;...
          </span>
        }
      </div>
    )
  }
}

export default Snippets;
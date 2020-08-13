// to load components asynchronously and allow for code spltting
// https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html

// build result without async component
/* File sizes after gzip:

  149.42 KB (+66.95 KB)  build/static/js/2.c39b4e86.chunk.js
  4.09 KB (+471 B)       build/static/js/main.991cac1b.chunk.js
  823 B                  build/static/css/2.2fc24b7c.chunk.css
  775 B                  build/static/js/runtime-main.b64d7e09.js
*/
// and with async component
/*
File sizes after gzip:

  84.9 KB               build/static/js/3.c119e537.chunk.js
  65.96 KB (-83.46 KB)  build/static/js/2.0b35cbde.chunk.js
  3.99 KB (-101 B)      build/static/js/main.10f6e894.chunk.js
  1.49 KB (+749 B)      build/static/js/runtime-main.79d4bf73.js
  823 B                 build/static/css/2.2fc24b7c.chunk.css
  680 B                 build/static/js/4.b4c2bd94.chunk.js
 */
import React, { Component } from 'react';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component,
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}

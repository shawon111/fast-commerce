import React, { Component, useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    }
  }

  modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  render() {
    return (
      <div className="text-editor">
        <ReactQuill theme="snow"
                    modules={this.modules}
                    formats={this.formats}>
        </ReactQuill>
      </div>
    );
  }
}

export default MyComponent;
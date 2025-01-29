import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class ImageModal extends Component { 
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackDrop = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  }; 
  render() {
      return createPortal(
           <div className="overlay" onClick={this.handleBackDrop}>
                 <div className="modal">
                     {this.props.children }
                </div>
             </div>, modalRoot
    );
  }
}
export default ImageModal;

import React from 'react';

import {SECTIONS} from '../../assets/sections';

import './directory.component.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      sections: SECTIONS
    }

  }

  render(){
    return (
      <div className = 'directory-menu'>
      {
        this.state.sections.map(({title, imageUrl, id, size }) => (
          <MenuItem key = {id} title = {title} imageUrl = {imageUrl} size = {size}></MenuItem>
        ))
      }
    </div>
    )
  }

}

export default Directory;

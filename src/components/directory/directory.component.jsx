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
        this.state.sections.map(({id, ...otherSectionProps }) => (
          <MenuItem key = {id} {...otherSectionProps}> </MenuItem>
        ))
      }
    </div>
    )
  }

}

export default Directory;

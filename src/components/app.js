import React from 'react'
import NavBar from './nav_bar';
import { Link } from 'react-router';
import {connect} from 'react-redux'

export default (props) => {
    return (
      <div>
        <NavBar  title="Boozr" url="/" />
        <div className='col-md-4'>
        	<Link to="/cocktails">View Cocktails!</Link>
        </div>
        <div className='col-md-8'>
	        { props.children }
        </div>

      </div>
    )
};


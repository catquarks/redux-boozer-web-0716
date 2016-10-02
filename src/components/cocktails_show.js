import React from 'react'
import {connect} from 'react-redux'

function CockTailsShow (props){
	return(
		<h1>{props.cocktail.name}</h1>
	)
}

function mapStateToProps(state, ownProps){
	const cocktail = state.cocktails.find( (cocktail) => {
		return cocktail.id == ownProps.params.id
	})
	return {
		cocktail:cocktail
	}
}

export default connect(mapStateToProps)(CockTailsShow)

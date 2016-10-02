import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

function CocktailsIndex(props){
	return(
		<div>
			<h1>Yummy Cocktails</h1>
			<ul>
				{props.cocktails.map( (cocktail) =>
					<li key={cocktail.id}>
						<Link to={`/cocktails/${cocktail.id}`}>
							{cocktail.name}
						</Link>
					</li>
				)}
			</ul>
			{props.children}
		</div>
	)
}

// defining our custom MapStateToProps
function MapStateToProps(state){
	return {cocktails: state.cocktails}
}

// returns another function
export default connect(MapStateToProps)(CocktailsIndex)

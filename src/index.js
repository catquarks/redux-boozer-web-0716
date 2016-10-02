import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router'
import routes from './routes'

import {Provider} from 'react-redux'
import rootReducer from './reducers'

import ReduxPromise from 'redux'
import {createStore, applyMiddleware} from 'redux'


import {fetchCocktails} from './actions'

const store = createStore(rootReducer)

store.dispatch(fetchCocktails())

ReactDOM.render(
<Provider store={store}>
	<Router history={hashHistory} routes={routes} />
</Provider>, document.getElementById('container')

)

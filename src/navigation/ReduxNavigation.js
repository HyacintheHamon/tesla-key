import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'

// here is our redux-aware our smart component
function ReduxNavigation (props) {
  const { dispatch, nav } = props

  return <AppNavigation navigation={{
            dispatch: dispatch,
            state: nav,
            addListener,
          }} />
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)

import React, { Component } from 'react'
import { getRepo } from 'utils/getRepo'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: getRepo(this.props),
      loading: false,
      isMounted: false
    }
  }
  render() {
    const { loading, repos } = this.state

    if (loading === true) {
      return <p>LOADING2</p>
    }

    return (
      <div>
        Home
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

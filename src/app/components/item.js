import React, { Component } from 'react'
import { getRepo } from 'utils/getRepo'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: getRepo(this.props),
      loading: false,
      isMounted: false
    }

    this.fetchRepos = this.fetchRepos.bind(this)
  }

  async componentDidMount  () {
    this.state.isMounted = true;
        console.log('component did mount', this.state.repos)
        await this.fetchRepos(this.props.match.params.id)    
  }

  componentWillUnmount () {
    this.state.isMounted = false;
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchRepos(this.props.match.params.id)
    }
  }

  fetchRepos (lang) {
    console.log('fetching repos')
    this.setState(() => ({
      loading: true
    }))

    this.props.fetchInitialData(lang)
      .then((repos) => this.setState(() => ({
        repos,
        loading: false,
      })))
  }
  render() {
    const { loading, repos } = this.state

    if (loading === true) {
      return <p>LOADING2</p>
    }

    return (
      <ul style={{display: 'flex', flexWrap: 'wrap'}}>
        {repos.length && repos.map(({ name, owner, stargazers_count, html_url }) => (
          <li key={name} style={{margin: 30}}>
            <ul>
              <li><a href={html_url}>{name}</a></li>
              <li>@{owner.login}</li>
              <li>{stargazers_count} stars</li>
            </ul>
          </li>
        ))}
      </ul>
    )
  }
}

export default Item

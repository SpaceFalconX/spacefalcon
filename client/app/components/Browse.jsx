import React from 'react';
import Post from './Post.js'
import {connect} from 'react-redux';
import {fetchCategories} from '../actions/category_actions.js'
import { fetchPostsFromDb, filterPostsFromDb, clearPosts} from '../actions/post_actions.js'


class Browse extends React.Component {
  constructor (props) {
    super()
    this.state = {
      filter: [],
      filtering: false
    }
    //if filter is off, then clear and render all 
    //if filter is on, concat
  }

  filter (e) {
    e.preventDefault()
    let search = this.props.categories.filter((category) => {
      return this.refs.search.value === category.name
    })[0]
    //todo - if search.length === 0 then dispatch a different filter to filter by tag instead
    if(!this.state.filtering){
      this.props.dispatch(clearPosts()) //clear initial all results to prevent dupes
      this.setState({filtering: true})
    }
    if(this.state.filter.indexOf(this.refs.search.value) === -1){
      this.props.dispatch(filterPostsFromDb(search.id))
    }
    this.setState({filter: this.state.filter.concat(this.refs.search.value)})
    this.refs.search.value = "";
  }

  componentWillMount() {
    if(this.props.allPosts.length === 0){
      this.props.dispatch(fetchPostsFromDb())
    }
    if(this.props.categories.length === 0) {
      this.props.dispatch(fetchCategories());
    }
  }

  clearFilter () {
    this.setState({filter: [], filtering: false})
    this.props.dispatch(fetchPostsFromDb())
  }

  filterTags () {
    if(!this.state.filter.length) {
      return
    }
    return this.state.filter.map((tag) => {
      return (
        <div key={tag}>{tag}</div>
      )
    }).concat(<div key="clear" onClick={this.clearFilter.bind(this)}>CLEAR</div>)
  }

  render () {
    console.log(this.props)
    let sorted = this.props.allPosts.sort((a,b) => {
      return a.id < b.id
    })
    return (
      <div className="col-md-6" >
        <h1>browse</h1>
            <div className="input-group">
              <span>search</span>
              <form onSubmit={this.filter.bind(this)}>
              <input ref='search' placeholder='filter by category' type="text" />
              <button>search</button>
              </form>
            </div>

            {this.filterTags()}
            <div className='container'>

              { sorted.map((post) => {
                  return (
                    <Post key={post.id} post={post} contextUser={this.props.user.username} />
                  )
                })
              }
            </div>
      </div>
    )
  }
}

export default Browse;
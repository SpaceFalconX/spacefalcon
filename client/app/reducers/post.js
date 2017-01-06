
export function createPost (state, action) {
	switch(action.type) {
		case 'CREATE_NEW_POST':
			return true;
		default :
			return false;
	}
	return false;
}

export function posts (state=[], action) {
	//todo -> set state default to seed js
	// change params
	switch(action.type) {
		// case 'CREATE_NEW_POST':
		// 	return Obj.assign({}, ...state);
		case 'UPDATE_POST':
			return state.map((post) => {
					if(parseInt(post.post_id) !== parseInt(action.updatedPost.post_id)) {
						return post
					}
					return {
						title: action.updatedPost.title,
						content: action.updatedPost.content,
						category: action.updatedPost.category,
						username: action.updatedPost.username,
						user_id: action.updatedPost.user_id,
						post_id: action.updatedPost.post_id
					}
					return post
			})
		case 'DELETE_POST':
			return state.filter((post) => {
				if(parseInt(post.post_id) !== parseInt(action.deletedPost.post_id)) {
					return post
				}
			})
		case 'FETCH_POSTS':
		  console.log('inside reducer...', state, action.fetchedPosts)
		  return [...state, ...action.fetchedPosts]
		default :
			return state;
	}
	return state;
}




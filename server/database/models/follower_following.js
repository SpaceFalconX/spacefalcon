const db = require('../config.js');
const User = require('./user.js')
const Follower_following = db.Model.extend({
  tableName: 'followers_following',
})

module.exports = db.model('Follower_following', Follower_following);


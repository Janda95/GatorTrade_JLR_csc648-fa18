// Export all DB related modules to the rest of application
module.exports = {
  Search: require('./search'),
  Item: require('./items'),
  User: require('./user'),
  Admin: require('./admin')
};
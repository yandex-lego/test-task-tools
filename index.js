var GitHubApi = require("github")


/**
 * @class PRUpdater
 * @param {string} token
 */
function PRUpdater(githubToken) {
  this._github = new GitHubApi({
    version: '3.0.0'
  })
  this._github.authenticate({
    type: 'token',
    token: githubToken,
  })
}

/**
 * @param {number} prId
 * @param {string} section
 * @param {string} text
 */
PRUpdater.prototype.add = function (prId, section, text) {}

/**
 * @param {number} prId
 * @param {string} section
 * @param {string} text
 */
PRUpdater.prototype.change = function (prId, section, text) {}

/**
 * @param {number} prId
 * @param {string} section
 */
PRUpdater.prototype.get = function (prId, section) {}

/**
 * @param {number} prId
 * @param {string} section
 */
PRUpdater.prototype.delete = function (prId, section) {}

/**
 * @param {number} prId
 */
PRUpdater.prototype.clear = function (prId) {}


module.exports = PRUpdater

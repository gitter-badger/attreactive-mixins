/**
 * AttrEactive Mixins
 */

var LinkedStateMixin = {
  linkState: function(key, callback) {
    return {
      value: this.state[key],

      requestChange: function(value) {
        var newState = {};
        newState[key] = value;
        this.setState(newState);

        if (callback) {
          callback(value);
        }
      }.bind(this)
    };
  }
};

module.exports = LinkedStateMixin;

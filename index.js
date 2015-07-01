var DS = require('dslink');

var Increment = DS.createNode({
  onInvoke: function(columns) {
    // TODO: Support for columns.amount, requires bugfix.
    var previous = link.getNode('/counter').lastValueUpdate.value;
    link.getNode('/counter').updateValue(previous + 1);
  }
});

// Process the arguments and initializes the default nodes.
var link = new DS.LinkProvider(process.argv.slice(2), 'javascript-template-', {
  defaultNodes: {
    counter: {
      $type: 'int',
      '?value': 0
    },
    increment: {
      // references the increment profile, which makes this node an instance of
      // our Increment class
      $is: 'increment',
      $invokable: 'write',
      $columns: [
        {
          name: 'amount',
          type: 'int',
          default: 1
        }
      ]
    }
  },
  profiles: {
    increment: function(path) {
      return new Increment(path);
    }
  }
});

// Connect to the broker.
// link.connect() returns a Promise.
link.connect().catch(function(e) {
  console.log(e.stack);
});

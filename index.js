var DS = require('dslink');

// creates a node with an action on it
var Increment = DS.createNode({
  onInvoke: function(columns) {
    // get current value of the link
    var previous = link.val('/counter');

    // set new value by adding an amount to the previous amount
    link.val('/counter', previous + parseInt(columns.amount));
  }
});

// Process the arguments and initializes the default nodes.
var link = new DS.LinkProvider(process.argv.slice(2), 'template-javascript-', {
  defaultNodes: {
    // counter is a value node, it holds the value of our counter
    counter: {
      $type: 'int',
      '?value': 0
    },
    // increment is an action node, it will increment /counter
    // by the specified amount
    increment: {
      // references the increment profile, which makes this node an instance of
      // our Increment class
      $is: 'increment',
      $invokable: 'write',
      // $params is the parameters that are passed to onInvoke
      $params: [
        {
          name: 'amount',
          type: 'int',
          default: 1
        }
      ]
    }
  },
  // register our custom node here as a profile
  // when we use $is with increment, it
  // creates our Increment node
  profiles: {
    increment: function(path, provider) {
      return new Increment(path, provider);
    }
  }
});

// Connect to the broker.
// link.connect() returns a Promise.
link.connect().catch(function(e) {
  console.log(e.stack);
});

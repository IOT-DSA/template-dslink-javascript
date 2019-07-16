const {DSLink, RootNode, ValueNode, Permission} = require("dslink");

class MyValueNode extends ValueNode {
  constructor(path, provider) {
    super(path,          // pass path to base class
      provider,          // pass provider to base class
      'myvalue',         // $is = myvalue
      'number',          // value type
      Permission.WRITE   // minimal permission required to set the value (optional)
    );
    this._value = 123;
  }
}

function main() {
  // create a root node
  let rootNode = new RootNode();

  // add child to root
  rootNode.createChild('value', MyValueNode);

  // create the link
  let link = new DSLink('mydslink', {rootNode});

  link.connect();
}

main();

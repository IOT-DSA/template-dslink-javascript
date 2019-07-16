const { DSLink, RootNode, ValueNode} = require("dslink");

class MyValueNode extends ValueNode {
  constructor(path, provider) {
    super(path, provider, 'myvalue', 'number');
    this._value = 123;
  }
}

class MyRootNode extends RootNode {
  initialize() {
    this.createChild('value', MyValueNode);
  }
}

async function main() {
  let link = new DSLink('mydslink', {rootNode: new MyRootNode()});
  await link.connect();
}

main();

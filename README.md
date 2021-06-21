# template-dslink-javascript
A template to kickstart creating a DSLink using the JavaScript SDK.

## Install nodejs
please install nodejs version 10 or higher before installing the dslink

https://nodejs.org/en/download/package-manager/

## Creating zip package

creating a zip with these files so you can install it to the dsa broker through the sys action at `/sys/links/Install from Zip`

- dslink.json
- package.json
- install.js
- index.js
- any other js file you created

## Creating zip package with npm dependencies

creating a zip with these files so you can install it to the dsa broker through the sys action at `/sys/links/Install from Zip`

- dslink.json
  - remove line 10 from the file before zipping, `"node install.js"`
- package.json
- node_modules folder
- index.js
- any other js file you created

## Creating nodes

Please check these examples of responder dslink:

https://github.com/IOT-DSA/sdk-dslink-ts/tree/master/example/nodejs-responder

## Accessing other dslinks

Examples of requester dslink:

https://github.com/IOT-DSA/sdk-dslink-ts/tree/master/example/nodejs-requester

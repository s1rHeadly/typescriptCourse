/**
 * 
 * https://www.typescriptlang.org/
 * 
 *  1 - npm install -g typescript@5.8'
 *  3- tsc --init // to create a tsconfig.json file
 *  This file is used to configure the TypeScript compiler"
 *  3-  tsc --watch // to watch for changes globally and compile automatically
 *  4 - tsc -w path.tofile.ts // to watch for changes in that file only and compile automatically
 *  5.-tsc can run and compile all files in the current directory
 * 
 * 
 * 
 * TS CONFIG
 * 
 * https://www.typescriptlang.org/tsconfig/
 * 
 * 
 * - : compile only a subet of files
 * ...
 * 
 * 
 * 
 * 
 * 
 * 
 * updated scripts with the npm package concurrently to run the watch and lite-server commands concurrently
 * 
 * {
  "name": "section12",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "concurrently \"npm run watch\" \"lite-server\"", => here we are running the watch and lite-server commands concurrently together with npm run start
    "watch": "tsc --watch",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "dependencies": {
    "lite-server": "^2.6.1"
  },
  "devDependencies": {
    "concurrently": "^8.2.2"
  }
}



*/
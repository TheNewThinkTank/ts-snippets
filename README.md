# ts-snippets
Reusable recipes for TypeScript

## Installation (OSX)
```BASH
brew install node<br/>
npm install -g typescript<br/>
tsc --version<br/>
npm install -g ts-node
```

## How to run a TypeScript program
### First compile into JavaScript
tsc some_file.ts --target ES5

### Or watch any TypeScript file
tsc *.ts --watch --target ES5

### Then run the compiled JavaScript
node some_file.js

### Or all at once
ts-node some_file.ts

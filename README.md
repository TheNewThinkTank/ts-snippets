# ts-snippets
Reusable recipes for TypeScript

## Installation (OSX)
```BASH
brew install node
npm install -g typescript
tsc --version
npm install -g ts-node
```

## How to run a TypeScript program
### First compile into JavaScript
```BASH
tsc some_file.ts --target ES5
```

### Or watch any TypeScript file
```BASH
tsc *.ts --watch --target ES5
```

### Then run the compiled JavaScript
```BASH
node some_file.js
```

### Or all at once
```BASH
ts-node some_file.ts
```

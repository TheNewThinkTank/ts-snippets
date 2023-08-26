![CI](https://github.com/TheNewThinkTank/ts-snippets/actions/workflows/wf.yml/badge.svg)
[![GitHub repo size](https://img.shields.io/github/repo-size/TheNewThinkTank/ts-snippets?style=flat&logo=github&logoColor=whitesmoke&label=Repo%20Size)](https://github.com/TheNewThinkTank/ts-snippets/archive/refs/heads/main.zip)
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
tsc some_file.ts --target ES6
```

### Or watch any TypeScript file
```BASH
tsc *.ts --watch --target ES6
```

### Then run the compiled JavaScript
```BASH
node some_file.js
```

### Or all at once
```BASH
ts-node some_file.ts
```

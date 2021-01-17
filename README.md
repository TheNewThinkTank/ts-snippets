# ts-snippets
Reusable recipes for TypeScript

## Installation (OSX)
brew install node<br/>
npm install -g typescript<br/>
tsc --version<br/>
npm install -g ts-node

## How to run a TypeScript program:
### First compile into JavaScript:<br/>
tsc dna_to_rna.ts --target ES5

### Or watch any TypeScript file:
tsc *.ts --watch --target ES5

### Then run the compiled JavaScript:
node dna_to_rna.js

### Or all at once:
ts-node dna_to_rna.ts

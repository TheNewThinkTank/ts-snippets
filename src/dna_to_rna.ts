export class DNAtoRNA {

}

const map = { T: 'A', A: 'U', C: 'G', G: 'C' }

let DNA: string = 'AACT'
let RNA: string = ''

// Using for loop
for (let i=0; i < DNA.length; i++) {
  RNA += map[DNA[i]]
}

console.log('RNA is: ' + RNA)

// Using forEach loop
let DNA: string[] = ['A', 'A', 'C', 'T']
let RNA: string = ''

DNA.forEach(function (value) {
    RNA += map[value]
});

console.log('RNA is: ' + RNA)

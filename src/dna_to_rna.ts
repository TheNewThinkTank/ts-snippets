
export class DNAtoRNA {

}

var map = {"T": "A", "A": "U", "C": "G", "G": "C"};

var DNA: string = "AACT";
var RNA: string = "";

for (let i=0; i < DNA.length; i++) {
  RNA += map[DNA[i]]
}

console.log("RNA is: " + RNA)

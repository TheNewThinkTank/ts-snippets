
export class DNAtoRNA {

}

var map = {"T": "A", "A": "U", "C": "G", "G": "C"};

var DNA: string = "AACT";
var RNA: string = "";


// Using for loop
for (let i=0; i < DNA.length; i++) {
  RNA += map[DNA[i]]
}

console.log("RNA is: " + RNA)


// Using forEach loop
var DNA: string[] = ["A", "A", "C", "T"];
var RNA: string = "";

DNA.forEach(function (value) {
    RNA += map[value]
});

console.log("RNA is: " + RNA)

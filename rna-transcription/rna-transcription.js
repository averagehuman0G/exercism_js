var DnaTranscriber = function () {}
DnaTranscriber.prototype.toRna = function (dnaStrand) {
	var rna = "";
	var invalid = /[^GCTA]/i;
	var dnaToRna = {
		"G": "C",
		"C": "G",
		"T": "A",
		"A": "U"

	};

	for( var i = 0; i < dnaStrand.length; i++ ) {
		if(dnaStrand.match(invalid)) {
			throw new Error("Invalid input");
		}
		
		//transcribe an entire Dna string to Rna
		rna += dnaToRna[dnaStrand[i]];
	}
	return rna;

}
module.exports = DnaTranscriber;

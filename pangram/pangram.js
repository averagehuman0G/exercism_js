function Pangram(str) {
	this.str = str;
	this.alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
}

Pangram.prototype.isPangram = function () {
	//this can be solved with simple lookahead using regular expressions
//	var pangramCheck = //i;
//	if(this.str.match(pangramCheck)) {
//		return true;
//	}
//	return false;
	if(this.str.length < 26) return false;


	//check whether the letter has been used (store it in the function as a property)
	//turn the characters lowercase

	var toBeChecked = this.str.toLowerCase();
	//iterate over the string
	//check to see if the ascii value equals a value in the string
	//if it does then we could add to the lettersUsed
	//we would have to translate the characters in the string to askey values
	for(var i = 0; i < toBeChecked.length; i++) {
		for( var j = 0; j < this.alphabet.length; j++ ) {
			if(toBeChecked[i] === this.alphabet[j]) {

				this.alphabet.splice(j, 1);
			}
		}
	}

	return this.alphabet.length === 0;

}
	//we could either match knowing the ascii value or having to match the letters
	//it should have 26 entries
	// if the length of the array is 26 then return true else return false
	

module.exports = Pangram;

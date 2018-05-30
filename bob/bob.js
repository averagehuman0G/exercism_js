function Bob(){

}

Bob.prototype.hey = function(str) {
	if( str.length === 0 || str.match(/^\s+$/)  ) return 'Fine. Be that way!';
	// this was the first reg exp tried --> /[A-Z]+$\d+?/
	// second try /[^a-z]+$/ 
	else if(str === str.toUpperCase()) {
		if(str.match(/^\d+/)) {
			if(str.match(/\?$/)) return 'Sure.';
			else if(str.match(/\d+.*\d+$/)) return 'Whatever.';
			return 'Whoa, chill out!';
		}
		else return 'Whoa, chill out!';
	}
	else if(str.match(/\?$/)) return 'Sure.';
	else if(str.match(/^[À-Ÿ]+$/)) return 'Woah, chill out!';
	else return 'Whatever.';
	
}

module.exports = Bob;

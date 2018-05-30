var Hamming = function () {};

Hamming.prototype.compute = function(strandA, strandB) {
	console.log(strandA, strandB);
	 // if tdhe string is the same length then check if they match
	var distance = 0;
	if( strandA === strandB ) {
		console.log('they are the same strand');			
		return distance;
		
	} else if (strandA.length != strandB.length) { 
		throw new Error('DNA strands must be of equal length.');
	} else {
		//loop through each string and every time you have a mismatch add to a counter
		console.log('we got to the else condition');
		for(var i = 0; i < strandA.length; i++) {
			console.log('we have looped ' + i + 'times');
			console.log('comparing ' + strandA[i] + ' to ' + strandB[i]);	
			if(strandA[i] != strandB[i]) {
				distance++;
			}
		}
		return distance;

	}

}



module.exports = Hamming;

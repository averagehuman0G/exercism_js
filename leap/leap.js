//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
//
// YOUR CODE GOES HERE
// 
	this.year = input; 
};

Year.prototype.isLeap = function() {
//
// YOUR CODE GOES HERE
//
	//return this.year % 4 === 0 && this.year % 100 != 0 ? this.year % 400 === 0 ? true : false : false;
	
	
	if ( this.year % 100 === 0 )  {
		if ( this.year % 400 === 0 ) return true;
		return false; 
	}
	if( this.year % 4 === 0 ) return true;
	return false;	
};

module.exports = Year;

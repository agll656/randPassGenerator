var keyWord= "abcdefghijklmnopqrstuvwxyz1234567890@#$";
var tmp= "";

function generatepass(plength){
	tmp= ""
	for(i=0; i<plength; i++){
		tmp+= keyWord[Math.floor(Math.random()*keyWord.length)]
			}
	return tmp;
		}

function populateform(enterlength){
	document.passGen.output.value= generatepass(enterlength);
}
		
		
		
	
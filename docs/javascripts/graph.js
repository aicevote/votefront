/**zennbu**/
function chart() {
	var date = new Date() ;
	var data_1 = date.getTime() ;
	var now = Math.floor( data_1 / 1000 ) ;

	var sum  = function(arr) {
	    var sum = 0;
	    arr.forEach(function(elm) {
	        sum += elm;
	    });
	    return sum;
	};
	var a_array =[];
	var b_array =[];

	for(let i = 0; i < lst.length; i++) {
		if(i % 2 == 0){
			value = lst[i];
			key = lst[i+1];
			if (value=="A"){
			    var a = (now-key)/86400;
			    var a_per = (16*a**2 + 65)/(a**4 + 16*a**2 + 65);
			    a_array.push(a_per);
			}else{
			    var b = (now-key)/86400;
			    var b_per = (16*b**2 + 65)/(b**4 + 16*b**2 + 65);
			    b_array.push(b_per);
			};
		}else{
			continue;
		}
	}

	var a_point = sum(a_array);
	var b_point = sum(b_array);
	var a_last = Math.round(100 * a_point / (a_point + b_point))
	return a_last;
};

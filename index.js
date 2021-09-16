/alert("Hello, World - Alert!");

1.
alert("Hello World - Console!");
2.
*var today = new Date();
var hour = today.getHours();
  var minute = today.getMinutes();
console.log(hour+ " : " + minute);

//3.

    let a = Number(prompt("Enter first number"));
    let b = Number(prompt("Enter second number"));
    let result = a+b;
    alert(result);

//4.

    let a = Number(prompt("Enter first number"));
	//if (a != Number ) {
   // alert("error for the first input!"  );
	//}
	try {
    if(a == "") throw "empty";
    if(isNaN(a)) throw "not a number";
    a = Number(a);
		}
	catch(err) {
			alert("error for the first input!"  );
	}
	
    let b = Number(prompt("Enter second number"));
	try {
    if(b == "") throw "empty";
    if(isNaN(b)) throw "not a number";
    b = Number(b);
	}
	catch(err) {
    alert("error for the second input!"  );
	}
    
    let result = a+b;
    alert(result);
	
//5.

	let s = (prompt("Enter the word"));
	console.log(s);
	
    for (let char of s) {
    console.log(char); 
    }
	
			
 //6.   

   let s = (prompt("Enter the text"));
   var withoutSpaceS = s ;
   var withoutSpace = s.replace(/ /g,"");
    console.log(withoutSpaceS+" has "+withoutSpace.length+ " letter");

 //7. 
 
	let s = (prompt("Enter the text"));
	function reverseString(rs){
    return rs.split("").reverse().join("");
}
	console.log(reverseString(s));
	
 //8.	
	
	let a = Number(prompt("Enter the number"));
		try {
    if(a == "") throw "empty";
    if(isNaN(a)) throw "not a number";
    a = Number(a);
		}
	catch(err) {
			alert("invalid number!"  );
	}
			
        
	sum = 0
    for (let i = 1; i <= a; i++) {
        if (i % 2 != 0)			{
             sum=sum+i;
			console.log(i);
        }
		
   };
	
    console.log(`Sum :  ${sum}`);
		

	
	
	
	
	
	
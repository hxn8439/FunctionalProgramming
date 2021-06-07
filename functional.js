/*Name: Hamilton Nguyen
*1000ID: 1000538439
*Due Date: 2/24/2021 at 2000 hours
*/

//***NOTE: ALL ARRAYS ARE ONE DIMENSIONAL ARRAY.***
//1.(5 points) Start with an array called inputtable. The array should have numbers between 1 and 10.    

//CREATE ARRAY NAME INPUTTABLE
var inputtable = [];

// CREATE A RECURSION FUNCTION, WITH PARAMETERS, NAME GENERATE TO GENERATE ELEMENT VALUES IN THE ARRAY. 
function generate(a, b) 
{
	//INITIALIZE VARIABLE i AND SET IT TO ZERO, THIS VALUE WILL BE USE TO INCREMENT ARRAY ELEMENTS
	i = 0;
	
	// CREATE A WHILE LOOP WITH CONDITIONAL PARAMETERS TO GENERATE VALUES IN THE ARRAY.
	while(a <= b) 
	{
		// PUSH VALUES ON TO A STACK OF INPUTTABLE ARRAY AND INCREMENT VALUES 
		inputtable.push(a);
		i += 1;
		a += 1;
	};
	
	//RETURN ARRAY 
	return inputtable; 
}

//USE CONSOLE.LOG TO DISPLAY THE EXECUTED FUNCTION GENERATE WITH Arguements. CONSOLE.LOG IS NOT STATED IN THE TEXTBOOK BUT STATED USING GOOGLE DEVELOPER MANUAL FOR USING CHROME DEVELOPER CONSOLE.
//USE CONSOLE.LOG IS ALSO A STANDARD FOR USING ECLIPSE IDE 2020-12 JAVASCRIPT COMPILER WITH TYPESCRIPT PLUGIN. 
console.log(generate(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//2.(30 points) Use inputtable from step 1 to create the following: - 

//a.	Set of multiples of 5 between 1 and 51. Name it fiveTable

//CREATE A RECURSION FUNCTION, WITH PARAMETERS, NAME FIVEMULT TO GENERATE ELEMENT VALUES IN THE ARRAY. VALUES ARE IN MULTIPLES OF 5
function fiveMult(a, b) 
{
	//CREATE ARRAY NAME FIVETABLE
	var fiveTable = [];
	
	//INITIALIZE VARIABLE i AND SET IT TO ZERO, THIS VALUE WILL BE USE TO INCREMENT ARRAY ELEMENTS OF INPUTTABLE
	i = 0;
	
	// CREATE A WHILE LOOP WITH CONDITIONAL PARAMETERS TO GENERATE VALUES IN THE FIVETABLE ARRAY.
	while(a <= b) 
	{
		// PUSH VALUES ON TO A STACK OF FIVETABLE ARRAY AND INCREMENT VALUES. USE INPUTTABLE ELEMENTS AND CREATE MULTIPLES OF FIVE. 
		fiveTable.push(inputtable[i]*5);
		i += 1;
		a += 5;
	};
	
	//RETURN ARRAY 
	return fiveTable;
}

//USE CONSOLE.LOG TO DISPLAY THE EXECUTED FUNCTION WITH Arguements. CONSOLE.LOG IS NOT STATED IN THE TEXTBOOK BUT STATED USING GOOGLE DEVELOPER MANUAL FOR USING CHROME DEVELOPER CONSOLE. 
//USE CONSOLE.LOG IS ALSO A STANDARD FOR USING ECLIPSE IDE 2020-12 JAVASCRIPT COMPILER WITH TYPESCRIPT PLUGIN. 
console.log(fiveMult(1, 51)); // [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, NaN]


//b.	Set of multiples of 13 between 1 and 131. Name it thirteenTable

//CREATE A RECURSION FUNCTION, WITH PARAMETERS, NAME THIRTEENMULT TO GENERATE ELEMENT VALUES IN THE ARRAY. VALUES ARE IN MULTIPLES OF 13
function thirteenMult(a, b) 
{
	//CREATE ARRAY NAME THIRTEENTABLE
	var thirteenTable = [];
	
	//INITIALIZE VARIABLE i AND SET IT TO ZERO, THIS VALUE WILL BE USE TO INCREMENT  inputtable ARRAY ELEMENTS
	i = 0;
	
	// CREATE A WHILE LOOP WITH CONDITIONAL PARAMETERS TO GENERATE VALUES IN THE thirteenTABLE ARRAY.
	while(a <= b) 
	{
		// PUSH VALUES ON TO A STACK OF thirteentable ARRAY AND INCREMENT VALUES. USE INPUTTABLE ELEMENTS AND CREATE MULTIPLES OF thirteen.
		thirteenTable.push(inputtable[i]*13);
		i += 1;
		a += 13;
	};
	
	//RETURN ARRAY 
	return thirteenTable;
}

//USE CONSOLE.LOG TO DISPLAY THE EXECUTED FUNCTION WITH Arguements. CONSOLE.LOG IS NOT STATED IN THE TEXTBOOK BUT STATED USING GOOGLE DEVELOPER MANUAL FOR USING CHROME DEVELOPER CONSOLE. 
//USE CONSOLE.LOG IS ALSO A STANDARD FOR USING ECLIPSE IDE 2020-12 JAVASCRIPT COMPILER WITH TYPESCRIPT PLUGIN. 
console.log(thirteenMult(1, 131)); // [13, 26, 39, 52, 65, 78, 91, 104, 117, 130, NaN]

//c.	Set of squares of the numbers in inputtable. Name it squaresTable

//CREATE A RECURSION FUNCTION, WITH PARAMETERS, NAME SQUARES TO GENERATE ELEMENT VALUES IN THE ARRAY. VALUES ARE SQUARES OF THE INITIAL ELEMENT VALUE
function squares(i, b) 
{
	//CREATE ARRAY NAME SQUARESTABLE
	var squaresTable = [];
	
	// CREATE A WHILE LOOP WITH CONDITIONAL PARAMETERS TO GENERATE VALUES IN THE squaresTABLE ARRAY.
	while(i <= b) 
	{
		// PUSH VALUES ON TO A STACK OF squaresTABLE ARRAY AND INCREMENT VALUES. USE INPUTTABLE ELEMENTS AND CREATE MULTIPLES OF square elements.
		squaresTable.push(inputtable[i]*inputtable[i]);
		i += 1;
	};
	
	//RETURN ARRAY 
	return squaresTable;
}

//USE CONSOLE.LOG TO DISPLAY THE EXECUTED FUNCTION WITH Arguements. CONSOLE.LOG IS NOT STATED IN THE TEXTBOOK BUT STATED USING GOOGLE DEVELOPER MANUAL FOR USING CHROME DEVELOPER CONSOLE. 
//USE CONSOLE.LOG IS ALSO A STANDARD FOR USING ECLIPSE IDE 2020-12 JAVASCRIPT COMPILER WITH TYPESCRIPT PLUGIN. 
console.log(squares(0, 9)); //[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

//3.	(10 points) Get the odd multiples of 5 between 1 and 100. 5, 15, … 

//CREATE A RECURSION FUNCTION, WITH PARAMETERS, NAME FIVEMULTODD TO GENERATE ELEMENT VALUES IN THE ARRAY. VALUES ARE IN MULTIPLES OF 5 BUT FILTERED OUTPUT TO ONLY ODDS
function fiveMultOdd(a, b) 
{
	//CREATE ARRAY NAME fiveOdd
	var fiveOdd = [],
	
	//INITIALIZE VARIABLE i AND SET IT TO math.floor function to calculate and filter out odd numbers in multiples of five, THIS VALUE WILL BE USE TO INCREMENT ARRAY ELEMENTS
	i = Math.floor(a / 2) * 2 + 1; 

	// CREATE A WHILE LOOP WITH CONDITIONAL PARAMETERS TO GENERATE VALUES IN THE FIVEodd ARRAY.
	while(i <= b) 
	{
		// PUSH VALUES ON TO A STACK OF FIVEODD ARRAY AND INCREMENT VALUES. USE i values to input as elements AND increment in multiples of 10.
		fiveOdd.push(i);
		i += 10;
	};
	
	//RETURN ARRAY 
	return fiveOdd;
}

//USE CONSOLE.LOG TO DISPLAY THE EXECUTED FUNCTION WITH Arguements. CONSOLE.LOG IS NOT STATED IN THE TEXTBOOK BUT STATED USING GOOGLE DEVELOPER MANUAL FOR USING CHROME DEVELOPER CONSOLE. 
//USE CONSOLE.LOG IS ALSO A STANDARD FOR USING ECLIPSE IDE 2020-12 JAVASCRIPT COMPILER WITH TYPESCRIPT PLUGIN. 
console.log(fiveMultOdd(5, 100)); //[5, 15, 25, 35, 45, 55, 65, 75, 85, 95]

//4.	(20 points) Get the sum of even multiples of 7 between 1 and 100. 
//a.	Example, find the multiples and then sum them: 14 + 28+… 

//CREATE A RECURSION FUNCTION, WITH PARAMETERS, NAME SEVENSUMEVEN TO GENERATE ELEMENT VALUES IN THE ARRAY. VALUES ARE IN MULTIPLES OF TWO SUMS USING SEVEN.
function sevensumeven(a, b) 
{
	//CREATE ARRAY NAME sevenmult
	var sevenmult = [];
	
	//variable assignment a variable and start initial addition at 13
	a = a+13;
	
	// CREATE A WHILE LOOP WITH CONDITIONAL PARAMETERS TO GENERATE VALUES IN THE sevenmult ARRAY.
	while(a <= b) 
	{
		// PUSH VALUES ON TO A STACK OF sevenmult ARRAY AND INCREMENT VALUES using a as variable assignment.
		sevenmult.push(a);
		
		//variable assignment for variable a as autoincrement itself.
		a += a;
	};
	
	//RETURN ARRAY 
	return sevenmult;
}

//CREATE A simple FUNCTION, WITH PARAMETERS, NAME add TO sum ELEMENT VALUES.
var add = function (a,b) 
{
	//initialize v variable and add two parameter variables togethers.
	var v = a + b;
	
	//return variable v.
	return v;
};

//initialized result variable to fetch a return array with value elements.
var result = sevensumeven(1, 100);

//initialized sum and perform add function using result variable to sum all elements in the array.
var sum = result.reduce(add, 0);

//USE CONSOLE.LOG TO DISPLAY THE value of variable. CONSOLE.LOG IS NOT STATED IN THE TEXTBOOK BUT STATED USING GOOGLE DEVELOPER MANUAL FOR USING CHROME DEVELOPER CONSOLE. 
//USE CONSOLE.LOG IS ALSO A STANDARD FOR USING ECLIPSE IDE 2020-12 JAVASCRIPT COMPILER WITH TYPESCRIPT PLUGIN. 
console.log(sum); //98

//5.	(15 points) Use currying to rewrite the function below: -
//Use r = 5 and h = 10 to call your curried function.

//CREATE A CURRY FUNCTION, WITH NESTED PARAMETERS, NAME CURRYING TO GENERATE INDIVIDUALIZED PARAMENTERS FOR OTHER FUNCTIONS USING TWO INPUT R AND H.
function currying(f)
{
	//RETURN nested function with parameter r.
	return function(r)
	{
		//RETURN nested function with parameter h.
		return function(h)
		{
			//RETURN nested function with parameters.
			return f(r,h);
		};
	};
};

//CREATE A SIMPLE FUNCTION, WITH PARAMETERS, NAME CYLINDER_VOLUME TO CALCULATE CYLINDER VOLUME. VALUES ARE USED BASED ON RADIUS AND HEIGHT. Exact function used as stated in the problem.
function cylinder_volume(r, h)
{
	//initial variable volume and set it to zero.
	var volume = 0.0;
	
	// do variable assigment to volume and set it using value Pi with three significant figures and multiply two r variable and 1 h variable.
	volume = 3.14 * r * r * h;
	
	//RETURN variable volume
	return volume;
};

// transform cylinder function and into a curriedVolume which make its an individualized arguements. 
 curriedVolume = currying(cylinder_volume);

//USE CONSOLE.LOG TO DISPLAY THE EXECUTED FUNCTION WITH Arguements. CONSOLE.LOG IS NOT STATED IN THE TEXTBOOK BUT STATED USING GOOGLE DEVELOPER MANUAL FOR USING CHROME DEVELOPER CONSOLE. 
//USE CONSOLE.LOG IS ALSO A STANDARD FOR USING ECLIPSE IDE 2020-12 JAVASCRIPT COMPILER WITH TYPESCRIPT PLUGIN. 
console.log(curriedVolume(5)(10)); //785

//6.	(15 points) Use the following code to take advantage of closures to wrap content with 
//HTML tags, specifically show an HTML table consisting of a table row that has at least one 
//table cell/element. You can use the console to output your results.
//makeTag = function(beginTag, endTag)
//{
//	return function(textcontent)
//	{
//		return beginTag +textcontent +endTag;
//	};
//};

//CREATE A CURRY FUNCTION, WITH NESTED PARAMETERS, NAME MAKETAG TO GENERATE INDIVIDUALIZED PARAMENTERS FOR OTHER FUNCTIONS USING THREE INPUT BEGINTAG, TEXTCONTENT, AND ENDTAG.
function makeTag(f)
{
	//RETURN nested function with parameter beginTag.
	return function(beginTag)
	{
		//RETURN nested function with parameter endTag.
		return function(endTag)
		{	
			//RETURN nested function with parameter textcontent.
			return function(textcontent)
			{
				//RETURN nested function with parameters.
				return f(beginTag,endTag, textcontent);
			};
		};
	};
};

//CREATE A SIMPLE FUNCTION, WITH PARAMETERS, NAME STRUCTURE TO CONCATENATE STRINGS. STRING VALUES ARE USED BELOW.
function structure(beginTag, textcontent, endTag)
{
	//use concat variable to concat parameter values
	concat = beginTag+ textcontent+ endTag;
	
	//RETURN variable concat
	return concat;
}

//transform structure function ,using curry makeTag function, and into a curriedTag which make its an individualized arguements. 
curriedTag = makeTag(structure);

//initalizations of various variables for Headers information and metadata of individuals.
var string = curriedTag('<th>')('Firstname')('</th>');
var string1 = curriedTag('<th>')('Lastname')('</th>');
var string2 = curriedTag('<th>')('Age')('</th>');

var data = curriedTag('<td>')('Jeanett')('</td>');
var data1 = curriedTag('<td>')('Trevino')('</td>');
var data2 = curriedTag('<td>')('33')('</td>');

var data3 = curriedTag('<td>')('bob')('</td>');
var data4 = curriedTag('<td>')('smith')('</td>');
var data5 = curriedTag('<td>')('500')('</td>');

//initalizations of various variables for concatenating previous variables.
var chunk = string+"\n"+string1+"\n"+string2;
var chunk1 = data+"\n"+data1+"\n"+data2;
var chunk2 = data3+"\n"+data4+"\n"+data5;

//initalizations of various variables for concatenating previous trTag variables.
var tdTag = curriedTag('<tr>\n')(chunk)('\n</tr>');
var tdTag1 = curriedTag('<tr>\n')(chunk1)('\n</tr>');
var tdTag2 = curriedTag('<tr>\n')(chunk2)('\n</tr>');

//initalizations of various variables for concatenating previous tdtag variables.
var combine = tdTag+"\n"+tdTag1+"\n"+tdTag2;

//initalizations of table variable for concatenating combine variable with string table tags.
var table = curriedTag('\n<table>\n')(combine)('\n</table>\n');

//USE CONSOLE.LOG TO DISPLAY THE EXECUTED FUNCTION. CONSOLE.LOG IS NOT STATED IN THE TEXTBOOK BUT STATED USING GOOGLE DEVELOPER MANUAL FOR USING CHROME DEVELOPER CONSOLE. 
//USE CONSOLE.LOG IS ALSO A STANDARD FOR USING ECLIPSE IDE 2020-12 JAVASCRIPT COMPILER WITH TYPESCRIPT PLUGIN. 
console.log(table);

//7.(5 points) Following instructions

//All instructions were adhered to the assignment. Please refer to the specification of the assignment for further information. H.Nguyen 02-12-2021


//8.(Extra credit) Do the ‘generic’ version of questions 3 and 4,
//meaning the target multiple must not be hard coded – first odd or even and then the
//number whose multiples (in range 1 to 100) you want.

// Refer back to 3 and 4, it is already a generic version using functions which uses 
//no hard coded data IN THE ARRAY. 


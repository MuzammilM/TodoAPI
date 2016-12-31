var person = {
	name: 'Muzammil',
	age: 21
};
 function updatePerson (obj){
 	/*obj = {
 		name : 'Muzammil',
 		age : 22
 	}*/
 	obj.age = 22;
 };

 updatePerson(person);
 console.log(person);


 // Array Example

 var grades = [15,	88];
 function addGrades (grades){
 	//grades.push(55);
 	grades = [12,	99];
 	debugger;
 	grades.push(55);
 }
grades=addGrades(grades);
console.log(grades);
/* Exercise for lab02 exhibiting encapsulation and inheritance in JavaScript
 *
 * Created by jbu2 for CS336, Fall 2016
 */

"use strict";

function Person(name, dateString, friends) {
	this.myName = name;
	this.birthDate = dateString;
	this.friends = friends;
}

Person.prototype.changeName = function(newName) {
	this.myName = newName;
}

Person.prototype.getAge = function(dateString) {
	var today = new Date();
	var birthdate = new Date(dateString);
	var age = today.getFullYear() - birthdate.getFullYear();
	var m = today.getMonth() - birthdate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
		age--;
	}
	return age;	
}

Person.prototype.addFriend = function(friend) {
	this.friends.push(friend);
}

Person.prototype.greeting = function() {
	return "Hi, I am person " + this.myName;
}

Person.prototype.toString = function() {
	return this.myName;
}

var p1 = new Person("Javin Unger", "1994/11/11", []);
var p2 = new Person("Cotter Koopman", "1996/08/12", []);
var p3 = new Person("Nate Bender", "1995/06/17", []);

console.log(p1.getAge(p1.birthDate));
console.log(p1.greeting());
p1.changeName("Uavin Jnger");
console.log(p1.greeting());
console.log("Friends are: " + p1.friends);
p1.addFriend(p2);
p1.addFriend(p3);
console.log("Now, my friends are: " + p1.friends);

//Student object prototype inherits Person
function Student(name, dateString, friends, subject) {
	Person.call(this, name, dateString, friends);
	this.subject = subject;
}
Student.prototype = Object.create(Person.prototype);

Student.prototype.greeting = function() {
	return "Hi, I am student " + this.myName + " and I study " + this.subject;
}

var s1 = new Student("Javin Unger", "1994/11/11", [], "Computer Science");
console.log(s1.greeting());
console.log(s1 instanceof Student);
console.log(p1 instanceof Person);
console.log(s1 instanceof Person);


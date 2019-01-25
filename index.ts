class Person {
	name:string;
	age:number;
	sayhello(){
		console.log('hi');
	}
}

class Programmer extends Person {
	constructor(name?:string,age?:number){
		super();
		this.name = name;
		this.age = age;
}
	sayhello(){
		console.log('hello');
	}
	sayhelloLikePerson(){
		this.sayhello()
	}
}

let aProgrammer: Person = new Programmer();

aProgrammer.sayhello()
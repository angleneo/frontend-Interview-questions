function Person(name,age){
  this.name = name;
  this.age = age;
}

function Student(sex){
  this.sex = sex
}

function StudentX(num){
  this.num = num
}

Student.prototype = new Person('小明',20)
Student.prototype.constructor = Student;


StudentX.prototype = new Person('小红',25)

let a = new Student('f')

console.log(a.name) // 小明

console.log(Student.prototype)

console.log(Student.prototype.constructor)

console.log(StudentX.prototype)

console.log(StudentX.prototype.constructor)
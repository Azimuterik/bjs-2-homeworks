function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
  return this.subject = subjectName; //добавляет предмет в свойство объекта Student 
}

Student.prototype.addMark = function (mark) {
  
  if(this.marks === undefined){ 
    let marks;
    this.marks = [mark]; //добавить первый элемент в массив
    } else {
      this.marks.push(mark)// добавить вторую и последующие оценки в массив
    }
}

 Student.prototype.addMarks = function (...marks1) { //если добавляется массив объектов сразу
    if(this.marks === undefined){                     //если оценок еще не было
      this.marks = marks1;
      console.log(this.marks)
       
      } else {
        this.marks = [ ...this.marks, ...marks1];  
          //this.marks = [...marks]// добавит массив в массив
      }
  }

  Student.prototype.getAverage = function (marks) {
  
    const result = this.marks.reduce(function(sum, elem) {
      return sum + elem;
    }, 0);
    
   
    return (result / this.marks.length);
     
  }
  
  

  Student.prototype.exclude = function(reason) {
    
      delete this.marks;
      return this.excluded = reason;
    
  }




let student1 = new Student('Den', 'male', '18');
student1.setSubject('Math');
student1.addMark(1);
student1.addMark(2);
// student1.addMark(5);
student1.addMarks(4, 4, 4);

console.log(student1);
console.log(student1.getAverage());
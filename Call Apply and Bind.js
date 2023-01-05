1)   let obj = {

    value: 2

  };

  function add(a){

    return this.value+a;

  }

  console.log(add.call(obj,5));





2)   let obj = {

    value: 2

  };

  function add(a,b,c){

    return this.value+a+b+c;

  }

  console.log(add.apply(obj,[1,2,3]));



3)   let obj = {

    value: 2

  };

  function add(a,b,c){

    return this.value+a+b+c;

  }

  var addObj = add.bind(obj);

  console.log(addObj(1,2,3));



4) let Student = {

  age:20

};

function printAge(){

  console.log(this.age);

}

let printStudent = printAge.bind(Student);

printStudent();

let Student = {
  age:20
};
function printAge(){
  console.log(this.age);
}
let printStudent = printAge.bind(Student);
printStudent();

let multiply = function(x,y){
  console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(5);

let multiplyClosure = function(x){
  return function(y){
    console.log(x*y);
  }
}
let multiplyByTwo = multiplyClosure(2);
multiplyByTwo(5);

let multiplyByThree = multiplyClosure(3);
multiplyByThree(5);

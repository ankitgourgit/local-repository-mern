//rest and spread opertaor


//rest by array
// function addNumbers(a,b,c,...rest)
// {
//     console.log(rest)
//     return a+b+c;
// }

// const res=addNumbers(2,3,4,5,6,7)
// console.log(res)



//spread by array
// var names=["ajay","amit","vivek"]

// function getNames(name1,name2,name3)
// {
//     console.log(name1,name2,name3)
// }
// getNames(names[0],names[1],names[2])
// getNames(...names)
// getNames(names)

//rest by object
var students={
    name:"ankit",
    age:"28",
    hobbies:["cricket","basketball"]
}
//const age=students.age;
const{age,...rest}=students;
console.log(rest)

//spread by object
var newStudents={
    ...students,
    age:29
}
console.log(newStudents)
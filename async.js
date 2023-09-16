//callbacks
// const datas=[
//     {name:"Ankit",profession:"SE"},
//     {name:"sachin",profession:"SE"}
// ];

// function getDatas(){
//     setTimeout(()=>{
//         let output="";
//         datas.forEach((data,index)=>{
//             output+=data.name
//         })  
//         console.log(output)

//     },1000);
// }
// function createData(newdata,callback){
//     setTimeout(()=>{
//         datas.push(newdata)
//         callback();
//     },2000)
// }
// createData({name:"mohit",profession:"SE"},getDatas);






//promise
// const datas=[
//     {name:"Ankit",profession:"SE"},
//     {name:"sachin",profession:"SE"}
// ];

// function getDatas(){
//     setTimeout(()=>{
//         let output="";
//         datas.forEach((data,index)=>{
//             output+=data.name
//         })  
//         console.log(output)

//     },1000);
// }
// function createData(newdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             datas.push(newdata)
//             let error=false;
//             if(!error)
//             {
//                 resolve() 
//             }
//             else{
//                 reject("Error hai bhai")
//             }
//         },2000)
//     })
    
// }
// createData({name:"mohit",profession:"SE"}).then(getDatas).catch(err=>console.log(err));

//async & await
const datas=[
    {name:"Ankit",profession:"SE"},
    {name:"sachin",profession:"SE"}
];

function getDatas(){
    setTimeout(()=>{
        let output="";
        datas.forEach((data,index)=>{
            output+=data.name
        })  
        console.log(output)

    },1000);
}
function createData(newdata){
    return new Promise((resolve,rejct)=>{
        setTimeout(()=>{
            datas.push(newdata)
            let error=false;
            if(!error)
            {
                resolve();
            }
            else{
                reject("Error hai bhai");
            }
        },2000)
    })
    
}
async function start(){
    await createData({name:"mohit",profession:"SE"})
    getDatas();
}
start();
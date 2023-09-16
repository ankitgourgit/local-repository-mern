//callback,promise,async & await;

//callback
 const datas=[
    {name:'Ashutosh',profession:'salesforce developer'},
    {name:'pradeep',profession:'devops engg'}
 ];

 function getDatas(){
    setTimeout(()=>{
        let output=""
        datas.forEach((data,index)=>{
            output += `<li> ${data.name} </li>`;
        })
        // document.body.innerHTML=output;
       console.log(output)
    },1000);
 }

//  function createdata(newdata,callback){
//     setTimeout(()=>{
//         datas.push(newdata)
//         callback();
//     },2000)

//  }

//  createdata({name:"ankit",profession:"web devloper"}, getDatas )



// promise:


function createdata(newdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newdata);
            let error=false;
            if(!error){
                resolve();
            }else{
                reject("ye to galat hai....")
            }
        },2000)
    })
}

// createdata({name:"ankit",profession:"web devloper"})
// .then(getDatas)
// .catch(err=> console.log(err))


//async & await
async function start(){
    await createdata({name:"ankit",profession:"web devloper"})
    getDatas();
}
start();




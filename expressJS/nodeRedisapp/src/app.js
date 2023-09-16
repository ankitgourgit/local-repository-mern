const express = require ('express');
const app =express();
const port= process.env.PORT || 8000;
//const conn = require("./db/connection")

//#######redis#########

const redis =require('redis')
const redisClient =redis.createClient(6379,'127.0.0.1');

redisClient.connect();
redisClient.on("connect",function(err){
    console.log("connect Redis")
})

app.get('/',async(req,res)=>{

    // let keyName ='normalkey';
    // let getcacheData=await redisClient.get(keyName);

    // let result={
    //     id:10,
    //     name:'Ankit'
    // }
    // let responseArray ='';


    // if(getcacheData){
    //     responseArray=JSON.parse(getcacheData);
    //     console.log('get cache')
    // }else{
    //     console.log('set cache')
    //     redisClient.set(keyName,JSON.stringify(result),{EX:30});
    //     responseArray= result;

    // }
    // console.log(getcacheData); 

//######hash#####

let parentKey='myfirst'
let keyName ='first';
let getcacheData=await redisClient.hGet(parentkey,keyName);

let testData = await redisClient.hGetAll(parentKey);
console.log(testData)

let result={
    id:10,
    name:'Ankit'
}
let responseArray ='';


if(getcacheData){
    responseArray=JSON.parse(getcacheData);
    console.log('get cache')
}else{
    console.log('set cache')
    redisClient.hSet(parentKey,keyName,JSON.stringify(result));
    responseArray= result;

}
    redisClient.DEL(parentKey) 
    res.status(200).json(responseArray);
})

app.listen(port,()=>{
    console.log(`connection is live on port ${port}`)
})     

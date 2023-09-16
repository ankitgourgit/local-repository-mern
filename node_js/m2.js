function mydemo()
{
    this.a=100
    this.b=200
    this.demo=()=>{
        console.log("module m2,demo function invoked")
    }
    this.demo1=()=>{
        console.log("module m2,demo1 function invoked")
    }
}
module.exports= mydemo
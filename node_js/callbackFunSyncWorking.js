console.log("before fun exe");
function demo(cb)
{
    console.log("demo function invoked");
    cb()
}
demo(()=>{
    console.log("demo callBack Function invoked")
})
console.log("after function execution");
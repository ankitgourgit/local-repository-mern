//multithread
console.log("Before function execution");
function demo()
{
    console.log("demo function executed");
}
//demo()
setTimeout(demo,3000)
//setInterval(demo,3000)
console.log("After function execution");


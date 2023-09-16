function employeeDetails()
{
    this.eno=1001;
    this.enm="Ankit";
    this.esal=1000.27;
    this.edes="admin";
}

var obj=new employeeDetails()
//console.log(obj)
console.log("Employee Details")
console.log("Eno="+obj.eno);
console.log("Enm="+obj.enm);
console.log("Esal="+obj.esal);
console.log("Edes="+obj.edes);
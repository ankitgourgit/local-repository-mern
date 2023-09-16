function employeeDetails()
{
    this.eno=1001;
    this.enm="Ashu";
    this.esal=1000.27;
    this.edes="admin";

    this.showDetails=()=>{
        console.log("Employee Details")
        console.log("Eno="+this.eno);
        console.log("Enm="+this.enm);
        console.log("Esal="+this.esal);
        console.log("Edes="+this.edes);
    }
}
var obj=new employeeDetails()
obj.showDetails();

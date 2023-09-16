function employeeDetails(eno,enm,esal,edes)
{
    this.eno=eno
    this.enm=enm
    this.esal=esal
    this.edes=edes

    this.showDetails=()=>{
        console.log("Employee Details")
        console.log("Eno="+this.eno);
        console.log("Enm="+this.enm);
        console.log("Esal="+this.esal);
        console.log("Edes="+this.edes);
    }
}
var obj= new employeeDetails(100,'jay',20000,'admin')
obj.showDetails()
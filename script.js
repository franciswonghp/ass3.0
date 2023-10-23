//create an entry point , DOMContentLoaded , Dom element
document.addEventListener("DOMContentLoaded", function(){
function main(){
        let addc = [];
        const addcusbutton = 
        document.querySelector("#addcus");
        addcusbutton.addEventListener("click",function(){
            alert("testing button");
            const cusnameinput=document.querySelector("#cusname")
            const cusname = cusnameinput.value;

        if(cusname) {
            addcusbutton (addc,cusname);
            cusnameinput.value = "";
        }
        });
        //add default customer
        addcus(addc, "jack");
        addcus(addc, "john");
        addcus(addc, "alex");
    }
main();

});
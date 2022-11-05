const $ = selector => document.querySelector(selector);

const processEntry = () =>{
    const cents = parseInt($("#cents").value);
    if(cents <=0 || cents> 99){
        alert("Enter a valid number between 0 and 99");
    }
    else{
        makeChange(cents)
    }
};

const makeChange = (cents) =>{
        

        let quarters = parseInt(cents / 25);
        cents = cents %  25;
        $("#quarters").value = quarters;

        let dimes = parseInt(cents/ 10);
        cents = cents % 10;
        $("#dimes").value = dimes;
    
        let nickels = parseInt(cents/ 5);
        cents = cents % 5;
        $("#nickels").value = nickels;

        let pennies = parseInt(cents/ 1);
        cents = cents % 1;
        $("#pennies").value = pennies;
   
}
    


document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntry);
    
});
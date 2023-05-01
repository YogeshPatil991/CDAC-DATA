function GoodMorning()
{
    console.log("Good Morning")
}


function GoodEvening()
{
    console.log("Good Evening")
}

class Employee
{
    Print(){
        console.log("Employee Details");
    }
}


class Maths
{
    Add(x,y){
        return x+y;
    }
}

function SayHi()
{
    console.log("Hi");
} 


var interestRate = 13.5;
var mathObject = new Maths();
module.exports = {
                    GoodMorning, 
                    GoodEvening, 
                    Employee,
                    interestRate,
                    mathObject,
                    SayHello : SayHi
                }
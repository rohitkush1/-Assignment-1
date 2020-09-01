// Program to search for a perticular character in a string.

console.log("Ans 1..")
let weapon = "Example";

for(let i=0;i<weapon.length;i++)
{
    console.log(weapon[i]);
}


//Program to Converts Minutes to Seconds

console.log("Ans 2..")
let min = 2;
let second = min * 60;
console.log("Minutes are "+min + " , " + "Converts in seconds = " + second );


// Program to search for a element in a array of a strings

console.log("Ans 3..")
let info=["Apple","Banana","Orange","Mango"];
console.log(info[2]);


// Program to desplay only elements containin 'a' in them from a array.

console.log("Ans 4..")
let var1 = Array("ajay","Yug","vijay","lucy","suraj");        
for(let i=0; i<var1.length; i++)
{
    if(var1[i].includes("a"))
    {
        console.log(var1[i]);
    }
}


//  Print an array in reverse order.

console.log("Ans 5..")
let arr = [1,2,3,4,5];

for(i=arr.length-1; i>=0; i--)
{
    console.log(arr[i])
}
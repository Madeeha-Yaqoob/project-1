let user_name: any = [];
if(user_name.length != 0)
{
for(let i = 0; i<user_name.length;i++)
{
    if(user_name[i]=="admin")
    {
        console.log("Hello admin, would you like to see a status report?");
    }
    else
    {
        console.log("hello",user_name[i],"thank you for logging in again.")
    
    }
}
}
else
{
    console.log("We need to find some users")
}
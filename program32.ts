let current_users=["Eric","Ali","Abdullah","Momin","Shahmeer"];
let new_users = ["ABDULLAH","Madeeha","Faiz","Shahmeer","Moosa"]; 
for(let j=0 ; j<new_users.length;j++)
{
    for(let i=0;i<current_users.length;i++)
    {
        if(new_users[j].toLowerCase()==current_users[i].toLowerCase())
        {
            console.log(`person ${current_users[i]}will need to enter new username`);
        }
        else
        {
            console.log(`the ${new_users[j]} is avaliable`);
            
        }
    }
}
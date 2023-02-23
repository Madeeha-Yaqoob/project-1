//current list of guest
let gustlst = ["bushra","iqra","mehk"];
// inviting the guest by each name
gustlst.forEach(gustlst => console.log("Dear",gustlst,",\nI would like to invite you to dinner at my home next Saturday.It would be an honor to have you as my guest and I am sure we would have a great time discussing your achievements and your life experiences.\nPlease let me know if you can attend by replying to this message. I hope to hear back from you soon!\nyour sincerely\n[Madeeha Yaqoob]"));
// some guest will not coming make anouncement
console.log(gustlst[2],"can't make it to the dinner.");
//removing the guest and replacing them
gustlst[2]="Abdullah";
//inviting the new guest
gustlst.forEach(gustlst =>console.log("Dear",gustlst,", please come to my dinner party on Saturday!"));
console.log("Good news! I found a bigger dinner table, so I can invite more guests!");
//add name in the first array.
gustlst.unshift("sana");
//addion in middle
gustlst.splice(gustlst.length/2,0,"fahad");
//addition in the last
gustlst.push("iema");
gustlst.forEach(gustlst => console.log("dear" , gustlst ,", please come to my dinner party on saturday! \n "));
//inform that your nwe table will not arrived in time 
console.log("Unfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner.");
//remove pepole from guest list
while(gustlst.length>2)
{
    var nguestlist = gustlst.pop();
}
console.log('sorry' ,nguestlist, 'we can not invite u');
// Send invitations to the remaining guests
gustlst.forEach(gustlst => {console.log("Dear" ,gustlst, "you are still invited to dinner at my house this Saturday.");
    });
    // Remove the last two names from the list
    gustlst.splice(0, gustlst.length);
    
    // Print the list to make sure it's empty
    console.log(gustlst);
    
    
    
    
    

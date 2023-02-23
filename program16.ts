//current list of guest
let gustlist = ["bushra","iqra","mehk"];
// inviting the guest by each name
gustlist.forEach(gustlist => console.log("Dear",gustlist,",\nI would like to invite you to dinner at my home next Saturday.It would be an honor to have you as my guest and I am sure we would have a great time discussing your achievements and your life experiences.\nPlease let me know if you can attend by replying to this message. I hope to hear back from you soon!\nyour sincerely\n[Madeeha Yaqoob]"));
// some guest will not coming make anouncement
console.log(gustlist[2],"can't make it to the dinner.");
//removing the guest and replacing them
gustlist[2]="Abdullah";
//inviting the new guest
gustlist.forEach(gustlist =>console.log("Dear",gustlist,", please come to my dinner party on Saturday!"));
console.log("Good news! I found a bigger dinner table, so I can invite more guests!");
//add name in the first array.
gustlist.unshift("sana");
//addion in middle
gustlist.splice(gustlist.length/2,0,"fahad");
//addition in the last
gustlist.push("iema");
gustlist.forEach(gustlist => console.log("dear" , gustlist ,", please come to my dinner party on saturday! \n "));

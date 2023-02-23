//current list of guest
let guestlist = ["bushra","iqra","mehk"];
// inviting the guest by each name
guestlist.forEach(guestlist => console.log("Dear",guestlist,",\nI would like to invite you to dinner at my home next Saturday.It would be an honor to have you as my guest and I am sure we would have a great time discussing your achievements and your life experiences.\nPlease let me know if you can attend by replying to this message. I hope to hear back from you soon!\nyour sincerely\n[Madeeha Yaqoob]"));
// some guest will not coming make anouncement
console.log(guestlist[2],"can't make it to the dinner.");
//removing the guest and replacing them
guestlist[2]="Abdullah";
//inviting the new guest
guestlist.forEach(guestlist =>console.log("Dear",guestlist,", please come to my dinner party on Saturday!"));

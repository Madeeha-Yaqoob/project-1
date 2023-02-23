//array to store place
let visit_place = ["istambul","oldlahore","tajmahal","kashmir","paris"];
//array in original 
console.log(visit_place);
//array in alphabetical order
let alphabetic_array = visit_place.slice();
alphabetic_array = alphabetic_array.sort();
console.log(alphabetic_array);
//array in original 
console.log(visit_place);
//array in reverse alphabetical order
let reverse_array = alphabetic_array.slice();
reverse_array = reverse_array.reverse();
console.log(reverse_array);
//array in original alphabetic order
console.log(alphabetic_array);
//Reverse the order of list
let reverse_the_list = visit_place.slice();
reverse_the_list = reverse_the_list.reverse();
console.log(reverse_the_list);
//Reverse the order of list again
let again_reverse_the_list = reverse_the_list.slice();
again_reverse_the_list = again_reverse_the_list.reverse();
console.log(again_reverse_the_list);
//Sort array so it’s stored in alphabetical order
let sort_again_reverse_array = again_reverse_the_list.slice();
sort_again_reverse_array = sort_again_reverse_array.sort();
console.log(sort_again_reverse_array);
//Sort to change array so it’s stored in reverse alphabetical order
let reverse_again_sort_array = sort_again_reverse_array.slice();
reverse_again_sort_array = reverse_again_sort_array.reverse();
console.log(reverse_again_sort_array);



function shout(string) {
    return string.toUpperCase();
};
function whisper(string) {
    return string.toLowerCase();
}


function  logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}


function sayHiToHeadphonedRoommate(string){
   var ans1 = "I can't hear you!";
   var ans2 = "YES INDEED!";
   var ans3 = "I would love to!";

   if (string.toLowerCase(string) === string) {
       return ans1;
   }
   else if (string.toUpperCase(string) === string) {
       return ans2;
   } else if ("Let\'s have dinner together!" === string)  {
       return ans3;
   }

}
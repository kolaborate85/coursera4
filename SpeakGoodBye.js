var speakExpression = function (){
    var speakWord = "Good Bye";

    var byeSpeaker = {
       speak: function (name) {
            console.log(  "Good Bye " + name);
          }
    }
    return byeSpeaker;
}
var byeSpeaker =  speakExpression();

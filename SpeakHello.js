var expressionObj = function(){

    var speakWord = "Hello";
   // const name="Bob";
    var helloSpeaker = {
        
        speak: function (speakWord) {
           // var speakWord = "Hello";
            console.log( "Hello " + speakWord);
        }
    };
    return helloSpeaker;
   // helloSpeaker.speak ("hello");

}
var helloSpeaker=new expressionObj();
//expressionObj();

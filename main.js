function startClassification()
{
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ixEH6R6Zt/model.json" , modelReady);
}

function modelReady()
{
    console.log("Model Initialize");
    classifier.classify(gotResults);
}

function gotResults(error , results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = " and The second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img , gotResult);
}

function gotResult(error , results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "dog")
        {
            document.getElementById("update_animal").innerHTML = "giphy.copy.gif";
        }

        if(results[0].label == "cat")
        {
            document.getElementById("update_animal").innerHTML = "giphy.copy(1).gif";
        }

        if(results[0].label == "horse")
        {
            document.getElementById("update_animal").innerHTML = "giphy.copy(2).gif";
        }

        if(results[0].label == "cow")
        {
            document.getElementById("update_animal").innerHTML = "giphy.copy(3).gif";
        }

        if(results[1].label == "dog")
        {
            document.getElementById("update_animal2").innerHTML = "giphy.copy.gif";
        }

        if(results[1].label == "cat")
        {
            document.getElementById("update_animal2").innerHTML = "giphy.copy(1).gif";
        }

        if(results[1].label == "horse")
        {
            document.getElementById("update_animal2").innerHTML = "giphy.copy(2).gif";
        }

        if(results[1].label == "cow")
        {
            document.getElementById("update_animal2").innerHTML = "giphy.copy(3).gif";
        }
    }
}
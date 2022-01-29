Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '">';
    })
}
console.log("ml5version"+ml5.version);

var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/YmJxP__1s/model.json",modelLoaded)
function modelLoaded(){
    console.log("Model Is Loaded")
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(results);
    }
    else{
        document.getElementById("result_objectname").innerHTML=results[0].label
        document.getElementById("result_objectaccuracy").innerHTML=result[0].confidence
    }
}
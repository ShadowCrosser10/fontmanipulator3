noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0
leftWristX = 0;

function preload() {

}

function setup() {
    video = createCapture(VIDEO); //displaying webcam live view on the screen
    video.size(500,450);

    canvas = createCanvas(800,600); //creating canvas
    canvas.position(650,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses); //turning on posenet??
}   

function draw() {
    background('#ADD8E6');
    textSize(difference);
    fill('#FFE787');
    text('Aditya is super cool', 50, 400);

    document.getElementById("label").innerHTML = "Width And Height of a Square will be = " + difference +"px";
}

function modelLoaded() {
    console.log("PoseNet is initialized!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results); //saying that if poseNet identifies at least 1 of 17 key points on human body, then it will show list of them.
    
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX); 
    }
}
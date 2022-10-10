noseX = 0
noseY = 0

function preload(){

    clowndoodoo = loadImage('https://i.postimg.cc/B6LDKtcx/senor.png');
}

function setup(){

    canvas = createCanvas(500,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){

    console.log("PoseNet Is Initialized");

}

function gotPoses(results){

    if(results.length > 0){
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log(results);
        console.log("noseX = "+noseX);
        console.log("noseY = "+noseY);
        
    }
}

function draw(){

    image(video, 0, 0, 500, 500);
    image(clowndoodoo, noseX-18, noseY+15, 36, 15)
}

function take_snapshot(){

    save("filter_img.png");
    
}
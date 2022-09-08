lipsX=0;
lipsY=0;

function preload() {   
    funny_lips = loadImage('https://i.postimg.cc/Kvt4GhHh/5b135831a2c9179fd8d44131a4dd7e28.png'); 
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized')
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        lipsX = results[0].pose.nose.x;
        lipsY = results[0].pose.nose.y;
        console.log("lips x =" + results[0].pose.nose.x);
        console.log("lips y =" + results[0].pose.nose.y);


    }
}


function draw(){ 
    image(video,0,0,300,300);
    image(funny_lips, lipsX-30, lipsY-0, 70, 70);
}

function take_snapshot(){
    save('myFilterImage.png');
}




rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;
game_status = " ";
var paddle2 =10,paddle1=10;

var paddle1X = 10,paddle1Height = 110;
var paddle2Y = 685,paddle2Height = 70;

var score1 = 0, score2 =0;
var paddle1Y;

var  playerscore =0;

var pcscore =0;

var ball = {
    x:350/2,
    y:480/2,
    r:20,
    dx:3,
    dy:3
}

function preload()
{
    
}

function setup()
{
canvas = createCanvas(700,543);
canvas.center();
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}
function start_game()
{
  game_status = "start";
  document.getElementById("game_status_btn").innerHTML = "Game Is Loading...";
}
function draw()
{      image(video,0,0,700,545);
    
    
    if(scoreRightWrist > 0.2)
    {
    fill("red");
    stroke("red");
    circle(rightWristX, rightWristY, 30);
    }

    if(game_status == "start")
    {
      document.getElementById("game_status_btn").innerHTML = "Game Is Loaded";
    
    }
}

function modelLoaded()
{
    console.log("modelLoaded");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
      console.log(results);
      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      console.log("rightWristX = " +  rightWristX + "rightWristY = " +  rightWristY );
      scoreRightWrist =  results[0].pose.keypoints[10].score;
    console.log(scoreRightWrist);
    
    }
}

function Read_aloud()
{
var msg = new SpeechSynthesisUtterance();
msg.text = "First keep ur laptop screen straight then move yourself approximately 3-4 feet away from the laptop.second.Move your right wrist up and down and you see a red dot appearing on your right wrist.third.Press the Play button .The red paddel is your paddel, you can control it from your right wrist.";
window.speechSynthesis.speak(msg);
}
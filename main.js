function preload()
{

}
function setup()
{
    canvas = createCanvas(400,400);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    image(video,0,0,640,480);
}
function draw()
{
    image(video,0,0,400,400);

    fill(50, 75, 17);
    stroke(50, 0, 17);
    circle(350, 30, 70);
    
    fill(50, 75, 17);
    stroke(50, 0, 17);
    circle(350, 400, 70);

  
}
function take_snapshot()
{
    save('SnapShotImage.png');
}

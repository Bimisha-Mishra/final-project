var images=["images/1.jpg","images/2.jpg", "images/3.jpg","images/4.jpg","images/5.jpg"];
var i=0;
function slides(){
    document.getElementById("slideimage").src=images[i];
    if(i<(images.length-1)){
        i++;
    }
    else{
        i=0;
    }
}
setInterval(slides, 2000)

var images1=["images/6.jpg","images/7.jpg", "images/8.jpg","images/9.png","images/10.jpg"];
var j=0;
function slides1(){
    document.getElementById("slideimage1").src=images1[j];
    if(j<(images1.length-1)){
        j++;
    }
    else{
        j=0;
    }
}
setInterval(slides1, 2000)

var images2=["images/11.jpg","images/12.jpg", "images/13.jpg","images/14.jpg","images/15.jpg"];
var k=0;
function slides2(){
    document.getElementById("slideimage2").src=images2[k];
    if(k<(images2.length-1)){
        k++;
    }
    else{
        k=0;
    }
}
setInterval(slides2, 2000)

var images3=["images/16.jpg","images/17.jpg", "images/18.jpg","images/19.jpg","images/20.jpg"];
var l=0;
function slides3(){
    document.getElementById("slideimage3").src=images3[l];
    if(l<(images3.length-1)){
        l++;
    }
    else{
        l=0;
    }
}
setInterval(slides3, 2000)

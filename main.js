var mainImage = document.getElementById('myimage')
var container = document.getElementsByClassName('image-box')[0]
var findNumber = mainImage.src.search(1)
var detectNumber = mainImage.src[findNumber]

var classString = container.className

checkPresence = classString.search('slide')


function prev(){
    detectNumber = Number(detectNumber)
    detectNumber -= 1
    console.log(detectNumber)
    if (detectNumber < 1){
        detectNumber = 4
    }
    mainImage.src = 'assets/image-'+detectNumber+'.jpg'
    
    if (checkPresence = -1){
        container.className += 'slideRight'
    }else{
        container.removeClass += 'slideRight'
    }
}
function next(){
    detectNumber = Number(detectNumber)
    detectNumber += 1
    console.log(detectNumber)
    if (detectNumber > 4){
        detectNumber = 1
    }
    mainImage.src = 'assets/image-'+detectNumber+'.jpg'
    
    if (checkPresence = -1) {
        container.className += 'slideLeft'
    } else {
        container.className += 'slildeRight'
    }
}

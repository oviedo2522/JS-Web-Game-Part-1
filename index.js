function newImage (url, left, bottom) {
    let newAsset = document.createElement('img')
    newAsset.src = url
    newAsset.style.position = 'fixed'
    newAsset.style.left = left + 'px'
    newAsset.style.bottom = bottom + 'px'
    document.body.append(newAsset)  
}

newImage("assets/green-character.gif",200, 300)
newImage("assets/tree.png",350, 100)
newImage("assets/crate.png",150, 200)
newImage("assets/well.png", 500, 425)

function clickImage (url, left, bottom){
    let deletImage = document.createElement ("img")
    deletImage.src = url 
    deletImage.style.position = "fixed"
    deletImage.style.left = left + "px"
    deletImage.style.bottom = bottom + "px"
    document.body.append(deletImage)

    deletImage.addEventListener("dblclick", function(){
        deletImage.remove() 
    })
}

clickImage ("assets/sword.png", 500, 405)
clickImage ("assets/shield.png", 165, 185)
clickImage ("assets/staff.png", 600, 100)



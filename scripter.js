let pieces1 = []
let pieces2 = []
let pieces3 = []
let pieces4 = []
let pieces5 = []
let pieces6 = []
let pieces7 = []
let pieces8 = []
let pieces9 = []
let pieces10 = []
let piecerows = [pieces1, pieces2, pieces3, pieces4, pieces5, pieces6, pieces7, pieces8, pieces9, pieces10];
let posLeft;
let posTop;
let imgX;
let imgY;
let prcountadjust
let pcountadjust;
let currentPieceArray;
let playspace = document.querySelector(".board")
let playState = 0;
let mouseX
let mouseY
let mouseDown = false;
let currPiece
let droppedPiece
let winX
let winY
let piecewinX
let piecewinY
let points = 0;

document.addEventListener("mousedown", mousePressed)

for (pcount = 0; pcount < 10; pcount++) {
    for (prcount = 0; prcount < 10; prcount++) {
        pcountadjust = pcount + 1;
        prcountadjust = prcount + 1;
        piecerows[pcount].push(document.getElementById(`${pcountadjust}piece${prcountadjust}`))
        currentPieceArray = piecerows[pcount]
        posLeft = 14 + (66 * pcount)
        posTop = 14 + (66 * prcount)
        imgX = 660 - (66 * prcount)
        imgY = 660 - (66 * pcount)
        currentPieceArray[prcount].style.left = `${posLeft}px`
        currentPieceArray[prcount].style.top = `${posTop}px`
        currentPieceArray[prcount].style.backgroundPositionX = `${imgX}px`
        currentPieceArray[prcount].style.backgroundPositionY = `${imgY}px`
        currentPieceArray[prcount].addEventListener("dragstart", selectPiece)
        currentPieceArray[prcount].addEventListener("dragover", movingPiece)
        currentPieceArray[prcount].addEventListener("dragenter", placePiece)
        currentPieceArray[prcount].addEventListener("dragleave", unplacePiece)
        currentPieceArray[prcount].addEventListener("drop", dropPiece)
        currentPieceArray[prcount].addEventListener("dragend", unselectPiece)
        winX = 730 + (66 * prcount)
        winY = 30 + (66 * pcount)
        currentPieceArray[prcount].id = `${winX}`
        currentPieceArray[prcount].className = `${winY}`
    }
}

function mousePressed() {
    if (mouseDown == false) {
        mouseDown = true
        document.addEventListener("mouseup", mouseReleased)
    }
}

function mouseReleased() {
    mouseDown = false
    document.removeEventListener("mouseup", mouseReleased)
}

function selectPiece(p) {
    playState = 1
    currPiece = this;
}
 
function unselectPiece(b) {
    playState = 0
    mouseX = b.clientX - 33
    mouseY = b.clientY - 33
    piecewinX = b.target.id
    piecewinY = b.target.className
    winX = Math.floor(piecewinX) + 66
    winY = Math.floor(piecewinY) + 66
    if ((b.clientX < winX && b.clientX > Math.floor(piecewinX)) && (b.clientY < winY && b.clientY > Math.floor(piecewinY))) {
        currPiece.style.left = `${piecewinX}px`
        currPiece.style.top = `${piecewinY}px`
        currPiece.style.border = "none"
        currPiece.removeEventListener("dragstart", selectPiece)
        currPiece.removeEventListener("dragover", movingPiece)
        points++
        checkWin()
    }
    else {
        currPiece.style.left = `${mouseX}px`
        currPiece.style.top = `${mouseY}px`
    }
}

function movingPiece(b) {
    b.preventDefault()
    mouseX = b.clientX - 33
    mouseY = b.clientY - 33
    currPiece.style.left = `${mouseX}px`
    currPiece.style.top = `${mouseY}px`
}

function dropPiece(b) {
    b.preventDefault()
}

function placePiece(b) {
    b.preventDefault()
}

function unplacePiece(b) {
    b.preventDefault()
}


function checkWin() {
    if (points == 110) {
        playspace.style.borderColor = "lightyellow"
    }
}


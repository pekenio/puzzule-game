class Puzzule{

    constructor(){
        this.deplacement = 0
        this.time = 20
        this.imageSelection
        this.imageLoadList = []
        this.clickedIndex
        this.imageVideIndex
        this.randPosition = [[10,3,9,8,11,2,6,0,4,5,13,14,1,7,12,15],[15,13,3,9,6,2,0,7,1,10,4,5,12,14,8,11],[0,11,10,9,4,8,15,5,3,12,7,1,14,2,6,13]]
        this.rand 
        
        
    }

    started(){
        
        return document.getElementById('startGame').classList.contains('started')
        
    }

    imageSave(){

        let selection = document.querySelectorAll('.parImage')
        
        selection.forEach((select)=>{
            this.imageLoadList.push(select) 

        })
        
    }

    recordTimes(){
        let minute = document.getElementById('minute')
        let gameStartButton = document.getElementById('startGame')
        minute.textContent = this.time
        let timer = setInterval(()=>{
            this.time--
            minute.textContent = this.time
            if(this.time <= 0 || !this.started()){
                clearInterval(timer)
                gameStartButton.setAttribute('class','stopped')
                gameStartButton.innerText = "RECOMMENCER"
                gameStartButton.style.backgroundColor = "rgba(72, 12, 182, 0.616)"
                this.setNewOder()
                this.imageSave()
            }

        },60000)
        
    }
    random(){
        return this.rand =  parseInt(Math.random(0,this.randPosition.length)* this.randPosition.length)
    }

    setNewOder(){
        let container = document.getElementById('container')
        container.innerHTML = ''
        for(let element of this.randPosition[this.rand]){
            container.appendChild(this.imageLoadList[element])
            
        }
        this.imageLoadList = []
        this.imageSave()
        
    }
    
    gameStart(){
        let gameStartButton = document.getElementById('startGame')
        gameStartButton.setAttribute('class','started')
        gameStartButton.innerText = "ARRETER LE JEU"
        gameStartButton.style.backgroundColor = "red"
        this.time = 20
    }

    async startingGame(){
        
        let gameStartButton = document.getElementById('startGame')
        
       gameStartButton.addEventListener('click',()=>{
            if(!this.started()){

                this.gameStart()
                this.random()
                this.setNewOder()
                this.imageSave()
                this.recordTimes()
                
            }else{
                gameStartButton.setAttribute('class','stopped')
                gameStartButton.innerText = "RECOMMENCER"
                gameStartButton.style.backgroundColor = "rgba(72, 12, 182, 0.616)"
                
            }

        })
        
        
    }

   

   
    verifPuzzuleLogique(){
        return this.imageVideIndex ==1 && this.clickedIndex ==2 || this.imageVideIndex ==1 && this.clickedIndex ==5 
        || this.imageVideIndex ==2 && this.clickedIndex ==1 || this.imageVideIndex ==2 && this.clickedIndex ==3 
        || this.imageVideIndex ==2 && this.clickedIndex ==6 || this.imageVideIndex ==3 && this.clickedIndex == 2 
        || this.imageVideIndex ==3 && this.clickedIndex == 4 || this.imageVideIndex ==3 && this.clickedIndex == 7
        || this.imageVideIndex == 4 && this.clickedIndex ==3 || this.imageVideIndex == 4 && this.clickedIndex ==8 
        || this.imageVideIndex == 5 && this.clickedIndex ==1 || this.imageVideIndex == 5 && this.clickedIndex ==6 
        || this.imageVideIndex == 5 && this.clickedIndex ==9 || this.imageVideIndex == 6 && this.clickedIndex ==2 
        || this.imageVideIndex == 6 && this.clickedIndex ==7 || this.imageVideIndex == 6 && this.clickedIndex ==10 
        || this.imageVideIndex == 6 && this.clickedIndex ==5 
        || this.imageVideIndex == 7 && this.clickedIndex ==3 || this.imageVideIndex == 7 && this.clickedIndex ==6 
        || this.imageVideIndex == 7 && this.clickedIndex ==8 || this.imageVideIndex == 7 && this.clickedIndex ==11 
        || this.imageVideIndex == 8 && this.clickedIndex ==4 
        || this.imageVideIndex == 8 && this.clickedIndex ==7 || this.imageVideIndex == 8 && this.clickedIndex == 12 || this.imageVideIndex == 9 && this.clickedIndex == 5 || this.imageVideIndex == 9 && this.clickedIndex == 10 || this.imageVideIndex == 9 && this.clickedIndex == 13 
        || this.imageVideIndex == 10 && this.clickedIndex == 6 || this.imageVideIndex == 10 && this.clickedIndex == 9 
        || this.imageVideIndex == 10 && this.clickedIndex == 11 || this.imageVideIndex == 10 && this.clickedIndex == 14 || this.imageVideIndex == 11 && this.clickedIndex == 7 || this.imageVideIndex == 11 && this.clickedIndex == 10 || this.imageVideIndex == 11 && this.clickedIndex == 12 
        || this.imageVideIndex == 11 && this.clickedIndex == 15 || this.imageVideIndex == 12 && this.clickedIndex == 8 || this.imageVideIndex == 12 && this.clickedIndex == 11 || this.imageVideIndex == 12 && this.clickedIndex == 16 || this.imageVideIndex == 13 && this.clickedIndex == 9 
        || this.imageVideIndex == 13 && this.clickedIndex == 14 || this.imageVideIndex == 14 && this.clickedIndex == 10 || this.imageVideIndex == 14 && this.clickedIndex == 13 || this.imageVideIndex == 14 && this.clickedIndex == 15 || this.imageVideIndex == 15 && this.clickedIndex == 11 || this.imageVideIndex == 15 && this.clickedIndex == 14 
        || this.imageVideIndex == 15 && this.clickedIndex == 16 || this.imageVideIndex == 16 && this.clickedIndex == 12 || this.imageVideIndex == 16 && this.clickedIndex == 15
    }

    puzzulePrincipe(){
        let allImages = document.querySelectorAll('#container .parImage img')

        allImages.forEach((clicked)=>{
            
            
            clicked.addEventListener('click',()=>{
                if(this.started()){
                    let videImage = document.querySelector('#container .parImage #vide')
                    this.imageVideIndex = this.imageLoadList.indexOf(videImage.parentNode) + 1
                    this.clickedIndex = this.imageLoadList.indexOf(clicked.parentNode) + 1
                    
                    if(this.verifPuzzuleLogique()){
                        videImage.setAttribute('src',clicked.getAttribute('src'))
                        videImage.setAttribute('id','')
                        clicked.setAttribute('id','vide')
                        clicked.setAttribute('src','asset/img/buuds/16x.jpg')
                        this.imageSave()
                    }
                }
                
                
                
            })
        })
    }


    

}

let game = new Puzzule();

game.startingGame()

game.imageSave()

game.puzzulePrincipe()
var currentScores,finalScores,activePlayer;
finalScores =[0,0,0,0];
currentScores = 0;
activePlayer = 0;
var gamePoint = 0;
function setDice(){
for(i =1 ;i<=4 ;i++)
    {
        document.querySelector('#dice-'+ i).style.display = 'none';
        document.querySelector('#current-'+ (i-1)).textContent = 0;
        document.querySelector('#score-'+(i-1)).textContent = 0 ;
    }
    }
setDice();
gamePoint = prompt("pleaes enter the gamePoint");
document.querySelector('.btn-roll').addEventListener('click',function(){
    var dice = Math.floor(Math.random() * 6 + 1);
    currentScores = currentScores + dice;
    document.querySelector('#dice-'+(activePlayer+1)).style.display = 'block';
    document.querySelector('#dice-'+(activePlayer+1)).src = 'dice-'+ dice +'.png';
    document.querySelector('#current-'+activePlayer).textContent = currentScores;
    var totalScor = document.querySelector('#score-'+activePlayer).textContent;
    if ((parseInt(totalScor) + currentScores) > (gamePoint || 50))
         {
            alert("Conguralation your a Winner for this Match");
            document.querySelector('#score-'+activePlayer).textContent = parseInt(totalScor) + currentScores;        
            setDice();
            activePlayer = 0;
            currentScores = 0;
        }
    if(dice ===1)
        {
            if(activePlayer === 3)
                {
                    activePlayer = 0;
                    currentScores = 0;
                    }
            else {
                activePlayer++;
                currentScores = 0;
            }
        }
  
    document.querySelector('#current-'+activePlayer).textContent = currentScores;
})
document.querySelector('.btn-hold').addEventListener('click',function(){
    dice = 1;
    if(activePlayer === 3)
                {
                    var totalScore = document.querySelector('#score-'+activePlayer).textContent;
                    document.querySelector('#score-'+activePlayer).textContent = parseInt(totalScore) + currentScores;
                    activePlayer = 0;
                    currentScores = 0;
                }
            else {
                var totalScore = document.querySelector('#score-'+activePlayer).textContent;
                document.querySelector('#score-'+activePlayer).textContent = parseInt(totalScore) + currentScores;     
                activePlayer++;
                currentScores = 0;
            }
        });
document.querySelector('.btn-new').addEventListener('click',function(){
        setDice();
    activePlayer =0 
    currentScores = 0;
    gamePoint = prompt("pleaes enter the gamePoint");
});
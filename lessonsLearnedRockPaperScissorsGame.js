    
    //workflow program
    
    
    
    function newStep (){
    
        let newStep= document.createElement('LI');
        newStep.setAttribute('id','newAnswer');
        newStep.setAttribute('class','newIdeas');
    
        let thirdAns = document.getElementById('thirdAnswer').value;
    
        let nodeBiggerParen=document.getElementById('list');
    
        newStep.textContent= thirdAns;     
    
        nodeBiggerParen.appendChild(newStep);
    
    
    }
    
    
    let newAns=document.getElementById('newStep');
    
    newAns.addEventListener('click', newStep)
    
    function deleteStep (){
    
    
    
        let nodeBiggerParen=document.getElementById('list');
        
    
        nodeBiggerParen.removeChild(nodeBiggerParen.lastElementChild);
    
    
    
    }
    
    
    let delStep=document.getElementById('deleteLastStep');
    
    delStep.addEventListener('click', deleteStep)
    
    
    
    
    
    
    function integrate () {
    
     
        let publishedAnswer= document.getElementById('answerPublisher');
        let publishedAnswer0= document.getElementById('answerPublisher0');
        let publishedAnswer1= document.getElementById('answerPublisher1');
    
        
        let firstAnswer = document.getElementById('firstAnswer').value;
        let secondAnswer = document.getElementById('secondAnswer').value;
        let newAns= document.getElementById('list');
    
       
       
        publishedAnswer.textContent=` ${firstAnswer}`;
        publishedAnswer0.textContent=` ${secondAnswer}`;
    
        publishedAnswer1.appendChild(newAns)
      
        
      
    }
    
    
    let inte= document.getElementById('integrate');
    inte.addEventListener('click', integrate);
    
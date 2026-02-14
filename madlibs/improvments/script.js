(function(){
    'use strict';
    console.log('reading js');
    
    const form = document.querySelector('#madlib-form');
    const formSection = document.querySelector('#form-section');
    const storySection = document.querySelector('#story-section');
    const restartBtn = document.querySelector('#restart-btn');



     // _____________ Check if word starts with a vowel _____________
     
    function aOrAn(word) {
        // Get the first letter
        const firstLetter = word[0];
        
        // Make it lowercase
        const lowerLetter = firstLetter.toLowerCase();
        
        // Check if it's a vowel
        if(lowerLetter === 'a' || lowerLetter === 'e' || lowerLetter === 'i' || 
           lowerLetter === 'o' || lowerLetter === 'u') {
            return 'an';
        } else {
            return 'a';
        }
    }
    
    form.addEventListener('submit', function(event){
        event.preventDefault();
        
        const adjective1 = document.querySelector('#adjective1').value;
        const noun1 = document.querySelector('#noun1').value;
        const verb1 = document.querySelector('#verb1').value;
        const adjective2 = document.querySelector('#adjective2').value;
        const noun2 = document.querySelector('#noun2').value;
        const verb2 = document.querySelector('#verb2').value;
        const adjective3 = document.querySelector('#adjective3').value;
        const noun3 = document.querySelector('#noun3').value;
        const bodypart = document.querySelector('#bodypart').value;
        const noun4 = document.querySelector('#noun4').value;
        
        // _____________ Check if all fields are filled _____________

        if(adjective1 == '' || noun1 == '' || verb1 == '' || adjective2 == '' || 
           noun2 == '' || verb2 == '' || adjective3 == '' || noun3 == '' || 
           bodypart == '' || noun4 == ''){
            alert('Please fill in all fields!');
        } else {

            // _____________ Get story paragraphs _____________

            const storyParagraphs = document.querySelectorAll('.story-text');

            
            // _____________ Fill in first paragraph _____________

            storyParagraphs[0].innerHTML = `The other morning I woke up and chose to make ${aOrAn(adjective1)} <strong>${adjective1}</strong> breakfast. I grabbed ${aOrAn(noun1)} <strong>${noun1}</strong> from the fridge and <strong>${verb1}</strong> it into the pan on the stove. Suddenly, <strong>${adjective2}</strong> <strong>${noun2}</strong> started flying everywhere!`;
            

            // _____________ Fill in second paragraph _____________

            storyParagraphs[1].innerHTML = `I quickly <strong>${verb2}</strong> toward the stove! Sadly, I was too late. The kitchen was completely <strong>${adjective3}</strong>, and there was ${aOrAn(noun3)} <strong>${noun3}</strong> stuck to my <strong>${bodypart}</strong>. I guess this is a sign to never cook again. I should just go back to my <strong>${noun4}</strong> and cry.`;
            

            //_____________ Hide form and show story _____________

            formSection.classList.remove('active');
            storySection.classList.add('active');
        }
    });
    
    restartBtn.addEventListener('click', function(){

        // _____________ Reset form _____________

        form.reset();
        
        // _____________ Hide story and show form _____________
        
        storySection.classList.remove('active');
        formSection.classList.add('active');
    });
    
})();
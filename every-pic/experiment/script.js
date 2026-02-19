window.addEventListener('load', function () {
    'use strict';
    console.log ('reading js')
    
    // --------- Variables ---------
    const sections = document.querySelectorAll('section');
    const headerP = document.querySelector('header p');
    let sectionTops = [];
    let pagetop;
    let counter = 1;
    let prevCounter = 1;
    let doneResizing;
    
    // --------- Section start point ---------
    sections.forEach(function (eachSection) {
        sectionTops.push(Math.floor(eachSection.getBoundingClientRect().top) + window.scrollY);
    });
    console.log('Section positions:', sectionTops);
    
    // --------- Scrolling ---------
    window.addEventListener('scroll', function () {
        pagetop = window.scrollY + 100; // Adjusted for header height
        
    
        if (pagetop > sectionTops[counter]) {
            counter++;
        }
        else if (counter > 1 && pagetop < sectionTops[counter - 1]) {
            counter--;
        }
        
      
        if (counter != prevCounter) {
            console.log(`Now on stage ${counter}`);
            onSectionChange();
            
        
            const myStyle = `stage${counter}`;
            document.querySelector('body').className = myStyle;
            
            // Change the setion Header 
            switch(counter){
                case 1: 
                    headerP.innerHTML = "Stage I: The Call to Adventure"; 
                    break;
                case 2: 
                    headerP.innerHTML = "Stage II: Crossing the Threshold"; 
                    break;
                case 3: 
                    headerP.innerHTML = "Stage III: The Road of Trials"; 
                    break;
                case 4: 
                    headerP.innerHTML = "Stage IV: The Ultimate Boon"; 
                    break;
                default: 
                    headerP.innerHTML = "Through the myths that shaped my understanding"; 
                    break;
            }
            
            prevCounter = counter;
        }
    }); 
    
    // --------- Window Resize & Adjusting  Sections ---------
    window.addEventListener('resize', function () {
        clearTimeout(doneResizing);
        doneResizing = setTimeout(function () {
            resetPagePosition();
        }, 500);
    });
    
    function onSectionChange() {
   
        for(const eachSection of sections){
            eachSection.className = 'offscreen';
        }
        document.querySelector(`#section0${counter}`).className = 'onscreen';
    }
    
    // Adjusting the Start of Sections on resize
    function resetPagePosition() {
        sectionTops = [];
        sections.forEach(function (eachSection) {
            sectionTops.push(Math.floor(eachSection.getBoundingClientRect().top) + window.scrollY);
        });
        
        // --------- Counter in Console---------
        const pagePosition = window.scrollY + sectionTops[0] + 10;
        counter = 0;
        sectionTops.forEach(function (eachSection) {
            if (pagePosition > eachSection) { 
                counter++; 
            }
        });
        console.log(`Counter reset to ${counter}`);
        
    
        onSectionChange();
    }
    
});
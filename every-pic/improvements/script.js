
(function () {
    'use strict';
    console.log('reading js');

    window.addEventListener('load', function () {

        // ------------------------------------ Scroll Animation Setup ------------------------------------

        const sections = document.querySelectorAll('section');
        const headerP = document.querySelector('header p');
        let sectionTops = [];
        let counter = 1;
        let prevCounter = 1;
        let doneResizing;

        function getPositions() {
            sectionTops = [];
            sections.forEach(s => {
                sectionTops.push(Math.floor(s.getBoundingClientRect().top) + window.scrollY);
            });
        }
        getPositions();

        window.addEventListener('scroll', function () {
            let pagetop = window.scrollY + 250;

            if (pagetop > sectionTops[counter]) {
                counter++;
            } else if (counter > 1 && pagetop < sectionTops[counter - 1]) {
                counter--;
            }

            if (counter != prevCounter) {
                updateVisuals();
                prevCounter = counter;
            }
        });

        function updateVisuals() {
            document.body.className = `stage${counter}`;
            sections.forEach((s, i) => {
                s.className = (i + 1 === counter) ? 'onscreen' : 'offscreen';
            });


            // Hides all bubbles when switching between sections
            const allBubbles = document.querySelectorAll('.note-bubble');
            allBubbles.forEach(bubble => {
                bubble.classList.remove('visible');
            });
        }



        // ------------------------------------ Stage I: Goddess Girls Interaction ------------------------------------

        const ggs_mainImg = document.querySelector('#section01 img');
        const ggs_bubble = document.querySelector('#section01 .note-bubble');
        const ggs_title = document.querySelector('#section01 .bubble-title');
        const ggs_text = document.querySelector('#section01 .bubble-text');

        const ggs1 = document.querySelector('#ggs1');
        const ggs2 = document.querySelector('#ggs2');
        const ggs3 = document.querySelector('#ggs3');

        ggs1.addEventListener('pointerenter', function () {
            ggs_mainImg.src = 'images/ggs-1.jpg';

            ggs_title.innerText = "Medusa the Mean";
            ggs_text.innerText = "Retelling of medusa for children.";

            ggs_bubble.classList.add('visible');
        });

        ggs1.addEventListener('pointerleave', function () {
            ggs_mainImg.src = 'images/ggs.jpg';
            ggs_bubble.classList.remove('visible');
        });

        ggs2.addEventListener('pointerenter', function () {
            ggs_mainImg.src = 'images/ggs-2.jpg';

            ggs_title.innerText = "Pandora the Curious";
            ggs_text.innerText = "pandora retelling";

            ggs_bubble.classList.add('visible');
        });

        ggs2.addEventListener('pointerleave', function () {
            ggs_mainImg.src = 'images/ggs.jpg';
            ggs_bubble.classList.remove('visible');
        });

        ggs3.addEventListener('pointerenter', function () {
            ggs_mainImg.src = 'images/ggs-3.jpg';

            ggs_title.innerText = "Aphrodite the Beauty";
            ggs_text.innerText = "Exploring the myths of love and beauty.";

            ggs_bubble.classList.add('visible');
        });

        ggs3.addEventListener('pointerleave', function () {
            ggs_mainImg.src = 'images/ggs.jpg';
            ggs_bubble.classList.remove('visible');
        });



        // ------------------------------------ Stage II: Spine Interaction ------------------------------------

        const mainImg = document.querySelector('#stage2-main-img');
        const bubble = document.querySelector('#section02 .note-bubble');

        const bubbleTitle = document.querySelector('#section02 .bubble-title');
        const bubbleText = document.querySelector('#section02 .bubble-text');

        const spine1 = document.querySelector('#spine1');
        const spine2 = document.querySelector('#spine2');
        const spine3 = document.querySelector('#spine3');
        const spine4 = document.querySelector('#spine4');
        const spine5 = document.querySelector('#spine5');

        spine1.addEventListener('pointerenter', function () {
            mainImg.src = 'images/book-spines-1.jpg';

            bubbleTitle.innerText = "The Lightning Thief";
            bubbleText.innerText = "Where the journey began! Percy discovers he is a son of Poseidon.";

            bubble.classList.add('visible');


        });
        spine1.addEventListener('pointerleave', function () {
            mainImg.src = 'images/book-spines.jpg';
            bubble.classList.remove('visible');
        });

        spine2.addEventListener('pointerenter', function () {
            mainImg.src = 'images/book-spines-2.jpg';

            bubbleTitle.innerText = "The Sea of Monsters";
            bubbleText.innerText = "An Odyssey retelling involving a very hungry Polyphemus.";

            bubble.classList.add('visible');


        });
        spine2.addEventListener('pointerleave', function () {
            mainImg.src = 'images/book-spines.jpg';
            bubble.classList.remove('visible');
        });

        spine3.addEventListener('pointerenter', function () {
            mainImg.src = 'images/book-spines-3.jpg';

            bubbleTitle.innerText = "The Titan's Curse";
            bubbleText.innerText = "The modern story of the Titan Atlas.";

            bubble.classList.add('visible');


        });
        spine3.addEventListener('pointerleave', function () {
            mainImg.src = 'images/book-spines.jpg';
            bubble.classList.remove('visible');
        });

        spine4.addEventListener('pointerenter', function () {
            mainImg.src = 'images/book-spines-4.jpg';

            bubbleTitle.innerText = "The Battle of the Labyrinth";
            bubbleText.innerText = "Percy's adventure through the ancient maze.";

            bubble.classList.add('visible');



        });
        spine4.addEventListener('pointerleave', function () {
            mainImg.src = 'images/book-spines.jpg';
            bubble.classList.remove('visible');
        });

        spine5.addEventListener('pointerenter', function () {
            mainImg.src = 'images/book-spines-5.jpg';

            bubbleTitle.innerText = "The Last Olympian";
            bubbleText.innerText = "The Iliad relived in the 21st Century.";

            bubble.classList.add('visible');


        });
        spine5.addEventListener('pointerleave', function () {
            mainImg.src = 'images/book-spines.jpg';
            bubble.classList.remove('visible');

        });

        // ------------------------------------ Stage III: Variety Books Interaction ------------------------------------

        const variety_mainImg = document.querySelector('#section03 img');
        const variety_bubble = document.querySelector('#section03 .note-bubble');
        const variety_title = document.querySelector('#section03 .bubble-title');
        const variety_text = document.querySelector('#section03 .bubble-text');

        const variety1 = document.querySelector('#variety1');
        const variety2 = document.querySelector('#variety2');
        const variety3 = document.querySelector('#variety3');
        const variety4 = document.querySelector('#variety4');
        const variety5 = document.querySelector('#variety5');
        const variety6 = document.querySelector('#variety6');
        const variety7 = document.querySelector('#variety7');

        variety1.addEventListener('pointerenter', function () {
            variety_mainImg.src = 'images/variety-1.jpg';

            variety_title.innerText = "The House of Hades";
            variety_text.innerText = " heroes of olympus"

            variety_bubble.classList.add('visible');

        });
        variety1.addEventListener('pointerleave', function () {
            variety_mainImg.src = 'images/variety.jpg';
            variety_bubble.classList.remove('visible');
        });

        variety2.addEventListener('pointerenter', function () {
            variety_mainImg.src = 'images/variety-2.jpg';

            variety_title.innerText = "Blood of Olympus";
            variety_text.innerText = " Heroes of Olympus"

            variety_bubble.classList.add('visible');

        });
        variety2.addEventListener('pointerleave', function () {
            variety_mainImg.src = 'images/variety.jpg';
            variety_bubble.classList.remove('visible');
        });

        variety3.addEventListener('pointerenter', function () {
            variety_mainImg.src = 'images/variety-3.jpg';

            variety_title.innerText = "Gods and Heroes of Ancient Grecce";
            variety_text.innerText = " Classic collection of greek myth and retellings of heroes. "

            variety_bubble.classList.add('visible');

        });
        variety3.addEventListener('pointerleave', function () {
            variety_mainImg.src = 'images/variety.jpg';
            variety_bubble.classList.remove('visible');
        });

        variety4.addEventListener('pointerenter', function () {
            variety_mainImg.src = 'images/variety-4.jpg';

            variety_title.innerText = "Percy Jackson Demigod Collections";
            variety_text.innerText = " 3 first book of 3 different series"

            variety_bubble.classList.add('visible');

        });
        variety4.addEventListener('pointerleave', function () {
            variety_mainImg.src = 'images/variety.jpg';
            variety_bubble.classList.remove('visible');
        });

        variety5.addEventListener('pointerenter', function () {
            variety_mainImg.src = 'images/variety-5.jpg';

            variety_title.innerText = "Mark of Athena";
            variety_text.innerText = " heroes of olympus"

            variety_bubble.classList.add('visible');

        });
        variety5.addEventListener('pointerleave', function () {
            variety_mainImg.src = 'images/variety.jpg';
            variety_bubble.classList.remove('visible');
        });

        variety6.addEventListener('pointerenter', function () {
            variety_mainImg.src = 'images/variety-6.jpg';

            variety_title.innerText = "Song of Achilles";
            variety_text.innerText = " Achilles retelling"

            variety_bubble.classList.add('visible');

        });
        variety6.addEventListener('pointerleave', function () {
            variety_mainImg.src = 'images/variety.jpg';
            variety_bubble.classList.remove('visible');
        });

        variety7.addEventListener('pointerenter', function () {
            variety_mainImg.src = 'images/variety-7.jpg';

            variety_title.innerText = "The Odyssey";
            variety_text.innerText = " heroes of olympus"

            variety_bubble.classList.add('visible');

        });
        variety7.addEventListener('pointerleave', function () {
            variety_mainImg.src = 'images/variety.jpg';
            variety_bubble.classList.remove('visible');
        });

        // ------------------------------------ Stage IV: Classic Book Interaction ------------------------------------

        const classicMainImg = document.querySelector('#section04 img');
        const classicBubble = document.querySelector('#section04 .note-bubble');
        const classicTitle = document.querySelector('#section04 .bubble-title');
        const classicText = document.querySelector('#section04 .bubble-text');

        const classic1 = document.querySelector('#classic1');

        classic1.addEventListener('pointerenter', function () {
            classicMainImg.src = 'images/classic-2.jpg';

            classicTitle.innerText = "The Odyssey";
            classicText.innerText = " Classic by Homer.  Transslated by Robert Fitzgerald"

            classicBubble.classList.add('visible');

        });
        classic1.addEventListener('pointerleave', function () {
            classicMainImg.src = 'images/classic.jpg';
            classicBubble.classList.remove('visible');
        });

        // ------------------------------------ Cleanup on Resize ------------------------------------
        window.addEventListener('resize', function () {
            clearTimeout(doneResizing);
            doneResizing = setTimeout(getPositions, 500);
        });

    });
})();
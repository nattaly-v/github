
(function () {
    'use strict';
    console.log('reading js');

    window.addEventListener('load', function () {

        // --------- Scroll Animation Setup ---------
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

            const subTitles = {
                1: "Stage I: The Call to Adventure",
                2: "Stage II: Crossing the Threshold",
                3: "Stage III: The Road of Trials",
                4: "Stage IV: The Ultimate Boon"
            };
            headerP.innerHTML = subTitles[counter];

            // Auto-hide all bubbles when switching sections
            const allBubbles = document.querySelectorAll('.note-bubble');
            allBubbles.forEach(bubble => {
                bubble.classList.remove('visible');
            });
        }

        

        // --------- Stage I: Goddess Girls Interaction ---------
        const ggs_mainImg = document.querySelector('#section01 img');
        const ggs_bubble = document.querySelector('#section01 .note-bubble');

        const ggs1 = document.querySelector('#ggs1');
        const ggs2 = document.querySelector('#ggs2');
        const ggs3 = document.querySelector('#ggs3');

        ggs1.addEventListener('pointerenter', function () {
            ggs_mainImg.src = 'images/ggs-1.jpg';
            ggs_bubble.innerText = 'Placeholder  for book 1.';
            ggs_bubble.classList.add('visible');
            setTimeout(function () {
                ggs_bubble.classList.remove('visible');
            }, 4000);
        });
        ggs1.addEventListener('pointerleave', function () {
            ggs_mainImg.src = 'images/ggs.jpg';
            ggs_bubble.classList.remove('visible');
        });

        ggs2.addEventListener('pointerenter', function () {
            ggs_mainImg.src = 'images/ggs-2.jpg';
            ggs_bubble.innerText = 'Placeholder for book 2.';
            ggs_bubble.classList.add('visible');
            setTimeout(function () {
                ggs_bubble.classList.remove('visible');
            }, 4000);
        });
        ggs2.addEventListener('pointerleave', function () {
            ggs_mainImg.src = 'images/ggs.jpg';
            ggs_bubble.classList.remove('visible');
        });

        ggs3.addEventListener('pointerenter', function () {
            ggs_mainImg.src = 'images/ggs-3.jpg';
            ggs_bubble.innerText = 'Placeholder for book 3.';
            ggs_bubble.classList.add('visible');
            setTimeout(function () {
                ggs_bubble.classList.remove('visible');
            }, 4000);
        });
        ggs3.addEventListener('pointerleave', function () {
            ggs_mainImg.src = 'images/ggs.jpg';
            ggs_bubble.classList.remove('visible');
        });




        // --------- Stage II: Spine Interaction ---------
        const mainImg = document.querySelector('#stage2-main-img');
        const bubble = document.querySelector('#section02 .note-bubble');

        const spine1 = document.querySelector('#spine1');
        const spine2 = document.querySelector('#spine2');
        const spine3 = document.querySelector('#spine3');
        const spine4 = document.querySelector('#spine4');
        const spine5 = document.querySelector('#spine5');

        spine1.addEventListener('pointerenter', function () {
            mainImg.src = 'images/book-spines-1.jpg';
            bubble.innerText = 'The Lightning Thief: Where the journey began!';
            bubble.classList.add('visible');
            setTimeout(function () {
                bubble.classList.remove('visible');
            }, 4000);
        });
        spine1.addEventListener('pointerleave', function () {
            mainImg.src = 'images/book-spines.jpg';
            bubble.classList.remove('visible');
        });

        spine2.addEventListener('pointerenter', function () {
            mainImg.src = 'images/book-spines-2.jpg';
            bubble.innerText = 'The Sea of Monsters: An Odyssey Retelling';
            bubble.classList.add('visible');
            setTimeout(function () {
                bubble.classList.remove('visible');
            }, 4000);
        });
        spine2.addEventListener('pointerleave', function () {
            mainImg.src = 'images/book-spines.jpg';
            bubble.classList.remove('visible');
        });

        spine3.addEventListener('pointerenter', function () {
            mainImg.src = 'images/book-spines-3.jpg';
            bubble.innerText = "The Titan's Curse: The Modern stroy if the Tiatan Atlas";
            bubble.classList.add('visible');
            setTimeout(function () {
                bubble.classList.remove('visible');
            }, 4000);
        });
        spine3.addEventListener('pointerleave', function () {
            mainImg.src = 'images/book-spines.jpg';
            bubble.classList.remove('visible');
        });

        spine4.addEventListener('pointerenter', function () {
            mainImg.src = 'images/book-spines-4.jpg';
            bubble.innerText = 'The Battle of the Labyrinth: Percy;s ave nture thorugh the ancient maze';
            bubble.classList.add('visible');
            setTimeout(function () {
                bubble.classList.remove('visible');
            }, 4000);
        });
        spine4.addEventListener('pointerleave', function () {
            mainImg.src = 'images/book-spines.jpg';
            bubble.classList.remove('visible');
        });

        spine5.addEventListener('pointerenter', function () {
            mainImg.src = 'images/book-spines-5.jpg';
            bubble.innerText = 'The Last Olympian: The Iliad relived in the 21st Centuary';
            bubble.classList.add('visible');
            setTimeout(function () {
                bubble.classList.remove('visible');
            }, 4000);
        });
        spine5.addEventListener('pointerleave', function () {
            mainImg.src = 'images/book-spines.jpg';
            bubble.classList.remove('visible');
                
        });

        // --------- Stage III: Variety Books Interaction ---------
        const variety_mainImg = document.querySelector('#section03 img');
        const variety_bubble = document.querySelector('#section03 .note-bubble');

        const variety1 = document.querySelector('#variety1');
        const variety2 = document.querySelector('#variety2');
        const variety3 = document.querySelector('#variety3');
        const variety4 = document.querySelector('#variety4');
        const variety5 = document.querySelector('#variety5');
        const variety6 = document.querySelector('#variety6');
        const variety7 = document.querySelector('#variety7');

        variety1.addEventListener('pointerenter', function () {
            variety_mainImg.src = 'images/variety-1.jpg';
            variety_bubble.innerText = 'Placeholder for variety book 1.';
            variety_bubble.classList.add('visible');
            setTimeout(function () {
                variety_bubble.classList.remove('visible');
            }, 4000);
        });
        variety1.addEventListener('pointerleave', function () {
            variety_mainImg.src = 'images/variety.jpg';
            variety_bubble.classList.remove('visible');
        });

        variety2.addEventListener('pointerenter', function () {
            variety_mainImg.src = 'images/variety-2.jpg';
            variety_bubble.innerText = 'Placeholder for variety book 2.';
            variety_bubble.classList.add('visible');
            setTimeout(function () {
                variety_bubble.classList.remove('visible');
            }, 4000);
        });
        variety2.addEventListener('pointerleave', function () {
            variety_mainImg.src = 'images/variety.jpg';
            variety_bubble.classList.remove('visible');
        });

        variety3.addEventListener('pointerenter', function () {
            variety_mainImg.src = 'images/variety-3.jpg';
            variety_bubble.innerText = 'Placeholder for variety book 3.';
            variety_bubble.classList.add('visible');
            setTimeout(function () {
                variety_bubble.classList.remove('visible');
            }, 4000);
        });
        variety3.addEventListener('pointerleave', function () {
            variety_mainImg.src = 'images/variety.jpg';
            variety_bubble.classList.remove('visible');
        });

        variety4.addEventListener('pointerenter', function () {
            variety_mainImg.src = 'images/variety-4.jpg';
            variety_bubble.innerText = 'Placeholder for variety book 4.';
            variety_bubble.classList.add('visible');
            setTimeout(function () {
                variety_bubble.classList.remove('visible');
            }, 4000);
        });
        variety4.addEventListener('pointerleave', function () {
            variety_mainImg.src = 'images/variety.jpg';
            variety_bubble.classList.remove('visible');
        });

        variety5.addEventListener('pointerenter', function () {
            variety_mainImg.src = 'images/variety-5.jpg';
            variety_bubble.innerText = 'Placeholder for variety book 5.';
            variety_bubble.classList.add('visible');
            setTimeout(function () {
                variety_bubble.classList.remove('visible');
            }, 4000);
        });
        variety5.addEventListener('pointerleave', function () {
            variety_mainImg.src = 'images/variety.jpg';
            variety_bubble.classList.remove('visible');
        });

        variety6.addEventListener('pointerenter', function () {
            variety_mainImg.src = 'images/variety-6.jpg';
            variety_bubble.innerText = 'Placeholder for variety book 6.';
            variety_bubble.classList.add('visible');
            setTimeout(function () {
                variety_bubble.classList.remove('visible');
            }, 4000);
        });
        variety6.addEventListener('pointerleave', function () {
            variety_mainImg.src = 'images/variety.jpg';
            variety_bubble.classList.remove('visible');
        });

        variety7.addEventListener('pointerenter', function () {
            variety_mainImg.src = 'images/variety-7.jpg';
            variety_bubble.innerText = 'Placeholder for variety book 7.';
            variety_bubble.classList.add('visible');
            setTimeout(function () {
                variety_bubble.classList.remove('visible');
            }, 4000);
        });
        variety7.addEventListener('pointerleave', function () {
            variety_mainImg.src = 'images/variety.jpg';
            variety_bubble.classList.remove('visible');
        });

        // --------- Cleanup on Resize ---------
        window.addEventListener('resize', function () {
            clearTimeout(doneResizing);
            doneResizing = setTimeout(getPositions, 500);
        });

    });
})();
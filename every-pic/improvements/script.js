
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
            ggs_text.innerText = "Rating: 3/5 ★★★ \n \n Retelling of Medusa in a modern schoolyard dramatic setting. Medusa is a human living amongst the deities, and she is known as the mean girl of the school. She is tired of being mortal and having a bad reputation, so she takes matters into her own hands to become immortal to get closer to her crush, Poseidon. In this book, Medusa shows what hard work can lead you to and to follow your dreams yourself, rather than pretending to be someone you aren't. As a child, this really taught me how to be myself and follow my dreams.";

            ggs_bubble.classList.add('visible');
        });

        ggs1.addEventListener('pointerleave', function () {
            ggs_mainImg.src = 'images/ggs.jpg';
            ggs_bubble.classList.remove('visible');
        });

        ggs2.addEventListener('pointerenter', function () {
            ggs_mainImg.src = 'images/ggs-2.jpg';

            ggs_title.innerText = "Pandora the Curious";
            ggs_text.innerText = "Rating: 5/5 ★★★★★ \n \n The retelling of Pandora's myth is set in the hallways of Mount Olympus Academy. She is one of the few mortals at this school of deities, and one of her overwhelming characteristics is her curiosity. This often gets her into trouble, and in this book, she opens a mysterious box that leads to unfortunate outcomes. As a child I really connected to her curiosity, which can be a good thing, but it comes with great responsibility. This taught me to think before acting, even if I'm tempted.";

            ggs_bubble.classList.add('visible');
        });

        ggs2.addEventListener('pointerleave', function () {
            ggs_mainImg.src = 'images/ggs.jpg';
            ggs_bubble.classList.remove('visible');
        });

        ggs3.addEventListener('pointerenter', function () {
            ggs_mainImg.src = 'images/ggs-3.jpg';

            ggs_title.innerText = "Aphrodite the Diva";
            ggs_text.innerText = "Rating: 4/5 ★★★★ \n \n  This is a modern interpretation of Aphrodite at Mount Olympus Academy, where she has her connection to matchmaking and jealousy go hand in hand. In this book, there is a new Egyptian exchange student named Isis who begins doing Aphrodite's specialty of matchmaking, leading her to feel jealous and fearful of losing friends and her reputation. This book really covers what many young girls, such as myself, felt about being replaced, but it also taught me that true friendship can't be broken or stolen and that being confident overcomes insecurity.";

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
            bubbleText.innerText = "Rating: 4/5 ★★★★  \n \n The book that jump-started my imagination. 12-year-old Percy Jackson discovers that he is a demigod and his father is the God of the Sea, Poseidon. He gets thrown into this new world of gods, monsters, and prophecies that he doesn't know how to navigate. He is accused of stealing Zeus’s master lightning bolt and has to go on a quest to prevent a war between the Olympians. This was and still is a very exciting book to me; it's very fun to see a character that was around my age be so strong.";

            bubble.classList.add('visible');


        });
        spine1.addEventListener('pointerleave', function () {
            mainImg.src = 'images/book-spines.jpg';
            bubble.classList.remove('visible');
        });

        spine2.addEventListener('pointerenter', function () {
            mainImg.src = 'images/book-spines-2.jpg';

            bubbleTitle.innerText = "The Sea of Monsters";
            bubbleText.innerText = "Rating: 4/5 ★★★★ \n \n  This book is based on the epic of Odysseus: Percy is back to complete another quest! In this book, he has to rescue his best friend, Grover, and Camp Half-Blood by going to the Sea of Monsters located around the Bermuda Triangle. He shows loyalty and hero-like characteristics in this book. This book really created a theme of friendship and protecting those whom you trust safe even if it's dangerous.";

            bubble.classList.add('visible');


        });
        spine2.addEventListener('pointerleave', function () {
            mainImg.src = 'images/book-spines.jpg';
            bubble.classList.remove('visible');
        });

        spine3.addEventListener('pointerenter', function () {
            mainImg.src = 'images/book-spines-3.jpg';

            bubbleTitle.innerText = "The Titan's Curse";
            bubbleText.innerText = "Rating: 5/5  ★★★★★  \n \n This book has references to the story of Hercules: It revolves around rescuing Artemis and Annabeth, who have gone missing, as well as preventing Atlas from destroying Olympus. This book has humor, but it is darker and creates a storyline that will continue in the rest of the books of the series. Percy is faced with challenges and the loss of friends. This book covered topics that were deep but in a way that young readers could understand and connect with.";

            bubble.classList.add('visible');


        });
        spine3.addEventListener('pointerleave', function () {
            mainImg.src = 'images/book-spines.jpg';
            bubble.classList.remove('visible');
        });

        spine4.addEventListener('pointerenter', function () {
            mainImg.src = 'images/book-spines-4.jpg';

            bubbleTitle.innerText = "The Battle of the Labyrinth";
            bubbleText.innerText = "Rating: 4/5  ★★★★  \n \n  Percy is faced with having to navigate the Labyrinth of Daedalus with little time to waste because he has to stop Luke, son of Hermes, from finalizing the rise of Kornos. This book gives more motive and foreshadowing to a big war with the Titans at the end of this book and the last book of the series. This book really gave me chills because of all the unexpected turns in the storyline. Percy faces difficult choices to save the world from destruction, showing his growth as a person and a hero. ";

            bubble.classList.add('visible');



        });
        spine4.addEventListener('pointerleave', function () {
            mainImg.src = 'images/book-spines.jpg';
            bubble.classList.remove('visible');
        });

        spine5.addEventListener('pointerenter', function () {
            mainImg.src = 'images/book-spines-5.jpg';

            bubbleTitle.innerText = "The Last Olympian";
            bubbleText.innerText = "Rating: 5/5 ★★★★★  \n \n  This is the final book of the Percy Jackson series. At this point, a huge war is going on between Titans, demigods, and the Olympians. Percy has to fulfill the Great Prophecy that has been looming over his life since he was born; it determines whether he saves the world or destroys it. In this book, I remember the depiction of true friendship, sacrifice, life lessons, and loss. Everything that happened in the previous book narrowed down to this moment in the series. This series really showed me how ancient myths can be reimagined in creative ways that intrigue different audiences.";

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
            variety_text.innerText = " Rating: 5/5 ★★★★ \n \n This is part of the series Heroes of Olympus by Rick Riordan, targeted towards young adults. In this book, Percy and Annabeth are making their way through Tartarus to close the Doors of Death from their side, while their friends are closing them from the mortal world. This book is probably the most emotional and intense book of Rick’s mythology series. There are themes of endurance and pulling through tough times with those you are close to. Definitely one of my favorite books."

            variety_bubble.classList.add('visible');

        });
        variety1.addEventListener('pointerleave', function () {
            variety_mainImg.src = 'images/variety.jpg';
            variety_bubble.classList.remove('visible');
        });

        variety2.addEventListener('pointerenter', function () {
            variety_mainImg.src = 'images/variety-2.jpg';

            variety_title.innerText = "Blood of Olympus";
            variety_text.innerText = " Rating: 5/5 ★★★★ \n \n This is the final book from the Heroes of Olympus series that merges Greek and Roman mythology. Demigods, both Greek and Roman, are up against Gaea, the earth goddess, whose goal is to destroy both. Character storylines and problems are resolved, and they are given recognition as individuals. The theme of unity and teamwork is highly emphasized in this book, making the heroes stronger as one."

            variety_bubble.classList.add('visible');

        });
        variety2.addEventListener('pointerleave', function () {
            variety_mainImg.src = 'images/variety.jpg';
            variety_bubble.classList.remove('visible');
        });

        variety3.addEventListener('pointerenter', function () {
            variety_mainImg.src = 'images/variety-3.jpg';

            variety_title.innerText = "Gods and Heroes of Ancient Grecce";
            variety_text.innerText = " Rating: 4/5 ★★★★ \n \n This book provides comprehensive retellings of ancient Greek myths, ranging from gods to heroes and their epics. Some of these heroes are Hercules, Odysseus, and Jason. Gustav really brought classics to life in a way that they are accessible and intriguing for all. As I got older, rereading this book allowed me to gain a better understanding and appreciation of the books of my childhood. I highly recommend using this book as a reference when reading modern retellings of these myths. "

            variety_bubble.classList.add('visible');

        });
        variety3.addEventListener('pointerleave', function () {
            variety_mainImg.src = 'images/variety.jpg';
            variety_bubble.classList.remove('visible');
        });

        variety4.addEventListener('pointerenter', function () {
            variety_mainImg.src = 'images/variety-4.jpg';

            variety_title.innerText = "Percy Jackson Demigod Collections";
            variety_text.innerText = " Rating: 3/5 ★★★ \n \n This book is a collection/sampler for any new readers of Rick Riordan’s mythology books. It contains the first book of three of his series, Percy Jackson and the Olympians, The Heroes of Olympus, and The Trials of Apollo. This allows readers to experience different characters from the same universe. I really like this book because it shows how big Riordan’s mythical world is, but always from a different point of view; it didn't just end with Percy Jackson, which really shows his world-building skills."

            variety_bubble.classList.add('visible');

        });
        variety4.addEventListener('pointerleave', function () {
            variety_mainImg.src = 'images/variety.jpg';
            variety_bubble.classList.remove('visible');
        });

        variety5.addEventListener('pointerenter', function () {
            variety_mainImg.src = 'images/variety-5.jpg';

            variety_title.innerText = "Mark of Athena";
            variety_text.innerText = " Rating: 4/5 ★★★★ \n \n This is the third book in the Heroes of Olympus series. Greek and Roman demigods collide while Annabeth goes on a solo quest. She is following the Mark of Athena in ancient Rome, and the other demigods are trying to form alliances. Through Annabeth’s quest, we got to see a side of her as an individual that wasn't really highlighted in past books. Themes of individuality and trust are strong, as is the idea that there are things that one must do oneself. "

            variety_bubble.classList.add('visible');

        });
        variety5.addEventListener('pointerleave', function () {
            variety_mainImg.src = 'images/variety.jpg';
            variety_bubble.classList.remove('visible');
        });

        variety6.addEventListener('pointerenter', function () {
            variety_mainImg.src = 'images/variety-6.jpg';

            variety_title.innerText = "Song of Achilles";
            variety_text.innerText = " Rating: 5/5 ★★★★★ \n \n A retelling of the Iliad told through the eyes of Patroclus, who is a young prince. He has a deep connection with Achilles, one of the greatest Greek warriors. They have a bond that is tested by challenges, sacrifice, and loss due to the desire for glory in the war. Miller writes in a way that makes the myth feel personal and causes aching in the reader, rather than glorious and victorious, as others do. There are strong themes of love and sacrifice that create this deep connection between the reader and the story. Highly recommend for young adults."

            variety_bubble.classList.add('visible');

        });
        variety6.addEventListener('pointerleave', function () {
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
            classicText.innerText = " Rating: 4/5 ★★★★ \n Classic by Homer | Transslated by Robert Fitzgerald. Homer’s epic tells the story of Odysseus’s long, monster-filled journey to get home to Ithaca, his kingdom, wife, and son. His cleverness, patience, and will to survive are tested on this harsh voyage. In this translation by Fitzgerald, we are able to read it in a poetic rhythm, making it easy to read for many. I've read this now, as I am older and have become more curious to learn about what the source says, rather than modern retellings, though I still really love those. These translations are what keep these myths and their lessons alive."

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
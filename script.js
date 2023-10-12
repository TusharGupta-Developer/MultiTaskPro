// // Get the button element by its ID
// const myButton = document.getElementsByTagName('button');

// // Attach a click event listener to the button
// myButton.forEach(element => {
//     element.addEventListener('click',(event)=>{

//         event.preventDefault();
//     })
// });

//The getElementsByTagName method returns an HTMLCollection, not an array, so you can't directly use the forEach method on it. You can either convert the HTMLCollection to an array or use a for loop to iterate through the elements. Here's an example using a for loop:



//// Get all anchor elements on the page
const myButtons = document.getElementsByTagName('a');

// Iterate through the buttons and attach click event listeners
for (let i = 0; i < myButtons.length; i++) {
    myButtons[i].addEventListener('click', (event) => {
        event.preventDefault();
        // Your custom code here (e.g., perform some other action)
    });
}


// for menubar icon 
const icon_container = document.getElementsByClassName("ri-menu-3-fill")[0];

icon_container.addEventListener("click", (event) => {
    let div = document.createElement('div');
    div.className = "animate_icon icon_container"
    div.innerHTML = "<span><i class='ri-close-fill'></i></span> <h2>Home</h2><h2>About</h2><h2>Contanct</h2>";
    document.body.prepend(div);

    document.getElementsByClassName("ri-close-fill")[0].addEventListener("click", (event) => {
        div.outerHTML = ""
    })

})


//  a1 = "task !"
// const a2 = "work !"
// const a3 = "goal !"

// const stringAnimation = () => {
//     return new Promise((resolve, reject) => {
// const
//         setTimeout(() => {
//             let str = document.getElementById('string');
//             str.innerHTML = " "
//         }, 100);

//     })
// }

// const stringAnimation2 = (a) => {
//     return new Promise((resolve, reject) => {

//         for (let i = 0; i < a.length; i++) {
//             setTimeout(() => {
// //                 let str = document.getElementById('string');
//                 str.appendChild(a[i]);

//             }, 100);

//         }

//     })
// }
// (func = async () => {
//     let i = 3;
//     for (i; i < 4; i++) {
//         setInterval(async () => {

//             let a = await stringAnimation();
//             let b = await stringAnimation2(a + i);
//             if (a+i) {
//                 func();
//             }
//         },2000)
// }

// })();

const strings = ["work !", "goal !", "chore !", "problem !" , "burden !"];
let currentStringIndex = 0;
let currentLetterIndex = 0;

function displayLetters() {
    const element = document.getElementById('string');
    const currentString = strings[currentStringIndex];
    element.textContent = currentString.substring(0, currentLetterIndex);

    currentLetterIndex++;

    if (currentLetterIndex <= currentString.length) {
        setTimeout(displayLetters, 60); // Adjust the delay as needed
    } else {
        setTimeout(eraseLetters, 1000); // Delay before erasing
    }
}

function eraseLetters() {
    const element = document.getElementById('string');
    const currentString = strings[currentStringIndex];
    element.textContent = currentString.substring(0, currentLetterIndex);

    currentLetterIndex--;

    if (currentLetterIndex >= 0) {
        setTimeout(eraseLetters, 60); // Adjust the delay as needed
    } else {
        currentStringIndex = (currentStringIndex + 1) % strings.length;
        setTimeout(displayLetters, 1000); // Delay before displaying the next string
    }
}

// Start the animation
displayLetters();





// // Get the button element by its ID
// const myButton = document.getElementsByTagName('button');

// // Attach a click event listener to the button
// myButton.forEach(element => {
//     element.addEventListener('click',(event)=>{

//         event.preventDefault();
//     })
// });

//The getElementsByTagName method returns an HTMLCollection, not an array, so you can't directly use the forEach method on it. You can either convert the HTMLCollection to an array or use a for loop to iterate through the elements. Here's an example using a for loop:



//// Get all button elements on the page
const myButtons = document.getElementsByTagName('button');

// Iterate through the buttons and attach click event listeners
for (let i = 0; i < myButtons.length; i++) {
    myButtons[i].addEventListener('click', (event) => {
        event.preventDefault();
        // Your custom code here (e.g., perform some other action)
    });
}


// for menubar icon 
const icon_container = document.getElementsByClassName("ri-menu-3-fill")[0];

icon_container.addEventListener("click",(event)=>{
    let div = document.createElement('div');
    div.className = "animate_icon icon_container"
    div.innerHTML = "<span><i class='ri-close-fill'></i></span> <h2>Home</h2><h2>About</h2><h2>Contanct</h2>";
    document.body.prepend(div);

    document.getElementsByClassName("ri-close-fill")[0].addEventListener("click",(event)=>{
        div.outerHTML = ""
    })

})





 
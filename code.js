// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.
console.log(pages[0]);

let endingPages = [4, 9, 13, 17, 19, 20];
let currentPage = 0;
let theEnd = ``

// Your Code Here.
function page(currentPage) {
    
    for (let i = 0; i < endingPages.length; i += 1){

    
    if (currentPage === endingPages[i]){
    
         return true
    }
}

    return false
}

while (currentPage !== null){
    
    currentPage = prompt(`${pages[currentPage]} \n What page would you like to go to?`)
    
    if (currentPage !== null) {
        
        currentPage = parseInt(currentPage);
      }
      
      theEnd = theEnd.concat(pages[currentPage] + `<p></p>`)
      
      if (page(currentPage) === true ){
      
        currentPage = null;

        document.write(`${theEnd} YOUR ADVENTURE ENDS HERE!`)
      }
} 


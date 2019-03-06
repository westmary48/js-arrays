// step one - loop over dinosaurs
// step two- build up a domstring
// print domstring to the dom
// printToDom = not +=

const dinosaurs = [
   {
       dinotype: 't-rex',
       name: 'wrex'
   },
   {
       dinotype: 'stegosaurus',
       name: 'tom'
   },
   {
       dinotype: 'velociraptor',
       name: 'nick'
   }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
}

const buildDinosaurs = () => {
    // let domString needs to be outside forLoop
    let domString = '';
    // 1.) starting position (let i = 0)
    // 2.) ending position (dinosaurs.length)
    // 3.) increase the i each time (i++)
    for(let i = 0; i <  dinosaurs.length; i++){
        domString += `<div class = 'dinosaur'>`
        domString += `<h3>${dinosaurs[i].dinotype}</h3>`;
        domString += `<h3>${dinosaurs[i].name}</h3>`;
        domString += `</div>`

        // console.log(dinosaurs[i].dinotype);

    }
    // console.log(domString);
    printToDom('dino-barn', domString);
};

const assignments = [
    {
        title: 'product cards',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'Use flexbox',
        assignmentUrl: 'www.google.com',
    },
    {
        title: 'assignment 2',
        dueDate: '05/04/2019',
        topic: 'HTML/CSS/JavaScript',
        notes: 'Use flexbox, and a for loop',
        assignmentUrl: 'www.google.com',
    },
    {
        title: 'assignment 3',
        dueDate: '05/15/2019',
        topic: 'HTML/CSS/SCSS',
        notes: 'Use flexbox',
        assignmentUrl: 'www.google.com',
    },
    {
        title: 'assignment 4',
        dueDate: '06/13/2019',
        topic: 'HTML/CSS/REACT',
        notes: 'Use flexbox',
        assignmentUrl: 'www.google.com',
    },
    {
        title: 'assignment 5',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS/JQUERY',
        notes: 'Use flexbox',
        assignmentUrl: 'www.google.com',
    },
];

const buildAssignmentCard = () => {
    let domString = '';
    for(let i = 0; i < assignments.length; i++) {
        domString += `<div class ='assignments'>`
        domString += `<h3 class = "assignment-title">${assignments[i].title}</h3>`
        domString += `<h3>Due Date: ${assignments[i].dueDate}</h3>`
        domString += `<h3>Topic: ${assignments[i].topic}</h3>`
        domString += `<p>Notes: ${assignments[i].notes}</p>`
        domString += `<a href>${assignments[i].assignmentUrl}</a>`
        domString += `</div>`


    }
    printToDom('assignments', domString);

}

// total of 5 assignments
//make a funtion called buildAssignmentCard = loop over assignments and make a domString
//reuse the printToDom function to display the domString



// this function runs on page load
const init = () => {
  buildDinosaurs();
  buildAssignmentCard();
};

init();


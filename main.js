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

// this function runs on page load
const init = () => {
  buildDinosaurs();
};

init();


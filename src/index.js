
const form= document.getElementById("votes-form").addEventListener("submit",handleSubmit)



fetch ('http://localhost:3000/characters')
.then (res=>res.json())
.then (votes=>votes.forEach(vote  => buildPage(vote)))


function handleSubmit (e){
    e.preventDefault()
    let Votes= 0
    const newVotes= parseInt(e.target.votes.value )
    Votes += newVotes 

    const details= document.getElementById('detailed-info')
    const totalVotes= details.querySelector("h4")
    totalVotes.append(Votes) 
// Its not working , not adding to the votes 
}

function buildPage(vote){
    const character= document.getElementById('character-bar');
    // character.innerHTML=
    // <p>
    //     <span class= "character-name">${vote.name}</span>
    // </p>
    
    const p = document.createElement('p');
    p.textContent= vote.name;
    character.append(p);
    p.addEventListener("click", e=> characterInfo(vote))
}

function characterInfo (vote){
    const details= document.getElementById('detailed-info')
    const characterName= details.querySelector("p")
    const characterImage = details.querySelector("img")
    const totalVotes= details.querySelector("h4")

    characterName.textContent=vote.name;
    characterImage.src=vote.image ;
    totalVotes.textContent= `Total Votes :${vote.votes} `
}



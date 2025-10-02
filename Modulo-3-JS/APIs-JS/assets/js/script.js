const userCard = document.querySelector("#userCard");
const charContainer = document.querySelector("#charContainer")
const selectCont = document.querySelector("#selectCont")
const textInput = document.querySelector("#textInput")
const continenteDiv = document.querySelector("#continente")


textInput.addEventListener("change", (e)=>{
    console.log(e)
})

async function getRandomUser() {
  try {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    console.log(data.results[0]);
    return data.results[0];
  } catch (error) {
    console.log(error);
    userCard.innerHTML = `<p class='error'>Hubo un error en la app :(</p>`;
  }
}

async function renderUser() {
  const user = await getRandomUser();
  userCard.innerHTML = `
        <h3>${user.name.first} ${user.name.last}</h3>
        <img src=${user.picture.medium} alt="user">
        <p>Telefono: ${user.phone}</p>
        <p>E-Mail: ${user.email}</p>
        <p>Ubicación: ${user.location.state}, ${user.location.country}</p>
    `;
}

renderUser();


async function getCharacters() {
    try {
        const res = await fetch("https://thronesapi.com/api/v2/Characters")
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}


async function renderChars() {
    try {
        const characters = await getCharacters()
        let template = ""

        for(c of characters){
            template+= `<p>${c.firstName} ${c.lastName}</p>`
        }

        charContainer.innerHTML = template
    } catch (error) {
        console.log(error)
    }
}

renderChars()

async function getContinents() {
    try {
        const res = await fetch("https://thronesapi.com/api/v2/Continents")
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

async function renderOptions() {
    try {
        const continents = await getContinents()
        let template = ""
        
        for(c of continents){
            template += `<option value=${c.id}>${c.name}</option>`
        }
        selectCont.innerHTML += template
    } catch (error) {
        console.log(error)
    }
}

renderOptions()

selectCont.addEventListener("change", async (evento)=>{
    const id = evento.target.value
    try {
        const res = await fetch(`https://thronesapi.com/api/v2/Continents/${id}`)
        const data = await res.json()

        continenteDiv.innerHTML = `<p>${data.id} - ${data.name}</p>`
    } catch (error) {
        console.log(error)
    }
})
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//definizione della fuinzione che mi genera la struttura delle card
const renderCards = () => {

  for (let i = 0; i < teamMembers.length; i++) {

    let card = generateCard(teamMembers[i]);

    teamContainer.innerHTML += card;

  }
}
const generateCard = (member) => {

  const { name, role, email, img } = member;

  //mi creo una variabile che conterrà l'html e le informazioni della card
  const memberCard = `<div class="col-12 col-md-4">
        <div class="card mb-3 bg-black">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="./assets/${img}" class="img-fluid" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-light" id="name">${name}</h5>
                <p class="card-text text-light" id="role">${role}</p>
                <p class="card-text text-primary" id="email">${email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>`
  return memberCard;

}

const teamContainer = document.getElementById('team-members');
const addButton = document.getElementById('add-member');


renderCards();
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  teamContainer.innerHTML = '';

  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const email = document.getElementById('email').value;
  const image = document.getElementById('image').value;

  //verifico la consistenza dei dati
  if (name == '' || role == '' || image == '' || email == '') {
    alert('Tutti i campi sono obbligatori');
    return;
  }

  const newMember = {
    name,
    role,
    email,
    image
  }

  //pusho il nuovo oggetto nell'array
  teamMembers.push(newMember);

  //svuoto i campi della form
  document.getElementById('name').value = '';
  document.getElementById('role').value = '';
  document.getElementById('email').value = '';
  document.getElementById('image').value = '';

  console.log(teamMembers);
  renderCards();
})
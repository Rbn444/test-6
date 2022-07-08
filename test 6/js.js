let userObj = [];
let url = "./users.json"

async function getUsers() {
    await fetch(url).then(res=>res.json()).then((res)=>{
        res.users.forEach((user) => {
            let userPush = new UserClass(user.name, user.username, user.email, user.gender);
            userObj.push(userPush);
        } )
    })

    userObj.forEach((user) => {
        user.putIntoView();
    })

}

getUsers();

class UserClass {
    constructor(a, b, c, d) {
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
    }
    get a() { return this._a; }
    get b() { return this._b; }
    get c() { return this._c; }
    get d() { return this._d; }

    set a(a) { this._a = a; }
    set b(b) { this._b = b; }
    set c(c) { this._c = c; }
    set d(d) { this._d = d; }

    putIntoView() {
        let name = this._a;
        let surname = this._b;
        let email = this._c;
        let gender = this._d;

        let container = document.getElementById("container");
        
        let cardContainer = document.createElement("div");
        
        cardContainer.className = "cardContainer";
        
        let cardPhoto = document.createElement("div");
        cardPhoto.className = "cardPhoto";
        
        let cardName = document.createElement('div')
        cardName.innerHTML ="<h2>name: " + name + "</h2>" ;

        let cardSurname = document.createElement('div')
        cardSurname.innerHTML ="<h2>surname: " + surname + "</h2>" ;

        let cardEmail = document.createElement('div')
        cardEmail.innerHTML ="<h2>email:</h2>" + "<a href='mailto:" + email + "'>" + email + "</a>" ;

        let cardGender = document.createElement('div')

        let numero = Math.floor(Math.random() * 50);
        cardPhoto.style.backgroundImage = "url(https://picsum.photos/id/" + numero + "/200)"

        if(this._d == "male") {
            cardGender.innerHTML = "<ion-icon name=\"man-outline\"></ion-icon>"
            cardGender.className = "cardGenderM";
            cardContainer.style.backgroundColor = "blue"
        } else {
            cardGender.innerHTML = "<ion-icon name=\"woman-outline\"></ion-icon>";
            cardGender.className = "cardGenderF";
            cardContainer.style.backgroundColor = "blueviolet";
        }
        

        container.appendChild(cardContainer);

        cardContainer.appendChild(cardPhoto);
        cardContainer.appendChild(cardName);
        cardContainer.appendChild(cardSurname);
        cardContainer.appendChild(cardEmail);
        cardContainer.appendChild(cardGender);
        

    }
}



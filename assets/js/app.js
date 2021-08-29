
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBUO1QmvH3TPXYqDXLAA2SuMOgonQgJWEE",
    authDomain: "hree-create-form.firebaseapp.com",
    databaseURL: "https://hree-create-form-default-rtdb.firebaseio.com",
    projectId: "hree-create-form",
    storageBucket: "hree-create-form.appspot.com",
    messagingSenderId: "654558441277",
    appId: "1:654558441277:web:c64a53e0fdefcd7b681f54",
    measurementId: "G-RDQ500G8E7"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


// Reference contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".my-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get Input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let project = document.querySelector(".project").value;
    let description = document.querySelector(".description").value;
    let photo = document.querySelector(".photo").value;
    console.log(name, email, project, description);

    saveContactInfo(name, email, project, description, photo);
}

// Save infos to Firebase
function saveContactInfo(name, email, project, description, photo) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        project: project,
        description: description,
        photo: photo,
    })
}
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    getFirestore,
    setDoc,
    doc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAEiXirH3d_bZz5qPW3t1tTzpoe9q7F5Q8",
    authDomain: "cplus-a4199.firebaseapp.com",
    projectId: "cplus-a4199",
    storageBucket: "cplus-a4199.appspot.com",
    messagingSenderId: "585506755493",
    appId: "1:585506755493:web:db8bf8cd97eac828260e4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const signup = document.getElementById("submitSignup");
signup.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.getElementById("emailSignup").value;
    const password = document.getElementById("passwordSignup").value;
    const username = document.getElementById("usernameSignup").value;

    if (!email || !password || !username) {
        showMessage("All fields are required", "signUpMessage");
        return;
    }

    console.log("Gotten Email:", email);
    console.log(" Gotten Password:", password);
    console.log(" Gotten Username:", username);


    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userData = {
                email: email,
                username: username,
            };
            showMessage("User created successfully", "signUpMessage");
            const docRef = doc(db, "users", user.uid);
            setDoc(docRef, userData)
                .then(() => {
                    window.location.href = "index1.html";
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                    showMessage("Error saving user data", "signUpMessage");
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            switch (errorCode) {
                case "auth/email-already-in-use":
                    showMessage("Email already in use", "signUpMessage");
                    break;
                case "auth/invalid-email":
                    showMessage("Invalid email format", "signUpMessage");
                    break;
                case "auth/weak-password":
                    showMessage(
                        "Password should be at least 6 characters",
                        "signUpMessage"
                    );
                    break;
                default:
                    showMessage("Unable to create user", "signUpMessage");
            }
        });
});

const signin = document.getElementById("submitSignIn");

signin.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.getElementById("emailSignIn").value;
    const password = document.getElementById("passwordSignIn").value;

    // Input validation
    if (!validateEmail(email)) {
        showMessage("Invalid email format", "signInMessage");
        return;
    }
    if (!validatePassword(password)) {
        showMessage("Password must be at least 6 characters", "signInMessage");
        return;
    }

    // Show loading indicator
    showLoadingIndicator(true);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            showMessage("User signed in successfully", "signInMessage");
            const user = userCredential.user;
            localStorage.setItem("loggedInUserId", user.uid);
            window.location.href = "index1.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            switch (errorCode) {
                case "auth/user-not-found":
                    showMessage("User not found", "signInMessage");
                    break;
                case "auth/wrong-password":
                    showMessage("Invalid password", "signInMessage");
                    break;
                case "auth/invalid-email":
                    showMessage("Invalid email format", "signInMessage");
                    break;
                default:
                    showMessage("Unable to sign in", "signInMessage");
            }
        })
        .finally(() => {
            // Hide loading indicator
            showLoadingIndicator(false);
        });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    return password.length >= 6;
}

function showLoadingIndicator(show) {
    const indicator = document.getElementById("loadingIndicator");
    indicator.style.display = show ? "block" : "none";
}

function showMessage(message, elementId) {
    const messageElement = document.getElementById(elementId);
    messageElement.textContent = message;
}

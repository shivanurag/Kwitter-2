const firebaseConfig = {
    apiKey: "AIzaSyAyNT4QeQPyak_gA8LSfRE-uhO-DpuvX6g",
    authDomain: "kwitter-c561a.firebaseapp.com",
    databaseURL: "https://kwitter-c561a-default-rtdb.firebaseio.com",
    projectId: "kwitter-c561a",
    storageBucket: "kwitter-c561a.appspot.com",
    messagingSenderId: "593368902156",
    appId: "1:593368902156:web:13fff5fa50d70d55c7dc29"
  };
  firebase.initializeApp(firebaseConfig);

  function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name: user_name,
      message: msg,
      like: 0
    });
  
    document.getElementById("msg").value = "";
  }

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    }
    
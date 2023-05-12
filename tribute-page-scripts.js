//PHOTOS DECLARATION AND EVENTS
let alienPhotos = document.getElementById("img-1");
let titanicPhotos = document.getElementById("img-2");
let avatarPhotos = document.getElementById("img-3");
let avatar2Photos = document.getElementById("img-4");


alienPhotos.addEventListener("mouseover", () => { alienPhotos.src = ("assets/aliens-js.jpg") });
alienPhotos.addEventListener("mouseout", () => { alienPhotos.src = ("assets/aliens.jpg") });

titanicPhotos.addEventListener("mouseover", () => { titanicPhotos.src = ("assets/titanic-js.jpg") });
titanicPhotos.addEventListener("mouseout", () => { titanicPhotos.src = ("assets/titanic.jpg") });

avatarPhotos.addEventListener("mouseover", () => { avatarPhotos.src = ("assets/avatar-js.jpg") });
avatarPhotos.addEventListener("mouseout", () => { avatarPhotos.src = ("assets/avatar-1.jpg") });

avatar2Photos.addEventListener("mouseover", () => { avatar2Photos.src = ("assets/avatar-2-js.jpg") });
avatar2Photos.addEventListener("mouseout", () => { avatar2Photos.src = ("assets/avatar-2.png") });


//AUDIO FILE DECLARATION
let musicOnButton = document.getElementById("music-on");
let musicOffButton = document.getElementById("music-off");
let pandoraSong = document.getElementById("song");

//MUSIC BUTTONS EVENTS
musicOnButton.addEventListener("click", () => { pandoraSong.play() });
musicOffButton.addEventListener("click", () => { pandoraSong.pause() });
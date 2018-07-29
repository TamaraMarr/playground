let talk = function () {
    console.log(this.sound);
}

let boromir = {
    sound: "One does not simply walk into Mordor"
}

boromir.speak = talk.bind(boromir);
let blabber = boromir.speak;
blabber();
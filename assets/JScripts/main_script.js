var topics = ["HTML", "CSS", "Git", "Bash Commands", "Javascript"];

var RandomTopic = topics[Math.floor(Math.random() * topics.length)];

function ListTopics() {
    for(var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function SelectTopics() {
    if (RandomTopic === 'HTML') {
        console.log("Let's study HTML!");
       } else if (RandomTopic === 'CSS') {
        console.log("Let's study CSS!");
       } else if (RandomTopic === 'Git') {
        console.log("Let's study Git!");
       } else if (RandomTopic === 'Bash Commands') {
        console.log("Let's study Bash Commands!");
       } else if (RandomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
       } else {
        console.log('Please try again!');
       }
    }
console.log("Here are the topics learned throughout prework");
ListTopics()
console.log("Which topic should we study first");
SelectTopics()
// *Typing Effect*
const text = `Makasih yaa sayang sudah selalu ada buat aku. 
Aku senang kita masih bisa bersama walaupun banyak cobaan. 
Semoga kita selalu bahagia dan saling memahami satu sama lain. 
Aku sayang kamu ❤.`;

let index = 0;
const speed = 50; // Kecepatan ngetik (ms)
const typingElement = document.getElementById("typing-text");

function typeWriter() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = () => {
    setTimeout(typeWriter, 500);
};

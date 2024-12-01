var app = document.getElementById('text');

var customNodeCreator = function (character) {
    return document.createTextNode(character);
}

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
    onCreateTextNode: customNodeCreator,
});

typewriter
    .typeString("Hi, I'm NC")
    .pauseFor(1500)
    .deleteChars(2)
    .typeString('<strong>a full-stack developer</strong>')
    .pauseFor(2000)
    .deleteChars(22)
    .typeString('<strong>the CEO of Shadow</strong>')
    .pauseFor(2000)
    .start();



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

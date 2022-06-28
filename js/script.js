function Chief() {
    let row1 = document.getElementById('row1')
    let valid = document.getElementById("valid");

    row1.classList.add("hidden")
    valid.classList.remove("hidden")
}

function Meet() {
    let image = document.getElementById("image-1");
    let iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/_GuOjXYl5ew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    let toadd = document.getElementById("rcol")
    image.classList.add("hidden");
    toadd.innerHTML = iframe;
}

function Increment() {
    let initial = parseInt(document.getElementById("number").textContent);
    let nb = document.getElementById("number");
    nb.textContent = parseInt(initial+1) + ' '
}

function Randomise() {
    let nb1 = Math.floor(Math.random() * 99999) + 1;
    let nb2 = Math.floor(Math.random() * 99999) + 1;
    let nb3 = Math.floor(Math.random() * 99999) + 1;
    let value1 = document.getElementById("number2");
    let value2 = document.getElementById("number3");
    let value3 = document.getElementById("number4");
    value1.textContent = nb1 + '+'
    value2.textContent = nb2 + '+'
    value3.textContent = nb3 + '+'
}

function Newsletter() {
    let input = document.getElementById("inputmail");
    let msg = document.getElementById("validate");
    let button = document.getElementById("button-reg");
    if (!input.value)
        return
    else {
        msg.classList.remove("hidden");
        msg.classList.add("valid-comand");
        input.classList.add("hidden");
        button.classList.add("hidden");
        msg.textContent = "Merci " + input.value;
    }
}
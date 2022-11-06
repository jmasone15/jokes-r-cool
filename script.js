const btn = document.getElementById("button");
const setupEl = document.getElementById("setup");
const deliverEl = document.getElementById("delivery");

btn.addEventListener("click", async () => {
    setupEl.setAttribute("class", "display-none");
    deliverEl.setAttribute("class", "display-none");

    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await response.json();

    console.log(data);

    if (!data.error) {
        if (data.type === "twopart") {
            setupEl.removeAttribute("class");
            setupEl.innerText = data.setup;
    
            deliverEl.removeAttribute("class");
            deliverEl.innerText = data.delivery
        } else {
            setupEl.removeAttribute("class");
            setupEl.innerText = data.joke;
        }
    } else {
        setupEl.removeAttribute("class");
        setupEl.innerText = "An error occurred, please try again.";
    }
});
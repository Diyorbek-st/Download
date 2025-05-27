const root = document.querySelector("#root")


const h1 = document.createElement("h1")
h1.classList.add("heading")
h1.textContent = "Yangiliklar"
root.append(h1)

const card = document.createElement("div")
card.classList.add("card")
root.append(card)


const img = document.createElement("img")
img.getAttribute("src" , ("https://th.bing.com/th/id/OIP.vsHd6RNvy28r8BTT9J7Q5AAAAA?rs=1&pid=ImgDetMain"))
img.classList.add("img")
card.appendChild(img)

const h2 = document.createElement("h2")
h2.classList.add("h2")
h2.innerHTML = "Xalq deputatlari tuman kengashining navbatdagi yangi yigilishi."
card.append(h2)

const btn = document.createElement("button")
btn.classList.add("btn")
btn.innerHTML = "BATAFSIL"
card.append(btn)


let petrasImg = [
"https://media.lrytas.lt/images/2020/12/08/082054419-42c95415-7cbf-4b3d-ba33-fd5ee2be41c4.png",
"https://lithuaniatribune.com/wp-content/uploads/2019/04/4852931.jpg",
"https://www.lgl.lt/en/files/grazulis.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZwImkg-RBgFlTIR5JtJSePm0bon2zczwbYQ&usqp=CAU",
"https://lithuaniatribune.com/wp-content/uploads/2019/04/7448714.jpg",
"https://i1.wp.com/bukimevieningi.lt/wp-content/uploads/2020/05/Petras-Gra%C5%BEulis-Seime-d%C5%BEinsai-skyl%C4%97.jpg?fit=1200%2C800&ssl=1",
"https://www.atviraklaipeda.lt/wp-content/uploads/grazulis-2.jpg",
"https://i.ytimg.com/vi/f4xOjXiWa0o/maxresdefault.jpg",
"https://www.lrt.lt/img/2021/04/12/911812-152864-1287x836.jpg",

];

let petrasQuotes = [
    "Atleiskit man, silpnam zmogui...",
    "As panevezyje jau, irodziau savo orientacija",
    "Uz Lietuva vyrai!!!",
    "Atleisk man dieve, susidejau su moterimi...",
    "kas nesokines",
    "nepasitikiu Astra zeneka jokia"
]

//loop for changing imgs
const imgs = document.getElementsByTagName("img")
for (let i = 0; i < imgs.length; i++){
    const randomImg = Math.floor(Math.random() * petrasImg.length)
    imgs[i].src = petrasImg[randomImg];
}


const headings1 = document.getElementsByTagName("h1")
for (let i = 0; i < headings1.length; i++){
    headings1[i].innerText = "Petras Grazulis"
}

const headings2 = document.getElementsByTagName("h2")
for (let i = 0; i < headings2.length; i++){
    const randomQuote = Math.floor(Math.random() * petrasQuotes.length)
    headings2[i].innerText = petrasQuotes[randomQuote]
}

const headings3 = document.getElementsByTagName("h3")
for (let i = 0; i < headings3.length; i++){
    const randomQuote = Math.floor(Math.random() * petrasQuotes.length)
    headings3[i].innerText = petrasQuotes[randomQuote]
}

const p1 = document.getElementsByTagName("p1")
for (let i = 0; i < p1.length; i++){
    const randomQuote = Math.floor(Math.random() * petrasQuotes.length)
    p1[i].innerText = petrasQuotes[randomQuote]
}

const youtube = document.getElementsByTagName("yt-formatted-string")
for (let i = 0; i < youtube.length; i++){
    const randomQuote = Math.floor(Math.random() * petrasQuotes.length)
    youtube[i].innerText = petrasQuotes[randomQuote]
}



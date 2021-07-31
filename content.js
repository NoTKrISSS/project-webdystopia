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
"https://tv3.lt/Uploads/UArticles/leadPhotos/85/bc/c2/0a/85bcc20ac0cc2d743165c0ca13274176.jpg",
"https://komentaras.lt/wp-content/uploads/2018/05/Grazulis.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8gS_U0a5nqreEOTYbEN37WiyemM-LK1Jsw&usqp=CAU",
"https://static3.inspektorius.lt/usi/211x232/3/57/9f/81/579f81d216045ed31b06849e8f7814ad.jpg?v=4.2.1.51&t=cr&s=211x232&m=3&f=/Uploads/UArticles/leadPhotos/39/6d/f9/13/396df913bd3a2fa861a66aec6fed321d.jpg",
"https://www.zmones.lt/photo/265cbb37-94aa-11e8-9f90-aa000054c883/300x200/petras-grazulis-4fa910b925c7a.jpg",
"https://s31242.pcdn.co/wp-content/uploads/2021/04/lithuanian-mp.jpg",
"https://s1.15min.lt/images/photos/2010/05/08/original/1273327473dsc_3549.jpg",
"https://kaunas.kasvyksta.lt/wp-content/uploads/2020/01/P.-Gra%C5%BEulis-300x225.jpg",
"https://media.lrytas.lt/images/2018/09/25/131231752-2af1bfb6-2e42-4543-9fe4-017034cbf0a2.jpg",
"https://www.tv3.lt/Uploads/UArticles/leadPhotos/74/df/df/f5/74dfdff523cb8a06bc06a7b6752489b8.jpg",
"https://www.diena.lt/sites/default/files/styles/didele/public/Vilniausdiena/Vartotoju%20zona/rasaj/fb-bb314051_1.jpg?itok=_gHemltP",
"https://www.lrt.lt/img/2020/10/26/749397-931609-756x425.jpg",
"https://media.lrytas.lt/images/2021/06/05/124602387-562f19db-5730-4bbd-a5ba-f4a67c3bdbd1.jpg",
"https://www.diena.lt/sites/default/files/styles/800x600/public/Vilniausdiena/Vartotoju%20zona/Jovita_Gudeleviciute/img1043356.jpg?itok=l9XFXkyA",
"https://i.ytimg.com/vi/44KKApfDYVE/maxresdefault.jpg",
"https://s1.15min.lt/images/photos/2014/02/23/original/trecioji-suolio-laida-530a5d4bcac42.jpg"
];

let petrasQuotes = [
    "Atleiskit man, silpnam zmogui...",
    "As panevezyje jau irodziau savo orientacija",
    "Uz Lietuva vyrai!!!",
    "Atleisk man dieve, susidejau su moterimi...",
    "kas nesokines",
    "nepasitikiu Astra zeneka jokia",
    "rinkėjams patinka, kad visokių naujų nuotykių nutinka",
    "Nebijau kalejimo! uz teisybe galiu ir pasedeti",
    "Visą laiką aš kovojau prieš sistemą",
    "Aš esu teistas, prie to pripratęs", 
    "rąsus ir nieko nebijau, net homoseksualų"
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

const headings4 = document.getElementsByTagName("h4")
for (let i = 0; i < headings4.length; i++){
    const randomQuote = Math.floor(Math.random() * petrasQuotes.length)
    headings4[i].innerText = petrasQuotes[randomQuote]
}

const headings5 = document.getElementsByTagName("h5")
for (let i = 0; i < headings5.length; i++){
    const randomQuote = Math.floor(Math.random() * petrasQuotes.length)
    headings5[i].innerText = petrasQuotes[randomQuote]
}

const headings6 = document.getElementsByTagName("h6")
for (let i = 0; i < headings6.length; i++){
    const randomQuote = Math.floor(Math.random() * petrasQuotes.length)
    headings6[i].innerText = petrasQuotes[randomQuote]
}

const p = document.getElementsByTagName("p")
for (let i = 0; i < p.length; i++){
    const randomQuote = Math.floor(Math.random() * petrasQuotes.length)
    p[i].innerText = petrasQuotes[randomQuote]
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

let petras = [
    "https://media.lrytas.lt/images/2020/12/08/082054419-42c95415-7cbf-4b3d-ba33-fd5ee2be41c4.png",
    "https://lithuaniatribune.com/wp-content/uploads/2019/04/4852931.jpg",
    "https://www.lgl.lt/en/files/grazulis.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZwImkg-RBgFlTIR5JtJSePm0bon2zczwbYQ&usqp=CAU",
    "https://lithuaniatribune.com/wp-content/uploads/2019/04/7448714.jpg"
];

//loop for changing imgs
const imgs = document.getElementsByTagName("img")
for (let i = 0; i < imgs.length; i++){
    const randomImg = Math.floor(Math.random() * petras.length);
    imgs[i].src = petras[randomImg];
}
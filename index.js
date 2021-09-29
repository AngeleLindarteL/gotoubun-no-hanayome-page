const slider = document.querySelector(".slider-img-container");
const sliderController = document.querySelector(".slider-controller");
const imagesN = slider.children.length;
const limit = imagesN * 100;

const galps = [
    document.querySelector("#galp-img-1"),
    document.querySelector("#galp-img-2"),
    document.querySelector("#galp-img-3"),
    document.querySelector("#galp-img-4"),
    document.querySelector("#galp-img-5"),
    document.querySelector("#galp-img-6"),
    document.querySelector("#galp-img-7"),
    document.querySelector("#galp-img-8"),
    document.querySelector("#galp-img-9"),
    document.querySelector("#galp-img-10"),
    document.querySelector("#galp-img-11"),
    document.querySelector("#galp-img-12"),
    document.querySelector("#galp-img-13"),
    document.querySelector("#galp-img-14"),
    document.querySelector("#galp-img-15"),
]

slider.style.width = `${limit}%`;
slider.style.left = `0%`;

let counter = 0;
let controllers = document.createDocumentFragment();
for(let i = 0; i < imagesN; i++){
    let tempCount = document.createElement("BUTTON");
    tempCount.addEventListener('click', () => {
        slider.style.left = `-${i * 100}%`;
        counter == i * 100;
    })
    tempCount.className = "transition-btn";
    controllers.append(tempCount);
}
sliderController.appendChild(controllers)

setInterval(() => {
    counter += 100;
    if(counter != limit){
        slider.style.left = `-${counter}%`;
    }else{
        counter = 0;
        slider.style.left = `-${counter}%`;
    }
}, 5000)

galps.forEach(galp => {
    galp.addEventListener('click', () =>{
        let container = document.createElement("div");
        let img = document.createElement("img");
        let closeBtn = document.createElement("button");
        closeBtn.addEventListener('click', () => {
            (document.querySelector('body')).removeChild(container)
        })
        img.src = galp.src;
        closeBtn.textContent = "X";
        container.className = "zoomedImg";
        closeBtn.className = "closeBtn";
        container.append(img)
        container.append(closeBtn)
        document.querySelector('body').append(container);
    })
})

window.addEventListener('scroll', () => {
    if(window.scrollY > 200){
        document.querySelector("header").style.backgroundColor = "white";
        console.log("Hola")
    }else{
        document.querySelector("header").style.backgroundColor = "transparent";
    }
})
function detDate(){
    let day = new Date();
    let d = document.querySelector("#day");
    let m = document.querySelector("#month");
    d.innerHTML = day.getDate();
    m.innerHTML = day.getMonth();
    setTimeout(detDate, 1000);
}
let ProdForm = document.querySelector('.proInfo');
let addProd = document.getElementById("proBu");
let body = document.querySelector('.P');
let profo = document.querySelector('.fopro');
let cancel = document.querySelector('.crpro1');
addProd.addEventListener("click",() => {
    ProdForm.classList.toggle("Active");
    ProdForm.classList.toggle("box");
    profo.classList.toggle('proInfo');
});
cancel.addEventListener("click",() => {
    ProdForm.classList.toggle("Active");
    ProdForm.classList.toggle("box");
    profo.classList.toggle('proInfo');
})
// ADDing New Product
let ap12 = document.getElementById("snn");
ap12.addEventListener("click",() => {
    ProdForm.classList.toggle("Active");
    ProdForm.classList.toggle("box");
    profo.classList.toggle('proInfo');
});
// Updating the product
function Update(){
let ap13 = document.getElementsByClassName("proBu2")[0];
ap13.addEventListener("click",() => {
    alert("Your Product Has been Updated");
});};
// Deleting the product
function Delete(){
let ap14 = document.getElementsByClassName("proBu2")[1];
ap14.addEventListener("click",() => {
    alert("Your Product Has been Removed");
});};

// Payment Part

function payment(){
    let ap15 = document.getElementsByClassName("x")[0];
    const parchase = document.querySelector(".bigdiv");
    const exit = document.getElementById("bu");
    const buy =document.getElementById("bu1");
    const to = document.getElementById("toast");
    const dia =document.getElementById("dia");
    exit.addEventListener("click",(eo) => {
        parchase.classList.remove("non");
        eo.preventDefault();
    });
    const fun = (eo) => {
        parchase.classList.remove("non")
    };
    const fun1 = (eo) => {
        dia.style.display="block";
        to.classList.remove("non");
    };
    buy.addEventListener("click",(eo) => {
        to.classList.add("non");
        dia.style.display="none";
        setTimeout(fun,2000);
        setTimeout(fun1,2100);
    });
    ap15.addEventListener("click",(eo) => {
    parchase.classList.add("non");
    });
    let bigc = document.getElementById("org");
    bigc.addEventListener("click",(eo) => {
        if (eo.target.className == "modbup1 x"){
            eo.preventDefault();
            parchase.classList.add("non");
        };
    });};
// let ap1 = document.querySelector("#addproduct");
// const maindiv = document.getElementsByClassName("EMPTY")[0];
// ap1.addEventListener("click",() => {
//     const xxx = `<div class="p1">
//     <div id="imgpos">
//         <img src="./Assets/Images/p1.jpg" class="p1img" alt="Unavailable">
//     </div>
//     <div class="p1T">
//         <h3>Apple Watch</h3>
//         <p>The larger display enhances the entire experience, making Apple Watch easier to use and read. Series 7 represents our biggest and brightest thinking yet. <br>
//             The challenge was to create a bigger display while barely expanding the dimensions of the watch itself. To do so, the display was completely re‑engineered reducing the borders by 40%, allowing for more screen area than both Series 6 and Series 3. Now that’s something to smile about
//         </p>
//         <button id="buP1">Buy Now</button>
//     </div>
// </div>`;
//     // maindiv.innerHTML += xxx;
//     alert("Successful");
// });

import main from "./dist/js/main.js";

window.addEventListener("load", () => {
     const loading = document.getElementById("loading");

     setTimeout(() => {
          loading.classList.replace("flex", "hidden");

          document.body.classList.remove("load-content");
          console.log("Loading...")
     }, 2000);
})

document.addEventListener("DOMContentLoaded", main);
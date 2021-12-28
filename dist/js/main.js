const main = () => {

     // DAFTAR ISI
     const daftarIsi = document.getElementById("daftar-isi");
     const list = document.getElementById("list-daftar");

     daftarIsi.addEventListener("click", () => {
          list.classList.toggle("hidden");

          document.getElementsByName("caret-down-outline")[0].classList.toggle("rotate-180");
     })


     console.log("Working!")
};

export default main;
document.addEventListener("DOMContentLoaded",() => {
    const title = document.querySelector("h1");
    const nav = document.querySelector("nav");
    const mainContent = document.querySelector("main");
    const aside = document.querySelector("aside");

    title.textContent = "Belajar Javascript Dasar - Interaksi Pertama 😎"
    title.addEventListener("click", () => {
        nav.classList.toggle("show-nav");
    });

    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "d":
                document.body.classList.toggle("dark");
                break;
            case "f":
                if (title.style.color === "blue") {
                    title.style.color = "";
                    title.style.fontSize = "";
                } else {
                    title.style.color = "blue";
                    title.style.fontSize = "28px";
                }
                break;
        }
    });

    let count = 0;
    mainContent.addEventListener("click", () => {
       count++;
       aside.textContent = `Kamu klik konten ini sebanyak ${count} kali`; 
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "f" || event.key === "F") {
            const title = document.querySelector("h1");
            title.style.color = "blue"; 
            title.style.fontSize = "28px"; 
        }
    });

    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        if (Math.abs(scrollTop - lastScrollTop) >= 200) {
            document.body.style.backgroundColor = 
            document.body.style.backgroundColor === "rgb(9, 206, 255)" ? "#ffcccc" : "rgb(9, 206, 255)";
            lastScrollTop = scrollTop;
        }
    });
});


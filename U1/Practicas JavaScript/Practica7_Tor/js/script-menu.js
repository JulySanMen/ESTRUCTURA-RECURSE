document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const forzaContainer = document.querySelector(".forza-container");
    const infoBox = document.querySelector(".info-box");

    const sectionInfo = {
        alemania: {
            title: "Alemania",
            content: "Alemania es un país líder en la industria automotriz. Porsche, por otro lado, es una icónica empresa automotriz alemana fundada en 1931 por Ferdinand Porsche. Es reconocida por la producción de automóviles deportivos de alta gama y rendimiento, así como por su éxito en competencias automovilísticas, como las 24 Horas de Le Mans."
        },
        italia: {
            title: "Italia",
            content: "Italia nos ha dado las dos marcas más populares y prestigiosas de autos deportivos: Ferrari y Lamborghini. Ferrari es una marca italiana fundada en 1947 por Enzo Ferrari, conocida por sus autos deportivos de lujo y su participación en la Fórmula 1. Lamborghini, fundada en 1963 por Ferruccio Lamborghini, es famosa por su diseño audaz y futurista."
        },
        japon: {
            title: "Japón",
            content: "Japón, famoso por su cultura, también ha contribuido al mundo automotriz con marcas como Nissan. Nissan ha sido un pionero en la adopción de tecnologías automotrices avanzadas, incluyendo la electrificación de vehículos con modelos como el Nissan Leaf. Además, es famosa por su participación en el deporte del automovilismo, incluyendo el equipo de carreras Nissan GT-R."
        },
        eu: {
            title: "Estados Unidos",
            content: "Estados Unidos alberga dos grandes industrias automotrices: Ford y Chevrolet. El Ford Mustang, introducido en 1964, se caracteriza por su diseño muscular y su carrocería coupé o convertible. El Chevrolet Corvette, introducido en 1953, es otro icónico automóvil deportivo estadounidense de alto rendimiento."
        }
    };

    sections.forEach(section => {
        const video = section.querySelector("video");
        const sectionId = section.getAttribute("id");

        section.addEventListener("mouseenter", function() {
            video.style.display = "block"; 
            video.play(); 
            infoBox.style.display = "block"; 
            infoBox.innerHTML = `<h2>${sectionInfo[sectionId].title}</h2><p>${sectionInfo[sectionId].content}</p>`; 
        });

        section.addEventListener("mouseleave", function() {
            video.style.display = "none"; 
            video.pause();
            video.currentTime = 0; 
            infoBox.style.display = "none"; 
        });

        section.addEventListener("mousemove", function(event) {
            
            infoBox.style.top = (event.clientY + 20) + "px";
            infoBox.style.left = (event.clientX + 20) + "px";
        });

        section.addEventListener("click", function() {

            window.location.href = "index.html";
        });
    });

    // Muestra el contenedor y el texto FORZA MOTORSPORT cuando el cursor no está sobre ninguna sección
    document.body.addEventListener("mouseleave", function() {
        forzaContainer.style.opacity = 1;
    });

    // Oculta el contenedor y el texto FORZA MOTORSPORT cuando el cursor está sobre una sección
    sections.forEach(section => {
        section.addEventListener("mouseenter", function() {
            forzaContainer.style.opacity = 0;
        });
    });
});

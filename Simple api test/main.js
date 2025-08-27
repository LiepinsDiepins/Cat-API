const baseUrl = "https://cataas.com";

    // Funkcija attēla rādīšanai
    function showCat(url) {
      $("#cat-container").html(`<img src="${url}" alt="Cat image">`);
    }

    // Nejaušs kaķis
    $("#randomCat").click(() => {
      showCat(`${baseUrl}/cat?${Date.now()}`); // Date.now() -> cache buster
    });

    //random gif cat
    function showGif(url) {
      $("#cat-gif-container").html(`<img src="${url}" alt="Cat gif">`);
    }

    $("#randomGif").click(() => {
      showGif(`${baseUrl}/cat/gif?${Date.now()}`);
    });

    //Hello cat
    function showHello(url) {
      $("#cat-hello-container").html(`<img src="${url}" alt="Cat hello">`);
    }

    $("#randomHello").click(() => {
      showHello(`${baseUrl}/cat/says/HELLO?${Date.now()}`);
    });

    //everything
     function showAll(url) {
      $("#cat-all-container").html(`<img src="${url}" alt="Cat all">`);
    }

    $("#randomAll").click(() => {
      showAll(`${baseUrl}/cat/gif/says/Hello?filter=mono&fontColor=orange&fontSize=20&type=square&${Date.now()}`);
    });
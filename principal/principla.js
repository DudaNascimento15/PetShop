 // Adicione um evento de mouseover para cada card
 document.querySelectorAll(".servico").forEach((card) => {
    card.addEventListener("mouseover", () => {
      let texto = "";
      let titulo = "";
      switch (card.id) {
        case "veterinario":
          titulo = "Veterinário";
          texto =
            "Aqui na animalia você encontra os melhores profissionais da cidade! Garantindo saúde e boa-vida para o seu animalzinho";
          break;
        case "adocao":
          titulo = "Adoção";
          texto =
            "Nós também dispomos o serviço de adoção, onde você pode encontrar o seu novo melhor amigo para sempre!";
          break;
        case "petshop":
          titulo = "Pet Shop";
          texto =
            "Aqui você encontra os melhores brinquedos, ração e entre outros para garantir o melhor para o seu bichinho.";
          break;
        default:
          texto = "";
      }

      card.querySelector(
        ".card-title"
      ).innerHTML = `<h5 class="text-white card-title texto">${titulo}</h5>`;
      card.querySelector(
        ".card-text"
      ).innerHTML = `<p class="text-white card-text">${texto}</p>`;
    });

    card.addEventListener("mouseout", () => {
      card.querySelector(".card-title").innerHTML = "";
      card.querySelector(".card-text").innerHTML = "";
    });
  });

  const cardsData = [
    {
      image:
        "https://blog-static.petlove.com.br/wp-content/uploads/2023/09/25143323/como-cuidar-de-um-vira-lata-caramelo-petlove.jpg",
      title: "Moranguinho",
      description: "Cachorro SDR<br>10 anos<br>Ama carinho!",
      buttonText: "Adotar!",
    },
    {
      image:
        "https://www.petz.com.br/blog/wp-content/uploads/2022/07/qual-hamster-vive-mais.jpg",
      title: "Floquinho",
      description: "Hamster <br>6 anos<br>Pronto para ser amado!",
      buttonText: "Adotar!",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXBHQ9t8Z4b1Ho2DhZxqAQ006sBDpHc0wDB88VYylrSQ&s",
      title: "Bingo",
      description: "Coelhinho <br>2 anos<br>Ama cenoura!",
      buttonText: "Adotar!",
    },
    {
      image:
        "https://s2.glbimg.com/E3-N6wlo4m_WhnYTBcSS98iEfW4=/s.glbimg.com/jo/g1/f/original/2014/09/17/peixe-palhaco.jpg",
      title: "Nemo",
      description: "Peixe Palhaço<br>1 ano<br>Onde está?",
      buttonText: "Adotar!",
    },
    {
      image:
        "https://jornalatual.info/assets/uploads/noticias/sliders/-vira-lata-caramelo-pode-se-tornar-manifestacao-cultural-no-brasil-27042023123702.png",
      title: "Bobó",
      description: "Cachorro SDR<br>3 meses<br>Ama brincar!",
      buttonText: "Adotar!",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEs6v65bMhp91cgDtBO1hBAi22nbtD57UOKigKO85CvQ&s",
      title: "Dona Aranha",
      description: "Tarantula<br>8 anos<br>Se insira no peter parker!",
      buttonText: "Adotar!",
    },
    {
      image:
        "https://www.petz.com.br/blog/wp-content/uploads/2020/05/como-criar-tartaruga.jpg",
      title: "Lezado",
      description: "Tartaruga<br>1 mes<br>Ama nadar!",
      buttonText: "Adotar!",
    },
    {
      image:
        "https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg",
      title: "Beixiga",
      description: "Gato<br>2 meses<br>Ama comer!",
      buttonText: "Adotar!",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWV2yt9xspJlg-8UX7erZzV9d_PZmUyP5QGwPaHxkVw&s",
      title: "Bobó",
      description: "Cachorro SDR<br>3 meses<br>Ama brincar!",
      buttonText: "Adotar!",
    },
    {
      image:
        "https://img.r7.com/images/pinscher-17112023123756149?crop=746x420+14+0",
      title: "Dona Aranha",
      description: "Tarantula<br>8 anos<br>Se insira no peter parker!",
      buttonText: "Adotar!",
    },
    {
      image:
        "https://www.petz.com.br/blog/wp-content/uploads/2020/06/gatos-pretos.jpg",
      title: "Lezado",
      description: "Tartaruga<br>1 mes<br>Ama nadar!",
      buttonText: "Adotar!",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhZ7efwuK23_r_MXDqBYN-ofBKjz5hkJ_a-nUD-n2-mg&s",
      title: "Beixiga",
      description: "Gato<br>2 meses<br>Ama comer!",
      buttonText: "Adotar!",
    },
  ];
  function createCard(cardData, screenWidth) {
    let animaisHtml = "";
    const imageCount = cardData.length; // Suponho que 'cardData' seja um array de objetos

    if (screenWidth > 700) {
      for (let i = 0; i < imageCount; i += 4) {
        animaisHtml += `
      <div class="carousel-item ${i === 0 ? 'active' : ''}">
      <div class="container d-flex justify-content-around">
        <div class="card mt-2 mb-2" style="width: 18rem;">
          <img src="${
            cardData[i].image
          }" class="card-img-top h-50" alt="...">
          <div class="card-body fundo-bege">
            <h5 class="card-title texto-cor">${cardData[i].title}</h5>
            <p class="card-text texto-cor">${cardData[i].description}</p>
            <a href="#" class="btn botao-amarelo">${
              cardData[i].buttonText
            }</a>
          </div>
        </div>
        <div class="card mt-2 mb-2" style="width: 18rem;">
          <img src="${
            cardData[i + 1].image
          }" class="card-img-top h-50" alt="...">
          <div class="card-body fundo-bege">
            <h5 class="card-title texto-cor">${cardData[i + 2].title}</h5>
            <p class="card-text texto-cor">${cardData[i + 2].description}</p>
            <a href="#" class="btn botao-amarelo">${
              cardData[i + 2].buttonText
            }</a>
          </div>
        </div>
        <div class="card mt-2 mb-2" style="width: 18rem;">
          <img src="${
            cardData[i + 2].image
          }" class="card-img-top h-50" alt="...">
          <div class="card-body fundo-bege">
            <h5 class="card-title texto-cor">${cardData[i + 2].title}</h5>
            <p class="card-text texto-cor">${cardData[i + 2].description}</p>
            <a href="#" class="btn botao-amarelo">${
              cardData[i + 2].buttonText
            }</a>
          </div>
        </div>
        <div class="card mt-2 mb-2" style="width: 18rem;">
          <img src="${
            cardData[i + 3].image
          }" class="card-img-top h-50" alt="...">
          <div class="card-body fundo-bege">
            <h5 class="card-title texto-cor">${cardData[i + 3].title}</h5>
            <p class="card-text texto-cor">${cardData[i + 3].description}</p>
            <a href="#" class="btn botao-amarelo">${
              cardData[i + 3].buttonText
            }</a>
          </div>
        </div>
      </div>
    </div>
  `;
      }
    } else {
      for (let i = 0; i < imageCount; i++) {
        animaisHtml += `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
      <div class="container d-flex justify-content-around">
        <div class="card mt-2 mb-2" style="width: 18rem;">
          <img src="${cardData[i].image}" class="card-img-top h-50" alt="...">
          <div class="card-body fundo-bege">
            <h5 class="card-title texto-cor">${cardData[i].title}</h5>
            <p class="card-text texto-cor">${cardData[i].description}</p>
            <a href="#" class="btn botao-amarelo">${cardData[i].buttonText}</a>
          </div>
        </div>
      </div>
    </div>
  `;
      }
    }

    return animaisHtml;
  }

  function createCarousel() {
    const screenWidth = window.innerWidth;
    const carouselInner = document.querySelector(".dentro");
    if (carouselInner) {
      let x = createCard(cardsData, screenWidth);
      carouselInner.innerHTML = x;
      console.log(window.innerWidth);
    } else {
      console.error("Elemento '.dentro' não encontrado!");
    }
  }

  window.addEventListener("load", createCarousel);
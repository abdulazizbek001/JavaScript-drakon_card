const elBody = document.body;
const elHeader = document.createElement('header');
const elContainer = document.createElement('div');
const elHeaderBox = document.createElement('div');
const elLogoBox = document.createElement('div');
const elHeaderWrap = document.createElement('div');
const elLink1 = document.createElement('a');
const elLink2 = document.createElement('a');
const elHero = document.createElement('div');
const elLeftBox = document.createElement('div');
const elTitle = document.createElement('h1');
const elText = document.createElement('p');
const elBtn = document.createElement('button');
const elHeroImage = document.createElement('div');

elBody.append(elContainer);
elContainer.append(elHeader, elHero);
elHeader.append(elHeaderBox);
elHeaderBox.append(elLogoBox, elHeaderWrap);
elHeaderWrap.append(elLink1, elLink2);
elHero.append(elLeftBox, elHeroImage);
elLeftBox.append(elTitle, elText, elBtn);

// ============================= BODY START ============================= //

elBody.style.cssText = `
    color: white;
    font-family: "Poppins", sans-serif;
    background: #084A07;
`

// ============================= BODY END ============================= //

// ============================= CONTAINER START ============================= //

elContainer.style.cssText = `
    width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`

// ============================= CONTAINER END ============================= //

// ============================= HEADER  START ============================= //

elHeader.style.cssText = `
    padding-top: 45px;
    margin-bottom: 148px;
`

// ============================= HEADER END ============================= //

// ============================= HEADER-BOX START ============================= //

elHeaderBox.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
`

// ============================= HEADER-BOX END ============================= //

// ============================= LOGO-BOX START ============================= //

elLogoBox.style.cssText = `
    width: 209px;
    height: 31px;
    background-image: url("../assets/svg/dragon-logo.svg");
    background-repeat: no-repeat;
`

// ============================= LOGO-BOX END ============================= //

// ============================= LINK-1 START ============================= //

elLink1.textContent = 'Home';
elLink1.style.cssText = `
    color: #FFF;
    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

// ============================= LINK-1 END ============================= //

// ============================= LINK-2 START ============================= //

elLink2.textContent = 'About';
elLink2.style.cssText = `
    margin-left: 34px;
    color: #FFF;
    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

// ============================= LINK-2 END ============================= //

// ============================= HERO START ============================= //

elHero.style.cssText = `
    position: relative;
    display: flex;
    align-items: center;
    height: 600px;
`

// ============================= HERO END ============================= //

// ============================= TITLE START ============================= //

elTitle.textContent = 'Baby Dragon';
elTitle.style.cssText = `
    font-family: "Alfa Slab One", serif;
    transform: rotate(-0.218deg);
    color: #FFF;
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 5px;
`

// ============================= TITLE END ============================= //

// ============================= TEXT START ============================= //

elText.textContent = 'Lorem ipsum dolor sit amet consectetur. Arcu faucibus vitae diam maecenas suspendisse sodales. Lectus aliquam phasellus in mattis quam neque.';
elText.style.cssText = `
    width: 520px;
    transform: rotate(-0.218deg);
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 50px;
`

// ============================= TEXT END ============================= //

// ============================= BTN START ============================= //

elBtn.textContent = 'buy';
elBtn.style.cssText = `
    color: #175015;
    cursor: pointer;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    padding: 17px 106px;
    border: none;
    border-radius: 40px;
    background: #FFF;
    margin-bottom: 10px;
`

// ============================= BTN END ============================= //

// // ============================= HERO-IMG START ============================= //

elHeroImage.style.cssText = `
    position: absolute;
    right: 0;
    top: 0;
    width: 536px;
    height: 593px;
    margin-left: 50px;
    background-image: url("./assets/img/dragon-hero.png");
    background-repeat: no-repeat;
    background-size: cover;
`

// // ============================= HERO-ING END ============================= //
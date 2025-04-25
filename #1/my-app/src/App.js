import React from "react";
import "./App.css";
import logo from "./components/logo.png";
import pointIcon from "./components/Point.png";
import peopleIcon from "./components/People.png";
import cardIcon from "./components/Card.png";
import favoriteIcon from "./components/Favorite.png";
import instagramIcon from "./components/instagram.png";
import twitterIcon from "./components/twitter.png";
import facebookIcon from "./components/facebook.png";
import visaIcon from "./components/Visa.png";
import mastercardIcon from "./components/MasterCard.png";
import applepayIcon from "./components/ApplePay.png";
import paypalIcon from "./components/PayPal.png";
import sadIcon from "./components/sad.png";
import scrollArrow from "./components/ScrollArrow.png"; // new icon from uploaded image

const TopBar = () => {
  const texts = [
    "#buy now", "#вседлядому", "#швидкотазручно",
    "#buy now", "#вседлядому", "#buy now",
    "#вседлядому", "#швидкотазручно", "#buy now", "#вседлядому"
  ];

  return (
    <div id="up">
      <div className="scroll-content">
        {texts.map((text, index) => (
          <p className="textLine" key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};

const NavBar = () => (
  <nav>
    <div id="navLeft">
      <div id="divForBurgerMenu">
        <div id="burgerMenu">
          <hr className="lineInBurgerMenu" />
          <hr className="lineInBurgerMenu" />
          <hr className="lineInBurgerMenu" />
        </div>
        <h3 id="h3ForBurgerMenu">Menu</h3>
      </div>
      <img src={logo} alt="logo" id="logoInNav" />
      <div id="divForTegA">
        <a href="#">Товари</a>
        <a href="#">Кімнати</a>
        <a href="#">Дизайн</a>
      </div>
    </div>
    <div className="search-bar">
      <input type="text" placeholder="Пошук" />
    </div>
    <div id="navRight">
      <div id="kiev">
        <img src={pointIcon} alt="Location" />
        <p>Київ</p>
      </div>
      <div id="login-pass">
        <img src={peopleIcon} alt="User" />
        <p>Привіт! Увійдіть в систему</p>
      </div>
      <div id="card">
        <img src={cardIcon} alt="Card" />
      </div>
      <div id="favorite">
        <img src={favoriteIcon} alt="Favorite" />
      </div>
    </div>
  </nav>
);

const ProductSlider = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <section className="product-slider">
      <h2>ТОВАРИ</h2>
      <div className="slider-container">
        {items.map((i) => (
          <div className="product-card" key={i}>
            <div className="img-placeholder" />
            <button className="card-btn">НАЗВА НАБОРУ</button>
          </div>
        ))}
        <div className="scroll-arrow">
          <img src={scrollArrow} alt="Scroll Right" />
        </div>
      </div>
      <p className="view-more">дивитись більше категорій »</p>
    </section>
  );
};

const ProductGrid = () => (
  <section className="product-grid">
    <h2>ТОВАРИ З ОДНОГО НАБОРУ</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, gravida convallis to grid egestas non. Phasellus vitae quis sem massa id imperdiet nec vulputate mauris facilisis eleifend augue. Ipsum magna accumsan sed urna non fermentum, tristique in turpis dapib in pulvinar pellentesque faucibus.
    </p>
    <div className="grid">
      <div className="grid-item small" />
      <div className="grid-item small" />
      <div className="grid-item large" />
      <div className="grid-item medium" />
    </div>
  </section>
);

const NewItems = () => (
  <section className="product-slider">
    <h2>НОВИНКИ</h2>
    <div className="slider-container">
      {[1, 2, 3].map((i) => (
        <div className="product-card" key={i}>
          <div className="img-placeholder" />
          <button className="card-btn">НАЗВА</button>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="footer-columns">
      {[1, 2, 3, 4].map((col) => (
        <div className="footer-col" key={col}>
          <h4>Заголовок підрозділу</h4>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => <p key={i}>Зміст підтеми</p>)}
        </div>
      ))}
    </div>
    <div className="footer-icons-row">
      <div className="social-icons">
        <img src={instagramIcon} alt="Instagram" />
        <img src={twitterIcon} alt="Twitter" />
        <img src={facebookIcon} alt="Facebook" />
      </div>
      <div className="payment-icons">
        <img src={visaIcon} alt="Visa" />
        <img src={mastercardIcon} alt="MasterCard" />
        <img src={applepayIcon} alt="ApplePay" />
        <img src={paypalIcon} alt="PayPal" />
      </div>
    </div>
  </footer>
);


const CozySets = () => (
  <section className="cozy-sets">
    <h2>ЗАТИШНІ НАБОРИ</h2>
    <div className="cozy-cards">
      {[1, 2, 3].map((i) => (
        <div className="cozy-card" key={i}>
          <div className="img-placeholder" />
          <p>
            lorem ipsum dolor sit amet consectetur, gravida convallis id orci egestas non, rhoncus vitae quis sem.
          </p>
        </div>
      ))}
    </div>
  </section>
);


const InfoCards = () => {
  const infos = [
    { title: "Доставка", text: "lorem ipsum dolor sit amet tempor malesuada non." },
    { title: "Оплата", text: "lorem ipsum dolor sit amet tempor malesuada non." },
    { title: "Гарантія", text: "lorem ipsum dolor sit amet tempor malesuada non." },
    { title: "Повернення", text: "lorem ipsum dolor sit amet tempor malesuada non." },
  ];
  return (
    <div className="info-cards">
      {infos.map((item, index) => (
        <div className="info-card" key={index}>
          <div className="icon-placeholder" />
          <p><strong>{item.title}</strong></p>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};


const TextSections = () => (
  <div className="text-sections">
    {[1, 2].map((i) => (
      <section className="text-block" key={i}>
        <h2>НАЗВА РОЗДІЛУ</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur, molestiae nesciunt cumque dolore 
          obcaecati perspiciatis libero unde delectus eius, architecto ullam laboriosam, temporibus alias. Repellendus 
          rem excepturi perferendis mollitia.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem 
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </section>
    ))}
  </div>
);

function App() {
  return (
    <div className="app-container">
      <TopBar />
      <div id="mainDiv">
        <NavBar />
        <ProductSlider />
        <CozySets />           {/* ← нова секція */}
        <ProductGrid />
        <InfoCards />          {/* ← нова секція */}
        <NewItems />
        <TextSections />       {/* ← нова секція */}
      </div>
      <Footer />
    </div>
  );
}

export default App;

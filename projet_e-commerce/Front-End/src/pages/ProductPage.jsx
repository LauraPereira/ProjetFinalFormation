import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// La page du detail d'un produit
const ProductPage = () => {
  // id du produit à afficher
  const { id } = useParams();

  const [article, setArticle] = useState();
  useEffect(() => {
    console.log(id);

    fetch(`http://localhost:8080/site/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, []);

  return (
    <div className="productPage">
      <Nav data={article} />
      <div className="shop">
        <ProductPhoto data={article} />
        <Shopping data={article} />
      </div>
    </div>
  );
};

const Nav = ({ data }) => {
  return (
    <nav className=" nav">
      <a className=" nav__category" href="">
        {data && data.categorie.name}
      </a>
      <div className=" nav__link">></div>
      <a className=" nav__product" href="">
        {data && data.nom}
      </a>
    </nav>
  );
};

const ProductPhoto = ({ data }) => {
  return (
    <section className="photo">
      <img
        className="photo__produit"
        src={data && data.img}
        alt="image product"
      />
    </section>
  );
};

const Shopping = ({ data }) => {
  return (
    <section className="shopping">
      <ProductDetails data={data} />
      <Buy data={dataOne} />
      <BuyingDetails data={dataOne} />
    </section>
  );
};

const ProductDetails = ({ data }) => {
  return (
    <section className="shopping__details">
      <h1 className="shopping__details__name">{data && data.nom}</h1>
      <br></br>
      <h2 className="shopping__details__brand">{data && data.marque} </h2>
      <br></br>
      <h3 className="shopping__details__price">{data && data.prix} €</h3>
      <p className="shopping__details__description">
        {data && data.description}
      </p>
    </section>
  );
};

const Buy = ({ data }) => {
  return (
    <>
      <form className="shopping__buy" action="">
        <div className="shopping__buy__size">
          <label className="shopping__buy__size__label" htmlFor="size">
            Size
          </label>
          <br />
          <select
            name="size"
            id="size"
            className="shopping__buy__size__choices"
          >
            <option value="s">S</option>
            <option value="m" selected>
              M
            </option>
            <option value="l">L</option>
          </select>
        </div>
        <div className="shopping__buy__quantity">
          <label className="shopping__buy__quantity__label" htmlFor="quantity">
            Quantity
          </label>
          <br />
          <input
            className="shopping__buy__quantity__input"
            name="quantity"
            type="number"
            min="0"
            placeholder="1"
          />
        </div>

        <button className="shopping__buy__cart">Ajouter au panier</button>
        <br />
        <button className="shopping__buy__buynow">Acheter maintenant</button>
        <div className="shopping__buy__shipping">
          Livraison gratuite à partir de {data.shipping.freeShipping} € d'achat.
        </div>
      </form>
    </>
  );
};

const BuyingDetails = ({ data }) => {
  return (
    <div className="buyingdetails">
      {data.shoppingInfo.list.map((item, index) => (
        <details className="buyingdetails__details" key={index}>
          <summary className="buyingdetails__details__summary">
            <span className="buyingdetails__details__summary__name">
              {item.name}{" "}
            </span>{" "}
            <span className="buyingdetails__details__summary__v">V</span>
          </summary>
          <p>{item.details}</p>
        </details>
      ))}
    </div>
  );
};

const dataOne = {
  shipping: {
    freeShipping: 50,
  },

  shoppingInfo: {
    list: [
      {
        name: "Détails",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam veniam maxime minus iure, amet placeat quo quidem ducimus quam cumque hic sapiente? Id, eius quia.",
      },
      {
        name: "Livraison",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam veniam maxime minus iure, amet placeat quo quidem ducimus quam cumque hic sapiente? Id, eius quia.",
      },
      {
        name: "Retours",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam veniam maxime minus iure, amet placeat quo quidem ducimus quam cumque hic sapiente? Id, eius quia.",
      },
    ],
  },
};

export default ProductPage;

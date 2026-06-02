import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";
import pizza from '../images/Salami-pizza-hero.avif';
import burger from '../images/image.png';
import alfredo_pasta from '../images/alfredopasta.png';
import chocolate_brownie from '../images/brownie.png';
import Navbar from "./Navbar";
const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 299,
    image: pizza,
    veg: true,
    popular: true,
  },
  {
    id: 2,
    name: "Chicken Burger",
    category: "Burger",
    price: 249,
    image: burger,
    veg: false,
    popular: true,
  },
  {
    id: 3,
    name: "Pasta Alfredo",
    category: "Pasta",
    price: 349,
    image: alfredo_pasta,
    veg: true,
    popular: false,
  },
  {
    id: 4,
    name: "Chocolate Brownie",
    category: "Dessert",
    price: 199,
    image: chocolate_brownie,
    veg: true,
    popular: false,
  },
];

const Menu = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const navigate = useNavigate();

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      category === "All" || item.category === category;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
    <Navbar></Navbar>
    <div className="menu-page">
      {/* Hero Section */}
      <section className="menu-hero">
        <h1>Explore Our Delicious Menu</h1>
        <p>
          Crafted with fresh ingredients and served with passion.
        </p>

        <button
          className="reserve-btn"
          onClick={() => navigate("/login")}
        >
          Reserve a Table
        </button>
      </section>

      {/* Search */}
      <div className="menu-controls">
        <input
          type="text"
          placeholder="Search dishes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="categories">
          {["All", "Pizza", "Burger", "Pasta", "Dessert"].map((cat) => (
            <button
              key={cat}
              className={category === cat ? "active" : ""}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="menu-grid">
        {filteredItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="menu-content">
              <h3>{item.name}</h3>

              <div className="badges">
                <span
                  className={
                    item.veg ? "veg-badge" : "nonveg-badge"
                  }
                >
                  {item.veg ? "Veg" : "Non Veg"}
                </span>

                {item.popular && (
                  <span className="popular-badge">
                    Popular
                  </span>
                )}
              </div>

              <p className="price">₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );

};

export default Menu;
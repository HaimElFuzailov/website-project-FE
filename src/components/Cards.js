import React, { useEffect, useState } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { getAllItems } from "../services/api";

function Cards() {
  const [availableItems, setAvailableItem] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    getAllItems().then((resposne) => {
      console.log("response");
      const items = resposne.data.map((item) => {
        const id = item.id;
        const title = item.titleOfTheItem;
        const img = item.photoOfTheItem;
        const available = item.howMuchItemsAvailableInStock;
        const price = item.price;
        return { ...item,id:id, title: title, img: img, available:available ,price: price };
      });
      setAvailableItem(items);
      console.log(items);
      setFilteredItems(items);
    });
  }, []);

  useEffect(() => {
    setFilteredItems(
      availableItems.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, availableItems]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="cards">
      <h1>Check out these EPIC Items!</h1>
      <br></br>
    
      <br></br>
      <div className="cards_container">
      <input
        className="home-input"
        type="text"
        placeholder="Search Area"
        value={searchTerm}
        onChange={handleInputChange}
      />
        <ul className="cards_items">
          {filteredItems.map((value, index) => {
            return (
              <CardItem
                key={value.id}
                id={value.id}
                title={value.title}
                img={value.img}
                available={value.available}
                price={value.price}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Cards;

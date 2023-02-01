import React, { useEffect, useState } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { getAllItems } from "../services/api";

function Cards() {

  const [availableItems, setAvailableItem] = useState([]);

useEffect(() => {
  getAllItems().then(
    resposne =>{
      const items = resposne.data.map(item =>{ 
        const title = item.titleOfTheIte;
        const img =  item.photoOfTheItem 
        const price = item.price 
      return({...item , title:title , img:img , price:price})
      });
      setAvailableItem(items);
      console.log(items);
    }
  )
  },[])
  
  

  return (
    
    <div className="cards">
      
      <h1>Check out these EPIC Items!</h1>
      <br></br>
      <div className="cards__container">
        <div>
          <ul className="cards__items">
            <CardItem
              id={1}
              title="Instant Tent For 8 People From Home Coleman Design!!"
              img="../images/green.jpg"
              price={400}
            />
            <CardItem
              id={2}
              title="Supernova 8 large instant tent from Aztec Design!!"
              img="../images/black.jpg"
              price={350}
            />
          </ul>
        </div>
        <div>
          <ul className="cards__items">
            <CardItem
              id={3}
              title="Coffee set COFFEE BREAK I from azte"
              img="../images/COFFEE-BREAK.jpg"
              price={80}
            />
            <CardItem
              id={4}
              title="Amigo coffee set from Go Nature"
              img="../images/COFFEE-BREAK2.jpg"
              price={70}
            />
            <CardItem
              id={5}
              title="Alpine coffee set VOLCANO"
              img="../images/COFFEE-BREAK3.jpg"
              price={60}
            />
            <CardItem
              id={6}
              title="Outdoor Fire Light coffee set"
              img="../images/COFFEE-BREAK4.jpg"
              price={50}
            />
          </ul>
        </div>
        <div>
          <ul className="cards__items">
            <CardItem
              id={7}
              title="Mens micro-fleece shirt Micro-Hati from AZTEC"
              img="../images/suitcase-backpack.jpg"
              price={200}
            />
            <CardItem
              id={8}
              title="Columbia TITAN PASS 2.0 II M microfleece jacket for men"
              img="../images/suitcase-backpack-2.jpg"
              price={250}
            />
            <CardItem
              id={9}
              title="Columbia Titan Ridge 3.0 Hybrid Mens Softshell"
              img="../images/suitcase-backpack3.jpg"
              price={200}
            />
          </ul>
        </div>
        <div>
          <ul className="cards__items">
            <CardItem
              id={10}
              title="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              img="../images/Microfleece-shirt.jpg"
              price={40}
            />
            <CardItem
              id={11}
              title="Experience Football on Top of the Himilayan Mountains"
              img="../images/Microfleece-shirt2.jpg"
              price={20}
            />
            <CardItem
              id={12}
              title="Ride through the Sahara Desert on a guided camel tour"
              img="../images/Microfleece-shirt3.jpg"
              price={30}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

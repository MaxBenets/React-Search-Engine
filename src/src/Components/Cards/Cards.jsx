import s from "./Cards.module.css";

import heardActive from "../../img/SaveIcons/heard-active.png";
import heardunActive from "../../img/SaveIcons/heart-unactive.png";
import basket from "../../img/basket.png";

import { useDispatch, useSelector } from "react-redux";
import { toggleSaveCard } from "../../redux/reducers/cards-reducer";
import { Routes, Route, NavLink } from "react-router-dom";

import Towar from "./Towar/Towar";

const Cards = () => {
   const dispatch = useDispatch();

   let cards = useSelector((state) => state.cards.cards);
   const saveItem = (id) => {
      dispatch(toggleSaveCard(id));
   };

   const card = (c) => {
      return (
         <div className={s.card} key={cards.id}>
            <div className={s.save}>
               <img
                  onClick={() => saveItem(c.id)}
                  src={c.activeSave ? heardActive : heardunActive}
                  alt=""
               />
            </div>

            <NavLink to={"/" + c.id}>
               <img className={s.basket} src={basket} alt="" />
            </NavLink>

            <img className={s.img} src={c.imgSrc} alt="" />

            <div className={s.cardInfo}>
               <div style={{ flex: 100 }}>
                  <h3 className={s.h3}> {c.headerText} </h3>
                  <p className={s.p}>
                     {" "}
                     Ціна: {c.price} грн <br /> за 100 грам{" "}
                  </p>
               </div>
            </div>
         </div>
      );
   };

   const mapCards = cards.map((c) => {
      return card(c);
   });
   const mapSavedCards = cards.map((c) => {
      if (c.activeSave) {
         return card(c);
      }
   });

   return (
      <div className={s.cards}>
         <Routes>
            <Route path="/" element={<h2 className={s.h2}>Наші товари</h2>} />
            <Route
               path="/saved"
               element={<h2 className={s.h2}>Збережені товари</h2>}
            />
         </Routes>
         <div className={s.flex}>
            <Routes>
               <Route path="/" element={mapCards} />
               <Route path="/saved" element={mapSavedCards} />
               <Route path="/:towarID" element={<Towar />} />
            </Routes>
         </div>
      </div>
   );
};

export default Cards;

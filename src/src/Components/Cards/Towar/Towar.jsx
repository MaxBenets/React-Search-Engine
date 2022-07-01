import { useState } from "react"
import { useSelector } from "react-redux"
import { useParams, NavLink } from "react-router-dom"
import s from "./Towar.module.css"

const ZamowlenaNomer = Math.floor( Math.random() * 100 )

const Towar = () => {

    const {towarID} = useParams()
    const towars = useSelector(state => state.cards.cards)

    const [firstValue, setValue] = useState(100)
    const [buyStateHidden, setBuyState] = useState(true)
    const [disabledButtons, setDisabledButtons] = useState(false)

    const showBuying = () => {
        setBuyState(false)
        setDisabledButtons(true)
    }

    const mapTowars = towars.map( o => {
        if (o.id == towarID){
            return (
                <div className={s.wrapper} key = {o.id}>
                    <div className={s.towar}>
                    
                    <div className={s.img_area}>
                        <img className={s.img} src={o.imgSrc} alt="" />
                    </div>

                    <div className={s.info}>
                        <h2 className={s.h2}>{o.headerText}</h2>
                        
                        <div className={s.priceBlock + " " + s.price}>
                            <span>{o.price * firstValue.toString().replace("0", "").replace("0","")}</span> грн. / 

                            <div className={s.btn_area}>
                            <button disabled = {disabledButtons} className={s.btn} onClick={ () => setValue(firstValue - 100) }>-</button>
                            <button disabled = {disabledButtons} className={s.btn} onClick={ () => setValue(firstValue + 100) }>+</button>
                            </div>

                            <div className={s.input}>
                                {firstValue < 0 ? setValue(100) : firstValue}
                            </div> 
                            <span style={ {marginLeft: 5+"px", marginRight: 15+"px",} }>грам</span>    

                            <button disabled = {disabledButtons} onClick={showBuying} className={s.btn + " " + s.buy}>Придбати за {o.price * firstValue.toString().replace("0", "").replace("0","")} грн</button> 
                        </div>

                        {
                            buyStateHidden 
                            ? null
                            : (
                                <div className={s.allNice}>
                                    <center>
                                        <img src="https://img.icons8.com/fluency/2x/happy.png" alt="" />
                                    </center>
                                    <h3 className={s.h3}>Спасибі за замовлення!</h3>
                                    <p className={s.niceMessage}>
                                        Ваш номер замовлення: #{ZamowlenaNomer} скоро буде переданий кур'єрській доставці
                                    </p>
                                    <NavLink className={s.toHome} to = "/">На головну</NavLink>
                                </div>
                            ) 
                        }
                    </div>
                    </div>
                </div>
            )
        }
    })

    return(
        <div style={ {width: "100%"} }>
            {mapTowars}
        </div>
    )
}

export default Towar
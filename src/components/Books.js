import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHeartCircleCheck,faRankingStar } from '@fortawesome/free-solid-svg-icons'
import classes from './Books.module.css'

const Foods = (props) => {
  return (
        <div className="col-3">
        <li className="col-10">
              <div className={classes.rankingstar}>
              <img src={props.img} height="200" width="200"/>
              <div><p className={classes.rankingstaricon}><FontAwesomeIcon icon={faRankingStar} /> {props.rate}</p></div>
              </div>
              <h2>{props.name}</h2>
              <p className={classes.pricetag}>${props.price}</p>
              <div className={classes.iconbuttons}><h2>
                  <button className={classes.heart}><FontAwesomeIcon className={classes.hearticon} icon={faHeartCircleCheck} /></button>
                  <button className={classes.cart}><FontAwesomeIcon className={classes.carticon} icon={faCartShopping} /></button>
                  </h2>
              </div>
        </li>
        </div>
  )
}

export default Foods
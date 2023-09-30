import React from 'react'

import './SuccessPage.css'
import Icon from '../assets/images/icon-list.svg'
import { useLocation, useNavigate } from 'react-router-dom';

function SuccessPage(props) {

  const location = useLocation();
  const navigate = useNavigate();


  const navigateToSubscribePage = () => {
    navigate("/");
  }



  return (
    <div className="success-container">

      <div className="thank-note">
        <img className='success-img' src={Icon} alt="" />

        <h1>Thanks for Subscribing!</h1>

        <p>A confirmation email is sent to your <span>{location.state.email}</span>. Please Open it and click the button inside to confirm your subscription.</p>

      </div>

      <button className='success-button' onClick={navigateToSubscribePage}>Dismiss Message</button>
    </div>
  )
}

export default SuccessPage
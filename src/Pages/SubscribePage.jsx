import React, { useState } from 'react'
import './SubscribePage.css'
import Banner from '../assets/images/illustration-sign-up-desktop.svg'
import Icon from '../assets/images/icon-list.svg'
import validator from "validator";
import { useNavigate } from 'react-router-dom';

function SubscribePage() {

    const navigate = useNavigate();

    const [mail, setEmail] = useState('');
    const [error, setError] = useState('');

    const HandleChange = (e) => {
        setEmail(e.target.value);
    }

    const HandleError = () => {
        if (validator.isEmail(mail)) {
            setError("Good to Go");
            navigate("/success", { state: { email: mail } });
        }
        else {
            setError("Valid email required");
        }
    }


    return (

        <div className="subscribe-container">
            <div className="subscribe-left">
                <h1 className="subscribe-title">
                    Stay updated!
                </h1>

                <p className="subscribe-desc">
                    Join 60,000+ product managers receiving monthly updates on:
                </p>

                <div className="keypoint">
                    <div className="point">
                        <img src={Icon} alt="" />
                        <p>Product discovery and building what matters</p>
                    </div>

                    <div className="point">
                        <img src={Icon} alt="" />
                        <p>Measuring to ensure updates are a success</p>
                    </div>

                    <div className="point">
                        <img src={Icon} alt="" />
                        <p>And much more!</p>
                    </div>

                </div>

                <span className="mail">
                    <div className="mailcheck">
                        <p>Email Address</p>
                        <p className='errorchecker'>{error}</p>
                    </div>
                    <input type="mail" placeholder='email@company.com' onChange={HandleChange} />
                </span>

                <button className="subscribe-button" onClick={HandleError}>
                    Subscribe to monthly news letters
                </button>
            </div>

            <div className="subscribe-right">
                {/* <img src={Banner} alt="" /> */}
            </div>
        </div>

    )
}

export default SubscribePage
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import CustomerTaskList from './../components/CustomerTaskList.js';
import Engagements from '../components/Engagements.js';



function EngagementHistory({ EngagementTypes }) {
    function LogOutEventHandler(event){
        alert(`You have logged out.`)
        event.preventDefault()
    }

    return (
        <>
            <div class="container">
                <div class="toppane">
                    <div class="containerFullHeightDiv">
                        <div class="containerFullWidthDiv">
                            See a history of all engagements within your account here!
                        </div>
                        <div class="containerFullWidthDiv"></div>
                    </div>
                    
                    <div class="containerFullHeightDiv">
                        <table class="rightbutton">
                            <tr>
                                <td></td>
                                <td></td>
                                <td><button class="buttonstyle" onClick={LogOutEventHandler} type="button">Log out</button></td>
                            </tr>
                            <tr>
                                <td><Link to="/licensecenter"><button class="buttonstyle" type="button">Account Management</button></Link></td>
                                <td><Link to="/engagementhistory"><button class="buttonstyle" type="button">Engagement History</button></Link></td>
                                <td><Link to="/customerHub"><button class="buttonstyle" type="button">Resource Center</button></Link></td>
                            </tr>
                        </table>
                    </div>
                </div>
                    <div class="centerDivBill">
                        <p> 
                            <h2>Engagement History</h2>
                            <br></br>
                            - Support Engagement 
                            <br></br>
                            - CS Engagement
                            <br></br>
                            - Renewals Engagement
                            <br></br>
                            - and more...
                        </p>
                    </div>
            </div>
        </>
    );
}

export default EngagementHistory


 

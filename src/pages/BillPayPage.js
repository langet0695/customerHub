import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import CustomerTaskList from './../components/CustomerTaskList.js';
import Engagements from '../components/Engagements.js';



function LicenseCenter({ EngagementTypes }) {
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
                            Manage your account, contract and license settings here!
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
                
                <div class="leftpane">
                    <div class="lefttopbox">
                        Custom calendar of upcoming events.
                    </div>
                    <div class="leftbottombox">
                    In Need of Assistance? Contact your CSR <a href="https://qglobalops.co1.qualtrics.com/jfe/form/SV_dneCmMmV9p9rwOy" title="CS Intake">here</a>!
                    </div>
                </div>
                
                <div class="halfpane">
                    <div class="centerDivBill">
                        <p> 
                            <h2>Contractual Controls</h2>
                            <br></br>
                            - Renewal Payment
                            <br></br>
                            - License Usage / Metrics Config
                            <br></br>
                            - License Tech Assessment
                            <br></br>
                            - Document Repository
                            <p class="tab">
                                + Past / Current licenses
                                <br></br>
                                + Security Agreements
                                <br></br>
                                + Flagged Emails
                                <br></br>
                                + SOWs
                            </p>
                            - Upgrade Options
                        </p>
                    </div>
                </div>
                
                <div class="halfpane">
                    <div class="centerDivBill">
                        <p>
                            <h2>Program and Experience Controls</h2>
                            <br></br>
                            - Campaign Opt Status
                            <p class="tab">
                                + Ops
                                <br></br>
                                + MKT
                                <br></br>
                                + CS
                            </p>
                            - Contact Validation
                            <p class="tab">
                                + Brand Admins
                                <br></br>
                                + License Managers
                                <br></br>
                                + Decision Makers
                                <br></br>
                                + Company Hierarchy 
                            </p>
                            - Brand Wide Communications
                            <br></br>
                            - Security Controls
                            <br></br>
                            - GDPR / Data Deletion
                        </p>
                    </div>
                    {/* <CustomerTaskList tasks={customerTasks}></CustomerTaskList> */}
                </div>
            </div>
        </>
    );
}

export default LicenseCenter


 

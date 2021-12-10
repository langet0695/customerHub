import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
// import Calendar from 'react-calendar'
import CustomerTaskList from './../components/CustomerTaskList.js';
import { MdOutlineArrowBackIosNew, MdOutlineClose } from 'react-icons/md';


function LogOutEventHandler(event){
    alert(`You have logged out.`)
    event.preventDefault()
}

function HomePage({EngagementTypes, customerTasks } ) {
    const [key, setKey] = useState("start");
    const [color, setColor] = useState("div1")
    const [phrase, setPhrase] = useState("How can we help you today?")
    const [alertState, setAlert] = useState("alert")
    
    function updateAlert(e){
        setAlert("alertHide")
    }

    function reset(){setKey("start"); setPhrase("How can we help you today?")}

    function update(e){
        let newKey = e.target.value
        console.log(newKey)
        if (newKey=="learn"){setKey(1); setColor("div1"); setPhrase("Learn how to leverage the Qualtrics platform");} 
        if (newKey=="react"){setKey(2); setColor("div2"); setPhrase("Get human assiatance from Qualtrics!");} 
        if (newKey=="mature"){setKey(3); setColor("div3"); setPhrase("Grow XM Skills & Become a Certified XM Professional");} 
        if (newKey=="guide"){setKey(4); setColor("div4"); setPhrase("Innovate, Expand and Maximize the value of your Program");} 
    }

    let choices = ''
    if (key=="start"){choices = <div class="centerDiv">
                                    <p>{phrase}</p>
                                        <div class="containerDiv">
                                            <button value="learn" class="div1" type="button" onClick={update}>
                                            Learn how to leverage the Qualtrics platform
                                            </button>
                                        </div>
                                        <div class="containerDiv">
                                            <button value="react" class="div2" type="button" onClick={update}>
                                              Get human assiatance from Qualtrics!
                                            </button>
                                        </div>
                                        <div class="containerDiv">
                                            <button value="mature" class="div3" type="button" onClick={update}>
                                              Grow XM Skills and Become a Certified XM Professional
                                            </button>
                                        </div>
                                        <div class="containerDiv" onClick={update}>
                                            <button value="guide"class="div4" type="button">
                                            Innovate, Expand and Maximize the value of your Program
                                            </button>
                                        </div>
                                </div>}
    else{
        choices= 
        <div class="centerDiv">
            <p> <MdOutlineArrowBackIosNew onClick={reset} /> {phrase}</p>
                             {
                                EngagementTypes[key].map((engagement,i) => 
                                <div class="tmpContainerDiv" >
                                    <button class={color} type="button">
                                        {engagement}
                                    </button>
                                </div>
                            )
                        }
        </div>                       
    }


    return (
        <>
            <div class="container">
                <div class="toppane">
                    <div class="containerFullHeightDiv">
                        <div class="containerFullWidthDiv">
                            Acme Inc, welcome to the Qualtrics Services Offering Page!
                        </div>
                        <div class="containerFullWidthDiv">
                            <p class={alertState}>
                            <MdOutlineClose onClick={updateAlert} /> 
                                Account Team Managed Alert
                            </p>
                        </div>
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
                                <td><button class="buttonstyle" type="button">Engagement History</button></td>
                                <td><Link to="/"><button class="buttonstyle" type="button">Resource Center</button></Link></td>
                            </tr>
                        </table>
                    </div>
                </div>
                
                <div class="leftpane">
                    <div class='leftheader'>Recommended Resources</div>
                    <div class="lefttopbox">
                        <h4>Qualtrics Xcellerate Training Platform</h4>
                        <p>
                            Train on the qualtrics platform <a href="https://basecamp.qualtrics.com/" title="Go to Qualtrics Basecamp">here</a>.
                            Training solutions include certification, live webinars, on demand courses and more!
                        </p>
                    </div>
                    <div class="leftbottombox">Recommended Resource 2</div>
                </div>
                
                <div class="middlepane">
                    {choices} 
                    {/* This is handled using if logic at the top */}
                </div>
                
                <div class="rightpane">
                    <p>Open Actions / Tickets</p>
                    <CustomerTaskList tasks={customerTasks}></CustomerTaskList>
                </div>
            </div>
        </>
    );
}

export default HomePage;
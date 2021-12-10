import React from 'react';
// import Task from './CustomerTask';

function Engagements({ engagements }) {
    //Ad if statement controlling what we use in map

    // function learn(){
        
    // }

    return (
        <div class="tmpContainerDiv" >
            <button class="div3" type="button" >
                {engagements}
            </button>
        </div>
    );
}

export default Engagements;
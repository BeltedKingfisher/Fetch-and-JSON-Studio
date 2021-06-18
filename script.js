window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
        let container = document.getElementById("container");{
        let astronautData = '';
            for(let i = 0; i < json.length; i++){
            astronautData += (`
            <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li>Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                </div>
            <img class="avatar" src=${json[i].picture}>
            </div>        
        `);
        container.innerHTML = astronautData;   
        }//end of for statement
    }//end of display function
        });
    });
});

//Note for later: Assigned a variable to the CONTENT of the tag. So container is exactly that - a container, almost like the key in an object, and astronautData is what we want to assign to it as the value, or the content. To update the content, we use .innnerHTML. Also, the for loop wasn't working because I did need the accumulator variable of += (I was just assigning it to the container before, not the content of the innerHTML)
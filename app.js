// Take the username input as string
// add name button for each input we must click on add button and will show the name under the page(like a todo list)
//another input area for team names and another button to creat teams
// assignment button should add the names to the teams area
//but teams section should be appear when we click on the assign button
//for each click on assign button we must copy each name to any team

function newElement() {
    let inputNode = document.getElementById("myInputs")
    let inputValue = inputNode.value
    let li = document.createElement("li")
    let textNode = document.createTextNode(inputValue)
    li.appendChild(textNode)
    if (inputValue === '') {
        alert("Please enter a valid name")
    } else {
        document.getElementById("myUl1").appendChild(li)
    }
    document.getElementById("myInputs").value = " "
}


function createTeams() {

    let inputNode = document.getElementById("team-number")



}
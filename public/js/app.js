console.log("App.js loaded");

const input = document.getElementById("servingCount");
const count = document.getElementsByClassName("count");

const URL = 'https://3blzgwgi13.execute-api.us-west-2.amazonaws.com/Live/recipe'

const getRecipe = async () => {
  // use the fetch API to get data from
  fetch(URL)
  // that URL, convert it to JSON, and
  .then(response => response.json())
  // log it to the console
  .then(data => console.log(data))
}

getRecipe()

document.addEventListener('click', event =>
{
    if (event.target.id === "dec") updateCount(-1);
    if (event.target.id === "inc") updateCount(1);
});

const updateCount = dir => 
{
    if (+(input.innerText) + dir >= 1)
    {
        input.innerText = +(input.innerText) + dir;
        for ( var i = 0; i < count.length; i++)
        {
            count.innerText = 2 * i;
        }
        
    }
};


fetch("./discord.json").then(response=>response.json()).then(data=>{
    document.querySelector('.username-2b1r56').innerText = data.username.name
    document.querySelector('.discrimBase-24vY8o').innerText = "#"+data.username.discrim
})
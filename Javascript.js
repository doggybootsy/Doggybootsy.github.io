function NavFunction(){
    document.querySelector('#navbar').classList.toggle("open");
    document.querySelector('#navbackdrop').classList.toggle("open");
}
function switchtotypeFunction(){
    document.querySelector('html').classList.toggle("scss");
    document.querySelector('html').classList.toggle("css");
}
function hashmarking(){
  if (window.location.hash !== '') {
    document.querySelector(window.location.hash).classList.add('selected');
    document.querySelector('html').setAttribute("hash",window.location.hash);
    document.querySelector('[hash] .discordsnippets').classList.add('hashed');
    document.title = 'Db | ' + window.location.hash;
  }
}

var copy = document.querySelectorAll('pre'); 
for (const copied of copy) { 
  copied.onclick = function() { 
    document.execCommand("copy"); 
  };  
  copied.addEventListener("copy", function(event) { 
    event.preventDefault(); 
    if (event.clipboardData) { 
      event.clipboardData.setData("text/plain", copied.textContent);
    };
  });
};

function redirect(){
  const constlocation = window.location.origin + '/snippets.html' + window.location.pathname.replace('/assets/redirects/','#').replace('.html','');
  document.querySelector('span').innerHTML = constlocation;
  window.location = constlocation;
}
function NavFunction(){
    document.querySelector('#navbar').classList.toggle("open");
    document.querySelector('#navbackdrop').classList.toggle("open");
}
function switchtotypeFunction(){
    document.querySelector('html').classList.toggle("scss");
    document.querySelector('html').classList.toggle("css");
}
var copy = document.querySelectorAll("pre"); 
for (const copied of copy) { 
  copied.onclick = function() { 
    document.execCommand("copy"); 
  };  
  copied.addEventListener("copy", function(event) { 
    event.preventDefault(); 
    if (event.clipboardData) { 
      event.clipboardData.setData("text/plain", copied.textContent);
      console.log(event.clipboardData.getData("text"))
    };
  });
};
spans = document.querySelectorAll("pre");
for (const span of spans) {
  span.onclick = function() {
    document.execCommand("copy");
  }

  span.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", span.textContent);
      console.log(event.clipboardData.getData("text"))
    }
  });
}
var clipboard = new Clipboard('.copy', {
    target: function() {
        return document.querySelector('#hideblockedmessages');
    }
});
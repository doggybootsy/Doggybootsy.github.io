// https://github.com/varz29/Button-Ripple-Effect/
var rippleContainers = document.querySelectorAll('.ripple');

class RippleStyleAttributes {
    constructor(width, height, posX, posY) {
        this.width = (width <= height) ? height : width;
        this.height = (width <= height) ? height : width;
        this.top = posY - (this.height * 0.25);
        this.left = posX - (this.width * 0.25);
    }
}

rippleContainers.forEach((ripplecontainer) => {
    ripplecontainer.addEventListener('click', function (ev) {
        let tag = document.createElement("span");
        tag.className = "ripple-animation";
        let pos = this.getBoundingClientRect();
        let width = this.offsetWidth;
        let height = this.offsetHeight;
        let posX = ev.pageX - pos.left;
        let posY = ev.pageY - pos.top;
        let rippleStyleAttr = new RippleStyleAttributes(width, height, posX, posY);
        tag.style.width = rippleStyleAttr.width + 'px';
        tag.style.height = rippleStyleAttr.height + 'px';
        tag.style.top = rippleStyleAttr.top + 'px';
        tag.style.left = rippleStyleAttr.left + 'px';
        this.appendChild(tag);
        setTimeout(function(){
            tag.remove()
        }, 200);
    });
});



document.querySelector('#SwitchPages_button > .btn').addEventListener("click", () => {
    document.querySelector('#SwitchPages_page').classList.toggle('open')
    document.querySelector('#SwitchPages_extra').classList.toggle('shown')
})
document.querySelector('#SwitchPages_extra').addEventListener("click", () => {
    document.querySelector('#SwitchPages_page').classList.toggle('open')
    document.querySelector('#SwitchPages_extra').classList.toggle('shown')
})

document.querySelector('#Switchcode').addEventListener("click", () => {
    const e = document.querySelector('#Switchcode').classList
    e.toggle('scss')
    e.toggle('css')

    const f = document.querySelector('html').classList
    f.toggle('scss')
    f.toggle('css')
})

function hashmarking(){
    if(window.location.hash.includes('#')){
        document.querySelectorAll('main>div[id]:not('+window.location.hash+')').forEach(e => {
            e.remove()
        });
    }
}
let hashcopy = document.querySelectorAll('.get_url>svg').forEach(e => (
    e.addEventListener("click", () => {
        const str = window.location.origin+'/snippets.html#'+e.parentNode.parentNode.parentNode.getAttribute('id')

        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    })
))

// (C1) SMOOTH SCROLL TO TOP
function totop () {
    window.scroll({
      top: 0, left: 0, behavior: 'smooth'
    });
  }
  
  // (C2) SHOW/HIDE BUTTON
  function togtop () {
    if (window.scrollY >= 1000) {
      document.getElementById("backtop").classList.add("show");
    } else {
      document.getElementById("backtop").classList.remove("show");
    }
  }
  window.addEventListener("scroll", togtop);
  window.addEventListener("resize", togtop);


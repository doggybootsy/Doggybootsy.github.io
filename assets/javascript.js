const htmltag = document.getElementsByTagName('html')[0]


function navigation(){
    document.querySelector('.navigation').classList.toggle('closed')
}
let BtnEle = document.querySelectorAll('.copy').forEach(ee => (
    ee.addEventListener("click", () => {
        const copycontent = ee.getAttribute('copy')
        const str = document.querySelector('#'+copycontent+htmltag.getAttribute('class')).innerText
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

let hashcopy = document.querySelectorAll('button.btn.hashcopy').forEach(eee => (
    eee.addEventListener("click", () => {
        const copycontent = eee.getAttribute('copy')
        const str = window.location.origin+'/assets/'+'redirects/'+copycontent+'.html'


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

let Switchtype = document.querySelectorAll('button.Switchtype').forEach(ee => (
    ee.addEventListener("click", () => {
        htmltag.classList.toggle('css')
        htmltag.classList.toggle('scss')
        if(htmltag.getAttribute('class') == 'css'){
            ee.innerText = "scss"
        } else {
            ee.innerText = "css"
        }
    })
))
function redirect(){
    window.location = window.location.origin+'/snippets.html#'+window.location.pathname.replace('/assets/redirects','').replace('.html','')
}
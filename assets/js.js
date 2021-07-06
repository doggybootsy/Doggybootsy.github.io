//set modes
if(localStorage){
    if (localStorage.getItem("mode") == null) {
        localStorage.setItem('mode', 'Default')
        document.querySelector('html').setAttribute('mode', 'dark')
    } else {
        if (localStorage.getItem("mode") == 'dark') {
            document.querySelector('html').setAttribute('mode', 'dark')
        }
        if (localStorage.getItem("mode") == 'light') {
            document.querySelector('html').setAttribute('mode', 'light')
        }
        if (localStorage.getItem("mode") == 'Default') {
            document.querySelector('html').setAttribute('mode', 'dark')
        }
    } 
} else{
    // no local storage
    if(!localStorage){
        // switch mode
        document.querySelector('html').setAttribute('mode', 'dark')
    }
}
function changemode(mode) {
    localStorage.setItem('mode', mode.value)
    document.querySelector('html').setAttribute('mode', mode.value)
    if(localStorage.getItem('mode') == 'Default'){
    } else {
        if(document.querySelector('[value="Default"]')){
            document.querySelector('[value="Default"]').remove()
        }
    }
}
if(localStorage.getItem('mode') == 'Default'){
} else {
    if(document.querySelector('[value="Default"]')){
        document.querySelector('[value="Default"]').remove()
    }
}
// custom css
if(document.querySelector('#savecustomcss')){
    document.querySelector('#savecustomcss').addEventListener("click", () => {
        localStorage.setItem('customcss', document.querySelector('#customcss').value)   
        if(!document.querySelector('#stylecustomcss')) {
            document.querySelector('head').innerHTML += `<style id="stylecustomcss">`+localStorage.getItem("customcss")+`</style>`
        }
        if(document.querySelector('#stylecustomcss')) {
            document.querySelector('#stylecustomcss').innerHTML  = localStorage.getItem("customcss")
        }
    })
}
if( localStorage.getItem("customcss") ){
    document.querySelector('head').innerHTML += `<style id="stylecustomcss">`+localStorage.getItem("customcss")+`</style>`
    if (document.querySelector('#customcss')){
        document.querySelector('#customcss').value = localStorage.getItem("customcss")
    }
}
if(document.querySelector('#clearcustomcss')){
    document.querySelector('#clearcustomcss').addEventListener("click", () => {
        localStorage.setItem('customcss', '')
        document.querySelector('#customcss').value = ''
        if( document.querySelector('#stylecustomcss') ){
            document.querySelector('#stylecustomcss').remove()
        }
    })
}
// snippets
if (document.querySelector('html[snippets]')){
    getsnippets()
}
function getsnippets(){
    fetch("/snippets.json", {
        method: "GET", // POST, PUT, DELETE, etc.
        mode: "same-origin", // same-origin, no-cors
        cache: "reload", // no-store, reload, no-cache, force-cache, or only-if-cached
    }).then(response=>response.json()).then(data=>{
        for (const item of document.querySelectorAll('.snippets:not(.multi)')) {
            item.children[0].innerHTML = data[item.getAttribute('id')].name +  `<div class="get_url">
            <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
            </svg>
        </div>`
            item.children[1].children[0].innerText = data[item.getAttribute('id')][document.querySelector('html').getAttribute('codetype')]
        }
        for (const item of document.querySelectorAll('.snippets.multi')) {
            item.children[0].innerHTML = data[item.getAttribute('id')].name +  `<div class="get_url">
            <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
            </svg>
        </div>`
            for (const item2 of document.querySelectorAll('.snippets.multi>div')) {
                item2.children[0].innerText = data[item.getAttribute('id')][item2.getAttribute('id')].name
                item2.children[1].children[0].innerText = data[item.getAttribute('id')][item2.getAttribute('id')][document.querySelector('html').getAttribute('codetype')]
            }
        }
    })
}
if(document.querySelector('#switchcodetype')){
    document.querySelector('#switchcodetype').addEventListener("click", () => {
        if(localStorage){
            if(document.querySelector('[codetype="scss"]')) {
                localStorage.setItem('codetype', 'css')
                document.querySelector('[codetype="scss"]').setAttribute('codetype', 'css')
            } else{
                if(document.querySelector('[codetype="css"]')) {
                    localStorage.setItem('codetype', 'scss')
                    document.querySelector('[codetype="css"]').setAttribute('codetype', 'scss')
                }
            }
        } else{
            if(document.querySelector('[codetype="scss"]')) {
                document.querySelector('[codetype="scss"]').setAttribute('codetype', 'css')
            } else{
                if(document.querySelector('[codetype="css"]')) {
                    document.querySelector('[codetype="css"]').setAttribute('codetype', 'scss')
                }
            }
        }
        getsnippets()
    })
}
if(localStorage){
    if(localStorage.getItem('codetype')){
        if (document.querySelector('[snippets]')){
            document.querySelector('[snippets]').setAttribute('codetype', localStorage.getItem('codetype'))
        }
    } else{
        localStorage.setItem('codetype', 'css')
    }
}
if(document.querySelector('.copy_code')){
    for (const item of document.querySelectorAll('.copy_code')) {
        item.addEventListener("click", () => {
            const str = item.parentElement.children[1].innerText
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
    }
}
// Hash url
const targetNode = document.querySelector('main');
const config = { attributes: true, childList: true, subtree: true };
const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            if(document.querySelector('.get_url>svg')){
                for (const item of document.querySelectorAll('.get_url>svg')) {
                    item.addEventListener("click", () => {
                        const str = window.location.origin + '/snippets/#' + item.parentElement.parentElement.parentElement.getAttribute('id')
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
                }
            }
        }
    }
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
// hash
function locationHashChanged() {
    if(window.location.hash !== '') {
        if ( document.querySelector('.snippets#'+window.location.hash.replace('#','')) ) {
            document.querySelector('main').classList.add('hashed')
            document.querySelector('.snippets'+window.location.hash).classList.add('hashed')
        }
    } else{
        console.log('success pt1')
        if( window.location.hash === '' && document.querySelector('main.hashed')){
            console.log('success pt2')
            document.querySelector('main.hashed').classList.remove('hashed')
            document.querySelector('.snippets.hashed').classList.remove('hashed')
        }
    }
}
window.onhashchange = locationHashChanged;
locationHashChanged()

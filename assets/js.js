(()=>{
    const ToClipboard = (str) =>{
        const el = document.createElement('textarea')
        el.value = str
        el.setAttribute('readonly', '')
        el.style.position = 'absolute'
        el.style.left = '-9999px'
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
    }
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
        if(!localStorage){
            document.querySelector('html').setAttribute('mode', 'dark')
        }
    }
    if(localStorage.getItem('mode') == 'Default'){
    } else {
        if(document.querySelector('[value="Default"]')){
            document.querySelector('[value="Default"]').remove()
        }
    }
    if (document.querySelector('html[snippets]')){
        getsnippets()
    }
    function getsnippets(){
        fetch("/snippets.json", {
            cache: "no-cache",
        }).then(response=>response.json()).then(data=>{
            document.querySelector('html[snippets] main').innerHTML = ''
            Object.keys(data).forEach(key => {
                document.querySelector('html[snippets] main').innerHTML += `
    <div class="snippets" id="${key}">
        <h2>
            <div> ${data[key].name} | ${data[key].author} </div>
            <div class="get_url">
                <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                </svg>
            </div>
        </h2>
    
        <pre><code class="language-${document.querySelector('[snippets]').getAttribute('codetype')}">${data[key][document.querySelector('[snippets]').getAttribute('codetype')]}</code></pre>
    
        <button class="copy_code">copy</button>
    </div>
    `
            })
            hljs.highlightAll()
        }).catch(function() {
            document.querySelector('html[snippets] main').innerHTML = `Unable to connect to <a href="https://doggybootsy.github.io/snippets.json">https://doggybootsy.github.io/snippets.json</a>`
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
    
    const targetNode = document.querySelector('main')
    const config = { attributes: true, childList: true, subtree: true }
    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                if(document.querySelector('.get_url>svg')){
                    if(document.querySelector('.copy_code')){
                        for (const item of document.querySelectorAll('.copy_code')) {
                            item.addEventListener("click", () => {
                                ToClipboard(item.parentElement.children[1].innerText)
                            })
                        }
                    }
                    for (const item of document.querySelectorAll('.get_url>svg')) {
                        item.addEventListener("click", () => {
                            ToClipboard(`${window.location.origin}/snippets/#${item.parentElement.parentElement.parentElement.getAttribute('id')}`)
                        })
                    }
                }
            }
        }
    }
    const observer = new MutationObserver(callback)
    observer.observe(targetNode, config)
    function locationHashChanged() {
        setInterval(() => {
            if (document.getElementById(`${window.location.hash.replace('#','')}`)){
                document.getElementById(`${window.location.hash.replace('#','')}`).classList.add('hashed')
                document.querySelector('main').classList.add('hashed')
            } if(document.querySelector('.hashed') && !document.getElementById(`${window.location.hash.replace('#','')}`)){
                document.querySelector('.hashed').classList.remove('hashed')
                document.querySelector('main').classList.remove('hashed')
            }
        }, 100)
    }
    locationHashChanged()
    fetch("/site.json", {
        cache: "no-cache",
    }).then(response=>response.json()).then(data=>{
        if ( data.banner.show === true ) {
            if ( data.banner[document.querySelector('title').innerText.toLowerCase()] !== undefined ) document.getElementById('appmount').insertAdjacentHTML('beforebegin', `<div id="banner"> ${data.banner[document.querySelector('title').innerText.toLowerCase()]} </div>`)
        }
        if ( document.querySelector('.ver') ) {
            document.querySelector('.ver').innerText = `${data.main.version.date} • ${data.main.version.num}`
        }
    })
    function checkifsiteisuptodate(version) {
        fetch("/site.json", {
            cache: "no-cache",
        }).then(response=>response.json()).then(data=>{
            if (data.main.version.num != version) {
                alert(`Please restart the website your version ( ${version} ) is out of date`)
                window.location.reload()
            }
        })
    }
    let version = 2.2
    checkifsiteisuptodate(version)
    setInterval(() => {
        checkifsiteisuptodate(version)
    }, 120000)
    const navigation = document.createElement('div')
    navigation.innerHTML= `
    <div class="home">
        <a href="/">Doggybootsy</a>
    </div>

    <a target="_blank" rel="noopener noreferrer" href="https://betterdiscord.app/developer/Doggybootsy">
        <svg viewBox="0 0 2000 2000">
            <g>
                <path fill="#3E82E5" d="M1402.2,631.7c-9.7-353.4-286.2-496-642.6-496H68.4v714.1l442,398V490.7h257c274.5,0,274.5,344.9,0,344.9H597.6v329.5h169.8c274.5,0,274.5,344.8,0,344.8h-699v354.9h691.2c356.3,0,632.8-142.6,642.6-496c0-162.6-44.5-284.1-122.9-368.6C1357.7,915.8,1402.2,794.3,1402.2,631.7z"/>
                <path d="M1262.5,135.2L1262.5,135.2l-76.8,0c26.6,13.3,51.7,28.1,75,44.3c70.7,49.1,126.1,111.5,164.6,185.3c39.9,76.6,61.5,165.6,64.3,264.6l0,1.2v1.2c0,141.1,0,596.1,0,737.1v1.2l0,1.2c-2.7,99-24.3,188-64.3,264.6c-38.5,73.8-93.8,136.2-164.6,185.3c-22.6,15.7-46.9,30.1-72.6,43.1h72.5c346.2,1.9,671-171.2,671-567.9V716.7C1933.5,312.2,1608.7,135.2,1262.5,135.2z"/>
            </g>
        </svg>
    </a>
    <a href="/snippets/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M 29.902344 1.09375 C 24.507813 1.632813 24.082031 7.511719 24.011719 7.835938 L 21.636719 22.882813 C 20.203125 23.203125 15.726563 24.207031 14.285156 24.65625 C 14.15625 24.699219 14.050781 24.726563 13.957031 24.75 C 13.585938 21.519531 10.828125 19 7.5 19 C 3.914063 19 1 21.914063 1 25.5 C 1 29.085938 3.914063 32 7.5 32 L 7.984375 32 C 8.023438 32 8.066406 32 8.109375 32 C 9.726563 32 11.085938 31.449219 12.65625 30.8125 C 14.753906 29.960938 17.132813 29 21 29 C 21.117188 29 21.226563 28.96875 21.328125 28.933594 C 21.550781 32.023438 19.9375 34.667969 19.136719 37.03125 C 18.550781 38.75 18 40.378906 18 42 L 18 42.5 C 18 46.085938 20.914063 49 24.5 49 C 28.085938 49 31 46.085938 31 42.5 C 31 39.054688 28.304688 36.226563 24.910156 36.015625 L 27.1875 28.390625 C 27.203125 28.34375 27.210938 28.296875 27.21875 28.25 L 30.988281 2.230469 C 31.035156 1.925781 30.9375 1.621094 30.722656 1.398438 C 30.511719 1.171875 30.203125 1.058594 29.902344 1.09375 Z M 48.085938 19.003906 C 48.011719 18.996094 47.933594 19 47.859375 19.011719 L 30.214844 21.53125 L 29.199219 27.96875 C 29.179688 28.109375 29.148438 28.25 29.105469 28.398438 L 42.21875 26.410156 C 42.476563 26.351563 48.457031 25.492188 48.996094 20.097656 C 49.023438 19.792969 48.914063 19.492188 48.691406 19.277344 C 48.523438 19.117188 48.3125 19.023438 48.085938 19.003906 Z M 7.5 22 C 9.429688 22 11 23.570313 11 25.5 C 11 27.429688 9.429688 29 7.5 29 C 5.570313 29 4 27.429688 4 25.5 C 4 23.570313 5.570313 22 7.5 22 Z M 24 24 C 24.550781 24 25 24.449219 25 25 C 25 25.550781 24.550781 26 24 26 C 23.449219 26 23 25.550781 23 25 C 23 24.449219 23.449219 24 24 24 Z M 24.5 39 C 26.429688 39 28 40.570313 28 42.5 C 28 44.429688 26.429688 46 24.5 46 C 22.570313 46 21 44.429688 21 42.5 C 21 40.570313 22.570313 39 24.5 39 Z"></path>
        </svg>
    </a>
    <a href="/settings/">
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
            <path d="M 9.6660156 2 L 9.1757812 4.5234375 C 8.3516137 4.8342536 7.5947862 5.2699307 6.9316406 5.8144531 L 4.5078125 4.9785156 L 2.171875 9.0214844 L 4.1132812 10.708984 C 4.0386488 11.16721 4 11.591845 4 12 C 4 12.408768 4.0398071 12.832626 4.1132812 13.291016 L 4.1132812 13.292969 L 2.171875 14.980469 L 4.5078125 19.021484 L 6.9296875 18.1875 C 7.5928951 18.732319 8.3514346 19.165567 9.1757812 19.476562 L 9.6660156 22 L 14.333984 22 L 14.824219 19.476562 C 15.648925 19.165543 16.404903 18.73057 17.068359 18.185547 L 19.492188 19.021484 L 21.826172 14.980469 L 19.886719 13.291016 C 19.961351 12.83279 20 12.408155 20 12 C 20 11.592457 19.96113 11.168374 19.886719 10.710938 L 19.886719 10.708984 L 21.828125 9.0195312 L 19.492188 4.9785156 L 17.070312 5.8125 C 16.407106 5.2676813 15.648565 4.8344327 14.824219 4.5234375 L 14.333984 2 L 9.6660156 2 z M 11.314453 4 L 12.685547 4 L 13.074219 6 L 14.117188 6.3945312 C 14.745852 6.63147 15.310672 6.9567546 15.800781 7.359375 L 16.664062 8.0664062 L 18.585938 7.40625 L 19.271484 8.5917969 L 17.736328 9.9277344 L 17.912109 11.027344 L 17.912109 11.029297 C 17.973258 11.404235 18 11.718768 18 12 C 18 12.281232 17.973259 12.595718 17.912109 12.970703 L 17.734375 14.070312 L 19.269531 15.40625 L 18.583984 16.59375 L 16.664062 15.931641 L 15.798828 16.640625 C 15.308719 17.043245 14.745852 17.36853 14.117188 17.605469 L 14.115234 17.605469 L 13.072266 18 L 12.683594 20 L 11.314453 20 L 10.925781 18 L 9.8828125 17.605469 C 9.2541467 17.36853 8.6893282 17.043245 8.1992188 16.640625 L 7.3359375 15.933594 L 5.4140625 16.59375 L 4.7285156 15.408203 L 6.265625 14.070312 L 6.0878906 12.974609 L 6.0878906 12.972656 C 6.0276183 12.596088 6 12.280673 6 12 C 6 11.718768 6.026742 11.404282 6.0878906 11.029297 L 6.265625 9.9296875 L 4.7285156 8.59375 L 5.4140625 7.40625 L 7.3359375 8.0683594 L 8.1992188 7.359375 C 8.6893282 6.9567546 9.2541467 6.6314701 9.8828125 6.3945312 L 10.925781 6 L 11.314453 4 z M 12 8 C 9.8034768 8 8 9.8034768 8 12 C 8 14.196523 9.8034768 16 12 16 C 14.196523 16 16 14.196523 16 12 C 16 9.8034768 14.196523 8 12 8 z M 12 10 C 13.111477 10 14 10.888523 14 12 C 14 13.111477 13.111477 14 12 14 C 10.888523 14 10 13.111477 10 12 C 10 10.888523 10.888523 10 12 10 z"></path>
        </svg>
    </a>
    <div></div>`
    document.querySelector('nav').appendChild(navigation)
    if( localStorage.getItem("customcss") ){
        document.querySelector('head').innerHTML += `<style id="stylecustomcss">${localStorage.getItem("customcss")}</style>`
        if (document.querySelector('#customcss')){
            document.querySelector('#customcss').value = localStorage.getItem("customcss")
        }
    }
    if (location.pathname === "/settings/") {
        document.querySelector('select').addEventListener('change', e => {
            localStorage.setItem('mode', e.target.value)
            document.querySelector('html').setAttribute('mode', e.target.value)
            if(localStorage.getItem('mode') == 'Default'){
            } else {
                if(document.querySelector('[value="Default"]')){
                    document.querySelector('[value="Default"]').remove()
                }
            }
        })
        document.querySelector('#savecustomcss').addEventListener("click", () => {
            localStorage.setItem('customcss', document.querySelector('#customcss').value)   
            if(!document.querySelector('#stylecustomcss')) {
                document.querySelector('head').innerHTML += `<style id="stylecustomcss">${localStorage.getItem("customcss")}</style>`
            }
            if(document.querySelector('#stylecustomcss')) {
                document.querySelector('#stylecustomcss').innerHTML  = localStorage.getItem("customcss")
            }
        })
        document.querySelector('#clearcustomcss').addEventListener("click", () => {
            localStorage.setItem('customcss', ``)
            document.querySelector('#customcss').value = ''
            if( document.querySelector('#stylecustomcss') ){
                document.querySelector('#stylecustomcss').remove()
            }
        })
        document.querySelector('#sharecustomcss').addEventListener('click', (e) => {
            ToClipboard(`${location.host}${location.pathname}?SharedCustomCSS=${btoa(e.target.parentElement.children[0].children[0].value)}`)
        })
        if (location.search.startsWith(`?SharedCustomCSS=`)) {
            let customcss = atob(location.search.replace(`?SharedCustomCSS=`, ``))
            localStorage.setItem("customcss", customcss)
            document.querySelector('#customcss').value = customcss
            if(!document.querySelector('#stylecustomcss')) {
                document.querySelector('head').innerHTML += `<style id="stylecustomcss">${localStorage.getItem("customcss")}</style>`
            }
            if(document.querySelector('#stylecustomcss')) {
                document.querySelector('#stylecustomcss').innerHTML  = localStorage.getItem("customcss")
            }
            location.search = ''
        }
    }
})()
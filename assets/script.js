(async () => {
    const {pathname, origin, hash, href} = location, ToClipboard = str => {
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
    let snippets
    let codetype
    const html = document.children[0], head = html.children[0], body = html.children[1]
    new MutationObserver(() => {
        if (document.getElementById('bound') && !document.getElementById('bound').classList.contains('l')) {
            document.getElementById('bound').classList.add('l')
        }
        if (location.host != 'doggybootsy.github.io' || localStorage.getItem('IsDev') == "true") for(const ite of document.querySelectorAll('[hidden]')) ite.hidden = false
    }).observe(body, {childList: true,attributes: true,subtree: true})
    if (pathname === '/discord/snippets/') {
        await fetch("/data/snippets.json", {
            cache: "no-cache",
        }).then(response=>response.json()).then(data => snippets = data)
    }
    function createElement(type, props, ...text) {
        const node = document.createElement(type)
        Object.assign(node, props)
        if (props.child) node.append(...props.child)
        node.append(...text)
        return node
    }
    if (hash.startsWith('#SharedCustomCSS==')) {
        localStorage.setItem('CustomCSS', atob(hash.replace('#SharedCustomCSS==', '')))
        location.hash = ''
    }
    let root,nav,main,layer,key,Render = () => {
        if(root)root.remove()
        key = hash.replace('#','')
        codetype = localStorage.getItem('codetype') ?? 'css'
        const codeblock = (key) => {return createElement('div', {
            className: 'snippets',
            child: [
                createElement('h2', {
                    child: [
                        createElement('div', {}, `${snippets[key].name} | ${snippets[key].author}`),
                        createElement('div', {
                            className: 'get_url',
                            onclick: () => ToClipboard(`${href}#${key}`),
                            innerHTML: '<svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>'
                        })
                    ]
                }),
                createElement('div', {
                    child: [
                        createElement('pre', {
                            onscroll: (e) => e.target.previousSibling.scrollTop = e.target.scrollTop,
                            child: [
                                createElement('code', {
                                    className: `language-${codetype}`,
                                }, snippets[key][codetype])
                            ]
                        })
                    ]
                }),
                createElement('button', {
                    className: 'copy',
                    onclick: (e) => ToClipboard(e.target.previousSibling.children[1].children[0].innerText)
                }, 'Copy')
            ]
        })}
        head.append(createElement('style', {
            id: "CustomCSS",
            innerHTML: localStorage.getItem('CustomCSS') ?? ''
        }))
        body.insertBefore(createElement('div', {
            id: 'root',
            child: [
                createElement('nav', {
                    child: [
                        createElement('a', {href: "/"}, "Doggybootsy"),
                        createElement('div', {
                            child: [
                                createElement('div', {
                                    className: "dropdown",
                                    tabindex: 1,
                                    id: "Site",
                                    innerHTML: 'Site<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,14.071L8.179,10.25c-0.414-0.414-1.086-0.414-1.5,0l0,0c-0.414,0.414-0.414,1.086,0,1.5l4.614,4.614 c0.391,0.391,1.024,0.391,1.414,0l4.614-4.614c0.414-0.414,0.414-1.086,0-1.5v0c-0.414-0.414-1.086-0.414-1.5,0L12,14.071z"></path></svg>'
                                }),
                                createElement('div', {
                                    className: "dropdown",
                                    tabindex: 1,
                                    id: "Discord",
                                    innerHTML: 'Discord<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,14.071L8.179,10.25c-0.414-0.414-1.086-0.414-1.5,0l0,0c-0.414,0.414-0.414,1.086,0,1.5l4.614,4.614 c0.391,0.391,1.024,0.391,1.414,0l4.614-4.614c0.414-0.414,0.414-1.086,0-1.5v0c-0.414-0.414-1.086-0.414-1.5,0L12,14.071z"></path></svg>'
                                }),
                            ]
                        }),
                    ]
                }),
                createElement('main', {
                    child: pathname == '/' ? [
                        createElement('h1', {
                            style: "position: fixed; top: calc(50% + 40px); left: 50%; transform: translate(-50%, -50%); margin: 0; font-size: 3em;"
                        }, "Doggybootsy")
                    ] : pathname.startsWith('/discord/snippets/') && hash.replace('#','') === '' ? Object.keys(snippets).map(key => codeblock(key)) : pathname.startsWith('/discord/snippets/') && hash.replace('#','') !== '' ? [codeblock(key)] : pathname.startsWith('/settings/') ? [
                        createElement("textarea", {
                            value: localStorage.getItem('CustomCSS') ?? '',
                            placeholder: 'Custom css here',
                            style: 'min-width: 300px;min-height: 200px;max-width: calc(100vw - 40px);max-height: calc(50vh - 70px)',
                            oninput: (e) => {
                                localStorage.setItem('CustomCSS', e.target.value)
                                document.getElementById('CustomCSS').innerHTML = e.target.value
                            }
                        }),
                        createElement('div', {
                            child: [
                                createElement('button', {
                                    onclick: (e) => ToClipboard(`${origin}${pathname}#SharedCustomCSS==${btoa(e.target.parentElement.previousSibling.value)}`)
                                }, 'share'),
                                createElement('button', {
                                    style: 'margin-left: 20px',
                                    onclick: (e) => {
                                        localStorage.setItem('CustomCSS', '')
                                        document.getElementById('CustomCSS').innerHTML = ''
                                        e.target.parentElement.previousSibling.value = ''
                                    }
                                }, 'reset')
                            ]  
                        })
                    ] : pathname.startsWith('/discord/request/') ? [
                        createElement('div', {
                            id: "top",
                            child: [
                                createElement('div', {
                                    child: [
                                        "Snippet name",
                                        createElement('input', {
                                            id: 'Name',
                                            placeholder: 'required'
                                        })
                                    ]
                                }),
                                createElement('div', {
                                    child: [
                                        "Your name",
                                        createElement('input', {
                                            id: 'Author',
                                            placeholder: 'required'
                                        })
                                    ]
                                })
                            ]
                        }),
                        createElement('div', {
                            id: "button",
                            child: [
                                createElement('div', {
                                    child: [
                                        createElement('div', {}, "CSS"),
                                        createElement('textarea', {
                                            id: 'css',
                                            placeholder: 'required'
                                        })
                                    ]
                                }),
                                createElement('div', {
                                    child: [
                                        createElement('div', {}, "SCSS"),
                                        createElement('textarea', {
                                            id: 'scss',
                                            placeholder: 'If there\'s no SCSS leave blank'
                                        })
                                    ]
                                })
                            ]
                        }),
                        createElement('div', {
                            child: [
                                createElement('button', {
                                    onclick: (e) => {
                                        let Snippet = {
                                            name: document.getElementById('Name').value,
                                            author: document.getElementById('Author').value,
                                            css: document.getElementById('css').value,
                                            scss: document.getElementById('scss').value,
                                            webhook: (content, file) => {
                                                var formData = new FormData()
                                                formData.append("file", new File([new Blob([file])], `${Snippet.name}.css`))
                                                formData.append("content", content)
                                                var xhr = new XMLHttpRequest()
                                                xhr.open("POST", atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvODgwNjY5NjQyNzgyMjg1ODc0LzgxQk50Sy1JWU05RHcxTjIyYVJtMkZxX0xianFrbU5JU1RKamJ3RV8tWFJneVE2cGdHbXAzVG8zeGFVSUpIVEpfMXpU"))
                                                xhr.send(formData)
                                            }
                                        }
                                        if (Snippet.name != '' || Snippet.author != '' || Snippet.css != '') {
                                            e.target.nextSibling.innerText = ''
                                            Snippet.webhook(`\`${Snippet.name}\` was submitted by \`${Snippet.author}\`\n\`CSS\`${Snippet.scss == '' ? '. No SCSS provided' : Snippet.css == Snippet.scss ? '. SCSS was the same as CSS' : ''}`, Snippet.css)
                                            setTimeout(() => {
                                                if (Snippet.css == Snippet.scss) return
                                                else {
                                                    if (Snippet.scss == '') return
                                                    Snippet.webhook(`\`${Snippet.name}\` was submitted by \`${Snippet.author}\`\n\`SCSS\``, Snippet.scss)
                                                }
                                            }, 100);
                                        }
                                        else {
                                            e.target.nextSibling.innerText = ' Please enter a Name, Author, and css'
                                        }
                                    }
                                }, "Submit"),
                                createElement('span', {}, '')
                            ]
                        })
                    ] : ["Error"]
                }),
                createElement('div', {
                    child: pathname === '/discord/snippets/' ? [
                        createElement('div', {
                            id: 'CCT',
                            className: codetype,
                            onclick: () => {
                                localStorage.setItem('codetype', localStorage.getItem('codetype') == 'css' ? 'scss' : 'css')
                                root.remove()
                                Render()
                            },
                            innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g class="css"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path></g><g class="scss"><path fill="#f06292" fill-rule="evenodd" d="M24.042,4.032C35.065,4.032,44,12.967,44,23.99	c0,11.022-8.935,19.958-19.958,19.958c-11.022,0-19.958-8.935-19.958-19.958C4.085,12.967,13.02,4.032,24.042,4.032L24.042,4.032z" clip-rule="evenodd"></path><path fill="#fff" d="M36.561,12.574c-0.904-3.545-6.781-4.71-12.343-2.734c-3.31,1.176-6.894,3.022-9.471,5.432 c-3.064,2.866-3.552,5.36-3.351,6.402c0.71,3.677,5.749,6.081,7.82,7.865v0.011c-0.611,0.301-5.081,2.563-6.127,4.876 c-1.104,2.44,0.176,4.191,1.023,4.427c2.625,0.73,5.318-0.583,6.766-2.742c1.397-2.084,1.281-4.774,0.674-6.113 c0.837-0.221,1.814-0.32,3.054-0.175c3.501,0.409,4.188,2.595,4.056,3.51c-0.131,0.915-0.866,1.418-1.111,1.57 c-0.246,0.152-0.32,0.205-0.3,0.317c0.03,0.164,0.143,0.158,0.353,0.123c0.288-0.049,1.838-0.744,1.905-2.433 c0.084-2.144-1.97-4.542-5.608-4.48c-1.498,0.026-2.44,0.168-3.121,0.422c-0.05-0.057-0.102-0.114-0.154-0.171 c-2.249-2.4-6.407-4.097-6.231-7.323c0.064-1.173,0.472-4.261,7.989-8.007c6.158-3.069,11.088-2.224,11.94-0.353 c1.217,2.674-2.635,7.643-9.03,8.36c-2.437,0.273-3.72-0.671-4.039-1.023c-0.336-0.37-0.386-0.387-0.511-0.317 c-0.204,0.113-0.075,0.44,0,0.635c0.191,0.497,0.975,1.378,2.31,1.817c1.175,0.386,4.036,0.597,7.496-0.741 C34.424,20.229,37.45,16.059,36.561,12.574z M20.076,30.638c0.29,1.074,0.258,2.076-0.041,2.983c-0.033,0.101-0.07,0.2-0.11,0.299 c-0.04,0.098-0.083,0.196-0.129,0.292c-0.231,0.48-0.542,0.929-0.922,1.344c-1.16,1.265-2.78,1.743-3.474,1.34 c-0.75-0.435-0.374-2.218,0.97-3.64c1.446-1.529,3.527-2.512,3.527-2.512l-0.003-0.006C19.954,30.705,20.015,30.672,20.076,30.638z"></path></g></svg>`
                        })
                    ] : []
                })
            ]
        }), body.children[0])
        root = body.children.root
        nav = root.children[0]
        main = root.children[1]
        layer = root.children[2]
        if (window.hljs != null) {
            hljs.highlightAll()
            root.append(createElement('div', {
                id: "Request",
                style: 'padding: 25px 10px 25px 70px; font-size: .75em',
                child: [
                    "Have a snippet yourself you want added, request one ",
                    createElement('a', {
                        href: "/discord/request/"
                    }, "here"),
                    ". Not a 100% chance it will be added"
                ]
            }))
        }
        for (const ele of document.querySelectorAll('.dropdown')) {
            ele.addEventListener('click', () => {
                if (ele.classList.contains('open')) {
                    ele.classList.remove('open')
                    const menu = document.getElementById('menu')
                    if (menu) {
                        menu.remove()
                        menu.nextSibling.remove()
                    }
                } else {
                    ele.classList.add('open')
                    layer.appendChild(createElement('div', {
                        id: "menu",
                        tabindex: 1,
                        child: ele.id == "Discord" ? [
                            createElement('a', {href: "/discord/snippets/"}, "Snippets"),
                            createElement('a', {href: "/discord/invite/"}, "Discord invite"),
                        ] : ele.id == "Site" ? [
                            createElement('a', {href: "/settings/"}, "Settings")
                        ] : [
                            createElement('span', {}, "Error")
                        ]
                    }))
                    const menu = document.getElementById('menu')
                    menu.setAttribute('style', `position: fixed; z-index: 100; width: 150px;`)
                    menu.style.top = `${ele.getBoundingClientRect().y + 40}px`
                    menu.style.left = `${ele.getBoundingClientRect().x + (ele.offsetWidth - menu.offsetWidth)}px`
                    layer.appendChild(createElement('div', {
                        style: `position: fixed; left: 0; right: 0; bottom: 0; top: 0; z-index: 1`,
                        id: 'bound',
                        onclick: () => {
                            ele.classList.remove('open')
                            document.getElementById('bound').remove()
                            menu.remove()
                        }
                    }))
                }
            })
        }
    }
    Render()
    html.setAttribute('lang', navigator.languages[1])
    html.setAttribute('pathname', pathname)
})()
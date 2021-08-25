(async () => {
    ඞ = {
        range: (start, end) => new Array(end-start+1).fill().map((el, ind) => ind + start),
        ToClipboard: (str) =>{
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
    }
    sus = 'ඞ'
    // Stupid stuff
    let snippets
    let codetype
    // Elements
    const html = document.children[0]
    const head = html.children[0]
    const body = html.children[1]
    // Mutation observer
    new MutationObserver(() => {
        // Horrible tempt at stoping scrolling
        if (document.getElementById('bound') && !document.getElementById('bound').classList.contains('l')) {
            document.getElementById('bound').classList.add('l')
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            window.onscroll = () => window.scrollTo(0, scrollTop)
        }
        // Show dev stuff
        if (location.host != 'doggybootsy.github.io') for (const ite of document.querySelectorAll('[hidden]')) ite.hidden = false
    }).observe(body, {childList: true,attributes: true,subtree: true})
    // Fetch snippets
    if (location.pathname === '/discord/snippets/') {
        await fetch("/snippets.json", {
            cache: "no-cache",
        }).then(response=>response.json()).then(data => snippets = data)
    }
    // Create Element
    function createElement(type, props, ...text) {
        const node = document.createElement(type)
        Object.assign(node, props)
        if (props.child) node.append(...props.child)
        node.append(...text)
        return node
    }
    // Share Custom css
    if (location.hash.startsWith('#SharedCustomCSS==')) {
        localStorage.setItem('CustomCSS', atob(location.hash.replace('#SharedCustomCSS==', '')))
        location.hash = ''
    }
    // Render
    let root
    let nav
    let main
    let layer
    let key
    let Render = () => {
        // Create Theme CSS
        window.CreateThemeCSS = (css) => {
            if (css === "Clear") document.getElementById('preview').contentWindow.document.head.children.import.innerHTML = ''
            else document.getElementById('preview').contentWindow.document.head.children.import.innerHTML += css = css == undefined ? '' : css
        }
        let one_time
        window.GenerateCSS = () => {
            CreateThemeCSS("Clear")
            one_time = 0
            for (const ite of document.querySelectorAll('.category')) {
                if (document.getElementById('Custom_Wordmark').checked  && one_time == 0) {
                    one_time++
                    CreateThemeCSS(`@import url("${location.origin}/assets/fonts/discord.css");\n`)
                }
                if (ite.id == 'Rounded_Corners') CreateThemeCSS(ite.children[0].children[1].children[0].checked === true ? `body{\n  background-color: transparent;\n}\n#app-mount{\n  border-radius: ${ite.children[1].children[0].value}px;\n}\n` : '')
                if (ite.id == 'Custom_Wordmark_text') CreateThemeCSS(ite.children[0].children[1].children[0].checked === true ? `.wordmark-2iDDfm svg {width: 0px;}\n.wordmark-2iDDfm::after {\n    position: absolute;\n    font-family: "discord";\n    content: "${ite.children[1].children[0].value}";\n    top: 3px;\n    font-size: 14px;\n    font-weight: normal;\n    color: var(--text-muted);\n    height: 19px;\n    width: 235px;\n    line-height: 20px;\n}\n` : '')
            }
        }
        key = location.hash.replace('#','')
        codetype = localStorage.getItem('codetype') ?? 'css'
        // Codeblock
        const codeblock = (key) => {return createElement('snippets', {
            child: [
                createElement('h2', {
                    child: [
                        createElement('div', {}, `${snippets[key].name} | ${snippets[key].author}`),
                        createElement('div', {
                            className: 'get_url',
                            onclick: () => ඞ.ToClipboard(`${location.href}#${key}`),
                            innerHTML: '<svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>'
                        })
                    ]
                }),
                createElement('div', {
                    child: [
                        createElement('pre', {
                            child: [
                                createElement('code', {
                                    className: `nohighlight`,
                                }, `${ඞ.range(1, `${snippets[key][codetype]}`.split(/\r\n|\r|\n/).length)}`.replaceAll(`,`, `\n`))
                            ]
                        }),
                        createElement('pre', {
                            onscroll: (e) => e.target.previousSibling.scrollTop = e.target.scrollTop,
                            child: [
                                createElement('code', {
                                    className: `language-${codetype}`,
                                }, snippets[key][codetype])
                            ]
                        })
                    ]
                })
            ]
        })}
        // head
        head.append(createElement('style', {
            id: "CustomCSS",
            innerHTML: localStorage.getItem('CustomCSS') ?? ''
        }))
        // Main body
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
                    child: location.pathname === '/' ? [
                        createElement('h1', {
                            style: "position: fixed; top: calc(50% + 40px); left: 50%; transform: translate(-50%, -50%); margin: 0; font-size: 3em;"
                        }, "Doggybootsy")
                    ] : location.pathname === '/discord/snippets/' && location.hash.replace('#','') === '' ? Object.keys(snippets).map(key => codeblock(key)) : location.pathname === '/discord/snippets/' && location.hash.replace('#','') !== '' ? [codeblock(key)] : location.pathname === '/settings/' ? [
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
                                    onclick: (e) => ඞ.ToClipboard(`${location.origin}${location.pathname}#SharedCustomCSS==${btoa(e.target.parentElement.previousSibling.value)}`)
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
                    ] : location.pathname === '/discord/bd-meta/' ? [] : location.pathname === '/discord/theme-maker/' ? [
                        createElement('div', {
                            child: [
                                createElement('div', {
                                    className: 'category',
                                    id: 'Rounded_Corners',
                                    child: [
                                        createElement('div', {
                                            child: [
                                                createElement('span', {}, 'Rounded corners'),
                                                createElement('div', {
                                                    className: "switch",
                                                    child: [
                                                        createElement('input', {
                                                            type: 'checkbox',
                                                            id: 'Rounded_Corner',
                                                            oninput: (e) => {
                                                                let slider = e.target.parentElement.parentElement.nextSibling.children[0]
                                                                slider.disabled = slider.disabled === true ? false : true
                                                                GenerateCSS()
                                                            }
                                                        }),
                                                        createElement('span', {
                                                            className: "slider"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        createElement('div', {
                                            child: [
                                                createElement('input', {
                                                    type: "range",
                                                    min: "1",
                                                    max: "25",
                                                    value: "6",
                                                    disabled: true,
                                                    oninput: (e) => {
                                                        e.target.nextSibling.innerText = `${e.target.value}px`
                                                        GenerateCSS()
                                                    }
                                                }),
                                                createElement('span', {}, "6px"),
                                            ]
                                        })
                                    ]
                                }),
                                createElement('div', {
                                    className: 'category',
                                    id: 'Custom_Wordmark_text',
                                    child: [
                                        createElement('div', {
                                            child: [
                                                createElement('span', {}, 'Custom wordmark'),
                                                createElement('div', {
                                                    className: "switch",
                                                    child: [
                                                        createElement('input', {
                                                            type: 'checkbox',
                                                            id: 'Custom_Wordmark',
                                                            oninput: (e) => {
                                                                let slider = e.target.parentElement.parentElement.nextSibling.children[0]
                                                                slider.disabled = slider.disabled === true ? false : true
                                                                GenerateCSS()
                                                            }
                                                        }),
                                                        createElement('span', {
                                                            className: "slider"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        createElement('div', {
                                            child: [
                                                createElement('input', {
                                                    placeholder: 'Discord',
                                                    disabled: true,
                                                    oninput: () => {
                                                        GenerateCSS()
                                                    }
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                createElement('div', {
                                    id: 'Zoom_level',
                                    child: [
                                        createElement('span', {}, "Zoom"),
                                        createElement('input', {
                                            type: "range",
                                            step: 0.05,
                                            value: .75,
                                            min: .5,
                                            max: 1.5,
                                            oninput: (e) => {
                                                e.target.parentElement.parentElement.nextSibling.children[0].contentWindow.document.head.children.zoom.innerHTML = `html{transform: scale(${e.target.value});transform-origin: 0 0;width:  calc(100% / ${e.target.value});height: calc(100% / ${e.target.value});}`
                                                e.target.nextSibling.innerText = `${e.target.value}%`
                                            }
                                        }),
                                        createElement('span', {}, ".75%"),
                                    ]
                                }),
                                createElement('div', {
                                    id: 'Download',
                                    child: [
                                        createElement('h2', {}, "Download"),
                                        createElement('div', {
                                            child: [
                                                createElement('input', {
                                                    id: 'themes_name',
                                                    placeholder: 'Theme name'
                                                }),
                                                createElement('div', {}),
                                                createElement('input', {
                                                    id: 'themes_author',
                                                    placeholder: 'Your name'
                                                })
                                            ]
                                        }),
                                        createElement('div', {
                                            child: [
                                                createElement('button', {
                                                    onclick: () => {
                                                        var name = document.getElementById('themes_name').value
                                                        var author = document.getElementById('themes_author').value
                                                        body.append(
                                                            createElement('a', {
                                                                href: URL.createObjectURL(new Blob([`/**\n * @name ${name}\n * @description Theme generated by Doggybootsy's Theme maker\n * @version 1\n * @author ${author}\n */\n${document.getElementById('preview').contentWindow.document.head.children.import.innerHTML}`], {type: 'text/plain'})),
                                                                download: `${name}.theme.css`,
                                                                id: 'Download_'
                                                            })
                                                        )
                                                        setTimeout(() => {
                                                            let a = body.children.Download_
                                                            a.click()
                                                            a.remove()
                                                        }, 100);
                                                    }
                                                }, "Download")
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        createElement('div', { 
                            className: 'preview_wrapper',
                            child: [
                                createElement('iframe', {
                                    id: 'preview',
                                    src: `/assets/themepreview/`,
                                    style: 'width: 100%; border: none; height: calc(100vh - 53px); position: sticky; top: 0;'
                                })
                            ]
                        })
                    ] : []
                }),
                createElement('div', {
                    child: location.pathname === '/discord/snippets/' ? [
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
                    ]  : []
                })
            ]
        }), body.children[0])
        root = body.children.root
        nav = root.children[0]
        main = root.children[1]
        layer = root.children[2]
        if (location.pathname === '/discord/snippets/') {
            hljs.highlightAll()
        }
        // Dropdowns
        for (const ele of document.querySelectorAll('.dropdown')) {
            ele.addEventListener('click', () => {
                // People do the unthinkable
                if (ele.classList.contains('open')) {
                    ele.classList.remove('open')
                    if (document.getElementById('menu')) {
                        document.getElementById('menu').remove()
                        document.getElementById('menu').nextSibling.remove()
                    }
                } else {
                    ele.classList.add('open')
                    layer.appendChild(createElement('div', {
                        id: "menu",
                        tabindex: 1,
                        child: ele.id == "Discord" ? [
                            createElement('a', {href: "/discord/snippets/"}, "Snippets"),
                            createElement('a', {href: "/discord/theme-maker/", hidden: true}, "Theme maker"),
                            createElement('a', {href: "/discord/bd-meta/"}, "BD Meta maker")
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
                            window.onscroll = () => {}
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
    window.addEventListener("hashchange", () => {
        root.remove()
        Render()
    }, false);
    // Snippets page
    html.setAttribute('lang', navigator.languages[1])
    html.setAttribute('pathname', location.pathname)
})()
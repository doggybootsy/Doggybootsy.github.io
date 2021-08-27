(()=>{
    setTimeout(() => {
        // Emojis
        for (const emoji of document.querySelectorAll('.emoji')) {
            emoji.addEventListener('click', () => {
                const emoji_popup = document.createElement('div')
                emoji_popup.id = 'popout_hash'
                emoji_popup.classList.add('layer-v9HyYc')
                emoji_popup.innerHTML = emoji.src === 'https://cdn.discordapp.com/emojis/750880959242436780.png?v=1' ? `<div class="animatorRight-3i_YPs translate-2dAEQ6 didRender-33z1u8"><div class="popoutContainer-1MXdqN popoutContent-33P_eV"><div class="emojiSection-3Fb9ix"><div class="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6" style="flex: 1 1 auto;"><img src="https://cdn.discordapp.com/emojis/750880959242436780.png?v=1" draggable="false" class="emoji primaryEmoji-3LinDq jumboable"><div class="flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyCenter-3D2jYp alignStretch-DpGPf3 noWrap-3jynv6 truncatingText-18osv_" style="flex: 1 1 auto;"><div class="colorStandard-2KCXvj size16-1P40sf emojiName-27Bjxw"><div class="overflow-WK9Ogt">:virus:</div></div><div class="colorStandard-2KCXvj size14-e6ZScH">This emoji is from one of your servers. Type its name in the chat bar to use it.</div></div></div></div><div class="guildSection-1EoFKd"><h5 class="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ guildTitle-2IliYu">This emoji is from</h5><div class="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6" style="flex: 1 1 auto;"><svg width="32" height="32" viewBox="0 0 32 32"><foreignObject x="0" y="0" width="32" height="32" overflow="visible" mask="url(#svg-mask-squircle)"><div class="" role="button" tabindex="0"><img src="https://cdn.discordapp.com/icons/705908350218666117/2166d5958977734252175ca67e4728ed.webp?size=32" alt="" class="guildIcon-1zxZMV"> :</div></foreignObject></svg><div class="flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6 truncatingText-18osv_" style="flex: 1 1 auto;"><div class="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6" style="flex: 1 1 auto;"><div class="truncatingText-18osv_" role="button" tabindex="0"><h3 class="guildName-nBoMcU base-1x0h_U size16-1P40sf"><div class="overflow-WK9Ogt">bingus</div></h3></div></div><div class="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6" style="flex: 1 1 auto;"><div class="colorHeaderSecondary-3Sp3Ft size12-3cLvbJ">Private server</div></div></div></div></div></div></div>` : '<div class="animatorRight-3i_YPs translate-2dAEQ6 didRender-33z1u8"><div class="popoutContainer-1MXdqN popoutContent-33P_eV"><div class="emojiSection-3Fb9ix"><div class="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6" style="flex: 1 1 auto;"><img src="https://cdn.discordapp.com/emojis/755114711565074443.png?v=1" draggable="false" class="emoji primaryEmoji-3LinDq jumboable"><div class="flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyCenter-3D2jYp alignStretch-DpGPf3 noWrap-3jynv6 truncatingText-18osv_" style="flex: 1 1 auto;"><div class="colorStandard-2KCXvj size16-1P40sf emojiName-27Bjxw"><div class="overflow-WK9Ogt">:zere_cube_spin~1:</div></div><div class="colorStandard-2KCXvj size14-e6ZScH">This emoji is from one of your servers. Type its name in the chat bar to use it.</div></div></div></div><div class="guildSection-1EoFKd"><h5 class="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ guildTitle-2IliYu">This emoji is from</h5><div class="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6" style="flex: 1 1 auto;"><svg width="32" height="32" viewBox="0 0 32 32"><foreignObject x="0" y="0" width="32" height="32" overflow="visible" mask="url(#svg-mask-squircle)"><div class="" role="button" tabindex="0"><img src="https://cdn.discordapp.com/icons/538759280057122817/22db4d5a52d731f3b14729c079eac801.webp?size=32" alt="" class="guildIcon-1zxZMV"> :</div></foreignObject></svg><div class="flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6 truncatingText-18osv_" style="flex: 1 1 auto;"><div class="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6" style="flex: 1 1 auto;"><div class="truncatingText-18osv_" role="button" tabindex="0"><h3 class="guildName-nBoMcU base-1x0h_U size16-1P40sf"><div class="overflow-WK9Ogt">Powercord</div></h3></div></div><div class="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6" style="flex: 1 1 auto;"><div class="colorHeaderSecondary-3Sp3Ft size12-3cLvbJ">Private server</div></div></div></div></div></div></div>'
                if (document.querySelector(`.layer-v9HyYc`)) document.querySelector(`.layer-v9HyYc`).remove()
                document.querySelectorAll('.layerContainer-yqaFcK')[1].appendChild(emoji_popup)
                let amount = 0
                function event() {
                    if (amount == 0) amount++
                    else {
                        document.querySelector('.app-1q1i1E').removeEventListener("click", event)
                        emoji_popup.remove()
                    }
                }
                document.querySelector('.app-1q1i1E').addEventListener('click', event)
                emoji_popup.style = emoji.src === 'https://cdn.discordapp.com/emojis/750880959242436780.png?v=1' ? `position: absolute; top: ${emoji.getBoundingClientRect().y - (emoji_popup.offsetHeight/2) + 12}px; left: ${emoji.getBoundingClientRect().x + emoji_popup.offsetWidth - 233}px;` : `position: absolute; top: ${emoji.getBoundingClientRect().y - (emoji_popup.offsetHeight/2) + 12}px; left: ${emoji.getBoundingClientRect().x + emoji_popup.offsetWidth - 260}px;`
            })
        }
        // Status
        let status = 2
        document.querySelector('.avatarWrapper-2yR4wp').addEventListener('click', () => {
            let rect = document.querySelector('.mask-1l8v16>rect')
            if (status === 1) {
                rect.style.fill = "hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)"
                rect.style.mask = "url(#svg-mask-status-online)"
            }
            if (status === 2) {
                rect.style.fill = "hsl(38, calc(var(--saturation-factor, 1) * 95.7%), 54.1%)"
                rect.style.mask = "url(#svg-mask-status-idle)"
            }
            if (status === 3) {
                rect.style.fill = "hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%)"
                rect.style.mask = "url(#svg-mask-status-dnd)"
            }
            if (status === 4) {
                rect.style.fill = "hsl(262, calc(var(--saturation-factor, 1) * 46.8%), 39.8%)"
                rect.style.mask = "url(#svg-mask-status-streaming)"
            }
            if (status === 5) {
                rect.style.fill = "hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)"
                rect.style.mask = "url(#svg-mask-status-offline)"
                status = 0
            }
            status++
        })
        // Sprite
        var sprite_scale = 0;
        var sprite_transfrom_interval;
        const GenerateRandomSprite = () => {
            const level = Math.floor(Math.random() * 5)
            const width = level === 4 ? (Math.floor((Math.random() * 6)) * 22) : (Math.floor((Math.random() * 11) ) * 22)
            return width === 0 && level === 0 ? '0px 0px' : `-${width}px -${level * 22}px`
        }
        const sprite = document.querySelector('.sprite-2iCowe')
        sprite.addEventListener('mouseover', () => {
            clearInterval(sprite_transfrom_interval);
            sprite_transfrom_interval = setInterval(transfrom, 5);
            function transfrom() {
                if (sprite_scale == 14) {
                    clearInterval(sprite_transfrom_interval)
                } else {
                    sprite_scale++
                    sprite.style.transform = `scale(1.${sprite_scale.toString().length === 1 ? `0${sprite_scale}` : sprite_scale})`
                }
            }
            sprite.style.filter = `grayscale(0%)`
            sprite.style.backgroundPosition = GenerateRandomSprite()
        })
        sprite.addEventListener('mouseout', () => {
            clearInterval(sprite_transfrom_interval);
            sprite_transfrom_interval = setInterval(transfrom, 5);
            function transfrom() {
                if (sprite_scale == 0) {
                    clearInterval(sprite_transfrom_interval)
                } else {
                    sprite_scale--
                    sprite.style.transform = `scale(1.${sprite_scale.toString().length === 1 ? `0${sprite_scale}` : sprite_scale})`
                }
            }
            sprite.style.filter = "grayscale(100%)"
        })
        // deafen and mute
        document.querySelector('[aria-label="Deafen"]').addEventListener('click', () => document.querySelector('[aria-label="Deafen"]').children[0].children[0].innerHTML = document.querySelector('[aria-label="Deafen"]').children[0].children[0].children.length === 1 ? '<path d="M6.16204 15.0065C6.10859 15.0022 6.05455 15 6 15H4V12C4 7.588 7.589 4 12 4C13.4809 4 14.8691 4.40439 16.0599 5.10859L17.5102 3.65835C15.9292 2.61064 14.0346 2 12 2C6.486 2 2 6.485 2 12V19.1685L6.16204 15.0065Z" fill="currentColor"></path><path d="M19.725 9.91686C19.9043 10.5813 20 11.2796 20 12V15H18C16.896 15 16 15.896 16 17V20C16 21.104 16.896 22 18 22H20C21.105 22 22 21.104 22 20V12C22 10.7075 21.7536 9.47149 21.3053 8.33658L19.725 9.91686Z" fill="currentColor"></path><path d="M3.20101 23.6243L1.7868 22.2101L21.5858 2.41113L23 3.82535L3.20101 23.6243Z" class="strikethrough-1n4ekb" fill="currentColor"></path>' : '<path d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z" fill="currentColor"></path>')
        document.querySelector('[aria-label="Mute"]').addEventListener('click', () => document.querySelector('[aria-label="Mute"]').children[0].children[0].innerHTML = document.querySelector('[aria-label="Mute"]').children[0].children[0].children.length === 2 ? '<path d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z" fill="currentColor"></path><path d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z" fill="currentColor"></path><path d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z" fill="currentColor"></path><path d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z" class="strikethrough-1n4ekb" fill="currentColor"></path>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z" fill="currentColor"></path>')
        // Popups
        for (const username of document.querySelectorAll('.message-2qnXI6 .username-1A8OIy')) {
            for (const avatar of document.querySelectorAll('.message-2qnXI6 .avatar-1BDn8e')) {
                function popup(e) {
                    let user = 'Doggybootsy'
                    if (e.target.tagName == 'SPAN') user = 'Doggybootsy'
                    else if (e.target.tagName == 'IMG') user = 'Doggybootsy'
                    const popout = document.createElement('div')
                    popout.id = 'popout_hash'
                    popout.classList.add('layer-v9HyYc')
                    popout.innerHTML = user == 'Doggybootsy' ? `<div class="animatorRight-3i_YPs translate-2dAEQ6 didRender-33z1u8"><div aria-label="DoggyBootsy" class="userPopout-xaxa6l" role="dialog" tabindex="-1" aria-modal="true" data-user-id="515780151791976453" style="width: 300px; --user-background:url(https\:\/\/i\.imgur\.com\/dkndkV8\.jpg) !important;"><div class="headerNormal-3KXFBt"><div class="banner-2QYc2d popoutBannerPremium-1n96gg bannerPremium-2hSAwz" style="background-image: url(&quot;https://cdn.discordapp.com/banners/515780151791976453/a_1c029e1136f246f5c7f18515e18d43b1.png?size=512&quot;); background-color: rgb(0, 84, 255);"><div class="bannerOverlayPopout-1clJ34 bannerOverlay-1uIerX" role="button" tabindex="0"><svg class="pencilIcon-XSi-VE" aria-hidden="false" width="18" height="18" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor"></path></svg></div></div></div><div class="avatarWrapperNormal-26WQIb avatarWrapper-3r9PdD avatarPositionPremium-3We5Ho clickable-1rcWFe" role="button" tabindex="0"><div class="avatarWrapper StatusEverywhere-avatar-userPopout" data-status="online" data-mobile="false" data-typing="false" data-user-id="515780151791976453" style="--status-color:#3BA55D;"><div class="StatusEverywhere-avatar-chatAvatar wrapper-3t9DeA pointer-2zj-Tb" tabindex="0" aria-hidden="false" role="button" data-user-id="515780151791976453" style="width: 80px; height: 80px;"><svg width="92" height="80" viewBox="0 0 92 80" class="mask-1l8v16 svg-2V3M55" aria-hidden="true"><foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-status-round-80)"><div class="avatarStack-2Dr8S9"><img src="https://cdn.discordapp.com/avatars/515780151791976453/6cf4fb18e825ead26a821e51aa2ab594.png?size=128" alt=" " class="avatar-VxgULZ" aria-hidden="true"></div></foreignObject><rect width="16" height="16" x="60" y="60" fill="#3BA55D" mask="url(#svg-mask-status-online)" class="pointerEvents-2zdfdO"></rect></svg></div></div><svg width="80" height="80" class="avatarHint-2A3RNb" viewBox="0 0 80 80"><foreignObject x="0" y="0" width="80" height="80" overflow="visible" mask="url(#svg-mask-avatar-status-round-80)"><div class="avatarHintInner-1TvA8u">View Profile</div></foreignObject></svg></div><div class="headerTop-3vNv-a"><div class="profileBadges-ohc0Vu container-q03LZO" aria-label="User Badges" role="group"><div class="clickable-17BDii" aria-label="HypeSquad Brilliance" role="button" tabindex="0"><img alt=" " aria-hidden="true" src="/assets/ec8e92568a7c8f19a052ef42f862ff18.svg" class="profileBadge22-LJmn9o profileBadge-2niAfJ desaturate-qhyunI"></div><div class="clickable-17BDii" aria-label="Subscriber since Jun 21, 2021" role="button" tabindex="0"><img alt=" " aria-hidden="true" src="/assets/24d05f3b46a110e538674edbac0db4cd.svg" class="profileBadge22-LJmn9o profileBadge-2niAfJ desaturate-qhyunI"></div><div class="clickable-17BDii" aria-label="Server boosting since Jun 21, 2021" role="button" tabindex="0"><img alt=" " aria-hidden="true" src="/assets/22f99ed6e34eaca48950254c70f8fe8d.svg" class="profileBadge22-LJmn9o profileBadge-2niAfJ desaturate-qhyunI"></div></div><div class="headerText-1vVs-U"><div class="headerTagNoNickname-3qrd77 headerTag-3GFl76 nameTag-m8r81H"><span class="username-2b1r56 headerTagUsernameNoNickname-2-Y5Ct headerTagUsernameBase-1NqrY5">DoggyBootsy</span><span class="headerTagDiscriminatorNoNickname-D-AYUN discrimBase-24vY8o">#0001</span></div><div class="setIdentityLink-1t8Ahd" role="button" tabindex="0"><a class="colorLink-2vG20E size14-e6ZScH">Set a Server Nickname</a></div></div></div><div class="body-3HBlXn thin-1ybCId scrollerBase-289Jih" dir="ltr" style="overflow: hidden scroll; padding-right: 9px;"><div class="divider-ewBQKj"></div><div class="aboutMeSection-1Fw5Ia"><h3 class="aboutMeTitle-1IYtPE base-1x0h_U size12-3cLvbJ muted-3-7c5L uppercase-3VWUQ9">About Me</h3><div class="aboutMeBody-3GuvKk markup-2BOw-j clamped-IwJfxR">I joined <span aria-label="Saturday, November 24, 2018 6:46 AM" class="timestamp-1Dd_pn">November 24, 2018</span>\n<strong>Website:</strong> \n<a class="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB" title="https://doggybootsy.github.io/" href="https://doggybootsy.github.io/" rel="noreferrer noopener" target="_blank" role="button" tabindex="0">https://doggybootsy.github.io/</a>\n<strong>BetterMediaPlayer:</strong> <a class="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB" title="https://github.com/unknown81311/BetterMediaPlayer" href="https://github.com/unknown81311/BetterMediaPlayer" rel="noreferrer noopener" target="_blank" role="button" tabindex="0">https://github.com/unknown81311/BetterMediaPlayer</a></div></div><div class="bodyInnerWrapper-26fQXj"><h3 class="bodyTitle-1ySSKn base-1x0h_U size12-3cLvbJ muted-3-7c5L uppercase-3VWUQ9">Role</h3><div class="root-3-B5F3 flex-1O1GKY wrap-ZIn9Iy rolesList-1geHY1" aria-label="Role" role="list" tabindex="0" data-list-id="roles-fca1745d-9a24-4662-9311-8b504583b511" aria-orientation="vertical"><div class="role-2irmRk flex-1O1GKY alignCenter-1dQNNs" aria-label="Remove role new role" tabindex="-1" role="option" data-list-item-id="roles-fca1745d-9a24-4662-9311-8b504583b511___863288963527081984" aria-selected="false" style="border-color: rgba(26, 188, 156, 0.6);"><div class="roleCircle-3xAZ1j flex-1O1GKY alignCenter-1dQNNs justifyCenter-3D2jYp desaturateUserColors-1gar-1" tabindex="-1" aria-hidden="true" role="button" style="background-color: rgb(26, 188, 156);"><svg class="roleRemoveIcon-2-TeGW" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg></div><div aria-hidden="true" class="roleName-32vpEy">new role</div></div><button aria-controls="popout_14909" aria-expanded="false" class="addButton-pcyyf6 actionButton-VzECiy role-2irmRk flex-1O1GKY alignCenter-1dQNNs justifyCenter-3D2jYp" aria-label="Add role" type="button" role="listitem" data-list-item-id="roles-fca1745d-9a24-4662-9311-8b504583b511___overflow-add-roles-515780151791976453" tabindex="-1"><svg class="addButtonIcon-1NMJ8u" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"></path></svg></button></div> <h3 class="bodyTitle-1ySSKn base-1x0h_U size12-3cLvbJ muted-3-7c5L uppercase-3VWUQ9">Note</h3><div class="note-1oo11U"><textarea placeholder="Click to add a note" maxlength="256" autocorrect="off" class="textarea-2r0oV8 inputDefault-_djjkz input-cIJ7To scrollbarGhostHairline-1mSOM1 scrollbar-3dvm_9" style="height: 35px;"></textarea></div></div><div aria-hidden="true" style="position: absolute; pointer-events: none; min-height: 0px; min-width: 1px; flex: 0 0 auto; height: 14px;"></div></div></div></div>` : ``
                    document.querySelectorAll('.layerContainer-yqaFcK')[1].appendChild(popout)
                }
                username.addEventListener('click', popup)
                avatar.addEventListener('click', popup)
            }
        }
    }, 100);
})()
function navigation(){
    let e = document.querySelector('.navigation').classList
    e.toggle('closed')
}
function copyToClipboard_hideblockedmessages_both() {
    const str = document.querySelector('#hideblockedmessages .code[aria-type="both"]').innerText;
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
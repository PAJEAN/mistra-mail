window.onload = () => {
    let btn_app = document.querySelector('#open-app');
    btn_app.addEventListener('click', () => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {type: "reformulate", text: ''}
            ).catch(error => { console.log(error) });
        });
    });
    let btn_option = document.querySelector('#open-option');
    btn_option.addEventListener('click', () => {
        // @ts-ignore
        chrome.runtime.sendMessage({ action: 'open-options' });
    });
};
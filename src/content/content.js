// @ts-check
console.log("✅ Content file loaded");

/**
 * Listen sent message.
 */
// @ts-ignore
chrome.runtime.onMessage.addListener(
    /**
     * Send request to MistralAi and insert the answer below the selected text.
     * @param {object} request
     */
    async (request) => {        
        if (request.type === "reformulate") {
            let app = document.querySelector(`#${TAG_IDS.app_main_id}`);
            if (!app) {
                let my_tag = new MyCustomElement();
                my_tag.addSelectedText(request.text);
                document.body.appendChild(my_tag.tag);
            }
            
        }
    }
);
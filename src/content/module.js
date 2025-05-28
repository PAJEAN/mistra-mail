// @ts-check
console.log("✅ Module file loaded");

const TAG_IDS = {
    app_container: 'app-container',
    app_main_id: 'app-main-id',
    app_maximize_btn: 'app-maximize-btn',
    app_minimize_btn: 'app-minimize-btn',
    close_btn: 'close-btn',
    minimized_app_container: 'minimized-app-container',
    input_textarea: 'input-textarea',
    option_btn: 'option-btn',
    output_textarea: 'output-textarea',
    resize_area: 'resize-area',
    send_btn: 'send-btn',
    tone_select: 'tone-select',
    translate_select: 'translate-select',
}

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`
<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
    
    /* Positioning */
    /* Display & Box Model */
    /* Color */  
    /* Text */
    /* Other */

    :root {
        --background-color: #e6e7ee;
        --border-color: #d1d9e6;
        --box-shadow-inset-color: #c5c5c5;
        --radius: 0.55rem;
        --text-color: #44476a;
    }
    * {
        box-sizing: border-box;
        font-family: "Open Sans", sans-serif;       
    }

    /* Main sections */
    main {
        /* Positioning */
        position: fixed;
        bottom: 5%;
        right: 5%;
        /* Display & Box Model */
        border: 1px solid var(--background-color);
        border-radius: var(--radius);
        box-shadow: rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        padding: 1.25rem 1rem;
        height: 50vh;
        width: 75vw;
        /* Color */  
        background-color: var(--background-color);
        /* Text */
        font-family: "Open Sans", sans-serif;
    }
    .minimized-app {
        display: none;
    }
    .app {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
    }

    /* Sub sections */
    .panel-top {
        /* Display & Box Model */
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* Text */
        font-size: calc(1.55rem);
        font-weight: 400;
        text-transform: uppercase;        
    }    
    .icon-panel-top {
        display: flex;
        gap: 0.55rem;
    }
    .resize-icon {
        /* Positioning */
        position: absolute;
        left: 0.1rem;
        top: 0.1rem;
        /* Display & Box Model */
        height: 1.5rem;
        width: 1.5rem;
        /* Other */
        cursor: se-resize;
    }
    .option-panel {
        display: flex;
        gap: 1rem;
    }
    .option-panel label {
        /* Display & Box Model */
        width: 100%;
        /* Color */  
        color: var(--text-color);
        /* Text */
        font-weight: 300;
    }
    .option-panel select {
        /* Positioning */
        /* Display & Box Model */
        background-color: var(--background-color);
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        box-shadow: 6px 6px 12px var(--box-shadow-inset-color), -6px -6px 12px #ffffff;
        margin-top: 0.4rem;
        padding: 0.6rem .75rem;
        width: 100%;
        /* Color */  
        color: var(--text-color);
        /* Text */
        font-size: 1rem;
    }
    .text-panel {
        flex-grow: 1;
    }
    .text-panel textarea {
        /* Display & Box Model */
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        box-shadow: inset 2px 2px 5px var(--box-shadow-inset-color), inset -3px -3px 7px #fff;
        outline: none;
        padding: .6rem .75rem;
        min-height: 50%;
        width: 100%;
        /* Color */  
        background-color: var(--background-color);
        /* Text */
        font-weight: 300;
        /* Other */
        resize: none;
    }

    /* Neomorphism */
    .text-btn, .icon-btn {
        /* Display & Box Model */
        border: 1px solid var(--border-color);
        box-shadow: 6px 6px 12px var(--box-shadow-inset-color), -6px -6px 12px #ffffff;
        /* Color */  
        background-color: var(--background-color);
        color: var(--text-color);
        /* Other */
        cursor: pointer;
    }
    .text-btn {
        /* Display & Box Model */
        border-radius: var(--radius);
        padding: 0.7rem 1.3rem;
        /* Text */
        font-size: 1rem;
    }
    .icon-btn {
        /* Display & Box Model */
        border-radius: 50%;
        height: 2.25rem;
        width:2.25rem;
        /* Text */
        font-size: 1rem;
    }
    .text-btn:active, .icon-btn:active {
        box-shadow: inset 4px 4px 12px var(--box-shadow-inset-color), inset -4px -4px 12px #ffffff;
        color: #666;
    }
</style>

<main>
    <section id="${TAG_IDS.minimized_app_container}" class="minimized-app">
        <div>
            <button id="${TAG_IDS.app_maximize_btn}" class="icon-btn" title="Open Mistra'Mail">🗖</button>
        </div>
    </section>

    <section id="${TAG_IDS.app_container}" class="app">

        <div id="${TAG_IDS.resize_area}" class="resize-icon">
            <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" fill="#000000" class="bi bi-filter" transform="rotate(-45)matrix(-1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path> </g></svg>
        </div>

        <div class="panel-top">
            <div>Mistra'mail</div>
            <div class="icon-panel-top">
                <button id="${TAG_IDS.option_btn}" class="icon-btn" title="Option">⚙️</button>
                <button id="${TAG_IDS.app_minimize_btn}" class="icon-btn" title="Minimize">🗕</button>
                <button id="${TAG_IDS.close_btn}" class="icon-btn" title="Close">❌</button>
            </div>
        </div>

        <div class="option-panel">
            <label>Ton
                <select id="${TAG_IDS.tone_select}">
                    <option value="neutral">Neutral</option>
                    <option value="formal">Formal</option>
                    <option value="familiar">Familiar</option>
                </select>
            </label>
            <label>Translate
                <select id="${TAG_IDS.translate_select}">
                    <option value="">Select a language...</option>
                    <option value="anglais">English</option>
                    <option value="français">French</option>
                    <option value="espagnol">Spanish</option>
                </select>
            </label>
        </div>

        <div class="text-panel">
            <textarea name="" id="${TAG_IDS.input_textarea}"></textarea>
            <textarea name="" id="${TAG_IDS.output_textarea}"></textarea>
        </div>

        <button id="${TAG_IDS.send_btn}" class="text-btn">Send</button>
    </section>
</main>
`;


class MyCustomElement {
    #height;
    #initial_height;
    #initial_width;
    #main_tag;
    #minimum_app_height;
    #minimum_app_width;
    #shadow;
    #tag;
    #width;

    constructor() {
        this.#tag = document.createElement('div');
        this.#tag.id = TAG_IDS.app_main_id;
        // Add a shadow root.
        this.#shadow = this.#tag.attachShadow({ mode: 'open' });
        this.#shadow.appendChild(TEMPLATE.content.cloneNode(true));
        // Main tag.
        this.#main_tag = /** @type {HTMLElement} */ (this.#shadow.querySelector('main'));
        // Config attributes.
        this.#initial_height = '50vh';
        this.#initial_width = '400px';
        this.#minimum_app_height = 200;
        this.#minimum_app_width = 200;
        
        this.#height = 0;
        this.#width = 0;

        this.#init();
    }

    get tag() { return this.#tag; }
    get tone() {
        let tone = /** @type {HTMLSelectElement} */ (this.#shadow.querySelector(`#${TAG_IDS.tone_select}`));
        return tone.value;
    }
    get language() {
        let language = /** @type {HTMLSelectElement} */ (this.#shadow.querySelector(`#${TAG_IDS.translate_select}`));
        return language.value;
    }
    get text() {
        let text = /** @type {HTMLTextAreaElement} */ (this.#shadow.querySelector(`#${TAG_IDS.input_textarea}`));
        console.log(text);
        
        return text.value;
    }

    #init() {
        this.#main_tag.style.width = this.#initial_width;
        this.#main_tag.style.height = this.#initial_height;

        this.#initCloseBtn();
        this.#initMiniMaxiBtn();
        this.#initOptionBtn();
        this.#initResizeArea();
        this.#initSendBtn();
    }

    #initCloseBtn() {
        let close_btn = this.#shadow.querySelector(`#${TAG_IDS.close_btn}`);
        close_btn?.addEventListener('click', () => {
            this.#tag.parentNode?.removeChild(this.#tag);
        });
    }

    #initMiniMaxiBtn() {
        let minimize_btn = this.#shadow.querySelector(`#${TAG_IDS.app_minimize_btn}`);
        let maximize_btn = this.#shadow.querySelector(`#${TAG_IDS.app_maximize_btn}`);
        /** @type {HTMLElement | null} */
        let app_container = this.#shadow.querySelector(`#${TAG_IDS.app_container}`);
        /** @type {HTMLElement | null} */
        let minimized_app_container = this.#shadow.querySelector(`#${TAG_IDS.minimized_app_container}`);
        minimize_btn?.addEventListener('click', () => {
            if (app_container && minimized_app_container) {
                app_container.style.display = 'none';
                minimized_app_container.style.display = 'block';

                this.#height = this.#main_tag.offsetHeight;
                this.#width = this.#main_tag.offsetWidth;

                this.#main_tag.style.width = 'fit-content';
                this.#main_tag.style.height = 'fit-content';
            }
        });
        
        maximize_btn?.addEventListener('click', () => {
            if (app_container && minimized_app_container) {
                app_container.style.display = 'flex';
                minimized_app_container.style.display = 'none';

                this.#main_tag.style.height = this.#height + 'px';
                this.#main_tag.style.width = this.#width + 'px';
            }
        });
    }

    #initOptionBtn() {
        this.#shadow.querySelector(`#${TAG_IDS.option_btn}`)?.addEventListener('click', () => {
            // @ts-ignore
            chrome.runtime.sendMessage({ action: 'open-options' });
        });
    }

    #initResizeArea() {
        const resize_area = /** @type {HTMLElement} */ (this.#shadow.querySelector(`#${TAG_IDS.resize_area}`));

        resize_area?.addEventListener('mousedown', (e) => {
            e.preventDefault();

            let startX = e.clientX;
            let startY = e.clientY;
            let startWidth = this.#main_tag.offsetWidth;
            let startHeight = this.#main_tag.offsetHeight;

            /**
             * @param {MouseEvent} e 
             */
            let doDrag = (e) => {
                let dx = startX - e.clientX;
                let dy = startY - e.clientY;

                let newWidth = startWidth + dx;
                let newHeight = startHeight + dy;

                // Appliquer des tailles minimales si nécessaire
                if (newWidth > this.#minimum_app_width) {
                    this.#main_tag.style.width = newWidth + 'px';
                }
                if (newHeight > this.#minimum_app_height) {
                    this.#main_tag.style.height = newHeight + 'px';
                }
            }

            let stopDrag = () => {
                window.removeEventListener('mousemove', doDrag);
                window.removeEventListener('mouseup', stopDrag);
            }

            window.addEventListener('mousemove', doDrag);
            window.addEventListener('mouseup', stopDrag);
        });
    }

    #initSendBtn() {
        let send_btn = this.#shadow.querySelector(`#${TAG_IDS.send_btn}`);
        send_btn?.addEventListener('click', async () => {
            // Send request to Mistral.
            let reformulated_text = await this.SendMistralRequest();
            let output_textarea = /** @type {HTMLTextAreaElement} */ (this.#shadow.querySelector(`#${TAG_IDS.output_textarea}`));
            output_textarea.value = reformulated_text;
        });
    }

    #systemPrompt() {
        let prompt = ["Tu es un assistant qui reformule et corrige les mails. Tu dois proposer un objet au mail."];
        switch (this.tone) {
            case 'neutral':
                prompt.push('Utilise un ton neutre.');
                break;
            case 'formal':
                prompt.push('Utilise un ton formel.');
                break;
            case 'familiar':
                prompt.push('Utilise un ton familier.');
                break;
        }
        let language = this.language;
        if (language !== '') {
            prompt.push(`Traduis les mails en ${language}.`);
        }
        return prompt.join(' ');
    }

    /**
     * 
     * @param {string} text
     */
    addSelectedText(text) {
        let textarea = /** @type {HTMLTextAreaElement} */ (this.#shadow.querySelector(`#${TAG_IDS.input_textarea}`));
        textarea.value = text;
    }

    /**
     * Send a request to MistralAi model to rephrase and correct a text.
     * @returns {Promise<string>}
     */
    async SendMistralRequest() {
        /** @type {object} */
        // @ts-ignore
        let data = await chrome.storage.local.get('apiKey');
            
        if (!data.apiKey) {
            return '[No api key found, you must enter your key in the extension options ⚙️]';
        }

        let api_key = data.apiKey;        

        try {
            let response = await fetch('https://api.mistral.ai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${api_key}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'mistral-large-latest',
                    messages: [
                        { role: 'system', content: this.#systemPrompt() },
                        { role: 'user', content: this.text }
                    ]
                })
            });

            let data = await response.json();

            // let response = {ok: 200};
            // let data = {choices: [{message: {content: "OK c'est mon texte!"}}]};



            if (response.ok) {
                let reformulated_text = data.choices?.[0]?.message?.content;
                return reformulated_text === undefined ? '[An error has occurred]': reformulated_text;
            } else {
                console.warn('API error messages :', data);
                return '[An error has occurred]';
            }
        } catch(error) {
            console.error("Network error or fetch failure :", error);
            return '[An error has occurred]';
        }
    }
}
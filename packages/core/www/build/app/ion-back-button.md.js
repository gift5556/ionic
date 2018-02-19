/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class BackButton {
    constructor() {
        /**
         * The text property is used to provide custom text for the back button while using the
         * default look-and-feel
         */
        this.text = null;
    }
    componentWillLoad() {
        this.custom = this.el.childElementCount > 0;
    }
    render() {
        const backButtonIcon = this.config.get('backButtonIcon', 'arrow-back');
        const defaultBackButtonText = this.config.get('backButtonText', 'Back');
        const backButtonText = this.text || defaultBackButtonText;
        if (this.custom) {
            return (h("ion-nav-pop", null,
                h("slot", null)));
        }
        else {
            return (h("ion-nav-pop", null,
                h("button", { class: 'back-button-inner-default' },
                    h("span", { class: 'button-inner' },
                        h("ion-icon", { name: backButtonIcon, slot: 'start' }),
                        h("span", { class: 'button-text' }, backButtonText)),
                    this.mode === 'md' && h("ion-ripple-effect", null))));
        }
    }
    static get is() { return "ion-back-button"; }
    static get host() { return { "theme": "back-button" }; }
    static get properties() { return { "config": { "context": "config" }, "custom": { "state": true }, "el": { "elementRef": true }, "mode": { "type": "Any", "attr": "mode" }, "text": { "type": String, "attr": "text" } }; }
    static get style() { return ".back-button {\n  display: none;\n}\n\n.back-button.show-back-button {\n  display: inline-block;\n}\n\n.back-button button {\n  text-align: center;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  position: relative;\n  z-index: 0;\n  display: inline-block;\n  border: 0;\n  line-height: 1;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: top;\n  vertical-align: -webkit-baseline-middle;\n  transition: background-color, opacity 100ms linear;\n  font-kerning: none;\n  user-select: none;\n  contain: content;\n  font-smoothing: antialiased;\n  -webkit-font-smoothing: antialiased;\n}\n\n.back-button .button-inner {\n  display: flex;\n  flex-flow: row nowrap;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.back-button-text {\n  display: flex;\n  align-items: center;\n}\n\n.back-button-md .back-button-inner-default {\n  margin: 0 6px 0 0;\n  padding: 0 5px;\n  min-width: 44px;\n  height: 32px;\n  border: 0;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: var(--ion-toolbar-md-text-color, var(--ion-toolbar-text-color, #424242));\n  background-color: transparent;\n  box-shadow: none;\n}\n\n.back-button-md .back-button-inner-default.activated {\n  opacity: 0.4;\n}\n\n.back-button-md ion-icon {\n  padding-right: 0.3em;\n  margin: 0;\n  padding: 0 6px;\n  text-align: left;\n  text-align: start;\n  font-size: 24px;\n  font-weight: normal;\n  line-height: 0.67;\n  pointer-events: none;\n}\n\n.enable-hover .back-button-md:hover {\n  color: var(--ion-toolbar-md-text-color, var(--ion-toolbar-text-color, #424242));\n}"; }
    static get styleMode() { return "md"; }
}

class NavPop {
    pop() {
        const nav = this.element.closest('ion-nav');
        if (nav) {
            return nav.pop();
        }
        return Promise.resolve(null);
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-nav-pop"; }
    static get properties() { return { "element": { "elementRef": true } }; }
}

export { BackButton as IonBackButton, NavPop as IonNavPop };

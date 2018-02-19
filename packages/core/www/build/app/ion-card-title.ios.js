/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class CardTitle {
    hostData() {
        return {
            'role': 'heading',
            'aria-level': '2'
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-card-title"; }
    static get host() { return { "theme": "card-title" }; }
    static get properties() { return { "color": { "type": String, "attr": "color" }, "mode": { "type": "Any", "attr": "mode" } }; }
    static get style() { return "ion-card-title {\n  position: relative;\n  display: block;\n}\n\n.card-title-ios {\n  margin: 0;\n  padding: 0;\n  display: block;\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: var(--ion-text-ios-color, var(--ion-text-color, #000));\n}\n\n.card-ios-primary .card-title-ios {\n  color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n}\n\n.card-ios-primary .card-title-ios-primary {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-primary .card-title-ios-secondary {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-primary .card-title-ios-tertiary {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-primary .card-title-ios-success {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-primary .card-title-ios-warning {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-primary .card-title-ios-danger {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-primary .card-title-ios-light {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-primary .card-title-ios-medium {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-primary .card-title-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-title-ios-primary {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-ios-secondary .card-title-ios {\n  color: var(--ion-color-ios-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n}\n\n.card-ios-secondary .card-title-ios-primary {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-secondary .card-title-ios-secondary {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-secondary .card-title-ios-tertiary {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-secondary .card-title-ios-success {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-secondary .card-title-ios-warning {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-secondary .card-title-ios-danger {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-secondary .card-title-ios-light {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-secondary .card-title-ios-medium {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-secondary .card-title-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-title-ios-secondary {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-ios-tertiary .card-title-ios {\n  color: var(--ion-color-ios-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n}\n\n.card-ios-tertiary .card-title-ios-primary {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-tertiary .card-title-ios-secondary {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-tertiary .card-title-ios-tertiary {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-tertiary .card-title-ios-success {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-tertiary .card-title-ios-warning {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-tertiary .card-title-ios-danger {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-tertiary .card-title-ios-light {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-tertiary .card-title-ios-medium {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-tertiary .card-title-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-title-ios-tertiary {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-ios-success .card-title-ios {\n  color: var(--ion-color-ios-success-contrast, var(--ion-color-success-contrast, #fff));\n}\n\n.card-ios-success .card-title-ios-primary {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-success .card-title-ios-secondary {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-success .card-title-ios-tertiary {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-success .card-title-ios-success {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-success .card-title-ios-warning {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-success .card-title-ios-danger {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-success .card-title-ios-light {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-success .card-title-ios-medium {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-success .card-title-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-title-ios-success {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-ios-warning .card-title-ios {\n  color: var(--ion-color-ios-warning-contrast, var(--ion-color-warning-contrast, #000));\n}\n\n.card-ios-warning .card-title-ios-primary {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-warning .card-title-ios-secondary {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-warning .card-title-ios-tertiary {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-warning .card-title-ios-success {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-warning .card-title-ios-warning {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-warning .card-title-ios-danger {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-warning .card-title-ios-light {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-warning .card-title-ios-medium {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-warning .card-title-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-title-ios-warning {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-ios-danger .card-title-ios {\n  color: var(--ion-color-ios-danger-contrast, var(--ion-color-danger-contrast, #fff));\n}\n\n.card-ios-danger .card-title-ios-primary {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-danger .card-title-ios-secondary {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-danger .card-title-ios-tertiary {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-danger .card-title-ios-success {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-danger .card-title-ios-warning {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-danger .card-title-ios-danger {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-danger .card-title-ios-light {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-danger .card-title-ios-medium {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-danger .card-title-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-title-ios-danger {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-ios-light .card-title-ios {\n  color: var(--ion-color-ios-light-contrast, var(--ion-color-light-contrast, #000));\n}\n\n.card-ios-light .card-title-ios-primary {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-light .card-title-ios-secondary {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-light .card-title-ios-tertiary {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-light .card-title-ios-success {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-light .card-title-ios-warning {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-light .card-title-ios-danger {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-light .card-title-ios-light {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-light .card-title-ios-medium {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-light .card-title-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-title-ios-light {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-ios-medium .card-title-ios {\n  color: var(--ion-color-ios-medium-contrast, var(--ion-color-medium-contrast, #000));\n}\n\n.card-ios-medium .card-title-ios-primary {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-medium .card-title-ios-secondary {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-medium .card-title-ios-tertiary {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-medium .card-title-ios-success {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-medium .card-title-ios-warning {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-medium .card-title-ios-danger {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-medium .card-title-ios-light {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-medium .card-title-ios-medium {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-medium .card-title-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-title-ios-medium {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-ios-dark .card-title-ios {\n  color: var(--ion-color-ios-dark-contrast, var(--ion-color-dark-contrast, #fff));\n}\n\n.card-ios-dark .card-title-ios-primary {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-dark .card-title-ios-secondary {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-dark .card-title-ios-tertiary {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-dark .card-title-ios-success {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-dark .card-title-ios-warning {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-dark .card-title-ios-danger {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-dark .card-title-ios-light {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-dark .card-title-ios-medium {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-dark .card-title-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-title-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}"; }
    static get styleMode() { return "ios"; }
}

export { CardTitle as IonCardTitle };

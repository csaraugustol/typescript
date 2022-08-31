import { View } from './view.js';
export class MensagemView extends View {
    template(model, tipoAlerta) {
        return `
            <p class="alert ${tipoAlerta}">${model}</p>
        `;
    }
}

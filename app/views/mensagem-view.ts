import { View } from './view.js';

export class MensagemView extends View<string> {

    protected template(model: string, tipoAlerta?: string): string {
        return `
            <p class="alert ${tipoAlerta}">${model}</p>
        `;
    }
}
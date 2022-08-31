export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        this.elemento = document.querySelector(seletor);
        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(model: T, corAlerta?: string): void {
        let template = this.template(model, corAlerta);

        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }

        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T, corAlerta: string): string
}
export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const retorno = metodoOriginal.apply(this, args);
        console.log(`
        Método ${propertyKey}
        Parâmetros ${JSON.stringify(args)}
        Retorno: ${JSON.stringify(retorno)}
        `);
        return retorno
    }

    return descriptor;
}
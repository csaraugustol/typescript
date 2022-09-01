import { Negociacao } from '../models/negociacao.js';
import { NegociacoesDoDia } from './../interfaces/negociacoes-dia';
export class NegociacoesService {
    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados').then(res => res.json()).then((dados: NegociacoesDoDia[]) => {
            return dados.map(dadoDia => {
                return new Negociacao(new Date(), dadoDia.vezes, dadoDia.montante)
            })
        })
    }
}
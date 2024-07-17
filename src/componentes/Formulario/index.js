import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {


    const [nome, setNome] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [score, setScore] = useState('');
    const [imagem, setImagem] = useState('');
    const [posicao, setPosicao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoJogadorCadastrado({
            nome,
            nacionalidade,
            score,
            imagem,
            posicao
        })
        setNome('')
        setNacionalidade('')
        setScore('')
        setImagem('')
        setPosicao('')
    }

    return (
        <section className = "formulario">
            <form onSubmit={aoSalvar}> 
                <h2>Preencha os dados para criar o card do Jogador</h2>
                <CampoTexto
                    obrigatorio = {true}
                    label = "Nome" 
                    placeholder = "Digite o nome do Jogador"
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio = {true} 
                    label = "Nacionalidade" 
                    placeholder="Digite a nacionalidade do Jogador"
                    valor = {nacionalidade}
                    aoAlterado = {valor => setNacionalidade(valor)}
                />
                <CampoTexto 
                    obrigatorio = {true} 
                    label = "Escore"
                    placeholder="Digite a pontuação do Jogador"
                    valor = {score}
                    aoAlterado = {valor => setScore(valor)}
                />
                <CampoTexto 
                    label = "Imagem" 
                    placeholder="Insira o card do Jogador"
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio = {true} 
                    label = "Posição" 
                    itens = {props.posicoes}
                    valor = {posicao}
                    aoAlterado = {valor => setPosicao(valor)}
                />
                <Botao>
                    Criar Botao
                </Botao>
                
            </form>
        </section>
    )

}

export default Formulario
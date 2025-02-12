import './Jogador.css'

const Jogador = ({nome, imagem, nacionalidade, score, corDeFundo}) => {
    return(
        <div className='jogador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{nacionalidade}</h5>
                <h5>{score}</h5>
            </div>
            
        </div>
    )
}

export default Jogador
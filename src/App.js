import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Posicao from './componentes/Posicao';
import Rodape from './componentes/Rodape';

function App() {

    const posicoes = [{
      nome:'Goleiro',
      corPrimaria:'#c30010',
      corSecundaria:'#f94449'
    },
    {
      nome:'Defensor',
      corPrimaria:'#430000',
      corSecundaria:'#E3242b'
    },
    {
      nome:'Lateral',
      corPrimaria:'#cc100',
      corSecundaria:'#Fea1b6'
    },
    {
      nome:'Meio De Campo',
      corPrimaria:'#00f00',
      corSecundaria:'#99ff99'
    },
    {
      nome:'Volante',
      corPrimaria:'#Fc4b08',
      corSecundaria:'#FFb347'
    },
    {
      nome:'Ponta',
      corPrimaria:'#9400d3',
      corSecundaria:'#726494'
    },
    {
      nome:'Atacante',
      corPrimaria:'#cc8105',
      corSecundaria:'#daa520'
    },
  ]

  const [jogadores, setJogadores] = useState([]);

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario posicoes={posicoes.map(posicao => posicao.nome)} aoJogadorCadastrado = {jogador => aoNovoJogadorAdicionado(jogador) } />

      {posicoes.map(posicao => <Posicao 
        key={posicao.nome}
        nome={posicao.nome} 
        corPrimaria={posicao.corPrimaria} 
        corSecundaria={posicao.corSecundaria}
        jogadores = {jogadores.filter(jogador => jogador.posicao === posicao.nome)}
      /> )}
      <Rodape />
      
    </div>
  );
}

export default App;

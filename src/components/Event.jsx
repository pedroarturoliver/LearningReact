import { memo } from 'react';

const Event = () => {

  const handleClick = (e) => {

    console.log(e)
     console.log("Executou");


  }

  // 8 - Função de redenrização
  const rendersomething = (x) => {

    if(x) {
      return <h1> Redenrizando isso! </h1>

    } else {
      return <h1>Renderizando outra coisa </h1>
    }

  };

//  return 10 > 2 && <p> carregando... </p>



  return (
    <div>
      <div>
        <button onClick={() => console.log("Testando um evento")}> 
          Clique aqui 
        </button>
      </div>
    {/* 7 - Evento com função */}
    <div>
      <button onClick={handleClick}> Clique aqui - Com função </button>
    </div>
    {/* 8 - Função com render */}

    {rendersomething(true)}
    {rendersomething(false)}

    </div>


  );
};

export default memo(Event);
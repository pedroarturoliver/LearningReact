import { memo } from 'react';

const Event = () => {
  return (
    <div>
      <div>
            <button onClick={() => console.log("Testando um evento")}> Clique aqui </button>
      </div>
    </div>
  );
};

export default memo(Event);
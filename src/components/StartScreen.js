import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo pra começar a jogar</p>
      <button onClick={startGame}>Começa o jogo</button>
    </div>
  );
};

export default StartScreen;

import './WelcomeContainer.css';
import OtaoLogo from "../assets/images/otaoLogo.svg";

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <div className="ion-text-center ion-padding">
          <img src={OtaoLogo} alt="OtaoDev Logo" width={"50%"} />
      </div>
      <strong>Bem vindo ao OtaoApp!</strong>
      <p>Já conhece o meu site?  <a target="_blank" rel="noopener noreferrer" href="https://otao.dev.br">otao.dev.br</a></p>
    </div>
  );
};

export default ExploreContainer;

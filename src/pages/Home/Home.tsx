import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../../components/Header'
import WelcomeContainer from '../../components/WelcomeContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header/>
      <IonContent fullscreen>
        <WelcomeContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;

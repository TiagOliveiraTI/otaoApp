import { IonButtons, IonButton,IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const Header: React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar color={'primary'}>
                <IonTitle>OtaoApp</IonTitle>
                <IonButtons slot="end">
                    <IonButton>Login</IonButton>
                    <IonButton>Registrar</IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header;
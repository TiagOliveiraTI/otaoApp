import { IonButtons, IonButton, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/react';

const Header: React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar color={'primary'}>
                <IonTitle>OtaoApp</IonTitle>
                <IonButtons slot="end">
                    <IonButton routerLink="/login">Login</IonButton>
                    <IonButton routerLink="/register" color={"secondary"} className="ion-margin-top" type="button" expand="block">
                        Criar conta
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header;
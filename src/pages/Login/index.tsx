import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonInput, IonButton, IonIcon } from '@ionic/react';
import { logInOutline } from "ionicons/icons";
import OtaoLogo from "../../assets/images/otaoLogo.svg";

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%', // Usar 100% da altura disponível
                    maxWidth: '600px', // Definir uma largura máxima
                    margin: '0 auto', // Centralizar horizontalmente
                }}
                >
                    <div className="ion-text-center ion-padding">
                        <img src={OtaoLogo} alt="OtaoDev Logo" width={"50%"} />
                    </div>
                    <IonCard>
                        <IonCardContent>
                            <form>
                                <IonInput
                                    label="Email"
                                    type="email"
                                    placeholder="contato@otao.dev.br"
                                    labelPlacement="floating"
                                    fill="outline"></IonInput>

                                <IonInput
                                    className="ion-margin-top"
                                    label="Senha"
                                    type="password"
                                    placeholder="Uma senha"
                                    labelPlacement="floating"
                                    fill="outline"></IonInput>

                                <IonButton className="ion-margin-top" type="submit" expand="block">
                                    Entrar
                                    <IonIcon icon={logInOutline} slot="end" />
                                </IonButton>
                            </form>
                        </IonCardContent>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Login;
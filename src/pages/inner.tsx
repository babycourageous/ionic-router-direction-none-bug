import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'

function Inner() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inner</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/tab2" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inner</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  )
}

export default Inner

import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'

function Tab1() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>
          With default direction (forward) - Back Button for Inner comes back to
          Tab 1
        </p>
        <IonButton routerLink="/inner">Go to Inner (forward)</IonButton>
        <p>
          With direction none - Back Button for Inner goes back to defaultHref
          (Tab 2)
        </p>
        <IonButton routerLink="/inner" routerDirection="none">
          Go to Inner (none)
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Tab1

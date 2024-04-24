import React, { useState, useEffect } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRange,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import { personCircle, personCircleOutline, sunny, sunnyOutline } from 'ionicons/icons';
import '../theme/variables.css';

const Tab3: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedMode = localStorage.getItem('darkMode');
    return storedMode ? JSON.parse(storedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('md');
      document.body.classList.add('md');
      document.body.classList.remove('bodywhite');
    } else {
      document.documentElement.classList.remove('md');
      document.body.classList.remove('md');
      document.body.classList.add('bodywhite');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonTitle>Display</IonTitle>
          <IonButtons slot="end">
            <IonButton color="dark">
              <IonIcon slot="icon-only" ios={personCircleOutline} md={personCircle}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonListHeader>Appearance</IonListHeader>
        <IonList inset={true}>
          <IonItem button={true}>Text Size</IonItem>
          <IonItem>
            <IonToggle justify="space-between">Bold Text</IonToggle>
          </IonItem>
        </IonList>

        <IonListHeader>Brightness</IonListHeader>
        <IonList inset={true}>
          <IonItem>
            <IonRange value={40}>
              <IonIcon icon={sunnyOutline} slot="start"></IonIcon>
              <IonIcon icon={sunny} slot="end"></IonIcon>
            </IonRange>
          </IonItem>
          <IonItem>
            <IonToggle justify="space-between" checked>
              True Tone
            </IonToggle>
          </IonItem>
        </IonList>

        <IonList inset={true}>
          <IonItem>
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle slot="end" checked={darkMode} onIonChange={toggleDarkMode} />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

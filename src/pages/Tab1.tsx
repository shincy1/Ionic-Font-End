import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
} from '@ionic/react';
import './Tab1.css'; // Impor file CSS untuk styling

const Tab1: React.FC = () => {
  // Data contoh album
  const albums = [
    { name: 'Kamera', cover: '/assets/album_covers/camera.jpg' },
    { name: 'Screenshots', cover: '/assets/album_covers/screenshots.jpg' },
    { name: 'Travel', cover: '/assets/album_covers/travel.jpg' },
    // Tambahkan album lain di sini sesuai kebutuhan
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Albums</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {albums.map((album, index) => (
            <IonItem key={index} routerLink={`/albums/${album.name}`}>
              <IonThumbnail slot="start">
                <img src={album.cover} alt={`Cover for ${album.name}`} />
              </IonThumbnail>
              <IonLabel>{album.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

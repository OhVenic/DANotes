import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"danotes-29884","appId":"1:665187955328:web:c595f61ee5b0cd36f5ac65","storageBucket":"danotes-29884.firebasestorage.app","apiKey":"AIzaSyA2of61jDjGE9JwY27okba9XlEkwcA_Mxc","authDomain":"danotes-29884.firebaseapp.com","messagingSenderId":"665187955328","measurementId":"G-7GKVD1E8MP"})), provideFirestore(() => getFirestore())]
};

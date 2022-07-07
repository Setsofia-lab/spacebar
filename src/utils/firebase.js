// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  setDoc,
} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Get a list of cities from your database
export async function getSpaces() {
  try {
    const spacesCol = collection(db, "spaces");
    const spaceSnapshot = await getDocs(spacesCol);
    const spaceList = spaceSnapshot.docs.map((doc) => doc.data());
    console.log(spaceList);
    return spaceList;
  } catch (e) {
    console.log(e);
  }
}

export async function getListings() {
  try {
    const listingsCol = collection(db, "listings");
    const listingsSnapshot = await getDocs(listingsCol);
    const lisitngsList = listingsSnapshot.docs.map((doc) => doc.data());

    return lisitngsList;
  } catch (e) {
    console.log(e);
  }
}

export async function addBookings({
  name,
  email,
  phone,
  eventSelection,
  attendance,
  checkinDate,
  startTime,
  endTime,
  info,
}) {
  try {
    const bookings = await addDoc(collection(db, "bookings"), {
      name: name,
      email: email,
      phone: phone,
      eventSelection: eventSelection,
      attendance: attendance,
      checkinDate: checkinDate,
      startTime: startTime,
      endTime: endTime,
      info: info,
    });
    console.log("Booking with user ID :", bookings.id);
  } catch (e) {
    console.error("Error with booking:", e);
  }
}

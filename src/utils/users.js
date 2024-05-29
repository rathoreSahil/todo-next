import { db } from "@/lib/firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
  query,
  where,
  getDoc,
} from "firebase/firestore";
async function addUser(user) {
  try {
    const newUser = {
      ...user,
      createdAt: serverTimestamp(),
    };
    const docRef = await addDoc(collection(db, "users"), newUser);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
async function getUser() {
  try {
    const user = [];
    const email = sessionStorage.getItem("email");
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      user.push({ id: doc.id, ...doc.data() });
    });
    return user[0];
  } catch (error) {
    console.error("Error getting User: ", error);
  }
}

export { addUser, getUser };

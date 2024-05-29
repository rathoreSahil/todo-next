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
} from "firebase/firestore";

import { db } from "@/lib/firebaseConfig";

async function getTodos() {
  try {
    const todos = [];
    const email = sessionStorage.getItem("email");
    const q = query(collection(db, "todos"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      todos.push({ id: doc.id, ...doc.data() });
    });
    return todos;
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
}

async function getTodo(id) {
  try {
    const docRef = doc(db, "todos", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document: ", error);
  }
}

async function addTodo(todo) {
  try {
    const email = sessionStorage.getItem("email");
    const newTodo = {
      ...todo,
      email,
      createdAt: serverTimestamp(),
    };
    const docRef = await addDoc(collection(db, "todos"), newTodo);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

async function deleteTodo(id) {
  try {
    await deleteDoc(doc(db, "todos", id));
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}

async function updateTodo(id, todo) {
  try {
    await updateDoc(doc(db, "todos", id), {
      todo,
    });
  } catch (error) {
    console.error("Error updating document: ", error);
  }
}

export { getTodos, getTodo, addTodo, deleteTodo, updateTodo };

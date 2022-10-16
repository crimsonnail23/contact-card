import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

export const initdb = async()=>{
    openDB('contact_db', 1,{
        // add our database schema if it has not already been added.
        upgrade(db){
            if(db.objectStoreNames){
                console.log('contact stores already exist.');
                return;
            }
            db.createObjectStore('contacts', {keypath: id, autoIncrement: true});
            console.log('contact stores created');
        }
    })
}

//export a function we will use to GET to the database.
export const getDb = async ()=>{
    //create a connected to the database and the version we want.
    const contactDb = await openDB('contact_db',1);

    //create a new transaction and specify the store and data priviledges.
    const tx=contactDb.transaction('contacts', 'readonly');

    //open up desired object store.
    const store = tx.objectStore('contacts')

    //use the getAll(); method to get all data in database.
    const request = await store.getAll();

    //get confimation
}
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
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react'
import { db, storage } from '../firebase/config';
import { v4 as uuidv4 } from 'uuid';
import { addDoc, collection } from 'firebase/firestore';
import description from '../components/UploadForm'

const useStorage = () => {
    const [progress, setProgress] = useState<number>(0);
    const [error, setError] = useState<Error | null>(null);
    const [url, setUrl] = useState<string | null>(null);


    const startUpload = (file: File) => {
        if (!file) {
            return
        }
        const fileId = uuidv4();
        const formatFile = file.type.split('/')[1];

        const storageRef = ref(storage, `/images/${fileId}.${formatFile}`)
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress)
        },
            (error) => {
                setError(error)
            }, async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                setUrl(downloadURL);
                setProgress(progress);
                // Store Data into firestore
                await addDoc(collection(db, "images"), {
                    imageUrl: downloadURL,
                    title: file.name,
                    description,
                });
            });
    }

    return {
        progress, error, startUpload
    }
}

export default useStorage
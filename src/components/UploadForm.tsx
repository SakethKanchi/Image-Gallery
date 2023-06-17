import { useState } from "react";
import useStorage from "../hooks/useStorage";

const UploadForm = () => {
    const [selectedfile, setSelectedFile] = useState<File | null>(null);
    const [description, setDescription] = useState<string>("");
    const { startUpload, progress } = useStorage();

    const handleDescription = (event: { target: { value: any; }; }) => {
        const text = event.target.value;
        setDescription(text);
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0])
        }
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedfile) {
            startUpload(selectedfile)
        }
        setSelectedFile(null)
        setDescription("")
    }
    return (
        <div className="text-cemter mt-10">
            <form onSubmit={handleSubmit} className="flex items-center flex-col gap-8">
                <input
                    type="file"
                    className="file-input file-input-bordered w-full max-w-xs"
                    onChange={handleFileChange}
                />
                <input
                    type="text"
                    placeholder="Type here"
                    className="input w-full max-w-xs"
                    onChange={handleDescription}
                    value={description}
                />
                <button
                    type='submit'
                    className={`btn gap-3 ${Boolean(progress) && 'loading'}`}
                    disabled={!selectedfile}
                >
                    Upload <span>🚀</span>
                </button>
            </form>
        </div>
    )
}

export default UploadForm
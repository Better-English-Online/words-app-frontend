import FolderItems from "../../components/FolderItems/FolderItems";
import { useParams } from "react-router-dom";
import Page from "../../components/Page/index";
import NotFound from "../../pages/NotFound/index";
import { useState, useEffect } from "react";

const Dictionary = () => {
    const { id } = useParams();
    const [folderId, setFolderId] = useState(id || "1");
    const [isLoading, setLoading] = useState(true);
    const [folder, setFolder] = useState();

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/folders/${folderId}`, {
            headers: { "Content-Type": "application/json" },
            cache: "no-cache",
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFolder(data);
                setLoading(false);
            });
    }, [folderId]);

    if (id && folderId !== id) setFolderId(id);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!folder) {
        return <NotFound />;
    }

    return (
        <Page>
            <FolderItems folders={folder.children} sets={folder.sets} />
        </Page>
    );
};

export default Dictionary;

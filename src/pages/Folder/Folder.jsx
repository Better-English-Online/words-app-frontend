import FolderItems from '../../components/FolderItems/FolderItems';
import {useParams} from 'react-router-dom'
import {folders} from '../../Data/Folders'
import Page from '../../components/Page/index';
import NotFound from '../../pages/NotFound/index';

const Dictionary = () => {
    const {id} = useParams()
    const folderId = id || '1'
    const folder = folders[folderId];
    if (!folder){
        return <NotFound />
    }
    return (
        <Page>
            <FolderItems items={folder.items} />
        </Page>
    );
};

export default Dictionary;

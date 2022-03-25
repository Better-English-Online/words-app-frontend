import {useParams} from 'react-router-dom'
import {sets} from '../../Data/Sets'
import Page from '../../components/Page';
import NotFound from '../NotFound';




const Set = () => {
    const {id} = useParams()
    const set = sets[id]; 
    if (!set) {
        return <NotFound />;
    }
    return (
        <Page>
                <h1>{set.title}</h1>
        </Page>
    );
};

export default Set;

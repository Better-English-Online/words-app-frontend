// import {useParams} from 'react-router-dom'
import Page from '../../components/Page';
import NotFound from '../NotFound';




const Set = () => {
    // const {id} = useParams()
    const set = []
    if (!set) {
        return <NotFound />;
    }
    return (
        <Page>
            <h1 style={{ fontSize: "2.5rem" }}>{set.title}</h1>
        </Page>
    );
};

export default Set;

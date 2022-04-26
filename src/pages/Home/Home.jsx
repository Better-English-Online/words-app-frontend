import Page from "../../components/Page/index";
import {useEffect, useState} from 'react'

const Home = () => {
    const [state, setState] = useState({
        users: [],
        isLoaded: false
    })

    useEffect(() => {
        fetch('http://127.0.0.1:8000/')
            .then(res => res.json())
            .then(json => {
                setState({users: json, isLoaded: true})
            })
    })
    return (
        <Page>
            <h1 style={{fontSize: '2.5rem'}}>Home</h1>
                {(() => {
                    if (!state.isLoaded) {
                        return <h2>Loading...</h2>
                    } else {
                        return <ul>
                            {state.users.map(user => <li key={user.id}>{user.name}</li>)}
                        </ul>
                    }
                })()}
        </Page>
    );
};

export default Home;

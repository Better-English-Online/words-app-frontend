import Page from "../../components/Page/index";

const Home = () => {

    return (
        <Page>
            <h1 style={{fontSize: '2.5rem'}}>{process.env.REACT_APP_API_URL_FOLDERS}</h1>
        </Page>
    );
}


export default Home;

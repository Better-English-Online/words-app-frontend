import Page from "../../components/Page/index";
import { useContext } from "react";
import AuthContext from "../../contexts/Auth";

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <Page>
            <h1 style={{ fontSize: "2.5rem" }}>Hi,</h1>
        </Page>
    );
};

export default Home;

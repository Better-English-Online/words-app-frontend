import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import "./index.css";

const Page = ({ children, mainStyle }) => {
    return (
        <div className="page">
            <Header />
            <Main style={mainStyle} className="main">
                {children}
            </Main>
            <Footer />
        </div>
    );
};

export default Page;

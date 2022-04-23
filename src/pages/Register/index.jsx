import Page from "../../components/Page/index";
import RegisterForm from '../../components/RegisterForm/index';

const Register = () => {
    return (
        <Page
            mainStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <RegisterForm />
        </Page>
    );
};

export default Register;

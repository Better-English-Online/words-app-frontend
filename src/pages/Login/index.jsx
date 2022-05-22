import Page from "../../components/Page/index";
import AuthForm from "../../components/LoginForm/index";

const Login = () => {
    return (
        <Page
            mainStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <AuthForm></AuthForm>
        </Page>
    );
};

export default Login;

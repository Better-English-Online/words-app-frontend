import Page from '../../components/Page/index';
import AuthForm from '../../components/AuthForm/index';


const Login = () => {
    return (
        <Page mainStyle={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}}>
            <AuthForm>
            </AuthForm>
        </Page>
    );
}

export default Login
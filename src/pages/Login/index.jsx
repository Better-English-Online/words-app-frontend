import Page from '../../components/Page/index';
import Input from '../../components/UI/Input/index';
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
                <Input type="text" placeholder="Mail..." name="mail" />
                <Input type="password" placeholder="Password..." name="mail" />
            </AuthForm>
        </Page>
    );
}

export default Login
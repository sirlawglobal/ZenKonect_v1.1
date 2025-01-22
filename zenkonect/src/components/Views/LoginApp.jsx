import Header from '../Helper/Header';
import LoginForm from '../../components/Helper/LoginForm';
import Footer from '../Helper/Footer';

const LoginApp = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default LoginApp;
import Header from './components/Helper/Header';
import LoginForm from './components/Views/LoginForm';
import Footer from './components/Helper/Footer';

const App = () => {
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

export default App;
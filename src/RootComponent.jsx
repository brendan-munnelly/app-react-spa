import { useNavigate } from 'react-router-dom';
import App from './App';

const RootComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform the redirect if a redirect path is stored
    const redirectPath = sessionStorage.redirect;
    delete sessionStorage.redirect; // Clear the session storage
    if (redirectPath) navigate(redirectPath);
  }, [navigate]);

  return <App />;
};

export default RootComponent;

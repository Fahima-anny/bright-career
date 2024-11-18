import { useNavigate } from "react-router-dom";


const ErrorPage = () => {


      const navigate = useNavigate();
    
      const handleGoBack = () => {
        // console.log('backed')
        navigate('/'); // Navigate back to the previous page
      };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-error">404</h1>
          <p className="text-2xl font-semibold text-gray-800 mt-4">
            Oops! Page not found
          </p>
          <p className="text-gray-500 mt-2">
            Sorry, the page you’re looking for doesn’t exist.
          </p>
          <button
            onClick={handleGoBack}
            className="btn btn-error mt-6 px-6 text-white"
          >
            Go Home
          </button>
        </div>
      </div>
    );
};

export default ErrorPage;

                    
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div>
          <div className="text-2xl">OPSS.... </div> 
          <button> <Link to='/'>Go back to home</Link> </button>
        </div>
    );
};

export default ErrorElement;
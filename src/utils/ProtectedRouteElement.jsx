import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ element: Component, ...props }) => (props.loggedIn ? <Component /> : <Navigate to="/" replace />);

export default ProtectedRouteElement;

// #router
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
	whereTo: string;
}

export const Redirect = (props: RequireAuthProps) => {
	const { whereTo } = props;
	const location = useLocation();

	return <Navigate to={whereTo} state={{ from: location }} replace />;
};

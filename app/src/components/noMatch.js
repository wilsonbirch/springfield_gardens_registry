import { Link, useLocation } from 'react-router-dom';
const NoMatch = () => {
  let location = useLocation();

  return (
    <div>
      <p>
        No match for <code>{location.pathname}</code>,
        return <Link to="/">home</Link>{' '}
      </p>
    </div>
  );
};

export default NoMatch;

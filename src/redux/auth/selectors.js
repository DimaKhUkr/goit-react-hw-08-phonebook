import { useSelector } from 'react-redux';

const selectIsLoggedIn = state => state.state.auth.isLoggedIn;

const selectUser = state => state.state.auth.user;

const selectIsRefreshing = state => state.state.auth.isRefreshing;

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};

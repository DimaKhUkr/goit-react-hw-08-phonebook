import Weather from 'WeatherApp/WeatherApp';
import { HomeTitle, WrapperHomePage, HomePage } from './HomePage.styled';
import { useAuth } from 'redux/auth/selectors';
import HomeBG from '../img/bg.jpeg';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <HomePage style={{ backgroundImage: `url(${HomeBG})` }}>
      <WrapperHomePage>
        {isLoggedIn ? (
          <HomeTitle>
            Go to the contact tab to see the list of contacts
          </HomeTitle>
        ) : (
          <HomeTitle>
            To access the list of contacts, you must log in with your
            credentials or register
          </HomeTitle>
        )}

        <Weather />
      </WrapperHomePage>
    </HomePage>
  );
}

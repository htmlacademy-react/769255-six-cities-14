import { Link } from 'react-router-dom';
import Input from '../../components/Input';

function Login(): React.ReactNode {
  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
              <Input
                label="E-mail"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <Input
                label="Password"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;

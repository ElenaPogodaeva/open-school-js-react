import { SubmitHandler, useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { ILogin } from '@/entities/user/model/types';
import { useAppDispatch } from '@/shared/lib/hooks';
import { setUser } from '@/entities/user/model/userSlice';
import { useLoginUserMutation } from '@/entities/user/api';
import { useAuth } from '@/shared/lib/useAuth';
import { Loader } from '@/shared/ui';
import style from './Login.module.scss';

export function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const dispatch = useAppDispatch();

  const [login, { isLoading, isError }] = useLoginUserMutation();

  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" />;
  }

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    const user = await login(data).unwrap();
    dispatch(setUser(user));
    navigate('/');
  };

  const hasError = () => {
    if (Object.keys(errors).length !== 0) {
      return true;
    }
    return false;
  };

  return (
    <section className={style.loginSection}>
      <div className="container">
        <h2 className={`section-title ${style.loginTitle}`}>Sign in</h2>
        {isLoading ? (
          <Loader />
        ) : (
          <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            {errors?.username && <p className={style.formError}>* login should be fill</p>}
            <input
              type="text"
              className={`input ${style.formInput}`}
              placeholder="Login"
              {...register('username', { required: true })}
            />

            {errors?.password && <p className={style.formError}>* password should be fill</p>}
            <input
              type="password"
              className={`input ${style.formInput}`}
              placeholder="Password"
              {...register('password', { required: true })}
            />

            {isError ? <p className={style.formError}>Error occured</p> : null}

            <button type="submit" className="button" disabled={hasError()}>
              Sign in
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Login;

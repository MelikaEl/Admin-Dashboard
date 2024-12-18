"use client";

import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" required />
      <input type="password" placeholder="password" name="password" required/>
      <button type="submit">Login</button>
      {state && <p className={styles.error}>{state}</p>}
    </form>
  );
};

export default LoginForm;

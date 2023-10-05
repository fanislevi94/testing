import Link from "next/link";
import classes from "./main-navigation.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SessionProvider } from "next-auth/react";
function MainNavigation() {
  const { push } = useRouter();
  const { data, status } = useSession();

  function redirect() {
    signOut("google");
    alert("By By");
    window.location.href = "/index";
  }
  function redirectSignin() {
    signIn("google");

    window.location.href = "/signin";
  }
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>FANIS BLOG</div>
      </Link>
      <nav>
        <ul>
          {status !== "authenticated" && (
            <li>
              <Link href="/">Index</Link>
            </li>
          )}
          {status === "authenticated" && (
            <li>
              <Link href="/post">Post</Link>
            </li>
          )}
          {status === "authenticated" && (
            <li>
              <Link href="/edit">Edit</Link>
            </li>
          )}
          {status !== "authenticated" && (
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          )}
          {status === "authenticated" && (
            <li>
              <button onClick={() => redirect()}>Signout</button>
            </li>
          )}

          {status !== "authenticated" && (
            <li>
              <button onClick={() => redirectSignin()}>Signin</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

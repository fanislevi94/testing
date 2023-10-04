import Link from "next/link";
import classes from "./main-navigation.module.css";
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';
function MainNavigation() {
  const { push } = useRouter();
  const { data, status } = useSession();

   function redirect(){
    
    signOut('google')
    alert("By By")
    window.location.href="/index"

    
  }
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>FANIS BLOG</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">Index</Link>
          </li>
          {
            <li>
              <Link href="/post">Post</Link>
            </li>
          }
          {
            <li>
              <Link href="/edit">Edit</Link>
            </li>
          }
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          {
            status === 'authenticated'&&(
          <li>
            <button  onClick={() => redirect()  } >Signout</button>
          </li>)}

        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

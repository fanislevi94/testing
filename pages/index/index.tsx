import { useSession, signIn, signOut } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';
import GoogleButton from 'react-google-button'
import { useRouter } from 'next/navigation';
export default function IndexPage() {
  const { data, status } = useSession();
  const { push } = useRouter();
  if (status === 'loading') return <h1> loading... please wait</h1>;
  if (status === 'authenticated') {
    //window.location.href="/main"
    
    push('/main');
    /*return (
      <div >
        <h1> hi {data.user.name}</h1>
        <img src={data.user.image} alt={data.user.name + ' photo'} />
        <button onClick={signOut}>sign out</button>
      </div>
    );*/
  }
  return (
    <div className='w-1/6 mx-auto py-56'>
      <GoogleButton onClick={() => signIn('google')}/>
    </div>
  );
}
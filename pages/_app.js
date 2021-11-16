import { AuthProvider } from "../lib/auth";

function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;

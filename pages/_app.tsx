import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/argon-design-system-react.css';
import '../styles/styles.css';
import '../styles/vendor/font-awesome/css/font-awesome.min.css';
import '../styles/vendor/nucleo/css/nucleo.css';
import "@assistant-ui/styles/index.css";
import "@assistant-ui/styles/markdown.css";
import "@assistant-ui/styles/modal.css";
import { MyRuntimeProvider } from '@/components/MyRuntimeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyRuntimeProvider>
      <Component {...pageProps} />
    </MyRuntimeProvider>
  );
}

export default MyApp;

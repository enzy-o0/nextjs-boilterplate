import apolloClient from '@/app/lib/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import Container from '@mui/material/Container';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={apolloClient}>
            <AppCacheProvider {...pageProps}>
                <Container
                    maxWidth="sm"
                    style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <Component {...pageProps} />
                </Container>
            </AppCacheProvider>
        </ApolloProvider>
    );
}

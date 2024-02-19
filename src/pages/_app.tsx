import apolloClient from '@/app/lib/apolloClient';
import BasicTabs from '@/components/BasicTabs';
import TopAppBar from '@/components/TopAppBar';
import { ApolloProvider } from '@apollo/client';
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import Container from '@mui/material/Container';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={apolloClient}>
            {/* <AppCacheProvider {...pageProps}> */}
            <TopAppBar />
            <BasicTabs />

            <Container
                maxWidth="sm"
                style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Component {...pageProps} />
            </Container>
            {/* </AppCacheProvider> */}
        </ApolloProvider>
    );
}

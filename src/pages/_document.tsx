import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v13-pagesRouter';
import { Head, Html, Main, NextScript } from 'next/document';
import type { DocumentProps } from 'next/document';
import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v13-pagesRouter';
import type { NextPageContext } from 'next/types';

// or `v1X-pagesRouter` if you are using Next.js v1X

export default function MyDocument(props: DocumentProps & DocumentHeadTagsProps) {
    return (
        <Html lang="en">
            <Head>
                <DocumentHeadTags {...props} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

// MyDocument.getInitialProps = async (ctx: NextPageContext) => {
//     const finalProps = await documentGetInitialProps(ctx);
//     return finalProps;
// };

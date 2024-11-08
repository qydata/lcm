import type {FC, ReactNode} from "react";

import authLink from "@helpers/authLink";
import {apolloClient, ApolloProvider} from "@hey/lens/apollo";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ThemeProvider} from "next-themes";

import ErrorBoundary from "../ErrorBoundary";
import Layout from "../Layout";
import OptimisticTransactionsProvider from "./OptimisticTransactionsProvider";
import ServiceWorkerProvider from "./ServiceWorkerProvider";
import Web3Provider from "./Web3Provider";
import LeafwatchProvider from "@components/Common/Providers/LeafwatchProvider";

const lensApolloClient = apolloClient(authLink);
const queryClient = new QueryClient({
    defaultOptions: {queries: {refetchOnWindowFocus: false}}
});

interface ProvidersProps {
    children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({children}) => {
    return (
        <ErrorBoundary>
            <ServiceWorkerProvider/>
            <Web3Provider>
                <ApolloProvider client={lensApolloClient}>
                    <OptimisticTransactionsProvider/>
                    <QueryClientProvider client={queryClient}>
                        <ThemeProvider attribute="class" defaultTheme="light">
                            <Layout>{children}</Layout>
                        </ThemeProvider>
                    </QueryClientProvider>
                </ApolloProvider>
            </Web3Provider>
        </ErrorBoundary>
    );
};

export default Providers;

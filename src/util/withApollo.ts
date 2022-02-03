import { ApolloClient, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";
import { withApollo as createWithApollo } from "next-apollo";
import { createUploadLink } from 'apollo-upload-client';

const createClient = () =>
    new ApolloClient({
        link: createUploadLink({
            uri: process.env.NEXT_PUBLIC_API_URL
        }),
        credentials: "include",
        cache: new InMemoryCache(),
    });

export const withApollo = createWithApollo(createClient);

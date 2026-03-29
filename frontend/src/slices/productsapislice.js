import { PRODUCTS_URL } from "../constants";
import { apislice } from "./apislice";

export const productsApiSlice = apislice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts : builder.query({
            query: () => ({
                url: PRODUCTS_URL,
            }),

            keepUnusedDataFor: 5 //Overrides the api-wide definition of keepUnusedDataFor for this endpoint     only. (This value is in seconds.)
                                //This is how long RTK Query will keep your data cached for after the last component unsubscribes. For example, if you query an endpoint, then unmount the component, then mount another component that makes the same request within the given time frame, the most recent value will be served from the cache.
        }),

        getProductDetails : builder.query({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`
            }),
            keepUnusedDataFor: 5,
        })
    })
});

export const {useGetProductsQuery, useGetProductDetailsQuery} = productsApiSlice;
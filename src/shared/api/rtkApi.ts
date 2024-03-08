import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
	reducerPath: 'rtkApi',
	baseQuery: fetchBaseQuery({
		baseUrl: __API__,
		prepareHeaders: (headers) => {
			const token = 'Token';
			if (token) {
				headers.set('X-Auth', token);
			}

			return headers;
		},
	}),
	endpoints: (builder) => ({}),
});

import type { NextApiRequest, NextApiResponse } from 'next'

export interface GetRouteResponse {
	message: string
}

export interface GetRouteError {
	error: string
}

interface GetRouteNextApiRequest extends NextApiRequest {
	body: {}
}

export default async function handler(
	req: GetRouteNextApiRequest,
	res: NextApiResponse<GetRouteResponse | GetRouteError>
) {
	if (req.method !== 'GET') {
		return res.status(405).json({
			message: 'Method not allowed.'
		})
	}
	try {
		res.status(200).json({ message: 'success' })
	} catch (error) {
		res.status(500).json({ error: 'error' })
	}
}

// Path: src/pages/api/get-route.ts
// Created at: 11:22:22 - 13/03/2023
// Language: Typescript
// Framework: React/Next.js

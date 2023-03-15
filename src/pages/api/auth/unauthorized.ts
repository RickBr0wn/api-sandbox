import type { NextApiRequest, NextApiResponse } from 'next'

export interface UnauthorizedResponse {
	message: string
}

export interface UnauthorizedError {}

interface UnauthorizedNextApiRequest extends NextApiRequest {
	body: {}
}

export default async function handler(
	req: UnauthorizedNextApiRequest,
	res: NextApiResponse<UnauthorizedResponse | UnauthorizedError>
) {
	// // handle any possible request method errors
	// if (req.method !== 'POST') {
	//   return res.status(405).json({
	//     message: 'Method not allowed.'
	//   })
	// }
	try {
		// ...asyncronous code
		res.status(200).json({ message: 'invalid token supplied' })
	} catch (error) {
		res.status(500).json({ message: `${error}` })
	}
}

// Path: src/pages/api/auth/unauthorized.ts
// Created at: 22:24:33 - 13/03/2023
// Language: Typescript
// Framework: React/Next.js

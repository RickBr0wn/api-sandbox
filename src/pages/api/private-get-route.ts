import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prismadb'
import { User, Session } from 'next-auth'
import jwt from 'jsonwebtoken'

export interface PrivateGetRouteResponse {
	message: string
	one?: string | null
	two?: string
}

export interface PrivateGetRouteError {
	error: string
}

interface PrivateGetRouteNextApiRequest extends NextApiRequest {
	body: {}
}

export default async function handler(
	req: PrivateGetRouteNextApiRequest,
	res: NextApiResponse<PrivateGetRouteResponse | PrivateGetRouteError>
) {
	if (req.method !== 'GET') {
		return res.status(405).json({
			message: 'Method not allowed.'
		})
	}

	const token = req.headers.authorization?.split(' ')[1]

	if (!token) {
		return res.status(501).json({
			error: 'no token supplied.'
		})
	}

	try {
		jwt.verify(token, 'secret-key')
	} catch (error) {
		return res.status(501).json({
			error: 'token has expired.'
		})
	}

	try {
		const user = await prisma.user.findUnique({ where: { token } })

		if (!user) {
			return res.status(501).json({
				error: 'invalid token supplied.'
			})
		}
	} catch (error) {
		return res.status(501).json({
			error: 'error communicating with the database.'
		})
	}

	return res.status(200).json({
		message: 'these are your items..'
	})
}

// Path: src/pages/api/private-get-route.ts
// Created at: 11:25:07 - 13/03/2023
// Language: Typescript
// Framework: React/Next.js

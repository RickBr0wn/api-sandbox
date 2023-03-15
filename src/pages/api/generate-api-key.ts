import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import prisma from '../../lib/prismadb'

export interface GenerateApiKeyResponse {
	message?: string
	token?: string
}

export interface GenerateApiKeyError {
	error: string
}

interface GenerateApiKeyNextApiRequest extends NextApiRequest {
	body: { userId: string }
}

export default async function handler(
	req: GenerateApiKeyNextApiRequest,
	res: NextApiResponse<GenerateApiKeyResponse | GenerateApiKeyError>
) {
	// handle any possible request method errors
	if (req.method !== 'POST') {
		return res.status(405).json({
			message: 'Method not allowed.'
		})
	}

	const userId = req.body.userId

	if (!userId) {
		return res.status(500).json({ error: 'no userId supplied' })
	}

	const user = await prisma.user.findUnique({ where: { id: userId } })

	if (!user) {
		return res.status(500).json({ error: 'invalid userId supplied' })
	}

	const token = jwt.sign({ userId }, 'secret-key', { expiresIn: '30d' })

	try {
		await prisma.user.update({
			where: { id: userId },
			data: { token }
		})

		res.status(200).json({ token })
	} catch (error) {
		res.status(500).json({ error: `${error}` })
	}
}

// Path: src/pages/api/generate-api-key.ts
// Created at: 11:27:12 - 13/03/2023
// Language: Typescript
// Framework: React/Next.js

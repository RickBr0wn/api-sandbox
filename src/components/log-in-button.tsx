import { Session, User } from 'next-auth'
import { signIn, signOut, useSession } from 'next-auth/react'
import type { FC } from 'react'

interface LogInButtonProps {}

const LogInButton: FC<LogInButtonProps> = (): JSX.Element => {
	const { data, status } = useSession()

	if (status === 'loading') {
		return <button>loading...</button>
	}

	if (status === 'unauthenticated') {
		return <button onClick={() => signIn(undefined, { callbackUrl: '/' })}>sign in</button>
	}

	return <button onClick={() => signOut({ callbackUrl: '/' })}>sign out</button>
}

export default LogInButton

// Path: src/components/log-in-button.tsx
// Created at: 11:35:34 - 13/03/2023
// Language: Typescript
// Framework: React/Next.js

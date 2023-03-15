import { User } from 'next-auth'
import { useSession } from 'next-auth/react'
import LogInButton from '~/components/log-in-button'

const styles = {
	height: '100vh',
	width: '100vw',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
}

export default function Home() {
	const { data, status } = useSession()
	const user: User | null = null

	return (
		<>
			<main style={styles}>
				<h1>{status}</h1>
				<LogInButton />
			</main>
		</>
	)
}

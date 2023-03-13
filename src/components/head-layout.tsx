import Head from 'next/head'
import type { FC, ReactNode } from 'react'

interface HeadLayoutProps {
	children: ReactNode
}

const HeadLayout: FC<HeadLayoutProps> = ({ children }): JSX.Element => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='manifest' href='/site.webmanifest' />
			</Head>
			<main>{children}</main>
		</>
	)
}

export default HeadLayout

// Path: src/components/head-layout.tsx
// Created at: 10:53:30 - 13/03/2023
// Language: Typescript
// Framework: React/Next.js

import { SessionProvider } from 'next-auth/react'
import type { AppType } from 'next/app'
import HeadLayout from '~/components/head-layout'
import { Session } from 'next-auth'
import '../styles/globals.css'

// import type { GetStaticProps } from 'next'
// import type { GetServerSideProps } from 'next'
// import type { GetStaticPaths } from 'next'
// import type { GetInitialProps } from 'next'

const App: AppType<{ session: Session | null }> = ({
	Component,
	pageProps: { session, ...pageProps }
}) => {
	return (
		<SessionProvider session={session}>
			<HeadLayout>
				<Component {...pageProps} />
			</HeadLayout>
		</SessionProvider>
	)
}

/**
 * @param context https://nextjs.org/docs/api-reference/data-fetching/get-static-props#context-parameter
 * @return https://nextjs.org/docs/api-reference/data-fetching/get-static-props#getstaticprops-return-values
 */
// export const getStaticProps: GetStaticProps<AppProps> = async context => {
//   // ...asyncronous code
//   return {
//     props: {} // will be passed to the page component as props
//   }
// }

/**
 * @param context https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#context-parameter
 * @return https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#getserversideprops-return-values
 */
// export const getServerSideProps: GetServerSideProps = async context => {
//   // ...asyncronous code
//   return {
//     props: {} // will be passed to the page component as props
//   }
// }

/**
 * @return https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#getserversideprops-return-values
 */
// export const getStaticPaths: GetStaticPaths = async () => {
//   // ...asyncronous code
//   return {
//     paths: [
//       {
//         params: {
//           /* ...params */
//         }
//       } // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#paths
//     ],
//     fallback: true // true, false or 'blocking' // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-false
//   }
// }

/**
 * @param context https://nextjs.org/docs/api-reference/data-fetching/get-initial-props#context-object
 */
// App.getInitialProps = async context => {
//   // ...asyncronous code
//   return {
//     props: {} // will be passed to the page component as props
//   }
// }

export default App

// Path: src/pages/_app.tsx
// Created at: 10:52:26 - 13/03/2023
// Language: Typescript
// Framework: React/Next.js

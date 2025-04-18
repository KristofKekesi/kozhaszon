
import { ReactNode, Suspense } from 'react'
import 'dap-design-system/dist/light.theme.css'
import 'dap-design-system/dist/dds-reset.css'
import ClientApplication from '@/app/client-applications'


export default async function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="hu">
			<body>
				<ClientApplication>
					<Suspense>
						<main className="main" id="root">
							{children}
						</main>
					</Suspense>
				</ClientApplication>
			</body>
		</html>
	)
}
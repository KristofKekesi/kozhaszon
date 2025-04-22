
import { ReactNode, Suspense } from 'react'
import 'dap-design-system/dist/light.theme.css'
import 'dap-design-system/dist/dds-reset.css'
import ClientApplication from '@/app/client-application'


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
						<div style={{ backgroundColor: 'var(--dds-indigo-1000)', padding: 10, alignItems: 'center' }}>
							<a href="https://services.gov.hu/design-system-dev">
								<dap-ds-dap-badge variant="inverted" />
							</a>
						</div>
						<main className="main" id="root">
							{children}
						</main>
						<div style={{ backgroundColor: 'var(--dds-indigo-1000)', padding: 10, alignItems: 'center' }}>
							<a href="https://services.gov.hu/design-system-dev">
								<dap-ds-dap-badge variant="inverted" />
							</a>
						</div>
					</Suspense>
				</ClientApplication>
			</body>
		</html>
	)
}
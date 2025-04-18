"use client";

import { DapDSTypographyReact as DapDSTypography, DapDSCardReact as DapDSCard, DapDSDAPBadgeReact as DapDSDAPBadge, DapDSButtonReact } from 'dap-design-system/dist/react'

export default function Home() {
	return (<>
		<div style={{ backgroundColor: 'var(--dds-indigo-1000)', padding: 10, alignItems: 'center' }}>
			<DapDSDAPBadge variant="inverted" />
		</div>

		<div style={{paddingBlock: 20, paddingInline: 50}}>

			<DapDSTypography variant="h1">Közhasznú megoldások</DapDSTypography>
			<div style={{maxWidth: 750}}>
				<DapDSTypography variant="description">
					Ezen az oldalon olyan megoldások és információk találhatóak, amik segíthetnek adott problémák megoldásában, vagy jobb felhasználói élményt nyújtanak mint más megoldások. 
				</DapDSTypography>
			</div>

			<div style={{paddingTop: 20}} />

			<DapDSTypography variant="h3">Egészségügy</DapDSTypography>
			<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20}}>
				<DapDSCard><div style={{padding: 20}}>
					<DapDSTypography variant="h5">Laboreredmények digitalizálása</DapDSTypography>
					<DapDSButtonReact variant="outline" style={{paddingTop: '10px'}} href="/egeszsegugy/laboreredmeny">Tovább</DapDSButtonReact>
				</div></DapDSCard>
				<DapDSCard><div style={{padding: 20}}>
					<DapDSTypography variant="h5">Diagnosztizált betegségek digitalizálása</DapDSTypography>
					<DapDSButtonReact variant="outline" disabled style={{paddingTop: '10px'}}>Később</DapDSButtonReact>
				</div></DapDSCard>
				<DapDSCard><div style={{padding: 20}}>
					<DapDSTypography variant="h5">Allergiák digitalizálása</DapDSTypography>
					<DapDSButtonReact variant="outline" disabled style={{paddingTop: '10px'}}>Később</DapDSButtonReact>
				</div></DapDSCard>
				<DapDSCard><div style={{padding: 20}}>
					<DapDSTypography variant="h5">Műtétek digitalizálása</DapDSTypography>
					<DapDSButtonReact variant="outline" disabled style={{paddingTop: '10px'}}>Később</DapDSButtonReact>
				</div></DapDSCard>
				<DapDSCard><div style={{padding: 20}}>
					<DapDSTypography variant="h5">Oltások digitalizálása</DapDSTypography>
					<DapDSButtonReact variant="outline" disabled style={{paddingTop: '10px'}}>Később</DapDSButtonReact>
				</div></DapDSCard>
			</div>

			<div style={{paddingTop: 20}} />

			<DapDSTypography variant="h3">Budapesti Közgyűlés</DapDSTypography>
			<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20}}>
				<DapDSCard><div style={{padding: 20}}>
					<DapDSTypography variant="h5">Einfoszab API dokumentációja</DapDSTypography>
					<DapDSButtonReact variant="outline" disabled style={{paddingTop: '10px'}}>Később</DapDSButtonReact>
				</div></DapDSCard>
			</div>

		</div>

		<div style={{ backgroundColor: 'var(--dds-indigo-1000)', padding: 10 }}>
			<DapDSDAPBadge variant="inverted" />
		</div>
	</>);
}

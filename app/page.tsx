"use client";

import dynamic from 'next/dynamic';

// Dynamically import components with SSR disabled
const DapDSTypography = dynamic(() =>
	import('dap-design-system/dist/react').then((mod) => mod.DapDSTypographyReact),
	{ ssr: false }
);
const DapDSCard = dynamic(() =>
	import('dap-design-system/dist/react').then((mod) => mod.DapDSCardReact),
	{ ssr: false }
);
const DapDSDAPBadge = dynamic(() =>
	import('dap-design-system/dist/react').then((mod) => mod.DapDSDAPBadgeReact),
	{ ssr: false }
);
const DapDSButton = dynamic(() =>
	import('dap-design-system/dist/react').then((mod) => mod.DapDSButtonReact),
	{ ssr: false }
);
const DapDSBadge = dynamic(() =>
	import('dap-design-system/dist/react').then((mod) => mod.DapDSBadgeReact),
	{ ssr: false }
);

export default function Home() {
	return (<>
		<div style={{ backgroundColor: 'var(--dds-indigo-1000)', padding: 10, alignItems: 'center' }}>
			<a href="https://services.gov.hu/design-system-dev">
				<DapDSDAPBadge variant="inverted" />
			</a>
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
				<DapDSCard><div style={{padding: 20, height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
					<div>
						<DapDSBadge type="brand" style={{paddingBottom: "10px"}}>Kezelő felület</DapDSBadge>
						<DapDSTypography variant="h5">Laboreredmények digitalizálása</DapDSTypography>
						<DapDSTypography variant="body">Meglévő laboreredmények digitalizálása hordozható FHIR formátumba.</DapDSTypography>
					</div>
					<DapDSButton variant="subtle" style={{paddingTop: '10px'}} href="/egeszsegugy/laboreredmeny">Tovább</DapDSButton>
				</div></DapDSCard>
				<DapDSCard><div style={{padding: 20, height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
					<div>
						<DapDSBadge type="brand" style={{paddingBottom: "10px"}}>Kezelő felület</DapDSBadge>
						<DapDSTypography variant="h5">Oltások digitalizálása</DapDSTypography>
						<DapDSTypography variant="body">Már beadott oltások digitalizálása hordozható FHIR formátumba.</DapDSTypography>
					</div>
					<DapDSButton variant="subtle" style={{paddingTop: '10px'}} href="/egeszsegugy/oltas">Folyamatban</DapDSButton>
				</div></DapDSCard>
				<DapDSCard><div style={{padding: 20, height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
					<div>
						<DapDSBadge type="brand" style={{paddingBottom: "10px"}}>Kezelő felület</DapDSBadge>
						<DapDSTypography variant="h5">Diagnosztizált betegségek digitalizálása</DapDSTypography>
						<DapDSTypography variant="body">Meglévő diagnózisok digitalizálása hordozható FHIR formátumba.</DapDSTypography>
					</div>
					<DapDSButton variant="subtle" disabled style={{paddingTop: '10px'}}>Várható</DapDSButton>
				</div></DapDSCard>
				<DapDSCard><div style={{padding: 20, height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
					<div>
						<DapDSBadge type="brand" style={{paddingBottom: "10px"}}>Kezelő felület</DapDSBadge>
						<DapDSTypography variant="h5">Allergiák digitalizálása</DapDSTypography>
						<DapDSTypography variant="body">Meglévő allergia vizsgálatok digitalizálása hordozható FHIR formátumba.</DapDSTypography>
					</div>
					<DapDSButton variant="subtle" disabled style={{paddingTop: '10px'}}>Várható</DapDSButton>
				</div></DapDSCard>
				<DapDSCard><div style={{padding: 20, height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
					<div>
						<DapDSBadge type="brand" style={{paddingBottom: "10px"}}>Kezelő felület</DapDSBadge>
						<DapDSTypography variant="h5">Műtétek digitalizálása</DapDSTypography>
						<DapDSTypography variant="body">Műtétek digitalizálása hordozható FHIR formátumba.</DapDSTypography>
					</div>
					<DapDSButton variant="subtle" disabled style={{paddingTop: '10px'}}>Várható</DapDSButton>
				</div></DapDSCard>
				<DapDSCard><div style={{padding: 20, height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
					<div>
						<DapDSBadge type="brand" style={{paddingBottom: "10px"}}>Kezelő felület</DapDSBadge>
						<DapDSTypography variant="h5">Felírt gyógyszerek digitalizálása</DapDSTypography>
						<DapDSTypography variant="body">Már felírt gyógyszerek és gyógyszeradagolás digitalizálása hordozható FHIR formátumba.</DapDSTypography>
					</div>
					<DapDSButton variant="subtle" disabled style={{paddingTop: '10px'}}>Várható</DapDSButton>
				</div></DapDSCard>
				<DapDSCard><div style={{padding: 20, height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
					<div>
						<DapDSBadge type="brand" style={{paddingBottom: "10px"}}>Kezelő felület</DapDSBadge>
						<DapDSTypography variant="h5">CDA szerkesztő</DapDSTypography>
						<DapDSTypography variant="body">Egészségügyi dokumentumok digitalizálása CDA formátumba.</DapDSTypography>
					</div>
					<DapDSButton variant="subtle" disabled style={{paddingTop: '10px'}}>Várható</DapDSButton>
				</div></DapDSCard>
			</div>

			<div style={{paddingTop: 20}} />

			<DapDSTypography variant="h3">Információ szabadság</DapDSTypography>
			<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20}}>
				<DapDSCard><div style={{padding: 20, height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
					<div>
						<DapDSBadge type="brand" style={{paddingBottom: "10px"}}>Dokumentáció</DapDSBadge>	
						<DapDSTypography variant="h5">Einfoszab API dokumentációja</DapDSTypography>
						<DapDSTypography variant="body">Budapest információszabadság oldalának nem hivatalos API dokumentációja.</DapDSTypography>
					</div>
					<DapDSButton variant="subtle" disabled style={{paddingTop: '10px'}}>Folyamatban</DapDSButton>
				</div></DapDSCard>
				<DapDSCard><div style={{padding: 20, height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
					<div>
						<DapDSBadge type="brand" style={{paddingBottom: "10px"}}>Fájl</DapDSBadge>
						<DapDSTypography variant="h5">Település katalógus</DapDSTypography>
						<DapDSTypography variant="body">Katalógus Magyarország (valószínűleg) minden településéről.</DapDSTypography>
					</div>
					<DapDSButton variant="subtle" disabled style={{paddingTop: '10px'}}>Folyamatban</DapDSButton>
				</div></DapDSCard>
				<DapDSCard><div style={{padding: 20, height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
					<div>
						<DapDSBadge type="brand" style={{paddingBottom: "10px"}}>Kód részlet</DapDSBadge>
						<DapDSTypography variant="h5">Parlament API</DapDSTypography>
						<DapDSTypography variant="body">A Parlament API válaszából kivett információk visszaszerzése.</DapDSTypography>
					</div>
					<DapDSButton variant="subtle" disabled style={{paddingTop: '10px'}}>Várható</DapDSButton>
				</div></DapDSCard>
			</div>

		</div>

		<div style={{ backgroundColor: 'var(--dds-indigo-1000)', padding: 10, alignItems: 'center' }}>
			<a href="https://services.gov.hu/design-system-dev">
				<DapDSDAPBadge variant="inverted" />
			</a>
		</div>
	</>);
}

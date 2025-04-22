"use client";

import dynamic from 'next/dynamic';

const DapDSAccordion = dynamic(() =>
	import('dap-design-system/dist/react').then((mod) => mod.DapDSAccordionReact),
	{ ssr: false }
);
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
const DapDSInput = dynamic(() =>
	import('dap-design-system/dist/react').then((mod) => mod.DapDSInputReact),
	{ ssr: false }
);
const DapDSDatePicker = dynamic(() =>
	import('dap-design-system/dist/react').then((mod) => mod.DapDSDatePickerReact),
	{ ssr: false }
);
const DapDSButton = dynamic(() =>
	import('dap-design-system/dist/react').then((mod) => mod.DapDSButtonReact),
	{ ssr: false }
);
const DapDSDivider = dynamic(() =>
	import('dap-design-system/dist/react').then((mod) => mod.DapDSDividerReact),
	{ ssr: false }
);
const DapDSSearch = dynamic(() =>
	import('dap-design-system/dist/react').then((mod) => mod.DapDSSearchReact),
	{ ssr: false }
);
const DapDSFileInput = dynamic(() =>
	import('dap-design-system/dist/react').then((mod) => mod.DapDSFileInputReact),
	{ ssr: false }
);
const DapDSCallout = dynamic(() =>
	import('dap-design-system/dist/react').then((mod) => mod.DapDSCalloutReact),
	{ ssr: false }
);
const DapDSBreadcrumb = dynamic(() =>
	import('dap-design-system/dist/react').then((mod) => mod.DapDSBreadcrumbReact),
	{ ssr: false }
);
const DapDSBreadcrumbItem = dynamic(() =>
	import('dap-design-system/dist/react').then((mod) => mod.DapDSBreadcrumbItemReact),
	{ ssr: false }
);
const DapDSLink = dynamic(() =>
	import('dap-design-system/dist/react').then((mod) => mod.DapDSLinkReact),
	{ ssr: false }
);

export default function Home() {
	return (<>
		<div style={{ backgroundColor: 'var(--dds-indigo-1000)', padding: 10 }}>
			<DapDSDAPBadge variant="inverted" />
		</div>

		<div style={{paddingBlock: 20, paddingInline: 50}}>
			<DapDSBreadcrumb>
				<DapDSBreadcrumbItem href='/'>Kezdőoldal</DapDSBreadcrumbItem>
				<DapDSBreadcrumbItem>Egészségügy</DapDSBreadcrumbItem>
				<DapDSBreadcrumbItem>Oltások digitalizálása</DapDSBreadcrumbItem>
			</DapDSBreadcrumb>

			<div style={{paddingTop: 20}} />

			<DapDSTypography variant="h1">Oltások digitalizálása</DapDSTypography>
			<div style={{maxWidth: 750}}>
				<DapDSTypography variant="description">
					Digitalizáld meglévő egészségügyi adataidat
					<DapDSLink href='https://smarthealth.cards/en/'>Smart Health Card</DapDSLink> formátumba, amelyet az <DapDSLink href='https://www.apple.com/hu/health/'>Apple Health</DapDSLink> alkalmazásba importálva átláthatóbb és könnyebben kezelhető formában böngészhetsz.
				</DapDSTypography>
			</div>

			<div style={{paddingTop: 20}} />

			<DapDSCallout title="Adatvédelem" variant="brand">
				Az oldal használata során semmilyen személyes adata nem kerül eltárolásra. <br />
				A oldal biztonságát a nyílt forráskód biztosítja, amely megtalálható a <DapDSLink href='https://github.com/KristofKekesi/kozhaszon'>github.com</DapDSLink> linken.
			</DapDSCallout>

			<div style={{paddingTop: 20}} />

			<DapDSTypography variant="h3">Importálás</DapDSTypography>
			<DapDSCard><div style={{padding: 20}}>
				<DapDSTypography variant="h5">Fájl / QR Kód</DapDSTypography>
				<DapDSTypography variant="body">Helyes fájl az oldalon készült JSON fájl, vagy QR kód, illetve a SmartHealthCards standard szerinti FHIR adatot tartalmazó JSON fájl vagy QR kód.</DapDSTypography>
				<div style={{display: 'flex', flexDirection: 'row', alignItems: "end", gap: 10}}>
					<DapDSFileInput />
					<DapDSButton variant="outline" disabled size="sm">QR kód</DapDSButton>
				</div>
			</div></DapDSCard>

			<div style={{paddingTop: 20}} />

			<DapDSTypography variant="h3">Alap Adatok</DapDSTypography>
			<DapDSCard><div style={{padding: 20}}>
				<DapDSTypography variant="h5">Páciens</DapDSTypography>
				<div style={{display: 'flex', flexDirection: 'row', gap: 10}}>
					<div style={{flex: 1}}>
						<DapDSTypography variant="body">Vezetéknév</DapDSTypography>
						<DapDSInput placeholder="Petőfi" />
					</div>
					<div style={{flex: 1}}>
						<DapDSTypography variant="body">Keresztnév</DapDSTypography>
						<DapDSInput placeholder="Sándor" />
					</div>
				</div>
				<div>
					<DapDSTypography variant="body">Születési idő</DapDSTypography>
					<DapDSDatePicker />
				</div>
			</div>

			<DapDSDivider />

			<div style={{padding: 20}}>
				<DapDSTypography variant="h5">Vizsgálat</DapDSTypography>
				<DapDSTypography variant="body">Intézmény neve</DapDSTypography>
				<DapDSInput placeholder="Synlab Székesfehérvári Laboratórium" />
				<div>
					<DapDSTypography variant="body">Vizsgálat ideje</DapDSTypography>
					<DapDSDatePicker />
				</div>

				<div style={{paddingTop: 20}} />

				<DapDSAccordion>
					<span slot="heading">Haladó beállítások</span>
					<DapDSTypography variant="body">Oltás típusa</DapDSTypography>
				</DapDSAccordion>
			</div></DapDSCard>

			<div style={{paddingTop: 20}} />

			<DapDSTypography variant="h3">Vizsgálat eredményei</DapDSTypography>
			<DapDSCard>
				<div style={{padding: 20}}>
					<DapDSTypography variant="h5">Szűrés</DapDSTypography>
					<DapDSSearch />
				</div>

				<DapDSDivider />

				<div style={{padding: 20, display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'space-between'}}>
					<div>
						<DapDSTypography variant="h5">GOT</DapDSTypography>
						<DapDSTypography variant="body">2 U/L</DapDSTypography>
					</div>

					<div style={{display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center'}}>
						<DapDSTypography variant="caption">Határon belül</DapDSTypography>
						<div style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center'}}>
							<DapDSTypography variant="caption">0 U/L</DapDSTypography>
							<div style={{display: 'flex', flexDirection: 'row', gap: 2}}>
								<div style={{backgroundColor: 'var(--dds-white-100)', height: '12px', width: '24px', borderTopLeftRadius: '999px', borderBottomLeftRadius: '999px'}} />
								<div style={{backgroundColor: 'var(--dds-positive-800)', height: '12px', width: '32px'}} />
								<div style={{backgroundColor: 'var(--dds-white-100)', height: '12px', width: '24px', borderTopRightRadius: '999px', borderBottomRightRadius: '999px'}} />
							</div>
							<DapDSTypography variant="caption">30 U/L</DapDSTypography>
						</div>
					</div>
				</div>

				<div style={{padding: 20, display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'space-between'}}>
					<div>
						<DapDSTypography variant="h5">GPT</DapDSTypography>
						<DapDSTypography variant="body">31 U/L</DapDSTypography>
					</div>

					<div style={{display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center'}}>
						<DapDSTypography variant="caption">Határon kívül</DapDSTypography>
						<div style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center'}}>
							<DapDSTypography variant="caption">0 U/L</DapDSTypography>
							<div style={{display: 'flex', flexDirection: 'row', gap: 2}}>
								<div style={{backgroundColor: 'var(--dds-white-100)', height: '12px', width: '24px', borderTopLeftRadius: '999px', borderBottomLeftRadius: '999px'}} />
								<div style={{backgroundColor: 'var(--dds-white-100)', height: '12px', width: '32px'}} />
								<div style={{backgroundColor: 'var(--dds-negative-700)', height: '12px', width: '24px', borderTopRightRadius: '999px', borderBottomRightRadius: '999px'}} />
							</div>
							<DapDSTypography variant="caption">30 U/L</DapDSTypography>
						</div>
					</div>
				</div>
			
			</DapDSCard>

			<DapDSButton variant="primary" style={{marginTop: 20}}>Eredmények átalakítása</DapDSButton>
		</div>

		<div style={{ backgroundColor: 'var(--dds-indigo-1000)', padding: 10 }}>
			<DapDSDAPBadge variant="inverted" />
		</div>
	</>);
}

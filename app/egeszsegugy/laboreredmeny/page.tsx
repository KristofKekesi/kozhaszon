"use client";

import { DapDSTypographyReact as DapDSTypography, DapDSCardReact as DapDSCard, DapDSDAPBadgeReact as DapDSDAPBadge, DapDSInputReact as DapDSInput, DapDSDatePickerReact as DapDSDatePicker, DapDSButtonReact as DapDSButton, DapDSDividerReact as DapDSDivider, DapDSSearchReact as DapDSSearch, DapDSFileInputReact as DapDSFileInput, DapDSCalloutReact, DapDSBreadcrumbReact, DapDSBreadcrumbItemReact, DapDSLinkReact } from 'dap-design-system/dist/react'

export default function Home() {
	return (<>
		<div style={{ backgroundColor: 'var(--dds-indigo-1000)', padding: 10 }}>
			<DapDSDAPBadge variant="inverted" />
		</div>

		<div style={{paddingBlock: 20, paddingInline: 50}}>
			<DapDSBreadcrumbReact>
				<DapDSBreadcrumbItemReact href='/'>Kezdőoldal</DapDSBreadcrumbItemReact>
				<DapDSBreadcrumbItemReact>Egészségügy</DapDSBreadcrumbItemReact>
				<DapDSBreadcrumbItemReact>Laboreredmények digitalizálása</DapDSBreadcrumbItemReact>
			</DapDSBreadcrumbReact>

			<div style={{paddingTop: 20}} />

			<DapDSTypography variant="h1">Laboreredmények digitalizálása</DapDSTypography>
			<div style={{maxWidth: 750}}>
				<DapDSTypography variant="description">
					Digitalizáld meglévő egészségügyi adataidat
					<DapDSLinkReact>Smart Health Card</DapDSLinkReact> formátumba, amelyet az <DapDSLinkReact>Apple Health</DapDSLinkReact> alkalmazásba importálva átláthatóbb és könnyebben kezelhető formában böngészhetsz.
				</DapDSTypography>
			</div>

			<div style={{paddingTop: 20}} />

			<DapDSCalloutReact title="info" variant="brand">
				Az oldal használata során semmilyen személyes adata nem kerül eltárolásra. <br />
				A oldal biztonságát a nyílt forráskód biztosítja, amely megtalálható a <DapDSLinkReact>github.com</DapDSLinkReact> linken.
			</DapDSCalloutReact>

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

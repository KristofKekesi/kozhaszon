"use client";

import { DdsInputEvent } from "dap-design-system";
import { useState } from "react";

const EINFOSZAB_API_BASE_URL = "https://service-einfoszab.budapest.hu/api/";

const EINFOSZAB_PERSON_TYPE = `{
  type: number,
  name: string,
  inaugural: unknown,
  photo: unknown,
  party: unknown,
  biography: unknown,
  scopeofDuties: unknown,
  leadrofBudapest: boolean,
  title: number,
  memberOfFraction: boolean,
  fraction: number,
  fractionPosition: number,
  wealthDeclaration: unknown,
  collectionOfSpeeches: unknown,
  memberOfCommitte: Array<unknown>,
  availability: string,
  telephoneNumber: string,
  telefaxNumber: string,
  email: string
  webpage: unknown,
  blogSite: unknown,
  councilor: boolean,
  counselingPosition: unknown,
  memberOfTheGeneralAssembly: boolean,
  dataProtectionOfficier: boolean,
  nameWithTitle: string,
  reports: unknown,
  id: number,
  state: number,
  declineReason: unknown,
  changedAt: Date,
  changedBy: string
  publishingDate: unknown
}`;

export default function Home() {
	const [url, setURL] = useState(EINFOSZAB_API_BASE_URL);

	
	
	return (
		<div style={{paddingBlock: 20, paddingInline: 50}}>
			<dap-ds-breadcrumb>
				<dap-ds-breadcrumb-item href='/'>Kezdőoldal</dap-ds-breadcrumb-item>
				<dap-ds-breadcrumb-item>Információ szabadság</dap-ds-breadcrumb-item>
				<dap-ds-breadcrumb-item>Einfoszab API dokumentációja</dap-ds-breadcrumb-item>
			</dap-ds-breadcrumb>

			<div style={{paddingTop: 20}} />

			<dap-ds-typography variant="h1">Einfoszab API dokumentációja</dap-ds-typography>
			<div style={{maxWidth: 750}}>
				<dap-ds-typography variant="description">
					Az <dap-ds-link href="https://einfoszab.budapest.hu/home">einfoszab.budapest.hu</dap-ds-link> weboldalt kiszolgáló API nem hivatalos dokumentációja. Az API valós idejű adatokat tartalmaz, korábbi önkormányzati adatok tudtommal nem elérhetőek rajta.
				</dap-ds-typography>
			</div>

			<div style={{paddingTop: 20}} />

			<dap-ds-callout title="Nem hivatalos dokumentáció" variant="brand">
				Az API-t bármelyik nap módosíthatják, így a dokumentáció helyessége idővel változhat.
				<br />
				Legutóbbi ellenőrzés: 2025 április 23.
			</dap-ds-callout>

			<div style={{paddingTop: 20}} />

			<dap-ds-typography variant="h2">Alapok</dap-ds-typography>
			<dap-ds-typography variant="body">Base URL</dap-ds-typography>
			<dap-ds-copybox-input readonly value={EINFOSZAB_API_BASE_URL} />

			<div style={{paddingTop: 20}} />

			<dap-ds-typography variant="h3">Típusok</dap-ds-typography>
			<dap-ds-card>
				<div style={{padding: 20}}>
					<dap-ds-typography variant="h4" id="person">Person</dap-ds-typography>
					<div style={{display: "flex", gap: 20}}>
						<dap-ds-card>
							<div style={{padding: 20}}>
								<pre>{EINFOSZAB_PERSON_TYPE}</pre>
							</div>
						</dap-ds-card>
						<div>
							<ul style={{paddingLeft: 20, paddingBottom: 20}}>
								<li>type: Ismeretlen jelentés.</li>
								<li>name: A személy titulus nélküli neve.</li>
								<li>inaugural: Ismeretlen jelentés.</li>
								<li>photo: Kép a személyről.</li>
								<li>party: A személy párt hova tartozása.</li>
								<li>biography: A személy önéletrajza.</li>
								<li>scopeofDuties: Ismeretlen jelentés.</li>
								<li>leadrofBudapest: Budapest vezetője e.</li>
							</ul>
							<dap-ds-callout title="Elírás" variant="warning">
								Az személyek &apos;leadrofBudapest&apos; mezője elírást tartalmaz.
							</dap-ds-callout>
							<ul style={{paddingLeft: 20, paddingTop: 20}}>
								<li>title: Referencia a személy foglalkozásának megnevezésére.</li>
								<li>memberOfFraction: Tagja e a személy egy fővárosi közgyűlés frakciójának.</li>
								<li>fraction: Referencia a személy frakciójának.</li>
								<li>fractionPosition: Referencia a személy frakcióban betöltött szerepére.</li>
							</ul>
						</div>
					</div>

					<div style={{paddingTop: 20}} />

					<dap-ds-typography variant="h4" id="fraction">Fraction</dap-ds-typography>
					<dap-ds-typography variant="body">Még nem dokumentált.</dap-ds-typography>

					<div style={{paddingTop: 20}} />

					<dap-ds-typography variant="h4" id="comitte">Comitte</dap-ds-typography>
					<dap-ds-typography variant="body">Még nem dokumentált.</dap-ds-typography>
				</div>
			</dap-ds-card>

			<div style={{paddingTop: 20}} />

			<dap-ds-typography variant="h2">Végpontok</dap-ds-typography>
			<dap-ds-typography variant="h3">Személyek lekérdezése</dap-ds-typography>
			<dap-ds-card>
				<div style={{padding: 20}}>
					<dap-ds-typography variant="h4">person/[id]</dap-ds-typography>
					<dap-ds-typography variant="body">Személy lekérdezése azonosító alapján.</dap-ds-typography>
					<div style={{display: "flex", gap: 5, alignItems: "baseline"}}>
						<dap-ds-typography variant="body">Végpont példa URL:</dap-ds-typography>
						<pre>https://service-einfoszab.budapest.hu/api/person/4003</pre>
					</div>
					<div style={{display: "flex", gap: 5, alignItems: "baseline"}}>
						<dap-ds-typography variant="body">Válasz:</dap-ds-typography>
						<pre><a href="#person">Person</a></pre>
					</div>

					<div style={{paddingTop: 20}} />

					<dap-ds-typography variant="h4">person/membersofthegeneralassembly</dap-ds-typography>
					<dap-ds-typography variant="body">Fővárosi közgyűlés résztvevőinek a lekérdezése.</dap-ds-typography>
					<div style={{display: "flex", gap: 5, alignItems: "baseline"}}>
						<dap-ds-typography variant="body">Végpont URL:</dap-ds-typography>
						<pre>https://service-einfoszab.budapest.hu/api/person/membersofthegeneralassembly</pre>
					</div>
					<div style={{display: "flex", gap: 5, alignItems: "baseline"}}>
						<dap-ds-typography variant="body">Válasz:</dap-ds-typography>
						<pre>Array&lt;<a href="#person">Person</a>&gt;</pre>
					</div>

					<div style={{paddingTop: 20}} />

					<dap-ds-typography variant="h4">person/membersoffractions</dap-ds-typography>
					<dap-ds-typography variant="body">Személyek csoportosítása frakciók szerint.</dap-ds-typography>
					<div style={{display: "flex", gap: 5, alignItems: "baseline"}}>
						<dap-ds-typography variant="body">Végpont URL:</dap-ds-typography>
						<pre>https://service-einfoszab.budapest.hu/api/person/membersoffractions</pre>
					</div>
					<div style={{display: "flex", gap: 5, alignItems: "baseline"}}>
						<dap-ds-typography variant="body">Válasz:</dap-ds-typography>
						<pre>Array&lt;<a href="#fraction">Fraction</a>&gt;</pre>
					</div>

					<div style={{paddingTop: 20}} />

					<dap-ds-typography variant="h4">person/councilors</dap-ds-typography>
					<dap-ds-typography variant="body">Még nem dokumentált.</dap-ds-typography>

					<div style={{paddingTop: 20}} />

					<dap-ds-typography variant="h4">person/budapestleaders</dap-ds-typography>
					<dap-ds-typography variant="body">Még nem dokumentált.</dap-ds-typography>

					<div style={{paddingTop: 20}} />

					<dap-ds-typography variant="h4">person/dataProtectionOfficiers</dap-ds-typography>
					<dap-ds-typography variant="body">Még nem dokumentált.</dap-ds-typography>
				</div>
			</dap-ds-card>
			
			<div style={{paddingTop: 20}} />

			<dap-ds-typography variant="h3">Kiegészító információk</dap-ds-typography>
			<dap-ds-card>
				<div style={{padding: 20}}>
					<dap-ds-typography variant="h4">options/committe_Id</dap-ds-typography>
					<dap-ds-typography variant="body">Még nem dokumentált.</dap-ds-typography>

					<div style={{paddingTop: 20}} />

					<dap-ds-typography variant="h4">options/position_Id</dap-ds-typography>
					<dap-ds-typography variant="body">Még nem dokumentált.</dap-ds-typography>
				</div>
			</dap-ds-card>

			<div style={{paddingTop: 20}} />

			<dap-ds-typography variant="h2">Sandbox</dap-ds-typography>
			<dap-ds-card><div style={{padding: 20, display: "flex", gap: 10}}>
					<dap-ds-copybox-input key={url} value={url} style={{width: "100%"}} ondds-input={(e: DdsInputEvent) => {
						const value = e.detail.value as string;
						if (!value.includes(EINFOSZAB_API_BASE_URL)) {
							setURL(EINFOSZAB_API_BASE_URL);
						} else {
							setURL(value);
						}
					}} />
					<dap-ds-button>GET</dap-ds-button>
			</div>
			<dap-ds-divider />
			<div style={{padding: 20}}>
				<dap-ds-typography variant="body">Folyamatban.</dap-ds-typography>
				<pre></pre>
			</div></dap-ds-card>

			<div style={{paddingTop: 30}} />
		</div>
	);
}

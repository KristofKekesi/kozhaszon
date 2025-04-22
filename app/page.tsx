"use client";

import { Card, CardProps } from "./components/card";

export default function Home() {
	const data: Record<string, CardProps[]> = {
		"Egészségügy": [
			{
				title: "Laboreredmények digitalizálása",
				tags: ["Kezelő felület"],
				description: "Meglévő laboreredmények digitalizálása hordozható FHIR alapú formátumba.",
				state: "done",
				href: "/egeszsegugy/laboreredmeny"
			},
			{
				title: "Oltások digitalizálása",
				tags: ["Kezelő felület"],
				description: "Már beadott oltások digitalizálása hordozható FHIR alapú formátumba.",
				state: "doing"
			},
			{
				title: "Diagnosztizált betegségek és állapotok digitalizálása",
				tags: ["Kezelő felület"],
				description: "Meglévő diagnózisok digitalizálása hordozható FHIR alapú formátumba.",
				state: "doing"
			},
			{
				title: "Allergiák digitalizálása",
				tags: ["Kezelő felület"],
				description: "Meglévő allergia vizsgálatok digitalizálása hordozható FHIR formátumba.",
				state: "plan"
			},
			{
				title: "Műtétek digitalizálása",
				tags: ["Kezelő felület"],
				description: "Műtétek digitalizálása hordozható FHIR alapú formátumba.",
				state: "plan"
			},
			{
				title: "Felírt gyógyszerek digitalizálása",
				tags: ["Kezelő felület"],
				description: "Már felírt gyógyszerek és gyógyszeradagolás digitalizálása hordozható FHIR alapú formátumba.",
				state: "plan"
			},
			{
				title: "CDA szerkesztő",
				tags: ["Kezelő felület"],
				description: "Egészségügyi dokumentumok digitalizálása CDA formátumba.",
				state: "plan"
			}
		],
		"Információ szabadság": [
			{
				title: "Település katalógus",
				tags: ["Fájl"],
				description: "Katalógus Magyarország (valószínűleg) minden településéről.",
				state: "done",
				href: "/fajl/telepulesek.csv",
			},
			{
				title: "Einfoszab API dokumentációja",
				tags: ["Dokumentáció"],
				description: "Budapest információszabadság oldalának nem hivatalos API dokumentációja.",
				state: "doing",
				href: "/informacio-szabadsag/einfoszab-api"
			},
			{
				title: "Parlament API",
				tags: ["Kód részlet"],
				description: "A Parlament API válaszából kivett információk visszaszerzése.",
				state: "plan"
			}
		],
		"Digitális fejlettség": [
			{
				title: "DÁP Design System 0.34.6 Developer Experience",
				tags: ["Visszajelzés"],
				description: "Visszajelzés a DÁP Design System 0.34.6-os verziójáról fejlesztői szempontok szerint.",
				state: "doing"
			},
			{
				title: "MOHU RePont alkalmazás",
				tags: ["Visszajelzés"],
				description: "Felhasználói visszajelzések a MOHU RePont alkalmazásával kapcsolatban.",
				state: "plan"
			}
		]
	};

	return (<>
		<div style={{paddingBlock: 20, paddingInline: 50}}>
			<dap-ds-typography variant="h1">Közhasznú megoldások</dap-ds-typography>
			<div style={{maxWidth: 750}}>
				<dap-ds-typography variant="description">
					Ezen az oldalon olyan megoldások és információk találhatóak, amik segíthetnek adott problémák megoldásában, vagy jobb felhasználói élményt nyújtanak mint más megoldások. 
				</dap-ds-typography>
			</div>

			<div style={{paddingTop: 20}} />

			<div
				style={{
					paddingTop: 20,
					display: "flex",
					flexDirection: "column",
					gap: 20,
				}}
			>
				{Object.entries(data).map(([key, cardProps]) => (
					<div key={key}>
						<dap-ds-typography variant="h3">{key}</dap-ds-typography>

						<div style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
							gap: 20,
						}}>
							{cardProps.map((cardProp, index) => (
								<Card key={index} {...cardProp} />
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	</>);
}

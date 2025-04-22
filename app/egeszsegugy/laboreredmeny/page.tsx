"use client";

import { ObservationDisplay } from '@/app/components/observation';
import { DdsInputEvent } from 'dap-design-system';
import { CodeableConcept, Coding, Observation, Patient } from 'fhir/r5';
import { useState } from 'react';
import presets from "@/app/egeszsegugy/laboreredmeny/presets.json";
import bodySites from "@/app/egeszsegugy/laboreredmeny/body-sites.json";

const typedPresets: CodeableConcept[] = presets;
const typedBodySites: CodeableConcept[] = bodySites;

export default function Home() {
	const [rawSHC, setRawSHC] = useState<object>({});

	const [observation, setObservation] = useState<Observation>({
		status: "final",
		resourceType: 'Observation',
		meta: {
			lastUpdated: new Date().toISOString()
		},
		subject: {
			reference: "resource:patient",
		},
		code: {
			text: ""
		},
	});
	const [patient, setPatient] = useState<Patient>({
		resourceType: 'Patient',
		name: [{ family: '', given: [] }],
	});

	const [observations, setObservations] = useState<Observation[]>([]);

	const samples: string[] = [];
	observations.forEach(observation => {
		const sample = observation.bodySite?.coding?.[0];
		if (samples.includes(sample?.code ?? "")) {
			samples.push(sample?.code ?? "");
		}
	});

	function handleObservationCodingChange(key: keyof Coding, value: string, system: string) {
		setObservation({
			...observation,
			code: {
				...observation.code,
				coding: observation.code.coding?.some(coding => coding.system === system) ?
				(observation.code.coding??[{
					system
				}]).map(coding => {
					if (coding.system === system) {
						return {
							...coding,
							[key]: value
						};
					}
					return coding;
				})
				: [
					...(observation.code.coding ?? []), {
						system,
						[key]: value
					}
				]
			}
		});
	}

	function handleNewObservation(observation: Observation) {
		setObservations([...observations, observation]);
	}

	function handleDeleteObservation(uuid: string) {
		setObservations(observations.toReversed().filter((_, index) => index.toString() !== uuid));
	}

	function handleGenerateSHC() {
		const shc = {
			resourceType: "Bundle",
			id: "ghp",
			type: "collection",
			entry: [
				{
					fullUrl: "resource:patient",
					resource: patient
				},
				...observations.map((observation, index) => ({
					fullUrl: `resource:observation-${index}`,
					resource: {
						...observation,
						subject: {
							reference: "resource:patient",
							display: `${patient.name?.[0].family} ${patient.name?.[0].given?.join(" ")}`
						}
					}
				}))
			]
		};

		setRawSHC(shc);
	}

	return (
		<div style={{paddingBlock: 20, paddingInline: 50}}>
			<dap-ds-breadcrumb>
				<dap-ds-breadcrumb-item href='/'>Kezdőoldal</dap-ds-breadcrumb-item>
				<dap-ds-breadcrumb-item>Egészségügy</dap-ds-breadcrumb-item>
				<dap-ds-breadcrumb-item>Laboreredmények digitalizálása</dap-ds-breadcrumb-item>
			</dap-ds-breadcrumb>

			<div style={{paddingTop: 20}} />

			<dap-ds-typography variant="h1">Laboreredmények digitalizálása</dap-ds-typography>
			<div style={{maxWidth: 750}}>
				<dap-ds-typography variant="description">
					Digitalizáld meglévő egészségügyi adataidat
					<dap-ds-link href='https://smarthealth.cards/en/'>Smart Health Card</dap-ds-link> formátumba, amelyet az <dap-ds-link href='https://www.apple.com/hu/health/'>Apple Health</dap-ds-link> alkalmazásba importálva átláthatóbb és könnyebben kezelhető formában böngészhetsz.
				</dap-ds-typography>
			</div>

			<div style={{paddingTop: 20}} />

			<dap-ds-callout title="Adatvédelem" variant="brand">
				Az oldal használata során semmilyen személyes adata nem kerül eltárolásra más számítógépeken. <br />
				A oldal biztonságát a nyílt forráskód biztosítja, amely megtalálható a <dap-ds-link href='https://github.com/KristofKekesi/kozhaszon'>github.com</dap-ds-link> linken.
			</dap-ds-callout>

			<div style={{paddingTop: 20}} />

			<dap-ds-typography variant="h3">Alap Adatok</dap-ds-typography>
			<dap-ds-card><div style={{padding: 20}}>
				<dap-ds-typography variant="h5">Páciens</dap-ds-typography>
				<div style={{display: 'flex', flexDirection: 'row', gap: 10}}>
					<div style={{flex: 1}}>
						<dap-ds-typography variant="body">Vezetéknév</dap-ds-typography>
						<dap-ds-input placeholder="Petőfi" value={patient.name?.[0].family} ondds-input={(e: DdsInputEvent) => {
							setPatient({
								...patient,
								name: [{
									...patient.name?.[0],
									family: e.detail.value
								}]
							});
							setObservation({
								...observation,
								subject: {
									...observation.subject,
									display: `${patient.name?.[0].family} ${patient.name?.[0].given?.join(" ")}`
								}
							});
						}} />
					</div>
					<div style={{flex: 1}}>
						<dap-ds-typography variant="body">Keresztnév</dap-ds-typography>
						<dap-ds-input placeholder="Sándor" value={patient.name?.[0].given?.[0]} ondds-input={(e: DdsInputEvent) => {
							setPatient({
								...patient,
								name: [{
									...patient.name?.[0],
									given: [e.detail.value]
								}]
							});
							setObservation({
								...observation,
								subject: {
									...observation.subject,
									display: `${patient.name?.[0].family} ${patient.name?.[0].given?.join(" ")}`
								}
							});
						}} />
					</div>
				</div>
				<div>
					<dap-ds-typography variant="body">Születési idő</dap-ds-typography>
					<dap-ds-datepicker value={patient?.birthDate} ondds-input={(e: DdsInputEvent) => {
						setPatient({
							...patient,
							birthDate: e.detail.value
						});
					}} />
				</div>
			</div>

			<dap-ds-divider />

			<div style={{padding: 20}}>
				<dap-ds-typography variant="h5">Vizsgálat</dap-ds-typography>
				<dap-ds-typography variant="body">Intézmény neve</dap-ds-typography>
				<dap-ds-input placeholder="Országos Példa Intézmény" value={observation.performer?.[0].display} ondds-input={(e: DdsInputEvent) => {
					setObservation({
						...observation,
						performer: [{
							display: e.detail.value
						}]
					});
				}} />
				<div>
					<dap-ds-typography variant="body">Vizsgálat ideje</dap-ds-typography>
					<dap-ds-datepicker ondds-input={(e: DdsInputEvent) => {
						setObservation({
							...observation,
							effectiveDateTime: e.detail.value,
							issued: e.detail.value
						});
					}} />
				</div>
			</div></dap-ds-card>

			<div style={{paddingTop: 20}} />

			<dap-ds-typography variant="h3">Új eredmény</dap-ds-typography>
			<dap-ds-card>
				<div style={{padding: 20}}>
					<dap-ds-typography variant="h5">Vizsgálat neve</dap-ds-typography>
					<dap-ds-input placeholder="Például Vércukor" value={observation.code.text} ondds-input={(e: DdsInputEvent) => {
						setObservation({
							...observation,
							code: {
								...observation.code,
								text: e.detail.value
							}
						});
					}} />

					<div style={{paddingTop: 10, display: "flex", gap: 5, overflowX: "auto"}}>
						{typedPresets
							.filter((preset) => 
								preset.text?.toLowerCase().includes((observation.code.text ?? "").toLowerCase())
							)
							.map((preset, index) => (
								<dap-ds-badge key={index} type={
									observation.code.coding?.some(
										(coding) => coding.system === preset.coding?.[0]?.system && coding.code === preset.coding?.[0]?.code && observation.code.text === preset.text
									) ? "brand" : "neutral"} style={{whiteSpace: "nowrap"}}
									onClick={() => {
										setObservation({
											...observation,
											code: {
												...observation.code,
												coding: preset.coding,
												text: preset.text
											}
										});
									}}
								>{preset.text}</dap-ds-badge>
							))}
					</div>

					<div style={{paddingTop: 20, display: "flex", gap: 20}}>
						<div>
							<dap-ds-typography variant="h5">Minta</dap-ds-typography>
							<dap-ds-content-switcher>
								{typedBodySites.map((bodySite, index) => (
									<dap-ds-content-switcher-item key={index} value={String(observation.bodySite?.text === bodySite.text)} onClick={() => {
										setObservation({
											...observation,
											bodySite
										})}}
									>
										{bodySite.text}
									</dap-ds-content-switcher-item>
								))}
							</dap-ds-content-switcher>
						</div>

						<div>
							<dap-ds-typography variant="h5">Eredmény</dap-ds-typography>
							<dap-ds-content-switcher>
								<dap-ds-content-switcher-item>Szám</dap-ds-content-switcher-item>
								<dap-ds-content-switcher-item disabled value="false">Pozitív/Negatív</dap-ds-content-switcher-item>
							</dap-ds-content-switcher>
						</div>
					</div>

					<div style={{display: "flex", gap: 10, paddingTop: 20, alignItems: "end"}}>
						<div>
							<dap-ds-typography variant="h5">Érték</dap-ds-typography>
							<dap-ds-input placeholder="0" value={observation.valueQuantity?.value} type="number" ondds-input={(e: DdsInputEvent) => {
								setObservation({
									...observation,
									valueQuantity: {
										...observation.valueQuantity,
										value: Number(e.detail.value)
									}
								});
							}} />
						</div>
						<div>
							<dap-ds-typography variant="body">Mértékegység</dap-ds-typography>
							<dap-ds-input value={observation.valueQuantity?.unit} ondds-input={(e: DdsInputEvent) => {
								setObservation({
									...observation,
									valueQuantity: {
										...observation.valueQuantity,
										unit: e.detail.value,
										code: e.detail.value
									}
								});
							}} />
						</div>
					</div>

					<div style={{paddingTop: 20}} />


					<dap-ds-typography variant="h5">Referencia tartomány</dap-ds-typography>
					<div style={{display: "flex", gap: 10}}>
						<div>
							<dap-ds-typography variant="body">Kezdete</dap-ds-typography>
							<dap-ds-input placeholder="0" value={observation.referenceRange?.[0].low?.value} type="number" ondds-input={(e: DdsInputEvent) => {
								setObservation({
									...observation,
									referenceRange: [
										{
											...observation.referenceRange?.[0],
											low: {
												...observation.referenceRange?.[0]?.low,
												value: Number(e.detail.value)
											}
										}
									]
								});
							}} />
						</div>
						<div>
							<dap-ds-typography variant="body">Mértékegység</dap-ds-typography>
							<dap-ds-input value={observation.referenceRange?.[0].low?.unit}  ondds-input={(e: DdsInputEvent) => {
								setObservation({
									...observation,
									referenceRange: [
										{
											...observation.referenceRange?.[0],
											low: {
												...observation.referenceRange?.[0]?.low,
												unit: e.detail.value,
												code: e.detail.value
											}
										}
									]
								});
							}} />
						</div>
						<div style={{flex: "0", padding: "10px", display: "flex", alignItems: "center"}}>-</div>
						<div>
							<dap-ds-typography variant="body">Vége</dap-ds-typography>
							<dap-ds-input placeholder="0" value={observation.referenceRange?.[0].high?.value}  type="number" ondds-input={(e: DdsInputEvent) => {
								setObservation({
									...observation,
									referenceRange: [
										{
											...observation.referenceRange?.[0],
											high: {
												...observation.referenceRange?.[0]?.high,
												value: Number(e.detail.value)
											}
										}
									]
								});
							}} />
						</div>
						<div>
							<dap-ds-typography variant="body">Mértékegység</dap-ds-typography>
							<dap-ds-input value={observation.referenceRange?.[0].high?.unit}  ondds-input={(e: DdsInputEvent) => {
								setObservation({
									...observation,
									referenceRange: [
										{
											...observation.referenceRange?.[0],
											high: {
												...observation.referenceRange?.[0]?.high,
												unit: e.detail.value,
												code: e.detail.value
											}
										}
									]
								});
							}} />
						</div>
					</div>

					<div style={{paddingTop: 20}} />

					<dap-ds-accordion>
						<span slot="heading">Haladó beállítások</span>
						<div style={{display: 'flex', flexDirection: 'row', gap: 10}}>
							{/**<div style={{flex: 1}}>
								<dap-ds-typography variant="body">BNO / ICD-10 Azonosító</dap-ds-typography>
								<dap-ds-input placeholder="S9990" value={observation.code.coding?.find(coding => coding.system === "http://hl7.org/fhir/ValueSet/icd-10")?.code}  ondds-input={(e: DdsInputEvent) => {
									handleObservationCodingChange("code", e.detail.value, "http://hl7.org/fhir/ValueSet/icd-10");
								}} />
								<div style={{paddingTop: 10}} />
								<dap-ds-typography variant="body">BNO / ICD-10 Név</dap-ds-typography>
								<dap-ds-input value={observation.code.coding?.find(coding => coding.system === "http://hl7.org/fhir/ValueSet/icd-10")?.display} ondds-input={(e: DdsInputEvent) => {
									handleObservationCodingChange("display", e.detail.value, "http://hl7.org/fhir/ValueSet/icd-10");
								}} />

								<div style={{paddingTop: 10}} />
								<dap-ds-callout title="BNO / ICD-10 Kereső" variant="brand">
									<dap-ds-link href='https://icd.who.int/browse10/2019/en'>icd.who.int</dap-ds-link>
								</dap-ds-callout>
							</div>
							<div style={{flex: 1}}>
								<dap-ds-typography variant="body">ICD-11 Azonosító</dap-ds-typography>
								<dap-ds-input value={observation.code.coding?.find(coding => coding.system === "http://id.who.int/icd/release/11/mms")?.code} ondds-input={(e: DdsInputEvent) => {
									handleObservationCodingChange("code", e.detail.value, "http://id.who.int/icd/release/11/mms");
								}} />
								<div style={{paddingTop: 10}} />
								<dap-ds-typography variant="body">ICD-11 Név</dap-ds-typography>
								<dap-ds-input value={observation.code.coding?.find(coding => coding.system === "http://id.who.int/icd/release/11/mms")?.display} ondds-input={(e: DdsInputEvent) => {
									handleObservationCodingChange("display", e.detail.value, "http://id.who.int/icd/release/11/mms");
								}} />

								<div style={{paddingTop: 10}} />
								<dap-ds-callout title="ICD-11 Kereső" variant="brand">
									<dap-ds-link href='https://icd.who.int/browse/2025-01/mms/en'>icd.who.int</dap-ds-link>
								</dap-ds-callout>
							</div>
							**/}
							<div style={{flex: 1}}>
								<dap-ds-typography variant="body">SNOMED CT Azonosító</dap-ds-typography>
								<dap-ds-input value={observation.code.coding?.find(coding => coding.system === "http://snomed.info/sct")?.code} ondds-input={(e: DdsInputEvent) => {
									handleObservationCodingChange("code", e.detail.value, "http://snomed.info/sct");
								}} />

								<div style={{paddingTop: 10}} />
								<dap-ds-typography variant="body">SNOMED CT Név</dap-ds-typography>
								<dap-ds-input value={observation.code.coding?.find(coding => coding.system === "http://snomed.info/sct")?.display} ondds-input={(e: DdsInputEvent) => {
									handleObservationCodingChange("display", e.detail.value, "http://snomed.info/sct");
								}} />

								<div style={{paddingTop: 10}} />
								<dap-ds-callout title="SNOMED CT Kereső" variant="brand">
									<dap-ds-link href='https://browser.ihtsdotools.org/?perspective=full&conceptId1=404684003&edition=MAIN/2025-04-01&release=&languages=en'>browser.ihtsdotools.org</dap-ds-link>
								</dap-ds-callout>
							</div>
						</div>
					</dap-ds-accordion>

					<div style={{paddingTop: 20}} />

					<dap-ds-button variant="primary" onClick={() => handleNewObservation(observation)}>Új eredmény hozzáadása</dap-ds-button>
				</div>
			</dap-ds-card>

			<div style={{paddingTop: 20}} />

			<dap-ds-typography variant="h3">Vizsgálat eredményei</dap-ds-typography>
			<dap-ds-card>
				<div style={{padding: 20}}>
					<dap-ds-typography variant="h5">Szűrés</dap-ds-typography>
					<dap-ds-search disabled />
				</div>

				<dap-ds-divider />

				{observations.slice().reverse().map((observation, index) => (
					<ObservationDisplay key={index} uuid={index.toString()} observation={observation} destroyer={handleDeleteObservation} />
				))}
				{observations.length === 0 && (
					<div style={{padding: 20, display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'center'}}>
						<dap-ds-typography variant="body">Nincsenek megjeleníthető eredmények.</dap-ds-typography>
					</div>
				)}


			</dap-ds-card>

			<dap-ds-button variant="primary" style={{marginTop: "20px"}} onClick={() => handleGenerateSHC()}>
				Eredmények átalakítása
			</dap-ds-button>

			<div style={{paddingTop: 20}} />

			<dap-ds-typography variant="h3">Nyers Open Health Card adat</dap-ds-typography>
			<dap-ds-card>
				<div style={{padding: 20}}>
					<pre>{JSON.stringify(rawSHC, null, 2)}</pre>
				</div>
			</dap-ds-card>
		</div>
	);
}

import { Observation } from "fhir/r5";

type ObservationDisplayParams = {
	uuid: string,
	observation: Observation,
	setter?: (observation: Observation, uuid: string) => void,
	destroyer: (uuid: string) => void
}

export function ObservationDisplay(params: ObservationDisplayParams) {
	const { observation, setter } = params;

	function handleDelete() {
		params.destroyer(params.uuid);
	}

	const belowRange = observation.valueQuantity?.value && observation.referenceRange?.[0]?.low?.value && observation.valueQuantity.value < observation.referenceRange[0].low.value;
	const aboveRange = observation.valueQuantity?.value && observation.referenceRange?.[0]?.high?.value && observation.valueQuantity.value > observation.referenceRange[0].high.value;
	const inRange = !belowRange && !aboveRange;

	const section1 = belowRange ? "var(--dds-negative-700)" : "var(--dds-white-100)";
	const section2 = inRange ? "var(--dds-positive-800)" : "var(--dds-white-100)";
	const section3 = aboveRange ? "var(--dds-negative-700)" : "var(--dds-white-100)";

	return (
		<div style={{padding: 20, display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'space-between'}}>
			<div style={{display: 'flex', flexDirection: 'row', gap: "75px"}}>
				<div style={{width: 150}}>
					<dap-ds-typography variant="h5">{observation.code.text}</dap-ds-typography>
					{observation.valueQuantity && (
						<dap-ds-typography variant="body">{observation.valueQuantity.value} {observation.valueQuantity.unit}</dap-ds-typography>
					)}
					{"valueBoolean" in observation && (
						<dap-ds-typography variant="body">{observation.valueBoolean ? "Pozitív" : "Negatív"}</dap-ds-typography>
					)}
				</div>
				
				<div style={{display: 'flex', width: 100, justifyContent: 'center', alignItems: 'center'}}>
					{observation.valueQuantity && (
						<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
							<dap-ds-typography variant="caption">{inRange ? "Határon belül" : "Határon kívül"}</dap-ds-typography>
							<div style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center'}}>
								<dap-ds-typography variant="caption">
									{observation.referenceRange?.[0]?.low?.value}
									<span> </span>
									{observation.referenceRange?.[0]?.low?.unit}
								</dap-ds-typography>
								<div style={{display: 'flex', flexDirection: 'row', gap: 2}}>
									<div style={{backgroundColor: section1, height: '12px', width: '24px', borderTopLeftRadius: '999px', borderBottomLeftRadius: '999px'}} />
									<div style={{backgroundColor: section2, height: '12px', width: '32px'}} />
									<div style={{backgroundColor: section3, height: '12px', width: '24px', borderTopRightRadius: '999px', borderBottomRightRadius: '999px'}} />
								</div>
								<dap-ds-typography variant="caption">
									{observation.referenceRange?.[0]?.high?.value}
									<span> </span>
									{observation.referenceRange?.[0]?.high?.unit}
								</dap-ds-typography>
							</div>
						</div>
					)}
					{"valueBoolean" in observation && (
						<div style={{backgroundColor: !observation.valueBoolean ? 'var(--dds-positive-800)' : 'var(--dds-negative-700)', height: '12px', width: '84px', borderRadius: '999px', alignSelf: "center"}} />
					)}
				</div>
			</div>
				
			<div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
				<dap-ds-button variant="subtle" size="sm" disabled={!!!setter}>Szerkesztés</dap-ds-button>
				<dap-ds-button variant="subtle" danger size="sm" onClick={handleDelete}>Törlés</dap-ds-button>
			</div>
		</div>
	);
}
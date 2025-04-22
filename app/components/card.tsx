export type CardProps = {
	  title: string
	  tags?: string[]
	  description?: string
	  state: "done" | "doing" | "plan"
	  href?: string
	  onClick?: () => void
}

const stateMap: Record<CardProps['state'], string> = {
	"done": "Tovább",
	"doing": "Folyamatban",
	"plan": "Várható"
}

export function Card(props: CardProps) {
	const { title, tags, description, state, href, onClick } = props;

	return (
		<dap-ds-card><div style={{padding: 20, height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
			<div>
				<div style={{paddingBottom: "10px", display: 'flex', gap: '5px', flexWrap: 'wrap'}}>
					{tags?.map((tag, index) => (
						<dap-ds-badge key={index} type="brand">{tag}</dap-ds-badge>
					))}	
				</div>
				<dap-ds-typography variant="h5">{title}</dap-ds-typography>
				<dap-ds-typography variant="body">{description}</dap-ds-typography>
			</div>
			<dap-ds-button variant="subtle" disabled={!!!href && !onClick} href={href} on-dds-click={onClick} style={{paddingTop: '10px'}}>
				{stateMap[state]}
			</dap-ds-button>
		</div></dap-ds-card>
			
	);
}
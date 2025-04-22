export default function Page() {
	return (
		<ul>
			<li>
				CodeSnippet komponens
			</li>
			<li>
				Jobb attribútum kezelés. Pl: (DapDSButtonReact) params: HTMLButtonElement, implementáció: &lt;button custom-attribute-handling=&#123;kód&#125; &#123;...params&#125; /&gt;, 
				- biztosan érintett komponensek listája a style alapján
			</li>
			<li>
				DapDSButton disabled nem vizualizálódik, ha a href attribútum meg van adva.
			</li>
			<li>
				Inkonzisztens attribútum nevek: variant, type
			</li>
			<li>
				Accordion plain style lehetne variant
			</li>
			<li>
				Dokumentáció és példa a saját eventekre (onDDSChange)
				- onDDSChange nem csinál semmit a DapDSInput komponensnél
			<li>
			</li>
				legyen opensource
			</li>
		</ul>
	);
}
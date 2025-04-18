type ammount = {
	value: number,
	unit: string,
}

export type Observation = {
	uuid: string,
	code: string,
	display: string,
	value: ammount,
	low: ammount,
	high: ammount,
}
export function formatPrice(
	value: number,
	opts: { locale?: string, currency?: string } = {}
) {
	const { locale = 'ru-RU', currency = 'RUB' } = opts
	const formatter = new Intl.NumberFormat(locale, {
		currency,
		style: 'currency',
		maximumFractionDigits: 0
	})
	return formatter.format(value)
}

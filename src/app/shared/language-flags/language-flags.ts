const FLAG_SVG: Record<string, string> = {
	cs: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15"><rect width="20" height="15" fill="#fff"/><rect width="20" height="7.5" y="7.5" fill="#d7141a"/><path d="M0 0 L10 7.5 L0 15 Z" fill="#11457e"/></svg>',
	de: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15"><rect width="20" height="5" fill="#000"/><rect width="20" height="5" y="5" fill="#dd0000"/><rect width="20" height="5" y="10" fill="#ffce00"/></svg>',
	el: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15"><rect width="20" height="15" fill="#0d5eaf"/>' +
		Array.from({ length: 9 }, (_, i) => i % 2 === 0 ? '' : `<rect x="0" y="${(i * 15) / 9}" width="20" height="${15 / 9}" fill="#fff"/>`).join('') +
		'<rect x="0" y="0" width="8" height="8" fill="#0d5eaf"/><rect x="3" y="0" width="2" height="8" fill="#fff"/><rect x="0" y="3" width="8" height="2" fill="#fff"/></svg>',
	en: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15"><rect width="20" height="15" fill="#00247d"/><path d="M0 0 L20 15 M20 0 L0 15" stroke="#fff" stroke-width="3"/><path d="M0 0 L20 15 M20 0 L0 15" stroke="#cf142b" stroke-width="1"/><path d="M10 0 V15 M0 7.5 H20" stroke="#fff" stroke-width="5"/><path d="M10 0 V15 M0 7.5 H20" stroke="#cf142b" stroke-width="3"/></svg>',
	es: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15"><rect width="20" height="15" fill="#c60b1e"/><rect width="20" height="7.5" y="3.75" fill="#ffc400"/></svg>',
	fr: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15"><rect width="20" height="15" fill="#fff"/><rect width="6.67" height="15" fill="#0055a4"/><rect x="13.33" width="6.67" height="15" fill="#ef4135"/></svg>',
	hu: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15"><rect width="20" height="5" fill="#ce2939"/><rect width="20" height="5" y="5" fill="#fff"/><rect width="20" height="5" y="10" fill="#477050"/></svg>',
	it: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15"><rect width="20" height="15" fill="#fff"/><rect width="6.67" height="15" fill="#009246"/><rect x="13.33" width="6.67" height="15" fill="#ce2b37"/></svg>',
	nl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15"><rect width="20" height="5" fill="#ae1c28"/><rect width="20" height="5" y="5" fill="#fff"/><rect width="20" height="5" y="10" fill="#21468b"/></svg>',
	pl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15"><rect width="20" height="7.5" fill="#fff"/><rect width="20" height="7.5" y="7.5" fill="#dc143c"/></svg>',
	pt: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15"><rect width="20" height="15" fill="#ff0000"/><rect width="8" height="15" fill="#046a38"/><circle cx="8" cy="7.5" r="2.5" fill="#ffce00"/></svg>',
	ro: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15"><rect width="20" height="15" fill="#fff"/><rect width="6.67" height="15" fill="#002b7f"/><rect x="6.67" width="6.67" height="15" fill="#fcd116"/><rect x="13.33" width="6.67" height="15" fill="#ce1126"/></svg>',
	sv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15"><rect width="20" height="15" fill="#006aa7"/><rect x="6" width="3" height="15" fill="#fecc00"/><rect y="6" width="20" height="3" fill="#fecc00"/></svg>',
	ua: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15"><rect width="20" height="7.5" fill="#005bbb"/><rect width="20" height="7.5" y="7.5" fill="#ffd500"/></svg>',
};
FLAG_SVG['uk'] = FLAG_SVG['ua'];

const FLAG_DATA_URL: Record<string, string> = {};

export function languageFlagUrl(code: string): string {
	if (!FLAG_DATA_URL[code]) {
		const svg = FLAG_SVG[code];
		if (!svg) {
			return '';
		}
		FLAG_DATA_URL[code] = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
	}
	return FLAG_DATA_URL[code];
}

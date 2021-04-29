export default function Camalize(string: string): string {
	let res: string = string.replace("/", "");

	res = res.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
		return g1.toUpperCase() + g2.toLowerCase();
	});

	return res.replace(/[\./\\ ,:-]+/g, "");
}

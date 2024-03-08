export type Mods = Record<string, string | boolean | undefined>;

export function classNames(
	cls: string,
	mods: Mods = {},
	additional: Array<string | undefined> = []
): string {
	return [cls, ...additional.filter(Boolean), ...Object.keys(mods).filter((key) => mods[key])].join(
		' '
	);
}

// ...Object.entries(mods)
// .filter(([_, value]) => Boolean(value))
// .map(([className]) => className),

// .reduce((clss, [key, value]) => !!value ? clss = [...clss, key] : clss, [])

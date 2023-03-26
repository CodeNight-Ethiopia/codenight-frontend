import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import IconButton from "./IconButton";
import SunIcon from "../../assets/icons/SunIcon";
import MoonIcon from "../../assets/icons/MoonIcon";

const ThemeButton = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const currentTheme = theme === "system" ? systemTheme : theme;
	if (!mounted) return null;

	if (currentTheme === "dark") {
		return (
			<IconButton onClick={() => setTheme("light")}>
				<SunIcon />
			</IconButton>
		);
	} else {
		return (
			<IconButton onClick={() => setTheme("dark")}>
				<MoonIcon />
			</IconButton>
		);
	}
};

export default ThemeButton;

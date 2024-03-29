"use client";
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

	return (
		<IconButton
			onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
		>
			{currentTheme === "dark" ? <SunIcon /> : <MoonIcon />}
		</IconButton>
	);
};

export default ThemeButton;

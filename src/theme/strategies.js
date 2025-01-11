export class ThemeStrategy {
  apply() {
    throw new Error("Strategy must implement apply method");
  }
}

export class ManualThemeStrategy extends ThemeStrategy {
  apply(theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }
}

export class SystemThemeStrategy extends ThemeStrategy {
  apply() {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.documentElement.classList.toggle("dark", prefersDark);
  }
}

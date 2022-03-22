import { useLanguage } from "./language-context";
import { useTheme } from "./theme-context";
import { languageLib } from "./languageLib";

export function Nav() {
  const { setTheme } = useTheme();
  const { setLanguage } = useLanguage();
  const { language } = useLanguage();
  return (
    <div>
      <button
        onClick={() =>
          setTheme((theme) => (theme === "dark" ? "light" : "dark"))
        }
      >
        {`${languageLib[language]["changeThemeButtonText"]}`}
      </button>
      <button
        onClick={() =>
          setLanguage((language) =>
            language === "english" ? "hindi" : "english"
          )
        }
      >
        {`${languageLib[language]["changeLanguageButtonText"]}`}
      </button>
    </div>
  );
}

import { useState } from "react";

export default function HomePage() {
  const [lang, setLang] = useState("it");

  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      maxWidth: "700px",
      margin: "0 auto",
      padding: "1rem",
      color: "#333",
    },
    langButtons: {
      textAlign: "right",
      marginBottom: "1rem",
    },
    button: {
      marginLeft: "0.5rem",
      padding: "0.3rem 0.8rem",
      fontSize: "1rem",
      cursor: "pointer",
      border: "1px solid #ccc",
      borderRadius: "5px",
      background: "#f9f9f9",
    },
    promoBox: {
      background: "#fdf3dc",
      padding: "1rem",
      borderRadius: "10px",
      marginTop: "1rem",
      marginBottom: "2rem",
    },
    link: {
      color: "#0066cc",
      textDecoration: "none",
    },
    footer: {
      textAlign: "center",
      paddingTop: "2rem",
    },
    logo: {
      maxWidth: "200px",
      height: "auto",
    },
  };

  return (
    <main style={styles.page}>
      <div style={styles.langButtons}>
        <button onClick={() => setLang("it")} style={styles.button}>
          🇮🇹 Italiano
        </button>
        <button onClick={() => setLang("en")} style={styles.button}>
          🇬🇧 English
        </button>
        <button onClick={() => setLang("de")} style={styles.button}>
          🇩🇪 Deutsch
        </button>
      </div>

      {lang === "it" && (
        <>
          <h1>Benvenuto su Mondo Italiano Academy!</h1>
          <div style={styles.promoBox}>
            <strong>PARLERAI ITALIANO IN 30 GIORNI!</strong>
            <ul>
              <li>Capisci e parla fin da subito – Senza paura degli errori!</li>
              <li>Mini lezioni pratiche – Perfetto anche con poco tempo.</li>
              <li>Impara in modo naturale – Conversazioni ed esempi reali.</li>
              <li>Sviluppa sicurezza – Usa l’italiano in ogni situazione.</li>
            </ul>
          </div>
          <p>
            <a
              href="https://www.amazon.it/dp/B0D44F9WXR"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              “Italiano per Stranieri 🟨 Livello A1” su Amazon
            </a>
          </p>
          <p>
            Contattaci:{" "}
            <a href={`mailto:support@mondoitaliano.online`} style={styles.link}>
              support@mondoitaliano.online
            </a>
          </p>
        </>
      )}

      {lang === "en" && (
        <>
          <h1>Welcome to Mondo Italiano Academy!</h1>
          <div style={styles.promoBox}>
            <strong>SPEAK ITALIAN IN 30 DAYS!</strong>
            <ul>
              <li>Understand and speak right away – No fear of mistakes!</li>
              <li>Mini practical lessons – Perfect even with little time.</li>
              <li>Learn naturally – Real conversations and examples.</li>
              <li>Build confidence – Use Italian in every situation.</li>
            </ul>
          </div>
          <p>
            <a
              href="https://www.amazon.it/dp/B0D44F9WXR"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              “Italian for Foreigners 🟨 Level A1” on Amazon
            </a>
          </p>
          <p>
            Contact us:{" "}
            <a href={`mailto:support@mondoitaliano.online`} style={styles.link}>
              support@mondoitaliano.online
            </a>
          </p>
        </>
      )}

      {lang === "de" && (
        <>
          <h1>Willkommen bei Mondo Italiano Academy!</h1>
          <div style={styles.promoBox}>
            <strong>SPRICH ITALIENISCH IN 30 TAGEN!</strong>
            <ul>
              <li>Verstehe und sprich sofort – Keine Angst vor Fehlern!</li>
              <li>Praktische Mini-Lektionen – Auch bei wenig Zeit perfekt.</li>
              <li>Natürlich lernen – Reale Gespräche und Beispiele.</li>
              <li>
                Sicherheit aufbauen – Italienisch in jeder Situation nutzen.
              </li>
            </ul>
          </div>
          <p>
            <a
              href="https://www.amazon.it/dp/B0D44F9WXR"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              „Italienisch für Ausländer 🟨 Niveau A1“ auf Amazon
            </a>
          </p>
          <p>
            Kontaktieren Sie uns:{" "}
            <a href={`mailto:support@mondoitaliano.online`} style={styles.link}>
              support@mondoitaliano.online
            </a>
          </p>
        </>
      )}

      <footer style={styles.footer}>
        <img
          src="/logo-mondoitaliano.jpg"
          alt="Logo Mondo Italiano"
          style={styles.logo}
        />
      </footer>
    </main>
  );
}

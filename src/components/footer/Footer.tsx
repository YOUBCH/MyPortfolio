import "./Footer.css";

function Footer() {
    return (
        <footer style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginBottom: "1rem"
        }}>
            <span style={{
                margin: "0",
            }}>
                2025 &copy; Youssef Bachaoui
            </span>
            <span style={{
                margin: "0",
            }}>
                VAT: 14383650968 (ITALY)
            </span>
            <a href="https://github.com/YOUBCH/MyPortfolio">Designed and Built by Youssef Bachaoui</a>
        </footer>
    )
}

export default Footer;
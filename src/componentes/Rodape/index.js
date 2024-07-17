import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/imagens/" alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/imagens/soccer-leagues.jpg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imagens/" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/Logo Ultimate.png" alt="" />
        </section>
        <section>
            <p>
                Fifa Ultimate Team
            </p>
        </section>
    </footer>)
}

export default Rodape

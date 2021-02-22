import Button from "./Button";
import "../styles/global.css";

export default function Card() {
    return(
        <div className="card">
            <div>
                <img src="" />
                <h2>Exercite-se</h2>
                <p>É agora Diegão, bora lá meu parça. Caminhe por 3 minutos e estique suas pernas pra você ficar saudável.</p>
            </div>
            <Button color="red">Falhei</Button>
        </div>
    )
}
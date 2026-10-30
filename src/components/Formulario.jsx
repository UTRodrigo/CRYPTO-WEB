import { useState } from "react";
import "../css/Formulario.css";

const Formulario = () => {
  const [creado, setCreado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCreado(true);
  };

    return (
        <form className="formulario" onSubmit={(e)=> handleSubmit(e)}>
            <div className="campo">
                <label 
                className="label"
                htmlFor="moneda"
                >Moneda</label>
                <select className="select"
                >
                    <option value="Euro EUR" disabled>
                    Seleccione
                    </option>
                    <option value="USD">Dólar USD</option>
                    <option value="MXN">Peso Mexicano MXN</option>
                    <option value="EUR">Euro EUR</option>
                    <option value="GBP">Libra Esterlina GBP</option>
                </select>
            </div>
            <div className="campo">
                <label 
                className="label"
                htmlFor="Criptomoneda"
                >Criptomoneda</label>
                <select className="select">
                    <option value="-Seleccione">-Seleccione</option>
                </select>
            </div>
            <button 
            className="btn-cotizar"
            type="submit"
            >Cotizar
            </button>
            {creado && <p>Formulario creado</p>}
        </form>
    )
}
export default Formulario;
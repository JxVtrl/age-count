import React, { useState } from "react";

import { Input, Button } from "./styles";
import { useApp } from "../../context/AppContext";

export function InputName() {
    const { setName } = useApp();
    const [valueInput, setValueInput] = useState("");

    return (
        <div>
            <Input
                placeholder='Qual o seu nome?'
                onChange={e => setValueInput(e.target.value)}
                value={valueInput}
            />
            <Button onClick={() => setName(valueInput)}>
                Enviar
            </Button>
        </div>
    )
}
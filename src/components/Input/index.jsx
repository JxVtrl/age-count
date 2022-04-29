import React, { useState } from "react";
import { Input as InputInfo, Button } from "./styles";

export function Input() {
    const [name, setName] = useState("");
    const [bornDate, setBornDate] = useState("");

    return (
        <>
            <InputInfo
                placeholder='Qual o seu nome?'
                onChange={e => setName(e.target.value)}
                value={name}
            />
            <InputInfo
                placeholder='Data de nascimento?'
                type={'date'}
                onChange={e => setBornDate(e.target.value)}
                value={bornDate}
            />
            <Button
                onClick={() => {
                    localStorage.setItem("born", bornDate)
                    localStorage.setItem("name", name)
                    window.location.reload()
                }
            }>
                Enviar
            </Button>
        </>
    )
}
import React from "react";

import { Input } from "./styles";

export function InputAge() {


    return (
        <>
            <Input placeholder='Data de nascimento?' />
            <Button onClick={()=>9}>
                Enviar
            </Button>
        </>
    )
}
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../components/buttons/Buttons.jsx"

test('Verificar botão', () => { 
    //ARRANGE
    render(<Button label={"Ver detalhes"} />)

    //ACT


    //ASSERT
    expect(screen.findByLabelText("Ver detalhes"));
})
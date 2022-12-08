const tipoTeste = "const";

if(tipoTeste === "var"){

    // Tipo VAR
    var altura = 5;
    var comprimento = 5;
    area = altura * comprimento;

    console.log(area)
    var area;
}else{
    if(tipoTeste === "let"){

        // Tipo LET
        let altura2 = 5;
        let comprimento2 = 5;
        let forma = "retangulo";
        let area2;

        if(forma === "retangulo"){
            area2 = altura2 * comprimento2;
        } else{
            area2 = (altura2 * comprimento2) / 2;
        }
        
        console.log(area2)
    } else {
        if(tipoTeste === "const"){

            // Tipo CONST
            const altura3 = 5;
            const comprimento3 = 5;
            const forma2 = "retangulo";

            // Não pode ser do tipo CONST pois terá seu valor alterado
            let area3 = 2;

            if(forma2 === "retangulo"){
                area3 = altura3 * comprimento3;
            }else{
                area3 = (altura3 * comprimento3) / 2;
            }
            console.log(area3);
        } else{
            console.log("Teste Inválido!")
        }
    }
}












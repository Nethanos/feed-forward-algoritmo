class RedeNeural {
    constructor(e_neuronios, o_neuronios, s_neuronios){
        this.e_neuronios = e_neuronios;
        this.o_neuronios = o_neuronios;
        this.s_neuronios = s_neuronios;

        this.bias_eo = new Matriz(this.o_neuronios, 1);
        this.bias_eo.randomizar();
        this.bias_os = new Matriz(this.s_neuronios, 1);
        this.bias_os.randomizar();

        this.pesos_eo = new Matriz(this.o_neuronios, this.e_neuronios);
        this.pesos_eo.randomizar();

        this.pesos_os = new Matriz(this.s_neuronios, this.o_neuronios);
        this.pesos_os.randomizar();

    }


    feedForward(entrada){
        // CAMADA ENTRADA PARA OCULTO
        let entradaTratada = Matriz.arrayToMatriz(entrada);
        let neuronios_ocultos = Matriz.multiply(this.pesos_eo, entradaTratada);
 
        neuronios_ocultos = Matriz.add(neuronios_ocultos, this.bias_eo);

        neuronios_ocultos.map(sigmoide)
    
        //CAMADA OCULTO PARA SAIDA
        let saida = Matriz.multiply(this.pesos_os, neuronios_ocultos);
        saida = Matriz.add(saida, this.bias_os);

        saida.map(sigmoide);
    
    }

}

function sigmoide(x) {
    return 1/(1+Math.exp(-x));
}
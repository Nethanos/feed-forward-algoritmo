function sigmoide(x) {
    return 1 / (1 + Math.exp(-x));
}


function dsigmoide(x) {
    return x * (1 - x);
}

class RedeNeural {
    constructor(e_neuronios, o_neuronios, s_neuronios) {
        this.e_neuronios = e_neuronios;
        this.o_neuronios = o_neuronios;
        this.s_neuronios = s_neuronios;

        this.bias_eo = new Matriz(this.o_neuronios, 1);
        this.bias_eo.randomizar();
        this.bias_os = new Matriz(this.s_neuronios, 1);
        this.bias_os.randomizar();

        //PESOS DE ENTRADA E OCULTO
        this.pesos_eo = new Matriz(this.o_neuronios, this.e_neuronios);
        this.pesos_eo.randomizar();

        //PESOS DE OCULTO E SAIDA
        this.pesos_os = new Matriz(this.s_neuronios, this.o_neuronios);
        this.pesos_os.randomizar();

        this.learning_rate = 0.1;

    }


    // feedForward(entrada) {
    //     // CAMADA ENTRADA PARA OCULTO
    //     let entrada = Matriz.arrayToMatriz(entrada);
    //     let neuronios_ocultos = Matriz.multiply(this.pesos_eo, entrada);

    //     neuronios_ocultos = Matriz.add(neuronios_ocultos, this.bias_eo);

    //     neuronios_ocultos.map(sigmoide)

    //     //CAMADA OCULTO PARA SAIDA
    //     let saida = Matriz.multiply(this.pesos_os, neuronios_ocultos);
    //     saida = Matriz.add(saida, this.bias_os);

    //     saida.map(sigmoide);

    //     saida.printar();
    // }

    treinar(arr, esperado) {

        // Entrada pra oculta
        let entrada = Matriz.arrayToMatriz(arr);
        let neuroniosOcultos = Matriz.multiply(this.pesos_eo, entrada);

        neuroniosOcultos = Matriz.add(neuroniosOcultos, this.bias_eo);

        neuroniosOcultos.map(sigmoide)

        //CAMADA OCULTO PARA SAIDA
        let saida = Matriz.multiply(this.pesos_os, neuroniosOcultos);
        saida = Matriz.add(saida, this.bias_os);

        saida.map(sigmoide);

        //BACKPROPAGATION

        //SAIDA - OCULTO  
        let esperadoTratado = Matriz.arrayToMatriz(esperado);

        let erroDeSaida = Matriz.subtrair(esperadoTratado, saida);

        let erroSaidaDerivado = Matriz.map(saida, dsigmoide);

        let oculto_T = Matriz.transposicao(neuroniosOcultos);

        let gradiente = Matriz.hadamard(erroSaidaDerivado, erroDeSaida);

        gradiente = Matriz.escalar_multiply(gradiente, this.learning_rate);

        this.bias_os = Matriz.add(this.bias_os, gradiente);

        let pesos_oculto_saida_delta = Matriz.multiply(gradiente, oculto_T);


        this.pesos_os = Matriz.add(this.pesos_os, pesos_oculto_saida_delta);

        //OCULTO - ENTRADA
        let pesos_oculto_saida_T = Matriz.transposicao(this.pesos_os);

        let erroOculto = Matriz.multiply(pesos_oculto_saida_T, erroDeSaida);

        let erroOcultoDerivado = Matriz.map(neuroniosOcultos, dsigmoide);

        let entrada_T = Matriz.transposicao(entrada);

        let gradienteOculto = Matriz.hadamard(erroOcultoDerivado, erroOculto);

        gradienteOculto = Matriz.escalar_multiply(gradienteOculto, this.learning_rate);

        this.bias_eo = Matriz.add(this.bias_eo, gradienteOculto);

        let pesoEntradaDeltas = Matriz.multiply(gradienteOculto, entrada_T);

        this.pesos_eo = Matriz.add(this.pesos_eo, pesoEntradaDeltas);

    }


    predict(arr) {
        // Entrada pra oculta
        let entrada = Matriz.arrayToMatriz(arr);
        let neuroniosOcultos = Matriz.multiply(this.pesos_eo, entrada);

        neuroniosOcultos = Matriz.add(neuroniosOcultos, this.bias_eo);

        neuroniosOcultos.map(sigmoide)

        //CAMADA OCULTO PARA SAIDA
        let saida = Matriz.multiply(this.pesos_os, neuroniosOcultos);
        saida = Matriz.add(saida, this.bias_os);

        saida.map(sigmoide);

        saida =  Matriz.matrizToArray(saida);

        return saida;

    }


}
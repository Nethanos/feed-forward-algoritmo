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
}
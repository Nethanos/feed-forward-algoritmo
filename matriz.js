class Matriz {
    constructor(linhas, colunas){
        this.linhas = linhas;
        this.colunas = colunas;

        this.dados = [];

        for(let i = 0; i<linhas; i++){
            let arr = [];
            for(let j =0; j<colunas; j++){
                arr.push(0);
            }
            this.dados.push(arr);
        }
    }



    static arrayToMatriz(arr){
        let matriz = new Matriz(arr.length, 1);
        matriz.map((el, i, j) => {
            return arr[i];
        });
    }


    printar(){
        console.table(this.dados);
    }

    randomizar(){
        this.map((el, i,j ) => {
            return Math.random()* 2 -1;
        });
    }

    static map(matriz, func){

        let matriz = new Matriz(A.linhas, B.linhas)

        matriz.dados = matriz.dados.map((arr, i) => {
            return arr.map((numero, j) => {
                return func(numero, i, j);
            })
        })

        return matriz;
    }

     map(func){

        this.dados = this.dados.map((arr, i) => {
            return arr.map((numero, j) => {
                return func(numero, i, j);
            })
        })

        return this;
    }


    static add(matrizA, matrizB){
        let matrizAuxiliar = new Matriz(matrizA.linhas, matrizA.colunas);
       
        console.log('Matriz A:', matrizA.dados);
        console.log('Matriz B:', matrizB.dados);
        matrizAuxiliar.map((numero, i, j) => {
            return matrizA.dados[i][j] + matrizB.dados[i][j];
        });
            
        console.log(matrizAuxiliar);
    
        return matrizAuxiliar;
    }


    static multiply(A, B) {
        let matrizAuxiliar = new Matriz(A.linhas, B.colunas);
        
        console.log('Matriz A:', A.dados);
        console.log('Matriz B:', B.dados);
        matrizAuxiliar.map((numero, i,j) => {
            let soma = 0;
            for(let k = 0; k<A.colunas; k++) {
                let elm1 = A.dados[i][k];
                let elm2 = B.dados[k][j];
                return soma += elm1 * elm2;   
            }
        });

        console.log(matrizAuxiliar.dados);
        return matrizAuxiliar;
    }

}
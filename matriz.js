class Matriz {
    constructor(linhas, colunas){
        this.linhas = linhas;
        this.colunas = colunas;

        this.dados = [];

        //Transformando o arrayem Matriz no construtor
        for(let i = 0; i<linhas; i++){
            let arr = [];
            for(let j =0; j<colunas; j++){
                arr.push(0);
            }
            this.dados.push(arr);
        }
    }


    //AUXILIARES
    static arrayToMatriz(arr){
        let matriz = new Matriz(arr.length, 1);
        matriz.map((el, i, j) => {
            return arr[i];
        });

        return matriz;
    }

    static matrizToArray(obj){
        let arr = []
        obj.map((el, i, j) => {
            arr.push(el);
        });

        return arr;
    }


    printar(){
        console.table(this.dados);
    }

    randomizar(){
        this.map((el, i,j ) => {
            return Math.random()* 2 -1;
        });
    }

    //AUXILIARES

    static map(matriz, func){

        let matrizStatic = new Matriz(matriz.linhas, matriz.colunas)

        matrizStatic.dados = matriz.dados.map((arr, i) => {
            return arr.map((numero, j) => {
                return func(numero, i, j);
            })
        })

        return matrizStatic;
    }


    //Override do map do JS, passando uma funcao como arg
     map(func){
        this.dados = this.dados.map((arr, i) => {
            return arr.map((numero, j) => {
                return func(numero, i, j);
            })
        })

        return this;
    }


    static transposicao(matriz){
        let matrizRetorno = new Matriz(matriz.colunas, matriz.linhas);
    
        matrizRetorno.map((num, i,j) => {
            return matriz.dados[j][i];
        });
        return matrizRetorno;
    }


    static escalar_multiply(matrizA, escalar){
        let matrizAuxiliar = new Matriz(matrizA.linhas, matrizA.colunas);
       
        matrizAuxiliar.map((numero, i, j) => {
            return matrizA.dados[i][j] * escalar;
        });
                
        return matrizAuxiliar;
    }

    static hadamard(matrizA, matrizB){
        let matrizAuxiliar = new Matriz(matrizA.linhas, matrizA.colunas);
       
        matrizAuxiliar.map((numero, i, j) => {
            return matrizA.dados[i][j] * matrizB.dados[i][j];
        });
                
        return matrizAuxiliar;
    }

    static add(matrizA, matrizB){
        let matrizAuxiliar = new Matriz(matrizA.linhas, matrizA.colunas);
       
        matrizAuxiliar.map((numero, i, j) => {
            return matrizA.dados[i][j] + matrizB.dados[i][j];
        });
                
        return matrizAuxiliar;
    }


    static subtrair(matrizA, matrizB){
        let matrizAuxiliar = new Matriz(matrizA.linhas, matrizA.colunas);
        matrizAuxiliar.map((numero, i, j) => {
            return matrizA.dados[i][j] - matrizB.dados[i][j];
        });
                
        return matrizAuxiliar;
    }


    static multiply(A, B) {
        let matrizAuxiliar = new Matriz(A.linhas, B.colunas);
        
        matrizAuxiliar.map((numero, i,j) => {
            let soma = 0;
            for(let k = 0; k<A.colunas; k++) {
                let elm1 = A.dados[i][k];
                let elm2 = B.dados[k][j];
                soma += elm1 * elm2;   
            }

            return soma;

        });

        return matrizAuxiliar;
    }

}
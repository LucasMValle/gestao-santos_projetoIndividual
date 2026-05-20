var database = require("../database/config")

function cadastrar(nome, idade, nascimento, tipo, inicio, fim, salario, clausulas) {

    var instrucaoJogador = `
        INSERT INTO jogador (nome_jogador, idade, dt_nasc) 
        VALUES ('${nome}', ${idade}, '${nascimento}');
    `;
    
    console.log("Executando Instrução 1 (Jogador): \n" + instrucaoJogador);
    
    // Executa o primeiro insert
    return database.executar(instrucaoJogador).then(function (resultadoJogador) {
        
        
        var idJogadorGerado = resultadoJogador.insertId;
        
        // 2. Segundo comando
        var instrucaoContrato = `
            INSERT INTO contrato (fk_jogador, tipo_contrato, inicio_contrato, final_contrato, salario, clausulas) 
            VALUES (${idJogadorGerado}, '${tipo}', '${inicio}', '${fim}', ${salario}, '${clausulas}');
        `;
        
        console.log("Executando Instrução 2 (Contrato): \n" + instrucaoContrato);
        
        // Executa o segundo insert e joga o resultado final de volta pro Controller
        return database.executar(instrucaoContrato);
    });
}

function listar() {
    var instrucao = `
        SELECT id_jogador, nome_jogador FROM jogador;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibir(id_jogador) {
    var instrucao = `
        SELECT  
            j.nome_jogador,
            j.idade,
            j.dt_nasc,
            c.tipo_contrato,
            c.inicio_contrato,
            c.final_contrato,
            c.salario,
            c.clausulas
            FROM jogador AS j 
            INNER JOIN contrato AS c 
            ON j.id_jogador = c.fk_jogador
            WHERE j.id_jogador = ${id_jogador};
            `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrar,
    listar,
    exibir
};
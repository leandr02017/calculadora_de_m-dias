    const form = document.getElementById("form-atividade")
    const imgAprovado = ' <img src="./images/aprovado.png" alt="Emoji festa" />'
    const imgReprovado = ' <img src="./images/reprovado.png" alt="Emoji decepcionado" />'
    const atividades = [];
    const notas = [];
    const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
    const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
    const notaMinima = parseFloat(prompt('Digite a nota minima geral:'))

    let linhas = '';

    form.addEventListener('submit', function(e){
        e.preventDefault();

        adicionarLinha();
        atualizarTabela();
        atualizarMediaFinal();
    })

    function adicionarLinha(){
        const inputNomeAtividade = document.getElementById('nome-Atividade')
        const inputNotaAtividade = document.getElementById('nota-Atividade')
           
        if(atividades.includes(inputNomeAtividade.value)){
         alert(`Está atividade: ${inputNomeAtividade.value} ja está na tabela.`);
        }else{

        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;

        linhas += linha;
        }
        inputNomeAtividade.value = '';
        inputNotaAtividade.value = '';
    }



    function atualizarTabela(){
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
        
    }

    function atualizarMediaFinal(){
        const mediaFinal = calculaMediafinal( );

        document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
        document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
    }

    function calculaMediafinal(){
        let somaDasNotas = 0;

        for(i = 0; i < notas.length; i++){
            somaDasNotas += notas[i];
        }

        return somaDasNotas / notas.length;
    }
    
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;

    let nivel;

    if (saldoVitorias > 100) {
        nivel = 'Imortal';
    } else if (saldoVitorias > 90) {
        nivel = 'Lendário';
    } else if (saldoVitorias > 80) {
        nivel = 'Diamante';
    } else if (saldoVitorias > 50) {
        nivel = 'Ouro';
    } else if (saldoVitorias > 20) {
        nivel = 'Prata';
    } else if (saldoVitorias > 10) {
        nivel = 'Bronze';
    } else {
        nivel = 'Ferro';
    }

    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

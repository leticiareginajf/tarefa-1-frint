function calcularDiasRestantes(dataEntrega: string): number {
  const hoje = new Date();
  const entrega = new Date(dataEntrega);
  const diffTime = entrega.getTime() - hoje.getTime();
  const diffDias = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDias;
}

function atualizarContadorTCC() {
  const dataEntrega = "2025-11-30"; // Data da entrega do TCC
  const dias = calcularDiasRestantes(dataEntrega);
  const elemento = document.getElementById("contador-tcc");

  if (elemento) {
    if (dias > 0) {
      elemento.textContent = `Faltam ${dias} dias para a entrega do TCC.`;
    } else if (dias === 0) {
      elemento.textContent = `A entrega do TCC é hoje!`;
    } else {
      elemento.textContent = `A entrega do TCC foi há ${Math.abs(dias)} dias.`;
    }
  }
}

document.addEventListener("DOMContentLoaded", atualizarContadorTCC);

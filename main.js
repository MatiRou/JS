// monto minimo para transferir en ua wallet

const montoDeTransferencias = [9,100,1500,4500,5450]

for (let i = 0; i < 5; i++) {
    if (montoDeTransferencias[i] < 10){
        console.log (`Tu transferencia de ${montoDeTransferencias[i]} no llega al monto minimo para transferir \n Rechazada`)
    }
    else if (montoDeTransferencias[i] < 4000) {
        console.log (`Tu transferencia de ${montoDeTransferencias[i]} se cobrara una comision de 0.01% \n Aprobada`)
    }
    else {
        console.log (`Tu transferencia de ${montoDeTransferencias[i]} no pagara comisiones`)
    }
}
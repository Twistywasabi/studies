import java.util.Scanner;

public class SimulacaoBancaria {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double saldo = 0;
        boolean continuar = true;

        while (continuar) {

            System.out.println("Escolha uma opção: 1 - Depositar // 2 - Sacar // 3 - Consultar Saldo // 0 - Encerrar");
            int opcao = scanner.nextInt();

            switch (opcao) {
                case 1:
                    // TODO: Ler o valor a ser depositado e atualizar/imprimir o saldo.
                    System.out.println("Opção 1 selecionada");
                    System.out.println("Qual será o valor a ser depositado ?");
                    int valorDepositado = scanner.nextInt();
                    saldo = saldo + valorDepositado;
                    System.out.println("Saldo Atual: " + saldo);
                    break;
                case 2:
                    // TODO: Ler o valor a ser sacado e verificar/imprimir se há saldo suficiente.
                    System.out.println("Opção 2 selecionada");
                    System.out.println("Qual será o valor a ser sacado ?");
                    int valorSacado = scanner.nextInt();
                    if(saldo < valorSacado) {
                        System.out.println("Saldo insuficiente");
                    } else {
                        saldo = saldo - valorSacado;
                        System.out.println("Saldo Atual: " + saldo);
                    }
                    break;
                case 3:
                    // TODO: Exibir o saldo atual da conta.
                    System.out.println("Opção 3 selecionada");
                    System.out.println("Saldo atual: R$");
                    break;
                case 0:
                    System.out.println("Programa encerrado.");
                    continuar = false;  // Atualiza a variável de controle para encerrar o loop
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        }
        scanner.close();
    }
}
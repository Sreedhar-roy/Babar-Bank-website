document.getElementById('depositBtn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit');
    const deposit = depositField.value;
    const newDeposit = parseFloat(deposit);
    depositField.value = '';

    // second step 

    const DepositBalance = document.getElementById('deposit-balance');
    const Deposit = DepositBalance.innerText ;
    const newDepositBalance = parseFloat(Deposit);

    const TotalDepositBalance = newDeposit + newDepositBalance;
    DepositBalance.innerText = TotalDepositBalance;


    // step 3

    const TotalBalance = document.getElementById('Total-balance');
    const Balance = TotalBalance.innerText;
    const finalBalance = parseFloat(Balance);

    const FinalTotalBalance = finalBalance + newDeposit;
    TotalBalance.innerText = FinalTotalBalance;
})
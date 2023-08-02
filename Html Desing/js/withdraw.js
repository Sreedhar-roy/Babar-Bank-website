document.getElementById('withdrawBtn').addEventListener('click', function(){
    const inputWithdrawBalance = document.getElementById('withdraw');
    const withdraw = inputWithdrawBalance.value;
    const newWithdrawBalance = parseFloat(withdraw);
    inputWithdrawBalance.value = '';

    //  step 2

    const withdrawBalance = document.getElementById('withdraw-balance');
    const TotalWithdraw = withdrawBalance.innerText;
    const TotalBalanceWithdraw = parseFloat(TotalWithdraw);

    const FinalWithBalance = TotalBalanceWithdraw + newWithdrawBalance;
    withdrawBalance.innerText = FinalWithBalance;

    // step 3

    const withdrawBalanceFinal = document.getElementById('Total-balance');
    const FinalWithraw = withdrawBalanceFinal.innerText;
    const withdrawFinalBlnce = parseFloat(FinalWithraw);

    const FinalTotalWithdrawBalance = withdrawFinalBlnce - newWithdrawBalance;
    withdrawBalanceFinal.innerText = FinalTotalWithdrawBalance;


})
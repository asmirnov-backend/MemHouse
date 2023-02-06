import { assert } from 'chai';
import { binding, given, then, when } from 'cucumber-tsflow';

@binding()
export class BankAccountSteps {
  private accountBalance = 0;

  @given(/На банковском счету лежит \$(\d*)/)
  public givenAnAccountWithStartingBalance(amount: number) {
    this.accountBalance = amount;
  }

  @when(/Пополняют счёт на \$(\d*)/)
  public deposit(amount: number) {
    this.accountBalance = Number(this.accountBalance) + Number(amount);
  }

  @then(/Баланс должен быть \$(\d*)/)
  public accountBalanceShouldEqual(expectedAmount: number) {
    assert.equal(this.accountBalance, expectedAmount);
  }
}

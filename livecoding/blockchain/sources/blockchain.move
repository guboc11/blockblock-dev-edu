/// Module: blockchain
module blockchain::blockchain {

  public struct Balance has key, store {
    id: UID,
    balance: u64
  }

  public fun new(ctx: &mut TxContext) : Balance {
    Balance{
      id: object::new(ctx),
      balance: 0
    }
  }

  entry public fun mint(ctx: &mut TxContext) {
    let object = Balance {
        id: object::new(ctx),
        balance: 10000
    };
    transfer::public_transfer(object, tx_context::sender(ctx));
  }

  entry public fun withdraw(ctx: &mut TxContext) {
    
  }

}

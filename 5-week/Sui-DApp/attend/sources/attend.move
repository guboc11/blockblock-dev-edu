// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

/// This example demonstrates a basic use of a shared object.
/// Rules:
/// - anyone can create and share a counter
/// - everyone can increment a counter by 1
/// - the owner of the counter can reset it to any value
module attend::attend {
  /// A shared counter.
  public struct Attend has key {
    id: UID,
    student: address,
    count: u64
  }

  /// Create and share a Counter object.
  entry public fun create(ctx: &mut TxContext) {
    transfer::share_object(Attend {
      id: object::new(ctx),
      student: ctx.sender(),
      count: 0
    })
  }

  /// Increment a counter by 1.
  entry public fun attend(counter: &mut Attend) {
    counter.count = counter.count + 1;
  }

  /// Set value (only runnable by the Attend owner)
  // public fun set_value(counter: &mut Attend, value: u64, ctx: &TxContext) {
  //   assert!(counter.student == ctx.sender(), 0);
  //   counter.count = value;
  // }
}
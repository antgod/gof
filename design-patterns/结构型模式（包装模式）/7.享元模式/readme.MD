1. 享元模式要求将对象的属性划分为内部状态与外部状态（状态在这里通常指属性）。享元模式的目标是尽量减少共享对象的数量，关于如何划分内部状态和外部状态，下面的几条经验提供了一些指引。

   1. 内部状态存储于对象内部。
   2. 内部状态可以被一些对象共享。
   3. 内部状态独立于具体的场景，通常不会改变。
   4. 外部状态取决于具体的场景，并根据场景而变化，外部状态不能被共享。

2. 剥离了外部状态的对象成为共享对象，外部状态在必要时被传入共享对象来组装成一个完整的对象。虽然组装外部状态成为一个完整对象的过程需要花费一定的时间，但却可以大大减少系统中的对象数量，相比之下，这点时间或许是微不足道的。因此，享元模式是一种用时间换空间的优化模式。

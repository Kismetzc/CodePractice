var MyStack = function() {
    this.inQueue = [];
    this.outQueue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.inQueue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if (!this.outQueue.length) {
        this.moveElements();
    }
    return this.outQueue.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    if (!this.outQueue.length) {
        this.moveElements();
    }
    return this.outQueue[this.outQueue.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.inQueue.length == 0 && this.outQueue.length == 0
};

MyStack.prototype.moveElements = function() {
    while (this.inQueue.length) {
        this.outQueue.push(this.inQueue.pop())
    }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
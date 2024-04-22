var MyQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    //如果outStack为空,则将inStack里面的元素压入outStack
    if (!this.outStack.length) {
        this.moveElements()
    }
    return this.outStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (!this.outStack.length) {
        this.moveElements()
    }
    return this.outStack[this.outStack.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.inStack.length == 0 && this.outStack.length == 0
};


//移动元素的重复代码单独封装一个函数是
/**
 * @return {void}
 */
MyQueue.prototype.moveElements = function() {
    while (this.inStack.length) {
        this.outStack.push(this.inStack.pop())
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
const Counter = {
    count: 0,

    getCount: function() {
        return this.count;
    },

    resetCount: function() {
        this.count = 0;
    },

    incrementSync: function() {
        const now1 = Date.now();

        while(true){
            const now2 = Date.now();
            if (now2 - now1 >= 3000) break;
        }

        this.count++;
    },

    incrementAsync: function(callback) {
        setTimeout(()=>{
            this.count++;
            callback();
        }, 3000);
    },
};

export default Counter;
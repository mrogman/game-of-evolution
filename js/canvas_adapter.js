var ADAPTER = {
    load: function() {
        var canvas = document.getElementById('canvas');
        ADAPTER.ctx = canvas.getContext('2d');
    },

    setCell: function(x, y, hsl) {
        ADAPTER.ctx.fillStyle = 'hsl(' + hsl.join(',') + ')';
        ADAPTER.ctx.fillRect(x * 5, y * 5, 5, 5);
    }
};

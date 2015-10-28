'use strict';

var DNA = {
    length: 7,

    generateDNA: function() {
        var dna = [];

        for(var i = 0; i < DNA.length; i++) {
            dna.push(DNA.randomBehavior());
        }

        return dna;
    },

    sameDNA: function(one, two) {
        var allSame = true;

        one.forEach(function(x, i) {
            if (x !== two[i]) {
                allSame = false;
            }
        });

        return allSame;
    },

    mergeDNA: function(indiv1, indiv2) {
        var dna_length = indiv1.dna.length;
        var new_dna = [];

        for (var i = 0; i < dna_length; i++) {
            if (Math.random() > 0.5) {
                new_dna.push(indiv1.dna[i]);
            } else {
                new_dna.push(indiv2.dna[i]);
            }
        }

        // 1% chance of mutation
        if (Math.random() <= 0.01) {
            var index = Math.floor(Math.random() * 6) + 2;
            new_dna[index] = DNA.randomBehavior();
        }

        return new_dna;
    },

    copyDNA: function(dna) {
        var new_dna = [];

        dna.forEach(function(gene) {
            new_dna.push(gene)
        });

        if (Math.random() <= 0.01) {
            var index = Math.floor(Math.random() * 6) + 2;
            new_dna[index] = DNA.randomBehavior();
        }

        return new_dna;
    },

    randomBehavior: function() {
        return Math.floor(Math.random() * 6);
    },

    describeDNA: function(dna) {
        var description = {};
        var actions = [ "eat", "reproduce", "turn left", "turn right", "move", "turn around" ];
        var names = [ "Enemy", "Friend", "Empty", "Wall", "Dead Friend", "Dead Enemy" ];

        // Color
        description["Color"] = DNA.computeColor(dna);

        // Size
        description["Size"] = dna[0];

        // Behavior
        for (var i = 1; i < DNA.length; i++) {
            description[names[i - 1]] = actions[dna[i]];
        }

        return description;
    },

    decodeDNA: function(dna) {
        var description = this.describeDNA(dna);
        Object.keys(description).forEach(function(item) {
            console.log(item + ": " + description[item]);
        });
    },

    computeColor: function(dna) {
        // Vector in radians
        var unit = (2 * Math.PI) / DNA.length;

        var coords = dna.reduce(function(acc, x, index) {
            var myAngle = index * unit;
            return [acc[0] + (x * Math.cos(myAngle)),   // X
                    acc[1] + (x * Math.sin(myAngle))];  // Y
        }, [0, 0]);

        var angle = Math.atan(coords[1] / coords[0]);   // arctan(y / x)

        if (coords[0] < 0) {           // Correct for 2nd and 3rd quadrants
            angle += Math.PI;
        }

        if (angle < 0) {               // Correct for 4th quadrant
            angle += 2 * Math.PI;
        }

        var degrees = Math.floor((angle / (2 * Math.PI)) * 360); // 2 PI = 360 degrees
        return degrees;
    },
}


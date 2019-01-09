'use strict';

var testProject = {
    init: function() {
        this.initCache();
        this.showSlider();
    },

    initCache: function () {
        this.openSliderBtn = $('.js-open-slider');
        this.firstRow = $('.row-1');
        this.secondRow = $('.row-2');
    },

    showSlider: function () {
        this.openSliderBtn.on('click', function () {
            this.firstRow.fadeOut();
            this.secondRow.fadeIn();
        }.bind(this))
    }
};

testProject.init();
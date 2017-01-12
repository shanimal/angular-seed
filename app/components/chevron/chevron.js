'use strict';

angular.module('myApp.components.chevron', [])
    .directive('chevron', [function () {

        return function (scope, elm, attrs) {

            var direction = attrs.chevron || 'left',
                pts = {
                    left: '10,2 2,10 10,18'
                }[direction];

            // TODO: CHECK FOR SVG SUPPORT
            elm.html(
                // jscs:disable maximumLineLength
                '<svg class="chevron $DIRECTION" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 40 40" xml:space="preserve"><polyline fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="$PTS" /></svg>'
                    .replace('$PTS', pts)
                    .replace('$DIRECTION', direction)
            );

        };

    }]);

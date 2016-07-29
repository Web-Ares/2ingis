"use strict";
( function() {

    $( function() {

        $.each( $( '.teeth' ), function() {

            new Teeth ( $( this ) );

        } );

        $.each( $( '.site__loader' ), function() {

            new Loader ( $( this ) );

        } );


    });

    var Loader = function( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _window = $( window );

        //private methods
        var _onEvents = function() {

                _window.on( {
                    load: function() {

                        _hideLoader()

                    }
                } );

            },
            _hideLoader = function () {

                _obj.addClass( 'hide' );

                setTimeout( function() {

                    _obj.remove()

                }, 1000 )

            },
            _init = function() {
                _onEvents();
            };

        _init();
    };

    var Teeth = function( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _tooth = _obj.find( '.teeth__item' );

        //private methods
        var _onEvents = function() {

                _tooth.on( {
                    click: function() {

                        _setState( $( this ) )

                    }
                } );

            },
            _setState = function ( elem ) {

                var curElem = elem,
                    curPicsWrap = curElem.find('.teeth__item-pics'),
                    curPics = curPicsWrap.find('img'),
                    curPic = curPics.filter('.active'),
                    curIndex = curPic.index(),
                    nextPic = curPics.eq(curIndex + 1),
                    hiddenInput = curElem.find('input[type=hidden]');

                if (!nextPic.length) {

                    nextPic = curPics.eq(0);
                    curPics.removeClass('tail');

                }

                curPics.removeClass('active');
                curPic.addClass('tail');
                nextPic.addClass('active');
                hiddenInput.val( nextPic.data('state') )

            },
            _init = function() {
                _onEvents();
            };

        _init();
    };

} )();

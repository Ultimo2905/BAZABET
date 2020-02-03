var windowWidth = $(window).width();
////////
$(document).ready(function() {
        if (windowWidth > 1020) {
            // Timeline
            var scene = $('#scene'),
                sceneTwo = $('#sceneTwo'),
                TrPlayer = $('#TrPlayer'),
                money = $('#money'),
                sceneThree = $('#sceneThree'),
                twoblockone = $('#two-block_one'),
                twoblocktwo = $('#two-block_two'),
                twoblockthree = $('#two-block_three'),
                twoblockfoure = $('#two-block_foure'),
                twoblockfive = $('#two-block_five'),
                threeBlock = $('#three-block'),
                tl = gsap.timeline();
            tl

                .from(sceneThree, 1, { x: -200, autoAlpha: 1, scale: 0.7, ease: Power1.easeInOut })
                .fromTo(money, 1.5, { y: 200, autoAlpha: 0, scale: 0.2, ease: Power1.easeOut }, { y: 210, autoAlpha: 1, scale: 1, ease: Power1.easeOut })
                .from(threeBlock, 2, { y: -160, autoAlpha: 1, ease: Power1.easeInOut }, '-=1.5')
                .from(twoblockone, 0.5, { x: -50, ease: Power1.easeInOut, autoAlpha: 0 }, '-=1')
                .from(twoblocktwo, 0.5, { x: -50, ease: Power1.easeInOut, autoAlpha: 0 }, '-=0.5')
                .from(twoblockthree, 0.5, { x: -100, ease: Power1.easeInOut, autoAlpha: 0 })
                .from(twoblockfoure, 0.5, { x: -100, ease: Power1.easeInOut, autoAlpha: 0 })
                .from(twoblockfive, 0.5, { x: -100, ease: Power1.easeInOut, autoAlpha: 0 })
                // .to(money, 1, { autoAlpha: 1, scale: 1.5, ease: Power1.easeOut })
                // .from(money, 1, { autoAlpha: 1, scale: 1.5, ease: Power1.easeOut })

            .add('tlFirst', '-=4.5')
                .from(scene, 1, { x: -100, ease: Power2.easeIn, autoAlpha: 1 }, 'tlFirst')
                .from(sceneTwo, 1, { x: 100, ease: Power2.easeIn, autoAlpha: 1 }, 'tlFirst')

            // tl.pause();
            // $('#mybtn').on('click', function() {
            //     tl.reverse();
            //     tl.play();
            // });





            // Паралакс

            var scene = document.getElementById('scene');
            new Parallax(scene, {
                relativeInput: true
            });
            var sceneTwo = document.getElementById('sceneTwo');
            new Parallax(sceneTwo, {
                relativeInput: true
            });
            setTimeout(function() {
                var sceneThree = document.getElementById('sceneThree');
                new Parallax(
                    sceneThree, {
                        relativeInput: true
                    });

            }, 2500);

        };

    })
    ////////
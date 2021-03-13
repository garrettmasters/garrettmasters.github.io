// import Swup from 'swup';
// const swup = new Swup();

(function ($) {
  "use strict"; // Start of use strict
      $(document).ready(function () {
        setTimeout(init, 1000);
        function init() {
            document.body.classList.remove('loading');

            var intro1 = new RevealFx(document.querySelector('#intro-one'), {
                revealSettings : {
                    bgcolor: '#FFDE43',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            });
            intro1.reveal();
            var intro2 = new RevealFx(document.querySelector('#intro-two'), {
                revealSettings : {
                    bgcolor: '#FFDE43',
                    delay: 250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            });
            intro2.reveal();
            var intro3 = new RevealFx(document.querySelector('#intro-three'), {
                revealSettings : {
                    bgcolor: '#FFDE43',
                    delay: 500,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            });
            intro3.reveal();

            var scrollElemToWatch_1 = document.getElementById('image-one');
            var scrollElemToWatch_2 = document.getElementById('title-one');
            var scrollElemToWatch_3 = document.getElementById('text-one');
            var watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -300);
            var backgroundColor = "#FFDE43";
            var rev1 = new RevealFx(scrollElemToWatch_1, {
                    revealSettings : {
                        bgcolor: backgroundColor,
                        direction: 'lr',
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                        }
                    }
                });
            var rev2 = new RevealFx(scrollElemToWatch_2, {
                    revealSettings : {
                        bgcolor: backgroundColor,
                        direction: 'lr',
                        delay: 500,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                        }
                    }
                });
            var rev3 = new RevealFx(scrollElemToWatch_3, {
                    revealSettings : {
                        bgcolor: backgroundColor,
                        direction: 'lr',
                        delay: 500,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                        }
                    }
                });

            watcher_1.enterViewport(function() {
                rev1.reveal();
                rev2.reveal();
                rev3.reveal();
                watcher_1.destroy();
            });

            var scrollElemToWatch_4 = document.getElementById('image-two');
            var scrollElemToWatch_5 = document.getElementById('title-two');
            var scrollElemToWatch_6 = document.getElementById('text-two');
            var watcher_2 = scrollMonitor.create(scrollElemToWatch_4, -300);
            var rev4 = new RevealFx(scrollElemToWatch_4, {
                    revealSettings : {
                        bgcolor: backgroundColor,
                        direction: 'lr',
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                        }
                    }
                });
            var rev5 = new RevealFx(scrollElemToWatch_5, {
                    revealSettings : {
                        bgcolor: backgroundColor,
                        direction: 'lr',
                        delay: 500,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                        }
                    }
                });
            var rev6 = new RevealFx(scrollElemToWatch_6, {
                    revealSettings : {
                        bgcolor: backgroundColor,
                        direction: 'lr',
                        delay: 500,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                        }
                    }
                });

            watcher_2.enterViewport(function() {
                rev4.reveal();
                rev5.reveal();
                rev6.reveal();
                watcher_2.destroy();
            });

            var scrollElemToWatch_7 = document.getElementById('image-three');
            var scrollElemToWatch_8 = document.getElementById('title-three');
            var scrollElemToWatch_9 = document.getElementById('text-three');
            var watcher_3 = scrollMonitor.create(scrollElemToWatch_7, -300);
            var rev7 = new RevealFx(scrollElemToWatch_7, {
                    revealSettings : {
                        bgcolor: backgroundColor,
                        direction: 'lr',
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                        }
                    }
                });
            var rev8 = new RevealFx(scrollElemToWatch_8, {
                    revealSettings : {
                        bgcolor: backgroundColor,
                        direction: 'lr',
                        delay: 500,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                        }
                    }
                });
            var rev9 = new RevealFx(scrollElemToWatch_9, {
                    revealSettings : {
                        bgcolor: backgroundColor,
                        direction: 'lr',
                        delay: 500,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                        }
                    }
                });

            watcher_3.enterViewport(function() {
                rev7.reveal();
                rev8.reveal();
                rev9.reveal();
                watcher_3.destroy();
            });
        }

      });
})(jQuery); // End of use strict



// Adding an eventListener function to change color everytime var check is changed.(checked & unchecked)

// check.addEventListener('change',function(){
//   //   conditions to apply when checkbox is checked
//   if(this.checked == true){
//     box.setAttribute('style','background-color:white;')
//     ball.setAttribute('style','transform:translatex(100%);')
//     body.classList.add('dark-mode');
//     }
//   if(this.checked == false){
//     box.setAttribute('style','background-color:black;')
//     ball.setAttribute('style','transform:translatex(0);')
//     body.classList.remove('dark-mode');
//     }
// });

// const body = document.body
// const box = document.querySelector('.box')
// const ball = document.querySelector('.ball')
// const toggleSwitch = document.querySelector('#check');

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
//         box.setAttribute('style','background-color:white;')
//         ball.setAttribute('style','transform:translatex(100%);')
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         localStorage.setItem('theme', 'light');
//         box.setAttribute('style','background-color:black;')
//         ball.setAttribute('style','transform:translatex(0%);')
//     }
// }

// toggleSwitch.addEventListener('change', switchTheme, false);


// const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
// if (currentTheme) {
//     console.log(currentTheme);
//     document.documentElement.setAttribute('data-theme', currentTheme);
//     if (currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//     }
// }

//identify the toggle switch HTML element
const toggleSwitch = document.querySelector('#check');
const box = document.querySelector('.box')
const ball = document.querySelector('.ball')
//function that changes the theme, and sets a localStorage variable to track the theme between page loads
function switchTheme(e) {
    if (e.target.checked) {
        // localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        // box.setAttribute('style','background-color:white;')
        ball.setAttribute('style','transform:translatex(100%);')
        toggleSwitch.checked = true;
    } else {
        // localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
        // box.setAttribute('style','background-color:black;')
        ball.setAttribute('style','transform:translatex(0%);')
        toggleSwitch.checked = false;
    }
}

//listener for changing themes
toggleSwitch.addEventListener('change', switchTheme, false);



function setColorScheme() {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
  const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches
  const isNotSpecified = window.matchMedia("(prefers-color-scheme: no-preference)").matches
  const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;

  window.matchMedia("(prefers-color-scheme: dark)").addListener(e => e.matches && activateDarkMode())
  window.matchMedia("(prefers-color-scheme: light)").addListener(e => e.matches && activateLightMode())

  if(isDarkMode) activateDarkMode()
  if(isLightMode) activateLightMode()
  if(isNotSpecified || hasNoSupport) {
    console.log('You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.')
    now = new Date();
    hour = now.getHours();
    if (hour < 4 || hour >= 16) {
      activateDarkMode();
    }
  }
}
setColorScheme();
window.matchMedia("(prefers-color-scheme: dark)").addListener(
    e => e.matches && activateDarkMode()
);
window.matchMedia("(prefers-color-scheme: light)").addListener(
    e => e.matches && activateLightMode()
);
function activateDarkMode() {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleSwitch.checked = true;
    ball.setAttribute('style','transform:translatex(100%);')
}
function activateLightMode() {
    document.documentElement.setAttribute("data-theme", "light");
    toggleSwitch.checked = false;
    ball.setAttribute('style','transform:translatex(0%);')
}



// main js for swipe style transitions
;(function(window) {

    'use strict';

    // Helper vars and functions.
    function extend(a, b) {
        for(var key in b) {
            if( b.hasOwnProperty( key ) ) {
                a[key] = b[key];
            }
        }
        return a;
    }

    function createDOMEl(type, className, content) {
        var el = document.createElement(type);
        el.className = className || '';
        el.innerHTML = content || '';
        return el;
    }

    /**
     * RevealFx obj.
     */
    function RevealFx(el, options) {
        this.el = el;
        this.options = extend({}, this.options);
        extend(this.options, options);
        this._init();
    }

    /**
     * RevealFx options.
     */
    RevealFx.prototype.options = {
        // If true, then the content will be hidden until it´s "revealed".
        isContentHidden: true,
        // The animation/reveal settings. This can be set initially or passed when calling the reveal method.
        revealSettings: {
            // Animation direction: left right (lr) || right left (rl) || top bottom (tb) || bottom top (bt).
            direction: 'lr',
            // Revealer´s background color.
            bgcolor: '#f0f0f0',
            // Animation speed. This is the speed to "cover" and also "uncover" the element (seperately, not the total time).
            duration: 500,
            // Animation easing. This is the easing to "cover" and also "uncover" the element.
            easing: 'easeInOutQuint',
            // percentage-based value representing how much of the area should be left covered.
            coverArea: 0,
            // Callback for when the revealer is covering the element (halfway through of the whole animation).
            onCover: function(contentEl, revealerEl) { return false; },
            // Callback for when the animation starts (animation start).
            onStart: function(contentEl, revealerEl) { return false; },
            // Callback for when the revealer has completed uncovering (animation end).
            onComplete: function(contentEl, revealerEl) { return false; }
        }
    };

    /**
     * Init.
     */
    RevealFx.prototype._init = function() {
        this._layout();
    };

    /**
     * Build the necessary structure.
     */
    RevealFx.prototype._layout = function() {
        var position = getComputedStyle(this.el).position;
        if( position !== 'fixed' && position !== 'absolute' && position !== 'relative' ) {
            this.el.style.position = 'relative';
        }
        // Content element.
        this.content = createDOMEl('div', 'block-revealer__content', this.el.innerHTML);
        if( this.options.isContentHidden) {
            this.content.style.opacity = 0;
        }
        // Revealer element (the one that animates)
        this.revealer = createDOMEl('div', 'block-revealer__element');
        this.el.classList.add('block-revealer');
        this.el.innerHTML = '';
        this.el.appendChild(this.content);
        this.el.appendChild(this.revealer);
    };

    /**
     * Gets the revealer element´s transform and transform origin.
     */
    RevealFx.prototype._getTransformSettings = function(direction) {
        var val, origin, origin_2;

        switch (direction) {
            case 'lr' :
                val = 'scale3d(0,1,1)';
                origin = '0 50%';
                origin_2 = '100% 50%';
                break;
            case 'rl' :
                val = 'scale3d(0,1,1)';
                origin = '100% 50%';
                origin_2 = '0 50%';
                break;
            case 'tb' :
                val = 'scale3d(1,0,1)';
                origin = '50% 0';
                origin_2 = '50% 100%';
                break;
            case 'bt' :
                val = 'scale3d(1,0,1)';
                origin = '50% 100%';
                origin_2 = '50% 0';
                break;
            default :
                val = 'scale3d(0,1,1)';
                origin = '0 50%';
                origin_2 = '100% 50%';
                break;
        };

        return {
            // transform value.
            val: val,
            // initial and halfway/final transform origin.
            origin: {initial: origin, halfway: origin_2},
        };
    };

    /**
     * Reveal animation. If revealSettings is passed, then it will overwrite the options.revealSettings.
     */
    RevealFx.prototype.reveal = function(revealSettings) {
        // Do nothing if currently animating.
        if( this.isAnimating ) {
            return false;
        }
        this.isAnimating = true;

        // Set the revealer element´s transform and transform origin.
        var defaults = { // In case revealSettings is incomplete, its properties deafault to:
                duration: 500,
                easing: 'easeInOutQuint',
                delay: 0,
                bgcolor: '#f0f0f0',
                direction: 'lr',
                coverArea: 0
            },
            revealSettings = revealSettings || this.options.revealSettings,
            direction = revealSettings.direction || defaults.direction,
            transformSettings = this._getTransformSettings(direction);

        this.revealer.style.WebkitTransform = this.revealer.style.transform =  transformSettings.val;
        this.revealer.style.WebkitTransformOrigin = this.revealer.style.transformOrigin =  transformSettings.origin.initial;

        // Set the Revealer´s background color.
        this.revealer.style.backgroundColor = revealSettings.bgcolor || defaults.bgcolor;

        // Show it. By default the revealer element has opacity = 0 (CSS).
        this.revealer.style.opacity = 1;

        // Animate it.
        var self = this,
            // Second animation step.
            animationSettings_2 = {
                complete: function() {
                    self.isAnimating = false;
                    if( typeof revealSettings.onComplete === 'function' ) {
                        revealSettings.onComplete(self.content, self.revealer);
                    }
                }
            },
            // First animation step.
            animationSettings = {
                delay: revealSettings.delay || defaults.delay,
                complete: function() {
                    self.revealer.style.WebkitTransformOrigin = self.revealer.style.transformOrigin = transformSettings.origin.halfway;
                    if( typeof revealSettings.onCover === 'function' ) {
                        revealSettings.onCover(self.content, self.revealer);
                    }
                    anime(animationSettings_2);
                }
            };

        animationSettings.targets = animationSettings_2.targets = this.revealer;
        animationSettings.duration = animationSettings_2.duration = revealSettings.duration || defaults.duration;
        animationSettings.easing = animationSettings_2.easing = revealSettings.easing || defaults.easing;

        var coverArea = revealSettings.coverArea || defaults.coverArea;
        if( direction === 'lr' || direction === 'rl' ) {
            animationSettings.scaleX = [0,1];
            animationSettings_2.scaleX = [1,coverArea/100];
        }
        else {
            animationSettings.scaleY = [0,1];
            animationSettings_2.scaleY = [1,coverArea/100];
        }

        if( typeof revealSettings.onStart === 'function' ) {
            revealSettings.onStart(self.content, self.revealer);
        }
        anime(animationSettings);
    };

    window.RevealFx = RevealFx;

})(window);


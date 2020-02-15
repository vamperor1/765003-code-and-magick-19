'use strict';

// Задание 4
(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIRE_BALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var characterName = setup.querySelector('.setup-user-name');
  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var fireBall = setup.querySelector('.setup-fireball-wrap');
  var wizardCoatColor = setup.querySelector('input[name="coat-color"]');
  var wizardEyesColor = setup.querySelector('input[name="eyes-color"]');
  var fireBallColor = setup.querySelector('input[name="fireball-color"]');

  var onPopupEscPress = function (evt) {
    if (evt.key === ESC_KEY && evt.target !== characterName) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    wizardCoat.addEventListener('click', onCoatClick);
    wizardEyes.addEventListener('click', onEyesClick);
    fireBall.addEventListener('click', onFireBallClick);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    wizardCoat.removeEventListener('click', onCoatClick);
    wizardEyes.removeEventListener('click', onEyesClick);
    fireBall.removeEventListener('click', onFireBallClick);
  };

  var onCoatClick = function () {
    var randomCoatColor = COAT_COLORS[window.util.getRandomInRange(0, COAT_COLORS.length - 1)];
    wizardCoat.style.fill = randomCoatColor;
    wizardCoatColor.value = randomCoatColor;
  };

  var onEyesClick = function () {
    var randomEyesColor = EYES_COLORS[window.util.getRandomInRange(0, EYES_COLORS.length - 1)];
    wizardEyes.style.fill = randomEyesColor;
    wizardEyesColor.value = randomEyesColor;
  };

  var onFireBallClick = function () {
    var randomFireBallColor = FIRE_BALL_COLORS[window.util.getRandomInRange(0, FIRE_BALL_COLORS.length - 1)];
    fireBall.style.background = randomFireBallColor;
    fireBallColor.value = randomFireBallColor;
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      closePopup();
    }
  });
})();

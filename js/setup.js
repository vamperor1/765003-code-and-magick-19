'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var SIMILAR_WIZARDS_NUMBER = 4;

var similarWizards = [];
var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

var getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getSimilarWizards = function () {
  for (var i = 1; i <= SIMILAR_WIZARDS_NUMBER; i++) {
    var similarWizard = {
      name: WIZARD_NAMES[getRandomInRange(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SURNAMES[getRandomInRange(0, WIZARD_SURNAMES.length - 1)],
      coatColor: COAT_COLORS[getRandomInRange(0, COAT_COLORS.length - 1)],
      eyesColor: EYES_COLORS[getRandomInRange(0, EYES_COLORS.length - 1)],
    };
    similarWizards.push(similarWizard);
  }
};

var renderSimilarWizards = function () {
  getSimilarWizards();
  for (var i = 0; i < similarWizards.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = similarWizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = similarWizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = similarWizards[i].eyesColor;

    fragment.appendChild(wizardElement);
  }
  similarListElement.appendChild(fragment);
};

userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

renderSimilarWizards();

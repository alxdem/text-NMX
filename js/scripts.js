(function () {

  var cardMoreButtons = document.querySelectorAll('.card-control-btn-more');
  var cardSearchButtons = document.querySelectorAll('.form-search-btn');
  var cardCloseButtons = document.querySelectorAll('.card-control-btn-close');
  var formSearchInputs = document.querySelectorAll('.form-search-txt');

  var stateObj = {
    // Количество состояний
    'stateCount': 4,

    // Метод очистки состояний
    'stateClear': function (clearElement) {
      for(var i = 1; i < this.stateCount + 1; i++) {
        clearElement.classList.remove('state-' + i);
      }
    },
    // Метод установки состояния 1 обработчик - 1 состояние
    'cardStateSet': function (e, stateNumb) {
      var target = e.target;

      while (!target.classList.contains('wrapper')) {
        if (target.classList.contains('card')) {
          var card = target;

          this.stateClear(card);
          card.classList.add('state-' + stateNumb);

          return;
        }

        target = target.parentNode;
      }
    },

    // Метод установки состояния 1 обработчик - 2 состояния
    'cardStateSet2': function (e) {
      var target = e.target;

      while (!target.classList.contains('wrapper')) {
        if (target.classList.contains('card')) {
          var card = target;
          var state = 0;

          if (!card.classList.contains('state-1')) {
            var state = 1;
          } else {
            var state = 2;
          }

          this.stateClear(card);
          card.classList.add('state-' + state);

          return;
        }

        target = target.parentNode;
      }
    }
  };

  var moreBtnClickHandler = function (e) {
    stateObj.cardStateSet2(e);
  };

  var searchBtnClickHandler = function (e) {
    stateObj.cardStateSet(e, 3);
  };

  var closeBtnClickHandler = function (e) {
    stateObj.cardStateSet(e, 2);
  };

  var searchInputKeypressHandler = function (e) {
    stateObj.cardStateSet(e, 4);
  };

  // Задал обработчики в цикле, на случай если карточка будет не одна
  cardMoreButtons.forEach(function (item) {
    item.addEventListener('click', moreBtnClickHandler);
  });

  cardSearchButtons.forEach(function (item) {
    item.addEventListener('click', searchBtnClickHandler);
  });

  cardCloseButtons.forEach(function (item) {
    item.addEventListener('click', closeBtnClickHandler);
  });

  formSearchInputs.forEach(function (item) {
    item.addEventListener('keypress', searchInputKeypressHandler);
  });


})();


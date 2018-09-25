(function () {

  var cardMoreButtons = document.querySelectorAll('.card-control-btn-more');
  var cardSearchButtons = document.querySelectorAll('.form-search-btn');
  var cardCloseButtons = document.querySelectorAll('.card-control-btn-close');
  var formSearchInputs = document.querySelectorAll('.form-search-txt');

  var cardStateSet = function (e, stateNumb) {
    var target = e.target;

    while (!target.classList.contains('wrapper')) {
      if (target.classList.contains('card')) {

        var card = target;

        switch (stateNumb) {
          case 2:
            if (!card.classList.contains('state-1')) {
              card.setAttribute('class', 'card state-1');
            } else {
              card.setAttribute('class', 'card state-2');
            }
          break;
          case 3:
            card.setAttribute('class', 'card state-3');
            break;

          case 4:
            card.setAttribute('class', 'card state-2');
            break;

          case 5:
            card.setAttribute('class', 'card state-3 state-4');
            break;
        }

        return;
      }

      target = target.parentNode;
    }
  };

  var moreBtnClickHandler = function (e) {
    cardStateSet(e, 2);
  };

  var searchBtnClickHandler = function (e) {
    cardStateSet(e, 3);
  };

  var closeBtnClickHandler = function (e) {
    cardStateSet(e, 4);
  };

  var searchInputKeypressHandler = function (e) {
    cardStateSet(e, 5);
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


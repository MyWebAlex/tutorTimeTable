$(document).ready(function () {
  var price = 1050;
  var finalPrice = 1050;
  $('.mmr__current-mmr__number').on('input', function () {
    var oldMmr = $('.mmr__current-mmr__number').val();
    oldMmr = Number.parseInt(oldMmr);
    var newMmr = oldMmr + 400;
    var x = newMmr / 156;
    var y = oldMmr / 156;
    $('.feature-mmr__number').text(newMmr + "+");

    if (x <= 36) {
      $('.feature-mmr__icon__img').attr('src', "img/ranks/rank" + Math.ceil(x) + ".png");
    } else if ($('.mmr__current-mmr__number').val() == 9999) {
      $('.feature-mmr__icon__img').attr('src', "img/ranks/rank40.png");
      $('.feature-mmr__number').text("EZ TOP 1");
    } else {
      $('.feature-mmr__icon__img').attr('src', "img/ranks/rank36.png");
    }

    $('.order__mmr__rank').attr('src', "img/ranks/rank" + Math.ceil(y) + ".png");
    $('.order__mmr__current-mmr').val(oldMmr);

    price = 0;  //расчёт цены заказа
    switch (true) {
      case oldMmr <= 1000:
        price = 650;
        break;
      case oldMmr <= 1250:
        price = 700;
        break;
      case oldMmr <= 1500:
        price = 725;
        break;
      case oldMmr <= 1750:
        price = 750;
        break;
      case oldMmr <= 2000:
        price = 775;
        break;
      case oldMmr <= 2250:
        price = 800;
        break;
      case oldMmr <= 2500:
        price = 825;
        break;
      case oldMmr <= 2750:
        price = 850;
        break;
      case oldMmr <= 3000:
        price = 900;
        break;
      case oldMmr <= 3250:
        price = 950;
        break;
      case oldMmr <= 3500:
        price = 1000;
        break;
      case oldMmr <= 3750:
        price = 1050;
        break;
      case oldMmr <= 4000:
        price = 1100;
        break;
      case oldMmr <= 4500:
        price = 1175;
        break;
      case oldMmr <= 5000:
        price = 1250;
        break;
      case oldMmr <= 5100:
        price = 1325;
        break;
      case oldMmr <= 5300:
        price = 1400;
        break;
      case oldMmr <= 5400:
        price = 1475;
        break;
      case oldMmr <= 5500:
        price = 1550;
        break;
      case oldMmr <= 5600:
        price = 1650;
        break;
      case oldMmr <= 5700:
        price = 1750;
        break;
      case oldMmr <= 5800:
        price = 1850;
        break;
      case oldMmr <= 5900:
        price = 1950;
        break;
      case oldMmr <= 6000:
        price = 2000;
        break;
      case oldMmr <= 6100:
        price = 2200;
        break;
      case oldMmr <= 6200:
        price = 2300;
        break;
      case oldMmr <= 6300:
        price = 2450;
        break;
      case oldMmr <= 6400:
        price = 2700;
        break;
      case oldMmr <= 6500:
        price = 3000;
        break;
      case oldMmr == 9999:
        price = "OVER 9000";
        break;
      case oldMmr > 6500:
        price = 3500;
        break;
      default:
        price = oldMmr;
    }
    $('.price__blank__new').text(price);
    if (oldMmr <= 3000) {
      $('.price__blank__old').text(price + 600);
    } else if (oldMmr <= 4000 && oldMmr > 3000) {
      $('.price__blank__old').text(price + 550);
    } else if (oldMmr <= 4500 && oldMmr > 4000) {
      $('.price__blank__old').text(price + 450);
    } else if (oldMmr == 9999) {
      $('.price__blank__old').text('\u221E');
    } else {
      $('.price__blank__old').text(price + 400);
    }
  });

  $('a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top - 10
    }, 1200);
    return false;
  });

  $('.order__mmr__current-mmr').on('input', function () {
    var oldMmr = $('.order__mmr__current-mmr').val();
    oldMmr = Number.parseInt(oldMmr);
    var y = oldMmr / 156;
    if (y <= 36) {
      $('.order__mmr__rank').attr('src', "img/ranks/rank" + Math.ceil(y) + ".png");
    } else {
      $('.order__mmr__rank').attr('src', "img/ranks/rank36.png");
    }
    price = 0; //расчёт цены заказа
    switch (true) {
      case oldMmr <= 1000:
        price = 650;
        break;
      case oldMmr <= 1250:
        price = 700;
        break;
      case oldMmr <= 1500:
        price = 725;
        break;
      case oldMmr <= 1750:
        price = 750;
        break;
      case oldMmr <= 2000:
        price = 775;
        break;
      case oldMmr <= 2250:
        price = 800;
        break;
      case oldMmr <= 2500:
        price = 825;
        break;
      case oldMmr <= 2750:
        price = 850;
        break;
      case oldMmr <= 3000:
        price = 900;
        break;
      case oldMmr <= 3250:
        price = 950;
        break;
      case oldMmr <= 3500:
        price = 1000;
        break;
      case oldMmr <= 3750:
        price = 1050;
        break;
      case oldMmr <= 4000:
        price = 1100;
        break;
      case oldMmr <= 4500:
        price = 1175;
        break;
      case oldMmr <= 5000:
        price = 1250;
        break;
      case oldMmr <= 5100:
        price = 1325;
        break;
      case oldMmr <= 5300:
        price = 1400;
        break;
      case oldMmr <= 5400:
        price = 1475;
        break;
      case oldMmr <= 5500:
        price = 1550;
        break;
      case oldMmr <= 5600:
        price = 1650;
        break;
      case oldMmr <= 5700:
        price = 1750;
        break;
      case oldMmr <= 5800:
        price = 1850;
        break;
      case oldMmr <= 5900:
        price = 1950;
        break;
      case oldMmr <= 6000:
        price = 2000;
        break;
      case oldMmr <= 6100:
        price = 2200;
        break;
      case oldMmr <= 6200:
        price = 2300;
        break;
      case oldMmr <= 6300:
        price = 2450;
        break;
      case oldMmr <= 6400:
        price = 2700;
        break;
      case oldMmr <= 6500:
        price = 3000;
        break;
      case oldMmr == 9999:
        price = "OVER 9000";
        break;
      case oldMmr > 6500:
        price = 3500;
        break;
      default:
        price = oldMmr;
    }
    finalPrice = price;
    if ($('.check-fast').is(':checked')) {
      finalPrice += 0.2 * price;
    }
    if ($('.check-guard').is(':checked')) {
      finalPrice += 0.15 * price;
    }
    $('.order__mmr__price__number').text(finalPrice);
  });

  $('.check-fast').on('change', function () {
    if (this.checked) {
      finalPrice += price * 0.2;
      $('.mob-fast').css('color', 'green');
    } else {
      finalPrice -= price * 0.2;
      $('.mob-fast').css('color', 'red');
    }
    $('.order__mmr__price__number').text(finalPrice);
  });
  $('.check-guard').on('change', function () {
    if (this.checked) {
      finalPrice += price * 0.15;
      $('.mob-guard').css('color', 'green');
    } else {
      finalPrice -= price * 0.15;
      $('.mob-guard').css('color', 'red');
    }
    $('.order__mmr__price__number').text(finalPrice);
  });

  $('.order__mmr__coupon').on('input', function () {
    var coupon = $('.order__mmr__coupon').val();
    console.log(coupon);
    if (coupon == "dark") {
      finalPrice -= price * 0.08;
      $('.order__mmr__price__number').text(finalPrice);
      $('.order__mmr__coupon').addClass("green");
      $('.mob-code').css('color', 'green');
    } else {
      if ($('.order__mmr__coupon').hasClass('green')) {
        finalPrice += price * 0.08;
        $('.order__mmr__price__number').text(finalPrice);
        $('.order__mmr__coupon').removeClass("green");
        $('.mob-code').css('color', 'red');
      }
    }
  });
		
$('form').submit(function(event) {
  event.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $("form").trigger("reset");
    });
    if ($('.modal__pay-select').val() == 'sb') {
      window.open('https://online.sberbank.ru', '_blank');
    }
    if ($('.modal__pay-select').val() == 'ya') {
      window.open('https://money.yandex.ru', '_blank');
    }
    if ($('.modal__pay-select').val() == 'wm') {
      window.open('https://www.webmoney.ru', '_blank');
    }
    if ($('.modal__pay-select').val() == 'qw') {
      window.open('https://qiwi.com', '_blank');
    }
    return false;
  });

  $('.order__mmr__btn').on('click', function () {
    var login = $('.order__mmr__steam').val();
    if (login == '') {
      $('.order__mmr__steam').addClass('red');
    } else {
      if (window.matchMedia('(max-width: 1040px)').matches) {
        $('.mob-price').text(finalPrice);
        $('.mobile').css('display', 'block');
        window.scrollTo(0, 2200);
      } else {
        $('.modal__price').val(finalPrice);
        $('.overlay').removeClass('opa'); 
      }
    }
  });

  $('.modal__close').on('click', function () {
    $('.overlay').addClass('opa');
  });

  $('.pay-one').on('click', function () {
    $('.active').removeClass('active');
    $('.pay-one').addClass('active');
    $('.modal__dlya-tupyh__img').attr('src', 'img/comment1.jpg');
  });
  $('.pay-two').on('click', function () {
    $('.active').removeClass('active');
    $('.pay-two').addClass('active');
    $('.modal__dlya-tupyh__img').attr('src', 'img/comment2.jpg');
  });
  $('.pay-three').on('click', function () {
    $('.active').removeClass('active');
    $('.pay-three').addClass('active');
    $('.modal__dlya-tupyh__img').attr('src', 'img/comment3.jpg');
  });
  $('.pay-four').on('click', function () {
    $('.active').removeClass('active');
    $('.pay-four').addClass('active');
    $('.modal__dlya-tupyh__img').attr('src', 'img/comment4.jpg');
  });

  $('.order__mmr__steam').on('input', function () {
    $('.order__mmr__steam').removeClass('red');
    var login = $('.order__mmr__steam').val();
    $('.modal__login').val(login);
    $('.mob-login').text(login);
  });

  $('.modal__pay-select').on('change', function () {
    $('.active').removeClass('active');
    $('.modal__pay-info').css('background-color', '#fff');
    if ($('.modal__pay-select').val() == 'sb') {
      $('.pay-one').addClass('active');
      $('.modal__dlya-tupyh__img').attr('src', 'img/comment1.jpg');
      $('.modal__pay-info').text("5469 5500 4120 7751");
    } else if ($('.modal__pay-select').val() == 'ya') {
      $('.pay-two').addClass('active');
      $('.modal__dlya-tupyh__img').attr('src', 'img/comment2.jpg');
      $('.modal__pay-info').text("410016413983699");
    } else if ($('.modal__pay-select').val() == 'wm') {
      $('.pay-three').addClass('active');
      $('.modal__dlya-tupyh__img').attr('src', 'img/comment3.jpg');
      $('.modal__pay-info').text("R906699101800");
    } else if ($('.modal__pay-select').val() == 'qw') {
      $('.pay-four').addClass('active');
      $('.modal__dlya-tupyh__img').attr('src', 'img/comment4.jpg');
      $('.modal__pay-info').text("+79523946055");
    }
  });

  $('.modal__pay-info').click(function () {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('.modal__pay-info').text()).select();
    document.execCommand("copy");
    $temp.remove();
    $(this).select();
    $(this).css('background-color', '#01baff');
    $(this).text($(this).text() + " скоп.");
  });
});
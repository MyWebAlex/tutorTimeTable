$(document).ready(function () {

  // Работа с датой
  
  


  function getDate(date) {
    var wday = date.getDay();
    if (wday === 0)
      wday = 7;
    var res = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      wday: wday
    };
    return res;
  } 

  var now = new Date();
  var date = getDate(now);
  



  // Изменение информации об ученике
  $('.students').on('change', '.changer', function() {
    var item = $(this);
    var value = item.val();
    var option;
    var student = item.parent().parent();
    var studentSettings = student.children('.student__header');
    var id = student.attr('value');
    if (item.hasClass('student__name-changer')) {
      option = 'StudentName';
      studentSettings.children('.student__name').text(value);
    }
    if (item.hasClass('student__phone-changer')) {
      option = 'StudentPhone';
    } 
    if (item.hasClass('student__cours-changer')) {
      option = 'Cours';
    } 
    if (item.hasClass('student__more-changer')) {
      option = 'More';
    }
    $.ajax({
      type: "POST",
      url: "/scripts/php/SetStudentInfo.php",
      data: {option:option, value:value, id:id}
    });
    return false;
  });

  

  $('.students').on('click', '.student__header', function () {
    var student = $(this).parent();
    var info = $(this).children('.student__info');
    var id = student.attr('id');
    if (info.text() == 'Больше') {
      hideStudentMore($('.student_more'));
      showStudentMore(student);
    } else {
      hideStudentMore(student);
    }
  });

  function showStudentMore(student) {
    studentSettings = student.children('.student__settings');
    student.addClass('student_more');
    student.children('.student__header').children('.student__info').text('Меньше');
    studentSettings.children('.changer').removeClass('hide');
    studentSettings.children('.label').removeClass('hide');
  }

  function hideStudentMore(item) {
    itemSettings = item.children('.student__settings');
    itemSettings.children('.changer').addClass('hide');
    itemSettings.children('.label').addClass('hide');
    item.children('.student__header').children('.student__info').text('Больше');
    item.removeClass('student_more');
  }

  // Добавление нового ученика
  $('.student__new').on('click', function() {
    $.ajax({
      type: "POST",
      url: "/scripts/php/SetNewStudent.php",
      success: function(data) {
        $('.students').append(data);
        $('.students').append($('.student__new'));
      }
    });
  });

  // Добавление ученика в расписание
  var dragStudentID = 0;
  var dragStudentName = 0;
  var userID = 1;
  var price = 700;
  $('.student').on('dragstart', function() {
    dragStudentID = $(this).attr('value');
    dragStudentName = $(this).children('.student__header').children('.student__name').text();
  });
  $('.student').on('dragend', function() {
    $('.hovered').removeClass('hovered');
  });
  $('.hour').on('dragenter', function(e) {
    e.preventDefault();
    $('.hovered').removeClass('hovered');
    $(this).addClass('hovered');
  });
  $('.hour').on('dragover', function(e) {
    e.preventDefault();
  });
  $('.hour').on('drop', function() {
    $(this).children('ul').append('<li class="new-entry">'+ dragStudentName +'</li>');
    var hourID = $(this).attr('id');
    var hourInfo = hourID.split('-');
    var hourDate = hourInfo[0] + hourInfo[1] + hourInfo[2];
    var hourHour = hourInfo[3];
    
    $.ajax({
      type: "POST",
      url: "/scripts/php/SetHourNewStudent.php",
      data: {userID:userID, studentID:dragStudentID, price:price, date:hourDate, hour:hourHour},
      success: function(data) {
        $('.new-entry').attr('value', data + ' 700 7');
        $('.new-entry').removeClass('new-entry');
      }
    });
  });

  var entry;
  var entryInfo;
  $('.hour').on('click', 'li', function(e) {
    var coordsX = e.pageX;
    var coordsY = e.pageY - 200;
    if (coordsY < 0) {
      coordsY = 50;
    }
    entry = $(this);
    entryInfo = entry.attr('value').split(' ');
    $('#entry__price__input').val(entryInfo[1]);
    $('#entry__repeatness__input').val(entryInfo[2]);
    $('.pop-modifier').css('display', 'block');
    $('.pop-modifier').css('top', coordsY);
    $('.pop-modifier').css('left', coordsX);
  });

  $('#entry__delete__btn').on('click', function() {
    var entryID = entryInfo[0];
    entry.detach();
    $('.pop-modifier').css('display', 'none');
    $.ajax({
      type: "POST",
      url: "/scripts/php/DeleteEntry.php",
      data: {entryID:entryID}
    });
  });

  $('#entry__price__input').on('change', function(){
    var entryID = entryInfo[0];
    var entryPrice = $(this).val();
    entry.attr('value', entryInfo[0] + ' ' + entryPrice + ' ' + entryInfo[2]);
    $.ajax({
      type: "POST",
      url: "/scripts/php/SetEntryPrice.php",
      data: {entryID:entryID, entryPrice:entryPrice}
    });
  });

  $('#entry__repeatness__input').on('change', function(){
    var entryID = entryInfo[0];
    var entryrepeatness = $(this).val();
    entry.attr('value', entryInfo[0] + ' ' + entryInfo[1] + ' ' + entryrepeatness);
    $.ajax({
      type: "POST",
      url: "/scripts/php/SetEntryRepeatness.php",
      data: {entryID:entryID, entryrepeatness:entryrepeatness}
    });
  });
  
  $('.timetable').on('click', function (e){
		var div = $("#pop-modifier");
		if (!div.is(e.target) && div.has(e.target).length === 0 && !$('.hour ul li').is(e.target)) {
			div.css('display', 'none');
		}
	});
});
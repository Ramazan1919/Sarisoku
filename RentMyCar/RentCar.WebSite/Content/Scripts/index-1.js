$(function () {

    $.fn.extend({

        serializeFormJSON: function (s) {

            var o = {};

            var a = this.serializeArray();

            $.each(a, function () {

                if (o[this.name]) {

                    if (!o[this.name].push) {

                        o[this.name] = [o[this.name]];

                    }

                    o[this.name].push(this.value || '');

                } else {

                    o[this.name] = this.value || '';

                }

            });

            if (s) {

                return JSON.stringify(o);

            } else {

                return o;

            }

        }

    });

    var today = new Date();

    var dd = today.getDate();

    var mm = today.getMonth()+1;

    var is_today = false;

    if (dd < 10) {dd = '0' + dd}

    if (mm < 10) {mm = '0' + mm}

    var yyyy = today.getFullYear();





});



var conrollerName = $("#hdnController").val();

var viewName = $("#hdnView").val();

var path = $("#hdnPath").val();



/* ==========================================================================

   Campaign Slide Function

   ========================================================================== */

var index = 1, count = 1;

var campaign = $('#campaign .owl-carousel').owlCarousel({

    nav: true,

    loop: false,

    margin: 30,

    smartSpeed: 750,

    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],

    responsive: {

        0: {

            items: 1

        },

        768: {

            items: 3

        }

    }

});

/* ==========================================================================

   Hour Slide Function

   ========================================================================== */

var hour = $('.hour .owl-carousel').owlCarousel({

    nav: true,

    loop: true,

    items: 1,

    margin: 30,

    smartSpeed: 750,

    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']

});





var popularStationIds = ["KS003467", "KS003468", "KS003465", "KS003470", "KS003450", "KS003469"];



$.getJSON("inc/serviceSearchingStations.php", null, function (allDatas) {

    $.each(allDatas, function (i, item) {

        if (popularStationIds.indexOf(item.Code) < 0) {

            allStation.push({ code: item.Code, name: item.Name });

        }

    });
});

var allStation1 = {

    url: function (phrase) {

        return "inc/serviceSearchingStations.php";

    },

    list: {

        match: {

            enabled: true

        },



    },

    getValue: function (element) {

        return element.Name;

    },



    ajaxSettings: {

        dataType: "json",

        method: "POST",

        data: {

            dataType: "json"

        }

    },

    requestDelay: 100

};



$("#search").on('click focusin', function () {

    this.value = '';

});



$("#search2").on('click focusin', function () {

    this.value = '';

});



var $search1 = $("#search").easyAutocomplete(allStation1);

$search1.on('keyup', function (e) {

    var $this = $(this).val();

    var firstLetter = $this.charAt(0);

    if (e.keyCode === 222) {

        firstLetter = "İ";

    }

    var upperFirstLetter = firstLetter.toUpperCase();

    $this = upperFirstLetter + $this.slice(1);

    $(this).val($this);

    if ($(this).val() == "") {

        allItem($(this));

    }

}).on('focus', function () {

    if ($(this).val() == "") {

        allItem($(this));

    }

});

var $search2 = $("#search2").easyAutocomplete(allStation1);

$search2.on('keyup', function () {

    if ($(this).val() == "") {

        allItem($(this));

    }

}).on('focus', function () {

    if ($(this).val() == "") {

        allItem($(this));

    }

});



function allItem($elem) {

    $('.easy-autocomplete-container').find('ul').html('');

    allStation.forEach(function (e, i) {

        $elem.siblings('.easy-autocomplete-container').find('ul').append('<li><div class="eac-item">' + allStation[i].name + '</div></li>');

    });

    $elem.siblings('.easy-autocomplete-container').find('ul').show();

    $elem.siblings('.easy-autocomplete-container').find('ul').hover(function () {

            $(this).addClass('selected');

        },

        function () {

            $(this).addClass('selected');

        });



    $elem.siblings('.easy-autocomplete-container').find('ul > li').click(function () {

        $elem.val($('.eac-item', this).html().replace(regex, ''));

    });

}

var regex = /(<([^>]+)>)/ig;





//var stationOpenStatus = 0;



function SubmitForm() {



    var pickUpStation = $('input[name="PickUpStation"]').val();

    var dropOffStation = $('input[name="DropOffStation"]').val();

    var isItem = false;





    var index_1;

    for (var i = 0; i < allStation.length; ++i) {

        if (allStation[i].name == pickUpStation) {

            index_1 = i;

            break;

        }

    }

    var pickUpStationOrder = index_1;



    var index_2;

    for (var i = 0; i < allStation.length; ++i) {

        if (allStation[i].name == dropOffStation) {

            index_2 = i;

            break;

        }

    }

    var dropOffStationOrder = index_2;





    if (pickUpStationOrder > -1 & dropOffStationOrder > -1) {

        $("#PickUpStationCode").val(allStation[pickUpStationOrder].code);

    }

    if ($("#DifferentOfficeDelivery").is(':checked')) {



        if (pickUpStationOrder > -1 & dropOffStationOrder > -1) {

            $("#DropOffStationCode").val(allStation[dropOffStationOrder].code);

            isItem = true;

        } else {

            $('.form .alert-info').html('<p><strong>UYARI : </strong> Lütfen iade yeri seçiniz.');

            $('.form .alert-info').addClass('open');

            return false;

        }



    }  else {



        var index_3;

        for (var i = 0; i < allStation.length; ++i) {

            if (allStation[i].name == pickUpStation) {

                index_3 = i;

                break;

            }

        }



        var pickUpStationOrder = index_3;



        if (pickUpStationOrder > -1) {

            $("#PickUpStationCode").val(allStation[pickUpStationOrder].code);

            $("#DropOffStationCode").val(allStation[pickUpStationOrder].code);

            isItem = true;

        }

        else {

            $('.form .alert-info').html('<p><strong>UYARI : </strong> Lütfen alış ve iade yeri seçiniz.');

            $('.form .alert-info').addClass('open');

            return false;

        }

    }





    if (isItem) {

        $('.form .alert-info').removeClass('open');

    }



    else {

        $('.form .alert-info').addClass('open');

    }







    var limitDay = 290;



    var hiddenAlisDay = $('#hiddenAlisDay').val();

    var hiddenAlisMonth = $('#hiddenAlisMonth').val();

    var hiddenAlisYear = $('#hiddenAlisYear').val();

    var hiddenVerisDay = $('#hiddenVerisDay').val();

    var hiddenVerisMonth = $('#hiddenVerisMonth').val();

    var hiddenVerisYear = $('#hiddenVerisYear').val();



    var alisSecond = hiddenAlisDay * 24 + hiddenAlisMonth * 30 * 24 + hiddenAlisYear * 12 * 30 * 24;

    var verisSecond = hiddenVerisDay * 24 + hiddenVerisMonth * 30 * 24 + hiddenVerisYear * 12 * 30 * 24;

    var gapDateDay = (verisSecond - alisSecond) / 24;











    if ($('#search').val() == "") {

        $('.form .alert-info').html('<p><strong>UYARI : </strong> Lütfen alış ve iade yeri seçiniz.');

        return false;

    }



    else if ($('#DifferentOfficeDelivery').is(':checked')) {

        if ($('#search2').val() == "") {

            $('.form .alert-info').html('<p><strong>UYARI : </strong> Lütfen iade yeri seçiniz.');

            $('.form .alert-info').addClass('open');

            return false;

        }

    }

    else if ($('#pickUpDate').val() == "") {

        $('.form .alert-info').html('<p><strong>UYARI : </strong> Lütfen alış tarihi seçiniz.');

        $('.form .alert-info').addClass('open');

        return false;

    }

    else if ($('#pickUpHour').val() == "") {

        $('.form .alert-info').html('<p><strong>UYARI : </strong> Lütfen alış saati seçiniz.');

        $('.form .alert-info').addClass('open');

        return false;

    }



    else if ($('#dropOffDate').val() == "") {

        $('.form .alert-info').html('<p><strong>UYARI : </strong> Lütfen iade tarihi seçiniz.');

        $('.form .alert-info').addClass('open');

        return false;

    }



    else if ($('#dropOffHour').val() == "") {

        $('.form .alert-info').html('<p><strong>UYARI : </strong> Lütfen iade saati seçiniz.');

        $('.form .alert-info').addClass('open');

        return false;

    } else if (gapDateDay > limitDay) {

        $('.form .alert-info').html('<p><strong>UYARI : </strong> Aracı en fazla 29 günlük seçebilirsiniz.');

        $('.form .alert-info').addClass('open');

        return false;

    }

    /*  else if (stationOpenStatus == 0) {

         $('.form .alert-info').html('<p><strong>UYARI : </strong> Seçmiş olduğunuz saat aralığında ofislerimiz hizmet vermemektedir.');

         $('.form .alert-info').addClass('open');

         return false;

     } */

    else {





    }

    var data = $('#SearchForm').serializeFormJSON();

    delete data.__RequestVerificationToken;

    delete data.Promo;



}



var carSearch2 = $('.form .carSearch2'),

    frmGrp1 = $('.form .carSearch2 .form-group:first-of-type'),

    frmGrp2 = $('.form .carSearch2 .form-group:last-of-type');

$('#search').keyup(function (e) {

    $('#PickUpStationCode').val($('#search').val());

});

$('#search2').keyup(function (e) {

    $('#DropOffStationCode').val($('#search2').val());

});

$('#DifferentOfficeDelivery').change(function () {

    carSearch2SetWidth();

    if ($('#DifferentOfficeDelivery').is(':checked')) {

        $('#search').attr('placeholder', 'Alış Yeri');

    }

    else {

        $('#search').attr('placeholder', $('#search').attr('data-placeholder'));

    }

    return false;

});









$('#promo_code').change(function () {

    carSearch2SetWidth();

    return false;

});



function carSearch2SetWidth() {

    if ($('#DifferentOfficeDelivery').is(':checked') && $('#promo_code').is(':checked')) {

        frmGrp1.removeClass('hidden').css('width', '50%');

        frmGrp2.removeClass('hidden').css('width', '50%');

        carSearch2.addClass('visible').css('width', '50.5%');

    }

    else if ($('#DifferentOfficeDelivery').is(':checked') & !$('#promo_code').is(':checked')) {

        frmGrp1.removeClass('hidden').css('width', '100%');

        frmGrp2.addClass('hidden');

        carSearch2.addClass('visible').css('width', '25.8%');

    }

    else if (!$('#DifferentOfficeDelivery').is(':checked') & $('#promo_code').is(':checked')) {

        frmGrp1.addClass('hidden');

        frmGrp2.removeClass('hidden').css('width', '100%');

        carSearch2.addClass('visible').css('width', '25.8%');

    }

    else {

        frmGrp1.addClass('hidden');

        frmGrp2.addClass('hidden');

        carSearch2.removeClass('visible');

    }

}



if(siteMobil===1){





    var disabledDropOffDates = [];



    var disabledPickupDates = [];

    $(function () {

        $("#pickUpDate").datepicker({

            regional: "tr",

            minDate: new Date(),

            showButtonPanel: false,

            beforeShow: function (input, inst) {

                $('.hour').removeClass('open');



                var calendar = inst.dpDiv;

                $('.ui-datepicker').addClass("pickUpDatePicker");



                setTimeout(function () {

                    $('.ui-datepicker').css({

                        'margin-top': '0'

                    });

                    calendar.position({

                        my: 'left top',

                        at: 'left bottom',

                        collision: 'none',

                        of: input

                    });

                    $('.ui-datepicker').css({

                        'margin-top': '22px'

                    });

                }, 1);

            },



            onSelect: function (dateText, inst) {

                var d = new Date($.now());

                var new_date = ('0' + d.getDate()).slice(-2)+"."+('0' + (d.getMonth()+1)).slice(-2)+"."+d.getFullYear();



                pickUpDate = $(this).val();

                var getdate = new Date();

                $('#pickHour li').each(function () {

                    $(this).removeClass('disable');

                });

                if (pickUpDate <= getdate.toLocaleDateString()) {

                    $('#pickHour li').each(function () {

                        var getHour = parseInt($(this).html().replace(':', ''));

                        var setHour = (getdate.getHours() + ':' + getdate.getMinutes()).replace(':', '');

                        if (getHour < parseInt(setHour)) {

                            if (pickUpDate < new_date || pickUpDate == new_date) {

                                $(this).addClass('disable');

                            }

                        }

                    });

                }

            },

            onClose: function () {

                var minDate = $(this).datepicker('getDate');

                if (minDate) {

                    minDate.setDate(minDate.getDate());

                    $("#dropOffDate").datepicker("option", "minDate", minDate);





                    var date = $(this).datepicker('getDate'),

                        selectedDay = date.getDate(),

                        selectedMonth = date.getMonth() + 1,

                        selectedYear = date.getFullYear();



                    $('#hiddenAlisDay').val(selectedDay);

                    $('#hiddenAlisMonth').val(selectedMonth);

                    $('#hiddenAlisYear').val(selectedYear);



                    var dt = new Date();



                    var currentYear = dt.getFullYear();

                    var currentMonth = dt.getMonth() + 1;

                    var currentDay = dt.getDate();



                    var currentHour = dt.getHours();



                    var minHour = currentHour + 4;



                    if (selectedDay == currentDay && selectedMonth == currentMonth && selectedYear == currentYear) {



                        if (currentHour > 20) {



                            var minDate = $('#pickUpDate').datepicker('getDate');



                            minDate.setDate(minDate.getDate() + 1);

                            $("#pickUpDate").datepicker("option", "minDate", minDate);

                            $("#dropOffDate").datepicker("option", "minDate", minDate);



                            minHour = 4 - ((currentHour - 24) * -1);





                            for (var i = 0; i < minHour; i++) {

                                $('#pickUpHour option').eq(i).attr('disabled', 'disabled');

                            }



                            $('#pickUpHour').prev('.text').empty().text("0" + minHour);



                        } else {



                            for (var i = 0; i < minHour; i++) {

                                $('#pickUpHour option').eq(i).attr('disabled', 'disabled');

                            }



                            $('#pickUpHour').prev('.text').empty().text(minHour);





                        }



                        $('#pickUpHour option').attr('selected', false);

                        $('#pickUpHour option').eq(minHour).attr('selected', true);



                        var min = $('#pickUpMin').val()

                        if (!min) {

                            min = "00";

                        }

                        $('#pickUpTime').val(minHour + ':' + min)





                    } else {

                        $('#pickUpHour option').attr('disabled', false);

                    }



                }

            }

        });

        $("#pickUpHour,#dropOffHour").focus(function () {

            $('.hour').removeClass('open');

            var inp = $(this);

            inp.siblings('.hour').addClass('open');

            inp.siblings('.hour').find('li').click(function () {

                if (!$(this).hasClass('disable')) {

                    inp.val($(this).html());

                    $('.hour').removeClass('open');

                }

                else {

                }

            })

        });

    });

    $(function () {

        $("#dropOffDate").datepicker({

            regional: "tr",

            minDate: new Date(),

            showButtonPanel: false,

            beforeShow: function (input, inst) {

                $('.hour').removeClass('open');



                var calendar = inst.dpDiv;

                $('.ui-datepicker').removeClass("pickUpDatePicker")



                setTimeout(function () {

                    $('.ui-datepicker').css({

                        'margin-top': '0'

                    });

                    calendar.position({

                        my: 'center top',

                        at: 'center bottom',

                        collision: 'none',

                        of: input

                    });

                    $('.ui-datepicker').css({

                        'margin-top': '22px'

                    });

                }, 1);

            },

            beforeShowDay: function (date) {

                var string = jQuery.datepicker.formatDate('dd.mm.yy', date);

                return [disabledDropOffDates.indexOf(string) == -1];

            },

            onSelect: function (dateText, inst) {

                var d = new Date($.now());

                var new_date = ('0' + d.getDate()).slice(-2)+"."+('0' + (d.getMonth()+1)).slice(-2)+"."+d.getFullYear();



                pickUpDate = $(this).val();

                var getdate = new Date();

                $('#dropOffHour1 li').each(function () {

                    $(this).removeClass('disable');

                });

                if (pickUpDate <= getdate.toLocaleDateString()) {

                    $('#dropOffHour1 li').each(function () {

                        var getHour = parseInt($(this).html().replace(':', ''));

                        var setHour = (getdate.getHours() + ':' + getdate.getMinutes()).replace(':', '');

                        if (getHour < parseInt(setHour)) {

                            if (pickUpDate < new_date || pickUpDate == new_date) {

                                $(this).addClass('disable');

                            }

                        }

                    });

                }

            },

            onClose: function () {

                var minDate = $(this).datepicker('getDate');

                if (minDate) {

                    minDate.setDate(minDate.getDate());





                    var date = $(this).datepicker('getDate'),

                        selectedDay = date.getDate(),

                        selectedMonth = date.getMonth() + 1,

                        selectedYear = date.getFullYear();



                    $('#hiddenVerisDay').val(selectedDay);

                    $('#hiddenVerisMonth').val(selectedMonth);

                    $('#hiddenVerisYear').val(selectedYear);



                    var dt = new Date();



                    var currentYear = dt.getFullYear();

                    var currentMonth = dt.getMonth() + 1;

                    var currentDay = dt.getDate();



                    var currentHour = dt.getHours();



                    var minHour = currentHour + 4;



                    if (selectedDay == currentDay && selectedMonth == currentMonth && selectedYear == currentYear) {



                        if (currentHour > 20) {



                            var minDate = $('#pickUpDate').datepicker('getDate');



                            minDate.setDate(minDate.getDate() + 1);

                            $("#pickUpDate").datepicker("option", "minDate", minDate);

                            $("#dropOffDate").datepicker("option", "minDate", minDate);



                            minHour = 4 - ((currentHour - 24) * -1);





                            for (var i = 0; i < minHour; i++) {

                                $('#pickUpHour option').eq(i).attr('disabled', 'disabled');

                            }



                            $('#pickUpHour').prev('.text').empty().text("0" + minHour);



                        } else {



                            for (var i = 0; i < minHour; i++) {

                                $('#pickUpHour option').eq(i).attr('disabled', 'disabled');

                            }



                            $('#pickUpHour').prev('.text').empty().text(minHour);



                        }



                        $('#pickUpHour option').attr('selected', false);

                        $('#pickUpHour option').eq(minHour).attr('selected', true);



                        var min = $('#pickUpMin').val()

                        if (!min){

                            min = "00";

                        }

                        $('#pickUpTime').val(minHour + ':' + min)





                    } else {

                        $('#pickUpHour option').attr('disabled', false);

                    }



                }

            }

        });

    });



}

else {





    var disabledDropOffDates = [];



    var disabledPickupDates = [];



    $(function () {

        $("#pickUpDate").datepicker({

            regional: "tr",

            minDate: new Date(),

            numberOfMonths: 2,

            showButtonPanel: true,

            beforeShow: function (input, inst){

                $('.hour').removeClass('open');



                var calendar = inst.dpDiv;

                $('.ui-datepicker').addClass("pickUpDatePicker");



                setTimeout(function () {

                    $('.ui-datepicker').css({

                        'margin-top': '0'

                    });

                    calendar.position({

                        my: 'left top',

                        at: 'left bottom',

                        collision: 'none',

                        of: input

                    });

                    $('.ui-datepicker').css({

                        'margin-top': '22px'

                    });

                }, 1);

            },





            onSelect: function (dateText, inst) {





                pickUpDate = $(this).val();



                disabledDropOffDates.push(pickUpDate);

                var getdate = new Date();

                $('#pickHour li').each(function () {

                    $(this).removeClass('disable');

                });







            },

            onClose: function () {

                var minDate = $(this).datepicker('getDate');



                if (minDate) {

                    minDate.setDate(minDate.getDate());

                    $("#dropOffDate").datepicker("option", "minDate", minDate);















                    var date = $(this).datepicker('getDate'),

                        selectedDay = date.getDate(),

                        selectedMonth = date.getMonth() + 1,

                        selectedYear = date.getFullYear();





                    $('#hiddenAlisDay').val(selectedDay);

                    $('#hiddenAlisMonth').val(selectedMonth);

                    $('#hiddenAlisYear').val(selectedYear);





                    var dt = new Date();



                    var currentYear = dt.getFullYear();

                    var currentMonth = dt.getMonth() + 1;

                    var currentDay = dt.getDate();



                    var currentHour = dt.getHours();



                    var minHour = currentHour + 4;



                    if (selectedDay == currentDay && selectedMonth == currentMonth && selectedYear == currentYear) {



                        if (currentHour > 20) {



                            var minDate = $('#pickUpDate').datepicker('getDate');



                            minDate.setDate(minDate.getDate() + 1);

                            $("#pickUpDate").datepicker("option", "minDate", minDate);

                            $("#dropOffDate").datepicker("option", "minDate", minDate);



                            minHour = 4 - ((currentHour - 24) * -1);





                            for (var i = 0; i < minHour; i++) {

                                $('#pickUpHour option').eq(i).attr('disabled', 'disabled');

                            }



                            $('#pickUpHour').prev('.text').empty().text("0" + minHour);



                        } else {



                            for (var i = 0; i < minHour; i++) {

                                $('#pickUpHour option').eq(i).attr('disabled', 'disabled');

                            }



                            $('#pickUpHour').prev('.text').empty().text(minHour);



                        }



                        $('#pickUpHour option').attr('selected', false);

                        $('#pickUpHour option').eq(minHour).attr('selected', true);



                        var min = $('#pickUpMin').val()

                        if (!min) {

                            min = "00";

                        }

                        $('#pickUpTime').val(minHour + ':' + min)





                    } else {

                        $('#pickUpHour option').attr('disabled', false);

                    }



                }

            }

        });

        $("#pickUpHour,#dropOffHour").focus(function () {

            $('.hour').removeClass('open');

            var inp = $(this);

            inp.siblings('.hour').addClass('open');

            inp.siblings('.hour').find('li').click(function () {

                if (!$(this).hasClass('disable')) {

                    inp.val($(this).html());

                    $('.hour').removeClass('open');

                }

                else {

                }



            });

        });





    });



    $(function () {

        $("#dropOffDate").datepicker({

            regional: "tr",

            minDate: new Date(),

            numberOfMonths: 2,

            showButtonPanel: true,

            beforeShow: function (input, inst) {

                $('.hour').removeClass('open');



                var calendar = inst.dpDiv;

                $('.ui-datepicker').removeClass("pickUpDatePicker")



                $('.ui-datepicker').addClass("dropOffDatePicker");

                setTimeout(function () {

                    $('.ui-datepicker').css({

                        'margin-top': '0'

                    });

                    calendar.position({

                        my: 'center top',

                        at: 'center bottom',

                        collision: 'none',

                        of: input

                    });

                    $('.ui-datepicker').css({

                        'margin-top': '22px'

                    });

                }, 1);

            },





            onSelect: function (dateText, inst) {

                pickUpDate = $(this).val();

                var getdate = new Date();

                $('#dropOffHour1 li').each(function () {

                    $(this).removeClass('disable');

                });













            },

            onClose: function () {

                var minDate = $(this).datepicker('getDate');



                if (minDate) {

                    minDate.setDate(minDate.getDate());







                    var date = $(this).datepicker('getDate'),

                        selectedDay = date.getDate(),

                        selectedMonth = date.getMonth() + 1,

                        selectedYear = date.getFullYear();



                    $('#hiddenVerisDay').val(selectedDay);

                    $('#hiddenVerisMonth').val(selectedMonth);

                    $('#hiddenVerisYear').val(selectedYear);





                    var dt = new Date();



                    var currentYear = dt.getFullYear();

                    var currentMonth = dt.getMonth() + 1;

                    var currentDay = dt.getDate();



                    var currentHour = dt.getHours();



                    var minHour = currentHour + 4;



                    if (selectedDay == currentDay && selectedMonth == currentMonth && selectedYear == currentYear) {



                        if (currentHour > 20) {



                            var minDate = $('#pickUpDate').datepicker('getDate');



                            minDate.setDate(minDate.getDate() + 1);

                            $("#pickUpDate").datepicker("option", "minDate", minDate);

                            $("#dropOffDate").datepicker("option", "minDate", minDate);



                            minHour = 4 - ((currentHour - 24) * -1);





                            for (var i = 0; i < minHour; i++) {

                                $('#pickUpHour option').eq(i).attr('disabled', 'disabled');

                            }



                            $('#pickUpHour').prev('.text').empty().text("0" + minHour);



                        } else {



                            for (var i = 0; i < minHour; i++) {

                                $('#pickUpHour option').eq(i).attr('disabled', 'disabled');

                            }



                            $('#pickUpHour').prev('.text').empty().text(minHour);



                        }



                        $('#pickUpHour option').attr('selected', false);

                        $('#pickUpHour option').eq(minHour).attr('selected', true);



                        var min = $('#pickUpMin').val()

                        if (!min) {

                            min = "00";

                        }

                        $('#pickUpTime').val(minHour + ':' + min)





                    } else {

                        $('#pickUpHour option').attr('disabled', false);

                    }



                }

            }

        });



    });





}



$(".carSearch .form-control").focus(function () {

    $("html, body").animate({ scrollTop: $('.carSearch').offset().top - 150 }, 1000, function () {

    });

    $(".form .form-group > i").removeClass("active");

    $(this).siblings("i").addClass("active");

});





$(".easy-autocomplete").click(function () {

    $(".form .form-group > i").removeClass("active");

    $(".easy-autocomplete > i").removeClass("active");

    $(this).siblings("i").addClass("active");

})



$(".form .form-group > i").click(function () {

    $(this).siblings(".form .form-control").trigger("focus");

    $(this).siblings(".easy-autocomplete").children("#search").trigger("focus");

})







$("#dropOffDate").click(function () {

    for (i = 0; i < $("td[data-handler='selectDay']").length; i++) {

        $("td[data-handler='selectDay']:first").addClass("selected-pickUpDate")



    }

});





/* function pickHourOzel() {

    var pickUpStation = $('input[name="PickUpStation"]').val();

    var dropOffStation = $('input[name="DropOffStation"]').val();

    var isItem = false;





    var index_4;

    for (var i = 0; i < allStation.length; ++i) {

        if (allStation[i].name == pickUpStation) {

            index_4 = i;

            break;

        }

    }

    var pickUpStationOrder = index_4;



    var index_5;

    for (var i = 0; i < allStation.length; ++i) {

        if (allStation[i].name == dropOffStation) {

            index_5 = i;

            break;

        }

    }

    var dropOffStationOrder = index_5;



    var pickUpDate = $('input[name="PickUpDate"]').val();

    var pickUpTime = $(this).html();

    var dropOffDate = $('input[name="DropOffDate"]').val();

    var dropOffTime = $(this).html();

    var station = null;



    if (pickUpStationOrder > -1 & dropOffStationOrder > -1) {

        station = dropOffStation;

    } else {

        station = pickUpStation;

    }





    var classici = $(this).html();

    //console.log("THIS : "+classici);

    if (classici === undefined){

        var pickUpTime = $('input[name="PickUpHour"]').val();

        var dropOffTime = $('input[name="PickUpHour"]').val();

        //console.log("A : "+pickUpTime);

        //console.log("I : "+dropOffTime);

    } else {



    }
*/




/* console.log(pickUpStation);

console.log(station);

console.log(pickUpDate);

console.log(dropOffDate);

console.log(pickUpTime);

console.log(dropOffTime);*/


/*
    $.get('/inc/serviceHoursOfDay.php?v=1.1', { pickUpStation: pickUpStation, dropOffStation: station, pickUpDate: pickUpDate, pickUpTime: pickUpTime, dropOffDate: dropOffDate, dropOffTime: dropOffTime }, function (data) {

        console.log(data);
        console.log({ pickUpStation: pickUpStation, dropOffStation: station, pickUpDate: pickUpDate, pickUpTime: pickUpTime, dropOffDate: dropOffDate, dropOffTime: dropOffTime });



        if (data == 'fail') {

            $('#hizmetUyarisi').addClass('open');

            stationOpenStatus = 0;

        }

        else if (data == 'success') {

            $('#hizmetUyarisi').removeClass('open');

            stationOpenStatus = 1;

        }

    });



    $("#dropOffHour").prop('value', pickUpTime); // Alış saatini seçtiğimizde iade saatini de aynısını ekliyoruz.



    $(this).each(function () {

        $('#pickHour ul li').removeClass("selected-time");

        if ($(this).html() == pickUpTime) {

            $(this).addClass("selected-time");

        }



    });

    $('#dropOffHour1 ul li').each(function () {

        $(this).removeClass("selected-other-time");

        if ($(this).html() == pickUpTime) {

            $(this).addClass("selected-other-time");

        }

    });

}



function dropOffHour1Ozel() {

    var pickUpStation = $('input[name="PickUpStation"]').val();

    var dropOffStation = $('input[name="DropOffStation"]').val();

    var isItem = false;





    var index_6;

    for (var i = 0; i < allStation.length; ++i) {

        if (allStation[i].name == pickUpStation) {

            index_6 = i;

            break;

        }

    }

    var pickUpStationOrder = index_6;



    var index_7;

    for (var i = 0; i < allStation.length; ++i) {

        if (allStation[i].name == dropOffStation) {

            index_7 = i;

            break;

        }

    }

    var dropOffStationOrder = index_7;



    var pickUpDate = $('input[name="PickUpDate"]').val();

    var pickUpTime = $('input[name="PickUpHour"]').val();

    var dropOffDate = $('input[name="DropOffDate"]').val();

    var dropOffTime = $(this).html();

    var station = null;

    if (pickUpStationOrder > -1 && dropOffStationOrder > -1) {

        station = dropOffStation;

    }

    else {

        station = pickUpStation;

    }

    $.get('/inc/serviceHoursOfDay.php?v=1.1', { pickUpStation: pickUpStation, dropOffStation: station, pickUpDate: pickUpDate, pickUpTime: pickUpTime, dropOffDate: dropOffDate, dropOffTime: dropOffTime }, function (data) {

        if (data == 'fail') {

            $('#hizmetUyarisi').addClass('open');

            stationOpenStatus = 0;

        }

        else if (data == 'success') {

            $('#hizmetUyarisi').removeClass('open');

            stationOpenStatus = 1;

        }

    });

    $(this).each(function () {

        $('#dropOffHour1 ul li').removeClass("selected-time");

        if ($(this).html() == dropOffTime) {

            $(this).addClass("selected-time");

        }

    });

    $('#pickHour ul li').each(function () {

        $(this).removeClass("selected-other-time");

        if ($(this).html() == dropOffTime) {

            $(this).addClass("selected-other-time");

        }

    });

}


$('#pickHour ul li').click(pickHourOzel);



$('#dropOffHour1 ul li').click(dropOffHour1Ozel);
*/


var request;

$(".SearchForm").submit(function(event) {

    if (event.isDefaultPrevented()) {} else {

        if (request){

            request.abort();

        }

        var $form = $(this);

        var $inputs = $form.find("input, select, button, textarea");

        var serializedData = $form.serialize();



        request = $.ajax({

            url: "inc/session.php",

            type: "post",

            data: serializedData

        });


        request.done(function(response, textStatus, jqXHR){

            document.location = "/kiralik-araclar";

        });

        request.always(function() {

            $inputs.prop("disabled", false);

        });

        event.preventDefault();

    }

});


/* if($("#pickUpHour").val()!='' && $("#dropOffHour").val()!=''){

	pickHourOzel();

	dropOffHour1Ozel();

	} */



var promoCode = $("#promo_code2").val();

if (promoCode != "") {

    $("#promo_code").click();

}



if ($("#DifferentOfficeDelivery").is(":checked")) {

    carSearch2SetWidth();

}


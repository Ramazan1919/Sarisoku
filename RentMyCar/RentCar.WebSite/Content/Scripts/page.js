///////////////////////////==FORM FUNCTIONS START==///////////////////////////////////
/* ==========================================================================
   Payment Page Login 
   ========================================================================== */
var path = $("#hdnPath").val();
var Login = {
    config: function (){
        var $user_email = $('.payment #loginFrm #user_email'),
            $password = $('.payment #loginFrm #password');
        $('.payment #loginFrm .form-control').removeClass('alert');
        if ($user_email.val() == "" || !validateEmail($user_email.val())) {
            $user_email.addClass('alert');
        }
        else if ($password.val() == ""){
            $password.addClass('alert');
        }
        else {
            $(".loading").fadeIn(300);
            var ref = $("#hdnRef").val();
            $.getJSON(path + "Odeme/LoginMember", { Mail: $user_email.val(), Password: $password.val(), Ref: ref }, function (data) {
                
                if (data.Status) { 
                    if (data.LoginStatus) {
                        //window.location = "/Odeme/Devam?ref=" + data.Ref;
                        location.reload();
                        $('.driver_name').html(data.Name);
                        $('.driver_surname').html(data.Surname);
                        $('.driver_identity').html(data.IdentityNumber);
                        $('.driver_date_of_birth').html(covertToDateTime(data.Birthday));
                        $('.driver_email').html(data.Mail);
                        $('.driver_phone').html(data.Phone);
                        $('.driver_license').html(data.DriversLicenseNumber);
                        $('.driver_date_of_buying').html(covertToDateTime(data.DriversLicenseDate));
                        $('.driver_country').html(data.Country);
                        $('.driver_city').html(data.City);
                        $('.driver_address').html(data.Adress);

                        $(".loading").fadeOut(300);
                        $("#loginFrm,#registrationForm").fadeOut(300);
                        $(".driver_account_info").fadeIn(300);
                    }
                    else {
                        //$("#loginFrm").fadeOut(300);
                        $(".loading").fadeOut(300);
                        if (data.Error == "3" || data.Error == "4") {
                            window.location = path + "hata?error=" + data.Error;
                        }
                        else {
                            $(".loading").fadeOut(300);
                            error.open(data.Error);
                        }
                    }
                }
                else {
                    $(".loading").fadeOut(300);
                    if (data.Error == "3" || data.Error == "4") {
                        window.location = path + "hata?error=" + data.Error;
                    }
                    else {
                        $(".loading").fadeOut(300);
                        error.open(data.Error);
                    }
                }
            });
        }
    },
    click: function () {
        Login.config();
    }
}

/* ==========================================================================
   SubmitAgentForm 
   ========================================================================== */
var SubmitAgentForm = {
    init: function () {
        $('.be_our_agent .form-control').removeClass('alert');
        if (SubmitAgentForm.frm1Ctrl()) {
            if (SubmitAgentForm.frm2Ctrl()) {
                if (SubmitAgentForm.frm3Ctrl()) {
                    if (SubmitAgentForm.frm4Ctrl()) {
                        $('.be_our_agent button').attr("type", "submit");
                    }
                }
            }
        }
    },
    frm1Ctrl: function () {
        var $corporateName = $('.be_our_agent #frm1 #corporateName'),
            $corporateCity = $('.be_our_agent #frm1 #corporateCity'),
            $founded = $('.be_our_agent #frm1 #founded'),
            $commercialTitle = $('.be_our_agent #frm1 #commercialTitle'),
            $taxAdministration = $('.be_our_agent #frm1 #taxAdministration'),
            $taxNumber = $('.be_our_agent #frm1 #taxNumber'),
            $corporatePhone = $('.be_our_agent #frm1 #corporatePhone'),
            $corporateMail = $('.be_our_agent #frm1 #corporateMail'),
            $partnersNumber = $('.be_our_agent #frm1 #partnersNumber');

        if ($corporateName.val() == "") {
            $corporateName.addClass('alert');
            GoOn($corporateName.attr('id'));
        }
        else if ($corporateCity.val() == -1) {
            $corporateCity.addClass('alert');
            GoOn($corporateCity.attr('id'));
        }
        else if ($founded.val() == -1) {
            $founded.addClass('alert');
            GoOn($founded.attr('id'));
        }
        else if ($commercialTitle.val() == -1) {
            $commercialTitle.addClass('alert');
            GoOn($commercialTitle.attr('id'));
        }
        else if ($taxAdministration.val() == 0) {
            $taxAdministration.addClass('alert');
            GoOn($taxAdministration.attr('id'));
        }
        else if ($taxNumber.val() == 0) {
            $taxNumber.addClass('alert');
            GoOn($taxNumber.attr('id'));
        }
        else if ($corporatePhone.val() == 0) {
            $corporatePhone.addClass('alert');
            GoOn($corporatePhone.attr('id'));
        }
        else if ($corporateMail.val() == "" || !validateEmail($corporateMail.val())) {
            $corporateMail.addClass('alert');
            GoOn($corporateMail.attr('id'));
        }
        else if ($partnersNumber.val() == -1) {
            $partnersNumber.addClass('alert');
            GoOn($partnersNumber.attr('id'));
        }
        else {
            $('.be_our_agent #frm1 .form-control').removeClass('alert');
            return true;
        }
        return false;
    },
    frm2Ctrl: function () {
        var $partnersName1 = $('.be_our_agent #frm2 #partnersName1'),
            $partnersSurname1 = $('.be_our_agent #frm2 #partnersSurname1'),
            $rate1 = $('.be_our_agent #frm2 #rate1'),
            $partnersName2 = $('.be_our_agent #frm2 #partnersName2'),
            $partnersSurname2 = $('.be_our_agent #frm2 #partnersSurname2'),
            $rate2 = $('.be_our_agent #frm2 #rate2'),
            $partnersName3 = $('.be_our_agent #frm2 #partnersName3'),
            $partnersSurname3 = $('.be_our_agent #frm2 #partnersSurname3'),
            $rate3 = $('.be_our_agent #frm2 #rate3');

        //if ($partnersName1.val() == "") {
        //    $partnersName1.addClass('alert');
        //    GoOn($partnersName1.attr('id'));
        //}
        //else if ($partnersSurname1.val() == "") {
        //    $partnersSurname1.addClass('alert');
        //    GoOn($partnersSurname1.attr('id'));
        //}
        //else if ($rate1.val() == "") {
        //    $rate1.addClass('alert');
        //    GoOn($rate1.attr('id'));
        //}
        //else if ($partnersName2.val() == "") {
        //    $partnersName2.addClass('alert');
        //    GoOn($partnersName2.attr('id'));
        //}
        //else if ($partnersSurname2.val() == "") {
        //    $partnersSurname2.addClass('alert');
        //    GoOn($partnersSurname2.attr('id'));
        //}
        //else if ($rate2.val() == "") {
        //    $rate2.addClass('alert');
        //    GoOn($rate2.attr('id'));
        //}
        //else if ($partnersName3.val() == "") {
        //    $partnersName3.addClass('alert');
        //    GoOn($partnersName3.attr('id'));
        //}
        //else if ($partnersSurname3.val() == "") {
        //    $partnersSurname3.addClass('alert');
        //    GoOn($partnersSurname3.attr('id'));
        //}
        //else if ($rate3.val() == "") {
        //    $rate3.addClass('alert');
        //    GoOn($rate3.attr('id'));
        //}
        //else {
        $('.be_our_agent #frm2 .form-control').removeClass('alert');
        return true;
        //}
        //return false;
    },
    frm3Ctrl: function () {
        var $district = $('.be_our_agent #frm3 #district'),
            $number_Of_Vehicles_Think = $('.be_our_agent #frm3 #number_Of_Vehicles_Think'),
            $first_Year_Target = $('.be_our_agent #frm3 #first_Year_Target'),
            $second_Year_Target = $('.be_our_agent #frm3 #second_Year_Target'),
            $third_Year_Target = $('.be_our_agent #frm3 #third_Year_Target'),
            $haveBusiness = $('.be_our_agent #frm3 #haveBusiness'),
            $haveBranch = $('.be_our_agent #frm3 #haveBranch'),
            $person_To_Manage = $('.be_our_agent #frm3 #person_To_Manage'),
            $experience = $('.be_our_agent #frm3 #experience'),
            $message = $('.be_our_agent #frm3 #message');

        if ($district.val() == "") {
            $district.addClass('alert')
        }
        else if ($number_Of_Vehicles_Think.val() == "") {
            $number_Of_Vehicles_Think.addClass('alert');
            GoOn($number_Of_Vehicles_Think.attr('id'));
        }
        else if ($first_Year_Target.val() == "") {
            $first_Year_Target.addClass('alert');
            GoOn($first_Year_Target.attr('id'));
        }
        else if ($second_Year_Target.val() == "") {
            $second_Year_Target.addClass('alert');
            GoOn($second_Year_Target.attr('id'));
        }
        else if ($third_Year_Target.val() == "") {
            $third_Year_Target.addClass('alert');
            GoOn($third_Year_Target.attr('id'));
        }
        else if ($haveBusiness.val() == -1) {
            $haveBusiness.addClass('alert');
            GoOn($haveBusiness.attr('id'));
        }
        else if ($haveBranch.val() == -1) {
            $haveBranch.addClass('alert');
            GoOn($haveBranch.attr('id'));
        }
        else if ($person_To_Manage.val() == "") {
            $person_To_Manage.addClass('alert');
            GoOn($person_To_Manage.attr('id'));
        }
        else if ($experience.val() == -1) {
            $experience.addClass('alert');
            GoOn($experience.attr('id'));
        }
        //else if ($message.val() == "") {
        //    $message.addClass('alert');
        //    GoOn($message.attr('id'));
        //}
        else {
            $('.be_our_agent #frm3 .form-control').removeClass('alert');
            return true;
        }
        return false;
    },
    frm4Ctrl: function () {
        var $corporate_name = $('.be_our_agent #frm4 #corporate_name'),
            $owner = $('.be_our_agent #frm4 #owner'),
            $corporate_phone = $('.be_our_agent #frm4 #corporate_phone'),
            $office_count = $('.be_our_agent #frm4 #office_count'),
            $travel_agency_document = $('.be_our_agent #frm4 #travel_agency_document'),
            $address = $('.be_our_agent #frm4 #address'),
            $city = $('.be_our_agent #frm4 #city'),
            $the_number_of_vehicles = $('.be_our_agent #frm4 #the_number_of_vehicles'),
            $renault = $('.be_our_agent #frm4 #renault'),
            $fiat = $('.be_our_agent #frm4 #fiat'),
            $ford = $('.be_our_agent #frm4 #ford'),
            $toyota = $('.be_our_agent #frm4 #toyota'),
            $hyundai = $('.be_our_agent #frm4 #hyundai'),
            $volkswagen = $('.be_our_agent #frm4 #volkswagen'),
            $other = $('.be_our_agent #frm4 #other'),
            $vehicle_age_average = $('.be_our_agent #frm4 #vehicle_age_average'),
            $vehicle_maintain = $('.be_our_agent #frm4 #vehicle_maintain'),
            $employer_count = $('.be_our_agent #frm4 #employer_count'),
            $how_many_years = $('.be_our_agent #frm4 #how_many_years'),
            $insurance_company = $('.be_our_agent #frm4 #insurance_company'),
            $type_of_insurance = $('.be_our_agent #frm4 #type_of_insurance'),
            $accountability = $('.be_our_agent #frm4 #accountability');

        if ($corporate_name.val() == "") {
            $corporate_name.addClass('alert');
            GoOn($corporate_name.attr('id'));
        }
        else if ($owner.val() == "") {
            $owner.addClass('alert');
            GoOn($owner.attr('id'));
        }
        else if ($corporate_phone.val() == "") {
            $corporate_phone.addClass('alert');
            GoOn($corporate_phone.attr('id'));
        }
        else if ($office_count.val() == -1) {
            $office_count.addClass('alert');
            GoOn($office_count.attr('id'));
        }
        //else if ($travel_agency_document.val() == "") {
        //    $travel_agency_document.addClass('alert')
        //}
        else if ($address.val() == "") {
            $address.addClass('alert');
            GoOn($address.attr('id'));
        }
        else if ($city.val() == -1) {
            $city.addClass('alert');
            GoOn($city.attr('id'));
        }
        //else if ($the_number_of_vehicles.val() == -1) {
        //    $the_number_of_vehicles.addClass('alert');
        //    GoOn($the_number_of_vehicles.attr('id'));
        //}
        //else if ($renault.val() == "") {
        //    $renault.addClass('alert');
        //    GoOn($renault.attr('id'));
        //}
        //else if ($fiat.val() == "") {
        //    $fiat.addClass('alert');
        //    GoOn($fiat.attr('id'));
        //}
        //else if ($ford.val() == "") {
        //    $ford.addClass('alert');
        //    GoOn($ford.attr('id'));
        //}
        //else if ($toyota.val() == "") {
        //    $toyota.addClass('alert');
        //    GoOn($toyota.attr('id'));
        //}
        //else if ($hyundai.val() == "") {
        //    $hyundai.addClass('alert');
        //    GoOn($hyundai.attr('id'));
        //}
        //else if ($volkswagen.val() == "") {
        //    $volkswagen.addClass('alert');
        //    GoOn($volkswagen.attr('id'));
        //}
        //else if ($other.val() == "") {
        //    $other.addClass('alert');
        //    GoOn($other.attr('id'));
        //}
        else if ($vehicle_age_average.val() == -1) {
            $vehicle_age_average.addClass('alert');
            GoOn($vehicle_age_average.attr('id'));
        }
        else if ($vehicle_maintain.val() == -1) {
            $vehicle_maintain.addClass('alert');
            GoOn($vehicle_maintain.attr('id'));
        }
        else if ($employer_count.val() == "") {
            $employer_count.addClass('alert');
            GoOn($employer_count.attr('id'));
        }
        else if ($how_many_years.val() == "") {
            $how_many_years.addClass('alert');
            GoOn($how_many_years.attr('id'));
        }
        else if ($insurance_company.val() == "") {
            $insurance_company.addClass('alert');
            GoOn($insurance_company.attr('id'));
        }
        else if ($type_of_insurance.val() == -1) {
            $type_of_insurance.addClass('alert');
            GoOn($type_of_insurance.attr('id'));
        }
        else if ($accountability.val() == -1) {
            $accountability.addClass('alert');
            GoOn($accountability.attr('id'));
        }
        else {
            $('.be_our_agent  #frm4 .form-control').removeClass('alert');
            return true;
        }
        return false;
    },
    frm1Focus: function () {
        $('.be_our_agent #frm1 .form-control').focus(function () {
            $('.be_our_agent .form-control').removeClass('alert');
            if (SubmitAgentForm.frm1Ctrl()) {
                $('.be_our_agent #frm1').addClass('ok');
                $('.be_our_agent #frm2').addClass('active');
                GoOn('frm2');
            }
        });
    },
    frm2Focus: function () {
        $('.be_our_agent #frm2 .form-control').focus(function () {
            $('.be_our_agent .form-control').removeClass('alert');
            if (SubmitAgentForm.frm2Ctrl()) {
                $('.be_our_agent #frm2').addClass('ok');
                $('.be_our_agent #frm3').addClass('active');
                GoOn('frm3');
            }
        });
    },
    frm3Focus: function () {
        $('.be_our_agent #frm3 .form-control').focus(function () {
            $('.be_our_agent .form-control').removeClass('alert');
            if (SubmitAgentForm.frm3Ctrl()) {
                $('.be_our_agent #frm3').addClass('ok');
                $('.be_our_agent #frm4').addClass('active');
                GoOn('frm4');
            }
        });
    },
    frm4Focus: function () {
        $('.be_our_agent #frm4 .form-control').focus(function () {
            $('.be_our_agent .form-control').removeClass('alert');
            if (SubmitAgentForm.frm4Ctrl()) {
                $('.be_our_agent #frm4').addClass('ok');
            }
        });
    }
}
/* ==========================================================================
   SubmitAgentForm Focus
   ========================================================================== */
SubmitAgentForm.frm1Focus();
SubmitAgentForm.frm2Focus();
SubmitAgentForm.frm3Focus();
SubmitAgentForm.frm4Focus();
/* ==========================================================================
   SubmitPaymentForm 
   ========================================================================== */

var formPrams = {
    Name: "",
    Surname: "",
    Mail: "",
    Password: "",
    IdentityNumber: "",
    TcNo: true,
    Birthday: "",
    Phone: "",
    MobilePhone: "",
    DriversLicenseNumber: "",
    DriversLicenseDate: "",
    DriversLicensePlace: "",
    Country: "",
    CountryCode: "",
    City: "",
    Adress1: "",
    IsMember: "false",
    ExtraDriverName: "",
    ExtraDriverSurname: "",
    ExtraDriverIdStatus: true,
    ExtraDriverIdNumber: "",
    ExtraDriverBirthday: "",
    ExtraDriverLicenseNumber: "",
    //ExtraDriverLicenseDate: "",
    ExtraDriverName: "",
    ExtraDriverSurname: "",
    ExtraDriverIdStatus: true,
    ExtraDriverIdNumber: "",
    ExtraDriverBirthday: "",
    ExtraDriverLicenseNumber: "",
    //ExtraDriverLicenseDate: "",
    ExtraInvoce: false,
    Ref: ""
};
function SendMemberForm() {
    $('.loading').fadeIn(300);
	console.log(formPrams);
    $.ajax({
        type: "POST",
        url: "/inc/serviceMember.php",
        data: JSON.stringify(formPrams),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            console.log('Gelenler: '+result);
            if (result.Status) {
                if (result.LoginStatus){
                   // isLogin();
                    //location.reload();
                    GoOn('loginFrm');
                    $("#registrationForm").fadeOut(300);
                    $(".driver_account_info").fadeIn(300);
                } else {
                    console.log(result.Error + "1")
                    //error.open(result.Error);
                    //$(".loading").fadeOut(300);
                    //return;
                    if (result.Error == "4"){
                        window.location = "hata.php";
                    } else {
                        window.location = "/odeme";
                    }
                }
            } else {
                $(".loading").fadeOut(300);
                console.log(result.Error + "2")
                error.open(result.Error);
                return;
            }

            $('.driver_name').html(result.Name);
            $('.driver_surname').html(result.Surname);
            $('.driver_identity').html(result.IdentityNumber);
            $('.driver_date_of_birth').html(covertToDateTime(result.Birthday));
            $('.driver_email').html(result.Mail);
            $('.driver_phone').html(result.Phone);
            $('.driver_license').html(result.DriversLicenseNumber);
            $('.driver_date_of_buying').html(covertToDateTime(result.DriversLicenseDate));
            $('.driver_country').html(result.Country);
            $('.driver_city').html(result.City);
            $('.driver_address').html(result.Adress);
        },
        error: function (x, y, z) {
            //alert(x + '\n' + y + '\n' + z);
            console.log(x + '\n' + y + '\n' + z);
        }
    });
}

    var request;
    $("#UyelikFormu").submit(function(event) {
    $('.loading').fadeIn(300);
        if (event.isDefaultPrevented()) {} else {
            if (request) {
                request.abort();
            }
            var $form = $(this);
            var $inputs = $form.find("input, select, button, textarea");
            var serializedData = $form.serialize();
			
		console.log("UyelikFormu Submitted. "+serializedData);
            request = $.ajax({
                url: "/inc/serviceMember.php",
                type: "post",
                data: serializedData
            });
            request.done(function(response, textStatus, jqXHR){
				var data = JSON.parse(response);
				console.log("UyelikFormu Response. "+response);
				if(data.basarili==1){
					
                	document.location = "/odeme.php?step=BillingForm";
					
				} else if(data.basarili==0){
					
					$(".loading").fadeOut(300);
					console.log(data.mesaj + "2")
					error.open(data.mesaj);
					return;
					
				}
            });
            request.always(function() {
                $inputs.prop("disabled", false);
            });
            event.preventDefault();
        }
    });


    var request;
    $("#BillingForm").submit(function(event) {
    $('.loading').fadeIn(300);
        if (event.isDefaultPrevented()) {} else {
            if (request) {
                request.abort();
            }
            var $form = $(this);
            var $inputs = $form.find("input, select, button, textarea");
            var serializedData = $form.serialize();
			
		console.log("BillingForm Submitted. "+serializedData);
            request = $.ajax({
                url: "/inc/serviceBillingForm.php",
                type: "post",
                data: serializedData
            });
            request.done(function(response, textStatus, jqXHR){
				var data = JSON.parse(response);
				console.log("BillingForm Response. "+response);
				if(data.basarili==1){
					
                	document.location = "/odeme-yap";
					
				} else if(data.basarili==0){
					
					$(".loading").fadeOut(300);
					console.log(data.mesaj + "2")
					error.open(data.mesaj);
					return;
					
				}
            });
            request.always(function() {
                $inputs.prop("disabled", false);
            });
            event.preventDefault();
        }
    });


    var request;
    $("#LoginForm").submit(function(event) {
    $('.loading').fadeIn(300);
        if (event.isDefaultPrevented()) {} else {
            if (request) {
                request.abort();
            }
            var $form = $(this);
            var $inputs = $form.find("input, select, button, textarea");
            var serializedData = $form.serialize();
			
		console.log("LoginForm Submitted. "+serializedData);
            request = $.ajax({
                url: "/inc/serviceLogin.php",
                type: "post",
                data: serializedData
            });
            request.done(function(response, textStatus, jqXHR){
				var data = JSON.parse(response);
				console.log("LoginForm Response. "+response);
				if(data.basarili==1){
					
                	document.location = "/fatura-bilgileri";
					
				} else if(data.basarili==0){
					
					$(".loading").fadeOut(300);
					console.log(data.mesaj + "2")
					error.open(data.mesaj);
					return;
					
				}
            });
            request.always(function() {
                $inputs.prop("disabled", false);
            });
            event.preventDefault();
        }
    });



//--------- Birthday Years ---------
DropdownBirthdayYears($("#year_identity"));
DropdownBirthdayYears($("#year_identity2"));
//--------- Driving license Years ---------
DropdownDrivingLicenseYears($("#year_driving_license"));
DropdownDrivingLicenseYears($("#year_driving_license2"));
var SubmitPaymentForm = {
    init: function () {
        $('#registrationForm  .form-control').removeClass('alert');
        if (SubmitPaymentForm.frm1Ctrl()) {
            if (SubmitPaymentForm.frm2Ctrl()) {
                if (SubmitPaymentForm.frm3Ctrl()) {
                    if ($("#frm4").length > 0) {
                            formExtraDriverFlyInfoPrams.ExtraDriverName = formPrams.ExtraDriverName;
                            formExtraDriverFlyInfoPrams.ExtraDriverSurname = formPrams.ExtraDriverSurname;
                            formExtraDriverFlyInfoPrams.ExtraDriverIdNumber = formPrams.ExtraDriverIdNumber;
                            formExtraDriverFlyInfoPrams.ExtraDriverBirthday = formPrams.ExtraDriverBirthday;
                            formExtraDriverFlyInfoPrams.ExtraDriverLicenseNumber = formPrams.ExtraDriverLicenseNumber;
                            //formExtraDriverFlyInfoPrams.ExtraDriverLicenseDate = formPrams.ExtraDriverLicenseDate;
                            isWaiting = true;
                            SendExtraDriverFlyInfoForm();
                            SendMemberForm();
                    } else {
                        SendMemberForm();
                    }
                }
            }
        }
        GoOn($('#registrationForm .alert').attr('id'))
    },
    frm1Ctrl: function () {
        $('#registrationForm #frm1 .form-control').removeClass('alert');
        var $name = $('#registrationForm #frm1 #name'),
            $surname = $('#registrationForm #frm1 #surname'),
            $email = $('#registrationForm #frm1 #email'),
            $phone = $('#registrationForm #frm1 #phone'),
            $pass = $('#registrationForm #frm1 #memPassword'),
            $pass_verification = $('#registrationForm #frm1 #verification_memPassword');


        // alert($pass.val());

        formPrams.Name = $name.val();
        formPrams.Surname = $surname.val();
        formPrams.Mail = $email.val();
        formPrams.Phone = $phone.val();

        if (formPrams.IsMember == "true") {
            formPrams.Password = $pass.val();
        }

        if ($name.val() == "") {
            $name.addClass('alert')
        }
        else if ($surname.val() == "") {
            $surname.addClass('alert')
        }
        else if ($email.val() == "" || !validateEmail($email.val())) {
            $email.addClass('alert')
        }
        else if ($phone.val() == "") {
            $phone.addClass('alert')
        }

        else if (($pass.val() == "" & formPrams.IsMember & $pass.val().length < 8) || ($pass.val() != $pass_verification.val())) {
            $pass.addClass('alert');
            $pass_verification.addClass('alert');
        }
        else if ($pass_verification.val() != $pass.val()) {
            $pass.addClass('alert');
            $pass_verification.addClass('alert');
        }
        else {
            $('#registrationForm #frm1 .form-control').removeClass('alert');
            return true;
        }

        return false;
    },
    frm2Ctrl: function () {
        $('#registrationForm #frm2 .form-control').removeClass('alert');
        var $choose_identity = $('#registrationForm #frm2 #choose_identity'),
            $identity = $('#registrationForm #frm2 #identity'),
            $day_identity = $('#registrationForm #frm2 #day_identity'),
            $mount_identity = $('#registrationForm #frm2 #mount_identity'),
            $year_identity = $('#registrationForm #frm2 #year_identity'),
            $driving_license = $('#registrationForm #frm2 #driving_license'),
            $day_driving_license = $('#registrationForm #frm2 #day_driving_license'),
            $mount_driving_license = $('#registrationForm #frm2 #mount_driving_license'),
            $year_driving_license = $('#registrationForm #frm2 #year_driving_license');



        formPrams.IdentityNumber = $identity.val();
        formPrams.Birthday = $day_identity.val() + "/" + $mount_identity.val() + "/" + $year_identity.val();
        formPrams.DriversLicenseNumber = $driving_license.val();
        formPrams.DriversLicenseDate = $day_driving_license.val() + "/" + $mount_driving_license.val() + "/" + $year_driving_license.val();
        //bool = validateTc($identity.val());

        if ($choose_identity.val() == "0") {
            formPrams.TcNo = true;
        } else {
            formPrams.TcNo = false;
            bool = true;
        }


        if ($identity.val() == "" || !bool) {
            $identity.addClass('alert')
        }
        else if ($day_identity.val() == 0) {
            $day_identity.addClass('alert')
        }
        else if ($mount_identity.val() == 0) {
            $mount_identity.addClass('alert')
        }
        else if ($year_identity.val() == 0){
            $year_identity.addClass('alert')
        }
        else if ($driving_license.val() == ""){
            $driving_license.addClass('alert')
        }
        else if ($day_driving_license.val() == 0){
            $day_driving_license.addClass('alert')
        }
        else if ($mount_driving_license.val() == 0) {
            $mount_driving_license.addClass('alert')
        }
        else if ($year_driving_license.val() == 0){
            $year_driving_license.addClass('alert')
        }
        else {
            $('#registrationForm #frm2 .form-control').removeClass('alert');
            return true;
        }
        return false;
    },
    frm3Ctrl: function () {
        $('#registrationForm #frm3 .form-control').removeClass('alert');
        var $country = $('#registrationForm #frm3 #country'),
            $address_city = $('#registrationForm #frm3 #address_city'),
            $address_cityname = $('#registrationForm #frm3 #address_cityname'),
            $address = $('#registrationForm #frm3 #address');
        formPrams.Country = $country.val();
        formPrams.City = $address_city.val();
        formPrams.Adress1 = $address.val();

        if ($country.val() == 0) {
            $country.addClass('alert')
        }
        else if ($address_city.val() == 0 && !$address_city.is(':hidden')) {
            $address_city.addClass('alert');
        }
        else if ($address_cityname.val() == "" && !$address_cityname.is(':hidden')) {
            $address_cityname.addClass('alert');
        }
        else if ($address.val() == "") {
            $address.addClass('alert')
        }
        else {
            $('#registrationForm #frm3 .form-control').removeClass('alert');
            return true;
        }
        return false;
    },
    //frm4Ctrl: function () {
    //    $('#registrationForm #frm4 .form-control').removeClass('alert');
    //    var $extraDriverName = $('#registrationForm #frm4 #ExtraDriverName'),
    //        $extraDriverSurname = $('#registrationForm #frm4 #ExtraDriverSurname'),
    //        $choose_identity2 = $('#registrationForm #frm4 #choose_identity2'),
    //        $identity2 = $('#registrationForm #frm4 #identity2'),
    //        $day_identity2 = $('#registrationForm #frm4 #day_identity2'),
    //        $mount_identity2 = $('#registrationForm #frm4 #mount_identity2'),
    //        $year_identity2 = $('#registrationForm #frm4 #year_identity2'),
    //        $driving_license2 = $('#registrationForm #frm4 #driving_license2'),
    //        $day_driving_license2 = $('#registrationForm #frm4 #day_driving_license2'),
    //        $mount_driving_license2 = $('#registrationForm #frm4 #mount_driving_license2'),
    //        $year_driving_license2 = $('#registrationForm #frm4 #year_driving_license2');


    //    formPrams.ExtraDriverName = $extraDriverName.val();
    //    formPrams.ExtraDriverSurname = $extraDriverSurname.val();

    //    formPrams.ExtraDriverIdNumber = $identity2.val();
    //    formPrams.ExtraDriverBirthday = $day_identity2.val() + "/" + $mount_identity2.val() + "/" + $year_identity2.val();
    //    formPrams.ExtraDriverLicenseNumber = $driving_license2.val();
    //    formPrams.ExtraDriverLicenseDate = $day_driving_license2.val() + "/" + $mount_driving_license2.val() + "/" + $year_driving_license2.val();


    //    bool = validateTc($identity2.val());
    //    if ($choose_identity2.val() == "0") {
    //        formPrams.ExtraDriverIdStatus = true;
    //    } else {
    //        formPrams.ExtraDriverIdStatus = false;
    //        bool = true;
    //    }
    //    if ($extraDriverName.val() == "") {
    //        $extraDriverName.addClass('alert')
    //    }
    //    else if ($extraDriverSurname.val() == "") {
    //        $extraDriverSurname.addClass('alert')
    //    }
    //    else if ($identity2.val() == "" || !bool) {
    //        $identity2.addClass('alert')
    //    }
    //    else if ($day_identity2.val() == 0) {
    //        $day_identity2.addClass('alert')
    //    }
    //    else if ($mount_identity2.val() == 0) {
    //        $mount_identity2.addClass('alert')
    //    }
    //    else if ($year_identity2.val() == 0) {
    //        $year_identity2.addClass('alert')
    //    }
    //    else if ($driving_license2.val() == "") {
    //        $driving_license2.addClass('alert')
    //    }
    //    else if ($day_driving_license2.val() == 0) {
    //        $day_driving_license2.addClass('alert')
    //    }
    //    else if ($mount_driving_license2.val() == 0) {
    //        $mount_driving_license2.addClass('alert')
    //    }
    //    else if ($year_driving_license2.val() == 0) {
    //        $year_driving_license2.addClass('alert')
    //    }
    //    else {
    //        $('#registrationForm #frm4 .form-control').removeClass('alert');
    //        return true;
    //    }
    //    return false;
    //},
    frm1Focus: function () {
        $('#registrationForm #frm1 .form-control').blur(function () {
            if (SubmitPaymentForm.frm1Ctrl()) {
                $('#registrationForm .form-control').removeClass('alert');
                $('#registrationForm #frm1').addClass('ok');
                $('#registrationForm #frm2').addClass('active');
                GoOn('frm2');
            }
        });
    },
    frm2Focus: function () {
        $('#registrationForm #frm2 .form-control').blur(function () {
            if (SubmitPaymentForm.frm2Ctrl()) {
                $('#registrationForm .form-control').removeClass('alert');
                $('#registrationForm #frm2').addClass('ok');
                $('#registrationForm #frm3').addClass('active');
                GoOn('frm3');
            }
        });
    },
    frm3Focus: function () {
        $('#registrationForm #frm3 .form-control').blur(function () {
            if (SubmitPaymentForm.frm3Ctrl()) {
                $('#registrationForm .form-control').removeClass('alert');
                $('#registrationForm #frm3').addClass('ok');
                $('#registrationForm #frm4').addClass('active');
                //GoOn('frm4');
            }
        });
    }
    //frm4Focus: function () {
    //    $('#registrationForm #frm4 .form-control').blur(function () {
    //        if (SubmitPaymentForm.frm4Ctrl()) {
    //            $('#registrationForm .form-control').removeClass('alert');
    //            $('#registrationForm #frm4').addClass('ok');
    //        }
    //    });
    //}
}
/* ==========================================================================
   SubmitPaymentForm Focus
   ========================================================================== */
SubmitPaymentForm.frm1Focus();
SubmitPaymentForm.frm2Focus();
SubmitPaymentForm.frm3Focus();
//SubmitPaymentForm.frm4Focus();
/* ==========================================================================
   SubmitPaymentDriverForm 
   ========================================================================== */
$('.fly_info h2 ').click(function () {
    if ($(this).parents('.form_container').parent().hasClass('open')) {
        $(this).parents('.form_container').parent().removeClass('open');
        $(this).siblings('.panel_container').slideUp(300);
    }
    else {
        $(this).parents('.form_container').parent().addClass('open');
        $(this).siblings('.panel_container').slideDown(300);
    }
});

var formExtraDriverFlyInfoPrams = {
    ExtraDriverName: "",
    ExtraDriverSurname: "",
    ExtraDriverIdStatus: true,
    ExtraDriverIdNumber: "",
    ExtraDriverBirthday: "",
    ExtraDriverLicenseNumber: "",
    //ExtraDriverLicenseDate: "",
    MilesSmilesTkNo: "",
    FlightCompany: "",
    ComingFlyNumber: "",
    CominFlyTime: "",
    ReturnFlyNumber: "",
    ReturnFlyTime: "",
};
var formExtraInvoicePrams = {
    CompanyName: "",
    Phone: "",
    TaxOffice: "",
    TaxNo: "",
    Country: "",
    City: "",
    InvoiceExtraAddress: "",
    ExtraInvoce: false,
    Ref: ""
};
var isWaiting = false;
function SendExtraDriverFlyInfoForm() {

        console.log(formExtraDriverFlyInfoPrams);
        $('.loading').fadeIn(300);
        $.getJSON(path + "Odeme/InsertExtraDriver", {
            ExtraDriverName: formExtraDriverFlyInfoPrams.ExtraDriverName,
            ExtraDriverSurname: formExtraDriverFlyInfoPrams.ExtraDriverSurname,
            ExtraDriverIdStatus: formExtraDriverFlyInfoPrams.ExtraDriverIdStatus,
            ExtraDriverIdNumber: formExtraDriverFlyInfoPrams.ExtraDriverIdNumber,
            ExtraDriverBirthday: formExtraDriverFlyInfoPrams.ExtraDriverBirthday,
            ExtraDriverLicenseNumber: formExtraDriverFlyInfoPrams.ExtraDriverLicenseNumber,
            //ExtraDriverLicenseDate: JSON.stringify(formExtraDriverFlyInfoPrams.ExtraDriverLicenseDate),
            MilesSmilesTkNo: formExtraDriverFlyInfoPrams.MilesSmilesTkNo,
            FlightCompany: formExtraDriverFlyInfoPrams.FlightCompany,
            ComingFlyNumber: formExtraDriverFlyInfoPrams.ComingFlyNumber,
            CominFlyTime: formExtraDriverFlyInfoPrams.CominFlyTime,
            ReturnFlyNumber: formExtraDriverFlyInfoPrams.ReturnFlyNumber,
            ReturnFlyTime: formExtraDriverFlyInfoPrams.ReturnFlyTime,
            mkEhliyetTarihi: formExtraDriverFlyInfoPrams.ExtraDriverLicenseDate,
        }, function (result) {
            if (result.Status) {
                if (isWaiting) return;
                //window.location = path + "Odeme/Devam?ref=" + formExtraDriverFlyInfoPrams.Ref;
                //$(".loading").fadeOut(300);
            }
            else {
                $(".loading").fadeOut(300);
                error.open(result.Error);
            }
        });


    //$.ajax({
    //    type: "POST",
    //    url: path + "Odeme/InsertExtraDriver",
    //    data: "{'updateParams':" + JSON.stringify(formExtraDriverFlyInfoPrams) + "}",
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (result) {
    //        if (result.Status) {
    //            window.location = path + "Odeme/Devam?ref=" + formExtraDriverFlyInfoPrams.Ref;
    //            //$(".loading").fadeOut(300);
    //        }
    //        else {
    //            //$(".loading").fadeOut(300);
    //            //error.open(result.Error);
    //        }
    //    },
    //    error: function (x, y, z) {
    //        //alert(x + '\n' + y + '\n' + z);
    //        console.log(x + '\n' + y + '\n' + z);
    //    }
    //});
}

function SendExtraInvoiceForm() {
        console.log(formExtraInvoicePrams);
        //formExtraInvoicePrams.Ref = $("#hdnRef").val();
        formExtraInvoicePrams.ExtraInvoce = $('#ckbExtraBilling').is(':checked');
        if (window.location.pathname.indexOf('Devam') == -1) {
            $('.loading').fadeIn(300);
        }
        $.ajax({
            type: "POST",
            url: path + "Odeme/InsertExtraInvoice",
            data: "{'updateParams':" + JSON.stringify(formExtraInvoicePrams) + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                if (result.Status) {
                   // window.location = path + "Odeme/Devam?ref=" + formExtraInvoicePrams.Ref;
                }
                else {
                    //$(".loading").fadeOut(300);
                    //error.open(result.Error);
                }
            },
            error: function (x, y, z) {
                //alert(x + '\n' + y + '\n' + z);
                console.log(x + '\n' + y + '\n' + z);
            }
        });
    
}

//--------- Driving license Years ---------
DropdownDrivingLicenseYears($("#additional_driver_year_driving_license2"));
DropdownDrivingLicenseYears($("#additional_driver_year_identity"));

var SubmitPaymentDriverForm = {
    init: function () {
        if ($('#additional_driver2').length > 0) {
            if (!SubmitPaymentDriverForm.additional_driver2()) {
                GoOn($('.payment .billing_form .alert').attr('id'))
                return;
            }
        }

        if ($('.billing_information input[name="chk_billing"]').is(':checked')) {
            if (!SubmitPaymentDriverForm.billing_form()) {
                GoOn($('.payment .billing_form .alert').attr('id'))
                return;
            }
        }

        if ($('.payment .fly_info').hasClass('open')) {
            if (!SubmitPaymentDriverForm.fly_info()) {
                GoOn($('.payment .billing_form .alert').attr('id'))
                return;
            }
        }
        if ((formExtraDriverFlyInfoPrams.ExtraDriverIdNumber != "" || formExtraDriverFlyInfoPrams.ComingFlyNumber !="") && formExtraInvoicePrams.City != "") {
            isWaiting = true;
            SendExtraDriverFlyInfoForm();
            SendExtraInvoiceForm();
        }
        else if ((formExtraDriverFlyInfoPrams.ExtraDriverIdNumber != "" || formExtraDriverFlyInfoPrams.ComingFlyNumber != "") && formExtraInvoicePrams.City == "") {
            SendExtraDriverFlyInfoForm();
        }
        else if ((formExtraDriverFlyInfoPrams.ExtraDriverIdNumber == "" && formExtraInvoicePrams.City != "") || (formExtraDriverFlyInfoPrams.ComingFlyNumber == "" && formExtraInvoicePrams.City != "")) {
            SendExtraInvoiceForm();
        }
        else {
            //window.location = path + "Odeme/Devam?ref=" + $("#hdnRef").val();
        }

    },
    billing_form: function () {
        $('.payment .billing_form .form-control').removeClass('alert');
        var $Billing_Name = $('#Billing_Name'),
            $Billing_Surname = $('#Billing_Surname'),
            $Billing_Corporate_Name = $('#Billing_Corporate_Name'),
            $Billing_MobilePhone = $('#Billing_MobilePhone'),
            $Billing_Tax_Administration = $('#Billing_Tax_Administration'),
            $Billing_Tax_Number = $('#Billing_Tax_Number'),
            $Billing_Country = $('#Billing_Country'),
            $Billing_City = $('#billing_city'),
            $Billing_CityName = $('#billing_cityname'),
            $Billing_Address = $('#Billing_Address');

        formExtraInvoicePrams.CompanyName = $Billing_Corporate_Name.val();
        formExtraInvoicePrams.Phone = $Billing_MobilePhone.val();
        formExtraInvoicePrams.TaxOffice = $Billing_Tax_Administration.val();
        formExtraInvoicePrams.TaxNo = $Billing_Tax_Number.val();
        formExtraInvoicePrams.Country = $Billing_Country.val();
        formExtraInvoicePrams.InvoiceExtraAddress = $Billing_Address.val();
        if (!$Billing_City.is(':hidden')) {
            formExtraInvoicePrams.City = $Billing_City.val();
        }
        else {
            formExtraInvoicePrams.City = $Billing_CityName.val();
        }

        if ($Billing_Name.val() == "") {
            $Billing_Name.addClass('alert')
        }
        else if ($Billing_Surname.val() == "") {
            $Billing_Surname.addClass('alert')
        }
        else if ($Billing_Corporate_Name.val() == "") {
            $Billing_Corporate_Name.addClass('alert')
        }
        else if ($Billing_MobilePhone.val() == "") {
            $Billing_MobilePhone.addClass('alert')
        }
        else if ($Billing_Tax_Administration.val() == "") {
            $Billing_Tax_Administration.addClass('alert')
        }
        else if ($Billing_Tax_Number.val() == "") {
            $Billing_Tax_Number.addClass('alert')
        }
        else if ($Billing_Country.val() == 0) {
            $Billing_Country.addClass('alert')
        }

        if ($Billing_City.val() == 0 && !$Billing_City.is(':hidden')) {
            $Billing_City.addClass('alert');
            GoOn($Billing_City.attr('id'));
        }
        else if ($Billing_CityName.val() == "" && $Billing_City.is(':hidden')) {
            $Billing_CityName.addClass('alert');
            GoOn($Billing_CityName.attr('id'));
        }
        else if ($Billing_Address.val() == 0) {
            $Billing_Address.addClass('alert')
        }
        else {
            $('.payment .billing_form .form-control').removeClass('alert');
            return true;
        }



        return false;
    },
    additional_driver2: function () {

        $('.payment #additional_driver2 .form-control').removeClass('alert');

        var $ExtraDriverName2 = $('#ExtraDriverName2'),
            $ExtraDriverSurname2 = $('#ExtraDriverSurname2'),
            $ExtraDriverIdentity2 = $('#ExtraDriverIdentity2'),
            $ExtraDriverIdentityNumber2 = $('#ExtraDriverIdentityNumber2'),
            $additional_driver_day_identity = $('#additional_driver_day_identity'),
            $additional_driver_mount_identity = $('#additional_driver_mount_identity'),
            $additional_driver_year_identity = $('#additional_driver_year_identity'),
            $additional_driver_driving_license = $('#additional_driver_driving_license'),
            $additional_driver_day_driving_license2 = $('#additional_driver_day_driving_license2'),
            $additional_driver_mount_driving_license2 = $('#additional_driver_mount_driving_license2'),
            $additional_driver_year_driving_license2 = $('#additional_driver_year_driving_license2');


        formExtraDriverFlyInfoPrams.ExtraDriverName = $ExtraDriverName2.val();
        formExtraDriverFlyInfoPrams.ExtraDriverSurname = $ExtraDriverSurname2.val();

        formExtraDriverFlyInfoPrams.ExtraDriverIdNumber = $ExtraDriverIdentityNumber2.val();
        formExtraDriverFlyInfoPrams.ExtraDriverBirthday = $additional_driver_day_identity.val() + "/" + $additional_driver_mount_identity.val() + "/" + $additional_driver_year_identity.val();
        formExtraDriverFlyInfoPrams.ExtraDriverLicenseNumber = $additional_driver_driving_license.val();
        //formExtraDriverFlyInfoPrams.ExtraDriverLicenseDate = $additional_driver_day_driving_license2.val() + "/" + $additional_driver_mount_driving_license2.val() + "/" + $additional_driver_year_driving_license2.val();


        //bool = validateTc($ExtraDriverIdentityNumber2.val());
        if ($ExtraDriverIdentity2.val() == "0") {
            formExtraDriverFlyInfoPrams.ExtraDriverIdStatus = true;
        } else {
            formExtraDriverFlyInfoPrams.ExtraDriverIdStatus = false;
            bool = true;
        }
        if ($ExtraDriverName2.val() == "") {
            $ExtraDriverName2.addClass('alert');
            GoOn($ExtraDriverName2.attr('id'));
        }
        else if ($ExtraDriverSurname2.val() == "") {
            $ExtraDriverSurname2.addClass('alert');
            GoOn($ExtraDriverSurname2.attr('id'));
        }
        else if ($ExtraDriverIdentityNumber2.val() == "" || !bool) {
            $ExtraDriverIdentityNumber2.addClass('alert')
            GoOn($ExtraDriverIdentityNumber2.attr('id'));
        }

        else if ($additional_driver_day_identity.val() == 0) {
            $additional_driver_day_identity.addClass('alert');
            GoOn($additional_driver_day_identity.attr('id'));
        }
        else if ($additional_driver_mount_identity.val() == 0) {
            $additional_driver_mount_identity.addClass('alert');
            GoOn($additional_driver_mount_identity.attr('id'));
        }
        else if ($additional_driver_year_identity.val() == 0) {
            $additional_driver_year_identity.addClass('alert');
            GoOn($additional_driver_year_identity.attr('id'));
        }
        else if ($additional_driver_driving_license.val() == "") {
            $additional_driver_driving_license.addClass('alert');
            GoOn($additional_driver_driving_license.attr('id'));
        }
        else if ($additional_driver_day_driving_license2.val() == 0) {
            $additional_driver_day_driving_license2.addClass('alert');
            GoOn($additional_driver_day_driving_license2.attr('id'));
        }
        else if ($additional_driver_mount_driving_license2.val() == 0) {
            $additional_driver_mount_driving_license2.addClass('alert');
            GoOn($additional_driver_mount_driving_license2.attr('id'));
        }
        else if ($additional_driver_year_driving_license2.val() == 0) {
            $additional_driver_year_driving_license2.addClass('alert');
            GoOn($additional_driver_year_driving_license2.attr('id'));
        }
        else {
            $('.payment #additional_driver2 .form-control').removeClass('alert');
            return true;
        }
        return false;
    },
    fly_info: function () {
        $('.payment .fly_info .form-control').removeClass('alert');
        var $miles_and_smiles_tk_no = $('#miles_and_smiles_tk_no'),
            $airplane_no_arrival = $('#airplane_no_arrival'),
            $airplane_no_arrival_time = $('#airplane_no_arrival_time'),
            $flight_company = $('#flight_company');

        formExtraDriverFlyInfoPrams.MilesSmilesTkNo = $miles_and_smiles_tk_no.val();
        formExtraDriverFlyInfoPrams.ComingFlyNumber = $airplane_no_arrival.val();
        formExtraDriverFlyInfoPrams.CominFlyTime = $airplane_no_arrival_time.val();
        formExtraDriverFlyInfoPrams.FlightCompany = $flight_company.val();
        //formExtraDriverFlyInfoPrams.ReturnFlyNumber = $airplane_no_departure.val();
        //formExtraDriverFlyInfoPrams.ReturnFlyTime = $airplane_no_departure_time.val();

        if ($miles_and_smiles_tk_no.val() == "") {
            $miles_and_smiles_tk_no.addClass('alert')
        }
        else if ($airplane_no_arrival.val() == "") {
            $airplane_no_arrival.addClass('alert')
        }
        else if ($airplane_no_arrival_time.val() == "") {
            $airplane_no_arrival_time.addClass('alert')
        }
        else if ($flight_company.val() == "") {
            $flight_company.addClass('alert')
        }
        //else if ($airplane_no_departure.val() == "") {
        //    $airplane_no_departure.addClass('alert')
        //}
        //else if ($airplane_no_departure_time.val() == "") {
        //    $airplane_no_departure_time.addClass('alert')
        //}
        else {
            $('.payment .fly_info .form-control').removeClass('alert');
            return true;
        }
        return false;
    }
}

/* ==========================================================================
   SubmitProfilInfoForm 
   ========================================================================== */

var formProfilInfoParams = {
    Name: "",
    Surname: "",
    Mail: "",
    Phone: "",
    TcNo: true,
    IdentityNumber: "",
    Birthday: "",
    DriversLicenseNumber: "",
    DriversLicenseDate: "",
    DriversLicensePlace: "",
    Country: "",
    City: "",
    Adress1: "",
    Password: ""
};


function SendProfilInfoFormForm() {
    console.log(formProfilInfoParams);
    //formProfilInfoParams.Ref = $("#hdnRef").val();
    $('.loading').fadeIn(300);
    $.ajax({
        type: "POST",
        url: path + "ProfilBilgilerim/UpdateMember",
        data: "{'updateParams':" + JSON.stringify(formProfilInfoParams) + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (result.Status) {
                //window.location = "/Home/index?ref=" + formProfilInfoParams.Ref;
                $(".loading").fadeOut(300);
            }
            else {
                $(".loading").fadeOut(300);
                error.open(result.Error);
            }
        },
        error: function (x, y, z) {
            //alert(x + '\n' + y + '\n' + z);
            console.log(x + '\n' + y + '\n' + z);
        }
    });
}
var SubmitProfilInfoForm = {
    init: function () {
        $('#my_profile .form-control').removeClass('alert');
        if (SubmitProfilInfoForm.frm1Ctrl()) {
            if (SubmitProfilInfoForm.frm2Ctrl()) {
                if (SubmitProfilInfoForm.frm3Ctrl()) {
                    if (SubmitProfilInfoForm.frm4Ctrl()) {
                        SendProfilInfoFormForm();
                    }
                }
            }
        }
    },
    frm1Ctrl: function () {
        var $name = $('#my_profile #frm1 #name'),
            $surname = $('#my_profile #frm1 #surname'),
            $email = $('#my_profile #frm1 #email'),
            $phone = $('#my_profile #frm1 #phone'),
            $identity = $('#my_profile #frm1 #identity'),
            $day_identity = $('#my_profile #frm1 #day_identity'),
            $mount_identity = $('#my_profile #frm1 #mount_identity'),
            $choose_identity = $('#my_profile #frm1 #choose_identity'),
            $year_identity = $('#my_profile #frm1 #year_identity');

        formProfilInfoParams.Name = $name.val();
        formProfilInfoParams.Surname = $surname.val();

        formProfilInfoParams.Mail = $email.val();
        formProfilInfoParams.IdentityNumber = $identity.val();
        formProfilInfoParams.Phone = $phone.val();
        formProfilInfoParams.Birthday = $day_identity.val() + "/" + $mount_identity.val() + "/" + $year_identity.val();

        //bool = validateTc($identity.val());
        if ($choose_identity.val() == "0") {
            formProfilInfoParams.TcNo = true;
        } else {
            formProfilInfoParams.TcNo = false;
            bool = true;
        }
        if ($name.val() == "") {
            $name.addClass('alert');
            GoOn($name.attr('id'));
        }
        else if ($surname.val() == "") {
            $surname.addClass('alert');
            GoOn($surname.attr('id'));
        }
        else if ($email.val() == "" || !validateEmail($email.val())) {
            $email.addClass('alert');
            GoOn($email.attr('id'));
        }
        else if ($phone.val() == "") {
            $phone.addClass('alert');
            GoOn($phone.attr('id'));
        }
        else if ($identity.val() == "" || !bool) {
            $identity.addClass('alert');
            GoOn($identity.attr('id'));
        }
        else if ($day_identity.val() == 0) {
            $day_identity.addClass('alert');
            GoOn($day_identity.attr('id'));
        }
        else if ($mount_identity.val() == 0) {
            $mount_identity.addClass('alert');
            GoOn($mount_identity.attr('id'));
        }
        else if ($year_identity.val() == 0) {
            $year_identity.addClass('alert');
            GoOn($year_identity.attr('id'));
        }
        else {
            $('#my_profile #frm1 .form-control').removeClass('alert');
            return true;
        }
        return false;
    },
    frm2Ctrl: function () {
        var $driving_license = $('#my_profile #frm2 #driving_license')
        $day_driving_license = $('#my_profile #frm2 #day_driving_license'),
            $mount_driving_license = $('#my_profile #frm2 #mount_driving_license'),
            $year_driving_license = $('#my_profile #frm2 #year_driving_license'),
            $take_driving_license = $('#my_profile #frm2 #take_driving_license');

        formProfilInfoParams.DriversLicenseNumber = $driving_license.val();
        formProfilInfoParams.DriversLicenseDate = $day_driving_license.val() + "/" + $mount_driving_license.val() + "/" + $year_driving_license.val();
        formProfilInfoParams.DriversLicensePlace = $take_driving_license.val();
        if ($driving_license.val() == "") {
            $driving_license.addClass('alert');
            GoOn($driving_license.attr('id'));
        }
        else if ($day_driving_license.val() == 0) {
            $day_driving_license.addClass('alert');
            GoOn($day_driving_license.attr('id'));
        }
        else if ($mount_driving_license.val() == 0) {
            $mount_driving_license.addClass('alert');
            GoOn($mount_driving_license.attr('id'));
        }
        else if ($year_driving_license.val() == 0) {
            $year_driving_license.addClass('alert');
            GoOn($year_driving_license.attr('id'));
        }
        else if ($take_driving_license.val() == "") {
            $take_driving_license.addClass('alert');
            GoOn($take_driving_license.attr('id'));
        }
        else {
            $('#my_profile #frm2 .form-control').removeClass('alert');
            return true;
        }
        return false;
    },
    frm3Ctrl: function () {
        var $country = $('#my_profile #frm3 #country'),
            $address_city = $('#my_profile #frm3 #address_city'),
            $address_cityname = $('#my_profile #frm3 #address_cityname'),
            $address = $('#my_profile #frm3 #address');

        formProfilInfoParams.Country = $country.val();
        if (!$address_city.is(':hidden')) {
            formProfilInfoParams.City = $address_city.val();
        }
        else {
            formProfilInfoParams.City = $address_cityname.val();
        }
        formProfilInfoParams.Adress1 = $address.val();

        if ($country.val() == 0) {
            $country.addClass('alert');
            GoOn($country.attr('id'));
        }
        else if ($address_city.val() == 0 && !$address_city.is(':hidden')) {
            $address_city.addClass('alert');
            GoOn($address_city.attr('id'));
        }
        else if ($address_cityname.val() == "" && !$address_cityname.is(':hidden')) {
            $address_cityname.addClass('alert');
            GoOn($address_cityname.attr('id'));
        }
        else if ($address.val() == "") {
            $address.addClass('alert');
            GoOn($address.attr('id'));
        }
        else {
            $('#my_profile #frm3 .form-control').removeClass('alert');
            return true;
        }
        return false;
    },
    frm4Ctrl: function () {
        var $last_password = $('#my_profile #frm4 #last_password'),
            $new_password = $('#my_profile #frm4 #new_password'),
            $password_verification = $('#my_profile #frm4 #password_verification');


        if ($last_password.val() == "") {
            $last_password.addClass('alert');
            GoOn($last_password.attr('id'));
        }
        else if ($new_password.val() == "" && $password_verification.val().length > 0) {
            $password_verification.addClass('alert');
            GoOn($password_verification.attr('id'));
        }
        else if ($password_verification.val() != $new_password.val() && $new_password.val() != "") {
            $password_verification.addClass('alert');
            GoOn($password_verification.attr('id'));
        }
        else {
            if ($password_verification.val() != "") {
                formProfilInfoParams.Password = $password_verification.val();
            }
            else {
                formProfilInfoParams.Password = $last_password.val();
            }
            $('#my_profile #frm4 .form-control').removeClass('alert');
            return true;
        }
        return false;
    }
}

/* ==========================================================================
   InsertNewMember 
   ========================================================================== */
$('#country').change(function () {
    if ($(this).val() != "TÜRKİYE") {
        $('#address_city').fadeOut(300, function () {
            $('#address_cityname').fadeIn(300);
        });
    }
    else {
        $('#address_city').fadeIn(300, function () {
            $('#address_cityname').fadeOut(300);
        });
    }
});
$('#Billing_Country').change(function () {
    if ($(this).val() != "TÜRKİYE") {
        $('#billing_city').fadeOut(300, function () {
            $('#billing_cityname').fadeIn(300);
        });
    }
    else {
        $('#billing_city').fadeIn(300, function () {
            $('#billing_cityname').fadeOut(300);
        });
    }
});

function SendInsertNewMemberForm() {
    // console.log(formProfilInfoParams);
    //formProfilInfoParams.Ref = $("#hdnRef").val();
    $('.loading').fadeIn(300);
    $.ajax({
        type: "POST",
        url: path + "YeniUye/InsertMember",
        data: "{'insertParams':" + JSON.stringify(formProfilInfoParams) + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            //console.log(result);
            if (result.Status) {
                //window.location = path + "Home/index?ref=" + formProfilInfoParams.Ref;
            }
            else {
                $(".loading").fadeOut(300);
                error.open(result.Error);
            }
        },
        error: function (x, y, z) {
            //alert(x + '\n' + y + '\n' + z);
            console.log(x + '\n' + y + '\n' + z);
        }
    });
}
var InsertNewMember = {
    init: function () {
        $('#my_profile .form-control').removeClass('alert');
        if (InsertNewMember.frm1Ctrl()) {
            if (InsertNewMember.frm2Ctrl()) {
                if (InsertNewMember.frm3Ctrl()) {
                    if (InsertNewMember.frm4Ctrl()) {
                        SendInsertNewMemberForm();
                    }
                }
            }
        }
    },
    frm1Ctrl: function () {
        var $name = $('#my_profile #frm1 #name'),
            $surname = $('#my_profile #frm1 #surname'),
            $email = $('#my_profile #frm1 #email'),
            $phone = $('#my_profile #frm1 #phone'),
            $identity = $('#my_profile #frm1 #identity'),
            $day_identity = $('#my_profile #frm1 #day_identity'),
            $mount_identity = $('#my_profile #frm1 #mount_identity'),
            $choose_identity = $('#my_profile #frm1 #choose_identity'),
            $year_identity = $('#my_profile #frm1 #year_identity');


        formProfilInfoParams.Name = $name.val();
        formProfilInfoParams.Surname = $surname.val();

        formProfilInfoParams.Mail = $email.val();
        formProfilInfoParams.IdentityNumber = $identity.val();
        formProfilInfoParams.Phone = $phone.val();
        formProfilInfoParams.Birthday = $day_identity.val() + "/" + $mount_identity.val() + "/" + $year_identity.val();

        //bool = validateTc($identity.val());
        if ($choose_identity.val() == "0") {
            formProfilInfoParams.TcNo = true;
        } else {
            formProfilInfoParams.TcNo = false;
            bool = true;
        }

        if ($name.val() == "") {
            $name.addClass('alert');
            GoOn($name.attr('id'));
        }
        else if ($surname.val() == "") {
            $surname.addClass('alert');
            GoOn($surname.attr('id'));
        }
        else if ($email.val() == "" || !validateEmail($email.val())) {
            $email.addClass('alert');
            GoOn($email.attr('id'));
        }
        else if ($phone.val() == "") {
            $phone.addClass('alert');
            GoOn($phone.attr('id'));
        }
        else if ($identity.val() == "" || !bool) {
            $identity.addClass('alert');
            GoOn($identity.attr('id'));
        }
        else if ($day_identity.val() == 0) {
            $day_identity.addClass('alert');
            GoOn($day_identity.attr('id'));
        }
        else if ($mount_identity.val() == 0) {
            $mount_identity.addClass('alert');
            GoOn($mount_identity.attr('id'));
        }
        else if ($year_identity.val() == 0) {
            $year_identity.addClass('alert');
            GoOn($year_identity.attr('id'));
        }
        else {
            $('#my_profile #frm1 .form-control').removeClass('alert');
            return true;
        }


        return false;
    },
    frm2Ctrl: function () {
        var $driving_license = $('#my_profile #frm2 #driving_license')
        $day_driving_license = $('#my_profile #frm2 #day_driving_license'),
            $mount_driving_license = $('#my_profile #frm2 #mount_driving_license'),
            $year_driving_license = $('#my_profile #frm2 #year_driving_license'),
            $take_driving_license = $('#my_profile #frm2 #take_driving_license');

        formProfilInfoParams.DriversLicenseNumber = $driving_license.val();
        formProfilInfoParams.DriversLicensePlace = $take_driving_license.val();
        formProfilInfoParams.DriversLicenseDate = $day_driving_license.val() + "/" + $mount_driving_license.val() + "/" + $year_driving_license.val();

        if ($driving_license.val() == "") {
            $driving_license.addClass('alert');
            GoOn($driving_license.attr('id'));
        }
        else if ($day_driving_license.val() == 0) {
            $day_driving_license.addClass('alert');
            GoOn($day_driving_license.attr('id'));
        }
        else if ($mount_driving_license.val() == 0) {
            $mount_driving_license.addClass('alert');
            GoOn($mount_driving_license.attr('id'));
        }
        else if ($year_driving_license.val() == 0) {
            $year_driving_license.addClass('alert');
            GoOn($year_driving_license.attr('id'));
        }
        else if ($take_driving_license.val() == "") {
            $take_driving_license.addClass('alert');
            GoOn($take_driving_license.attr('id'));
        }
        else {
            $('#my_profile #frm2 .form-control').removeClass('alert');
            return true;
        }
        return false;
    },
    frm3Ctrl: function () {
        var $country = $('#my_profile #frm3 #country'),
            $address_city = $('#my_profile #frm3 #address_city'),
            $address_cityname = $('#my_profile #frm3 #address_cityname'),
            $address = $('#my_profile #frm3 #address');

        formProfilInfoParams.Country = $country.val();
        if (!$address_city.is(':hidden')) {
            formProfilInfoParams.City = $address_city.val();
        }
        else {
            formProfilInfoParams.City = $address_cityname.val();
        }
        formProfilInfoParams.Adress1 = $address.val();

        if ($country.val() == 0) {
            $country.addClass('alert');
            GoOn($country.attr('id'));
        }
        else if ($address_city.val() == 0 && !$address_city.is(':hidden')) {
            $address_city.addClass('alert');
            GoOn($address_city.attr('id'));
        }
        else if ($address_cityname.val() == "" && !$address_cityname.is(':hidden')) {
            $address_cityname.addClass('alert');
            GoOn($address_cityname.attr('id'));
        }
        else if ($address.val() == "") {
            $address.addClass('alert');
            GoOn($address.attr('id'));
        }
        else {
            $('#my_profile #frm3 .form-control').removeClass('alert');
            return true;
        }
        return false;
    },
    frm4Ctrl: function () {
        var $new_password = $('#my_profile #frm4 #new_password'),
            $password_verification = $('#my_profile #frm4 #password_verification');

        formProfilInfoParams.Password = $password_verification.val();

        if ($new_password.val() == "") {
            $new_password.addClass('alert');
            GoOn($new_password.attr('id'));
        }
        else if ($password_verification.val() == "") {
            $password_verification.addClass('alert');
            GoOn($password_verification.attr('id'));
        }
        else if ($password_verification.val() != $new_password.val()) {
            $password_verification.addClass('alert');
            GoOn($password_verification.attr('id'));
        }
        else {
            $('#my_profile #frm4 .form-control').removeClass('alert');
            return true;
        }
        return false;
    }
};
/* ==========================================================================
   Payment Progress Credit Card
   ========================================================================== */
var SendCard = {
    init: function () {
        $('#frmOdeme .form-control').removeClass('alert');
        //SendCard.send()
    },
    send: function () {
        var $name_on_card = $('#frmOdeme #name_on_card'),
            $card_no = $('#frmOdeme #card_no'),
            $cvc2 = $('#frmOdeme #cvc2'),
            $reservation = $('#frmOdeme #reservation'),
            $web_site = $('#frmOdeme #web_site'),
            $3d_secure = $('#frmOdeme #3d_secure'),
            $expiration_date_year = $('#frmOdeme #expiration_date_year'),
            $expiration_date_mount = $('#frmOdeme #expiration_date_mount');

        if ($name_on_card.val() == "") {
            $name_on_card.addClass('alert')
        }
        else if ($card_no.val() == "") {
            $card_no.addClass('alert')
        }
        else if ($cvc2.val() == "") {
            $cvc2.addClass('alert')
        }
        else if ($expiration_date_mount.val() == 0) {
            $expiration_date_mount.addClass('alert')
        }
        else if ($expiration_date_year.val() == 0) {
            $expiration_date_year.addClass('alert')
        }
        else if (!$reservation.is(':checked')) {
            alert("Rezervasyon ve Kiralama Şartlarını onaylayın");
        }
        else if (!$web_site.is(':checked')) {
            alert("Web Sitesi Kullanım Şartlarını onaylayın.");
        }
        else {
            $('#frmOdeme .form-control').removeClass('alert');

            if ($3d_secure.is(':checked')) {
                alert("3d secure seçildi");
            } else {
                alert("3d secure seçilmedi");
            }

            return true;
        }
        return false;
    }
};
if ($('#frmOdeme').length > 0) {
    SendCard.init();
}
///////////////////////////==FORM FUNCTIONS END==///////////////////////////////////////

///////////////////////////==HELPER FUNCTIONS START==///////////////////////////////////
/* ==========================================================================
   GoOn
   ========================================================================== */
function GoOn(id) {
    if (id != undefined) {
        $("html, body").animate({ scrollTop: $('#' + id).offset().top - 30 }, 1000, function () {
        });
    }
}
/* ==========================================================================
   .form-control Focus and Blur
   ========================================================================== */
$('.form-control').focus(function () {
    $(this).attr('placeholder', '');
});
$('.form-control').blur(function () {
    if ($(this).val().length == 0) {
        $(this).attr('placeholder', $(this).attr('data-placeholder'));
    }
});
/* ==========================================================================
   validateTc
   ========================================================================== */
var bool = false;

//function validateTcNumber() {
//    $.getJSON(path + "Home/ValidateTcNo", { name: name, lastname: lastname, id: id, birthdateyear: birthdateyear, birthdatemonth: birthdatemonth, birtdateday: birtdateday }, function (data) {
//        console.log(data);
//    });
//}
//function trueOrFalse(bool) {
//    return bool;
//}

//var dummyBtn = $("#dummy");
//$(dummy).click(function () {
//    validateTcNumber()
//})

/* ==========================================================================
   validateTc
   ========================================================================== */
/*var bool = false;
function validateTc(value) {
    value = value.toString();
    var isEleven = /^[0-9]{11}$/.test(value);
    var totalX = 0;
    for (var i = 0; i < 10; i++) {
        totalX += Number(value.substr(i, 1));
    }
    var isRuleX = totalX % 10 == value.substr(10, 1);
    var totalY1 = 0;
    var totalY2 = 0;
    for (var i = 0; i < 10; i += 2) {
        totalY1 += Number(value.substr(i, 1));
    }
    for (var i = 1; i < 10; i += 2) {
        totalY2 += Number(value.substr(i, 1));
    }
    var isRuleY = ((totalY1 * 7) - totalY2) % 10 == value.substr(9, 0);
    return isEleven && isRuleX && isRuleY;
}*/

/* ==========================================================================
   covertToDateTime
   ========================================================================== */
function covertToDateTime(date) {
    var re = /-?\d+/;
    var d = re.exec(date);
    var dt = new Date(parseInt(d[0]));
    return dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
}
/* ==========================================================================
   DropdownBirthdayYears
   ========================================================================== */
function DropdownBirthdayYears(elem) {
    var date = new Date();
    var startYear = date.getFullYear() - 18;
    var lastYear = 1929;
    elem.empty();
    elem.append('<option value="0">Yıl</option>');
    for (var i = startYear; i > lastYear; i--) {
        elem.append('<option value="' + i + '">' + i + '</option>');
    }
}
/* ==========================================================================
   DropdownDrivingLicenseYears
   ========================================================================== */
function DropdownDrivingLicenseYears(elem) {
    var date = new Date();
    var startYear = date.getFullYear();
    var lastYear = 1929;
    elem.empty();
    elem.append('<option value="0">Yıl</option>');
    for (var i = startYear; i > lastYear; i--) {
        elem.append('<option value="' + i + '">' + i + '</option>');
    }
}

///* ==========================================================================
//   sidebar
//   ========================================================================== */
function sidebar() {
    $('.sidebar_menu > li > span').click(function () {
        if (!$(this).parent('li').hasClass('active')) {
            $(this).parent('li').addClass('active');
            $('.sidebar_menu > li > span').stop(true, true).siblings('ul.submenu').slideUp(300).removeClass('active');
            $(this).siblings('ul.submenu').stop(true, true).slideDown(300);
        }
        else {
            $(this).parent('li').removeClass('active');
            $(this).siblings('ul.submenu').stop(true, true).slideUp(300);
        }
    });
}
///* ==========================================================================
//   sidebar active
//   ========================================================================== */
function sidebarActive() {
    var url = window.location.pathname;
    if (url.indexOf('hakkimizda') > -1) {
        //$('.sidebar_menu > li.about').addClass('active');
        //$('.sidebar_menu > li.about > span').stop(true, true).siblings('ul.submenu').slideUp(300).removeClass('active');
        //$('.sidebar_menu > li.about > span').siblings('ul.submenu').stop(true, true).slideDown(300);
        //$('.sidebar_menu > li.about > ul.submenu > li > a').each(function () {
        //    if (url == $(this).attr('href')) {
        //        $(this).addClass('active');
        //        $(this).parent('li').addClass('active');
        //    }
        //});
        $('.sidebar_menu > li > a').each(function () {
            if (url == $(this).attr('href')) {
                $(this).parent('li').addClass('active');
                $(this).addClass('active');
            }
        });
        $('.sidebar_menu > li .submenu li a').each(function () {
            if (url == $(this).attr('href')) {
                $(this).parent('li').parent("ul").css({'display':'block'}).parent("li").addClass('active');
                $(this).addClass('active');
            }
        });
        return;
    }
    else {
        $('.sidebar_menu > li > a').each(function () {
            if (url == $(this).attr('href')) {
                $(this).addClass('active');
                $(this).parent('li').addClass('active');
            }
        });
    }
}
///* ==========================================================================
//   Alış Tarihi
//   ========================================================================== */
$(function () {
    if ($("#pickUpDate").length > 0) {
        $("#pickUpDate").datepicker({
            regional: "tr",
            showButtonPanel: true,
            beforeShow: function (input, inst) {
                // It's not supported by Datepicker itself (for now) so we need to use its internal variables.
                var calendar = inst.dpDiv;

                // Dirty hack, but we can't do anything without it (for now, in jQuery UI 1.8.20)
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
            }
        });
    }
});
///////////////////////////==HELPER FUNCTIONS END==///////////////////////////////////
///* ==========================================================================
//   document ready
//   ========================================================================== */
$(document).ready(function () {
    sidebar();
    sidebarActive();
});

///* ==========================================================================
//    Up Grade Suggeted Car
//   ========================================================================== */
function UpGradeSuggetedCar(groupId, subGroupId) {
    var ref = $("#hdnRef").val();
    $(".loading").fadeIn(300);
    $.getJSON(path + "AracSecimi/UpGradeSuggestedCar", { ref_: ref, groupId: groupId, SubGroupId: subGroupId }, function (data) {
        $(".loading").fadeIn(300);
        location.reload();
    });
}
///* ==========================================================================
//    Select vehicle type
//   ========================================================================== */

//  Select brand

function FilterVehicle() {
    var brandValue = $('#brand option:selected').val(),
        gearTypeValue = $('#gearType option:selected').val(),
        fuelTypeValue = $('#fuelType option:selected').val(),
        ageGroupValue = $('#ageGroup option:selected').val();

    $('#vehicles .box').css('display', 'none');
    $('#vehicles .box').each(function () {
        var $box = $(this);
        var _brandValue = $box.attr('data-brand'),
            _gearTypeValue = $box.attr('data-gear-type'),
            _fuelTypeValue = $box.attr('data-fuel-type'),
            _ageGroupValue = $box.attr('data-driver-min-age');

        //Brand combinations
        if (brandValue != "0" & gearTypeValue != "0" & fuelTypeValue != "0" & ageGroupValue != "0") {

            if (brandValue == _brandValue & gearTypeValue == _gearTypeValue & fuelTypeValue == _fuelTypeValue & ageGroupValue == _ageGroupValue) {
                $box.css('display', 'block');
            }
            else {
                $box.css('display', 'none');
            }
        }
        else if (brandValue != "0" & gearTypeValue != "0" & fuelTypeValue != "0") {

            if (brandValue == _brandValue & gearTypeValue == _gearTypeValue & fuelTypeValue == _fuelTypeValue) {
                $box.css('display', 'block');
            }
            else {
                $box.css('display', 'none');
            }
        }
        else if (brandValue != "0" & gearTypeValue != "0" & ageGroupValue != "0") {

            if (brandValue == _brandValue & gearTypeValue == _gearTypeValue & ageGroupValue == _ageGroupValue) {
                $box.css('display', 'block');
            }
            else {
                $box.css('display', 'none');
            }
        }
        else if (brandValue != "0" & fuelTypeValue != "0" & ageGroupValue != "0") {

            if (brandValue == _brandValue & fuelTypeValue == _fuelTypeValue & ageGroupValue == _ageGroupValue) {
                $box.css('display', 'block');
            }
            else {
                $box.css('display', 'none');
            }
        }
        else if (brandValue != "0" & gearTypeValue != "0") {

            if (brandValue == _brandValue & gearTypeValue == _gearTypeValue) {
                $box.css('display', 'block');
            }
            else {
                $box.css('display', 'none');
            }
        }
        else if (brandValue != "0" & fuelTypeValue != "0") {

            if (brandValue == _brandValue & fuelTypeValue == _fuelTypeValue) {
                $box.css('display', 'block');
            }
            else {
                $box.css('display', 'none');
            }
        }
        else if (brandValue != "0" & ageGroupValue != "0") {

            if (brandValue == _brandValue & ageGroupValue == _ageGroupValue) {
                $box.css('display', 'block');
            }
            else {
                $box.css('display', 'none');
            }
        }
        else if (brandValue != "0") {

            if (brandValue == _brandValue) {
                $box.css('display', 'block');
            }
            else {
                $box.css('display', 'none');
            }
        }
        //else if (brandValue == "0") {
        //    $box.css('display', 'block');
        //}
        //Gear combinations
        else if (gearTypeValue != "0" & fuelTypeValue != "0" & ageGroupValue != "0") {
            if (gearTypeValue == _gearTypeValue & fuelTypeValue == _fuelTypeValue & ageGroupValue == _ageGroupValue) {
                $box.css('display', 'block');
            }
            else {
                $box.css('display', 'none');
            }
        }
        else if (gearTypeValue != "0" & fuelTypeValue != "0") {

            if (gearTypeValue == _gearTypeValue & fuelTypeValue == _fuelTypeValue) {
                $box.css('display', 'block');
            }
            else {
                $box.css('display', 'none');
            }

        }
        else if (gearTypeValue != "0" & ageGroupValue != "0") {
            if (gearTypeValue == _gearTypeValue & ageGroupValue == _ageGroupValue) {
                $box.css('display', 'block');
            }
            else {
                $box.css('display', 'none');
            }
        }
        else if (gearTypeValue != "0") {

            if (gearTypeValue == _gearTypeValue) {
                $box.css('display', 'block');
            }
            else {
                $box.css('display', 'none');
            }
        }
        
        //Fuel type combinations
        else if (fuelTypeValue != "0" & ageGroupValue != "0") {
            if (fuelTypeValue == _fuelTypeValue & ageGroupValue == _ageGroupValue) {
                $box.css('display', 'block');
            }
            else {
                $box.css('display', 'none');
            }
        }
        else if (fuelTypeValue != "0") {
            if (fuelTypeValue == _fuelTypeValue) {
                $box.css('display', 'block');
            }
            else {
                $box.css('display', 'none');
            }
        }
        //Fuel type combinations
        else if (ageGroupValue != "0") {
            if (ageGroupValue == _ageGroupValue) {
                $box.css('display', 'block');
            }
            else {
                $box.css('display', 'none');
            }
        }
        else {
            $box.css('display', 'block');
        }
    });
}

function MakeReservationForOffice() {
    if (!$("#ckbReservation").is(':checked')) {
        error.open("Araç kiralama sözleşmesini kabul etmelisiniz");
        GoOn('ckbReservation');
        return;
    }
    else if (!$("#ckbInformation").is(':checked')) {
        error.open("Bilgilendirme formunu okuyup onaylamalısınız.");
        GoOn('ckbReservation');
        return;
    }
    else if (!$("#ckbPayContract").is(':checked')) {
        error.open("Ödeme kuruluşu sözleşmesini okuyup kabul etmelisiniz.");
        GoOn('ckbReservation');
        return;
    }
    var ref = $("#hdnRef").val();
    $(".loading").fadeIn(300);
    $.getJSON(path + "Odeme/StartReservation", { ref_: ref, creditCardOwner: "", creditCardNo: "" }, function (data) {
        if (!data.Status) {
            window.top.location = path + "hata?error=6";
        }
        else {
            window.top.location = path + "odeme/tesekkurler?Ref=" + ref;
        }
    });
}
$('[data-toggle="tooltip"]').tooltip();


/***************************/
    var $body = $(document.body);
    var navHeight = $('#menu.navbar-default.fixed').outerHeight(true) - 120;
    var headheight = $("header").outerHeight();
    var banner = $("#page .banner").outerHeight();
    $('#sidebar').affix({
        offset: {
            top: (navHeight + banner + 135),
            bottom: navHeight
        }
    });
$body.scrollspy({
    target: '#leftCol',
    offset: navHeight
});

$(window).scroll(function () {
    var sTop = $(window).scrollTop();
    var fOuter = $("footer").outerHeight();
    var AOuter = $("#assistance").outerHeight();
    var wHeight = $('body,html').height();
    var sBar = $(".sidebar_menu").outerHeight();
    var banner = $("#banner").outerHeight();
    var header = $("header").outerHeight();
    var divHeight = $("#page article").outerHeight();
    var divWidth = $("#page article").width();
    if (sTop > (wHeight - (fOuter + sBar + AOuter + 140))) {
        $("#leftCol").css({
            "height": divHeight + "px",
        });
        $("#sidebar.affix").css({
            "position": "absolute",
            "bottom": "40px",
            "left": "15px",
            "right":"15px",
            "top": "auto",
            "width":"auto"
        });
    }
    else {
        $("#leftCol").css({
            "height": divHeight + "px",
        });
        $("#sidebar.affix").css({
            "position": "fixed",
            "bottom": "auto",
            "top": "90px",
            "left": "auto",
            "right": "auto",
            "width":"21.6%",
        });
        
    }
    if (sTop < (header + banner + sBar)) {
        $("#sidebar.affix-top").css({
            "position": "relative",
            "top": "auto",
            "width":"auto",
            "left": "auto",
            "right": "auto",
            //"opacity": "0",
            //"visibility": "hidden"
        });
    
    }
})



//Accordion

$('.sub-accordion h2 a').click(function () {

    var accordion = $(this).parent().parent();


    if (accordion.hasClass('active')) {

        accordion.removeClass('active');
        accordion.find('.accordion-content').slideUp('slow');

    } else {
        accordion.addClass('active');
        accordion.find('.accordion-content').slideDown('slow');

    }

})
/****************/
$(".offices .form_container .form_body #branch.form-control").change(function () {
    setTimeout(function () {
        $(".searchmap").trigger("click");
    }, 300);
})

$("#search2").on('click focusin', function () {
    this.value = '';
});



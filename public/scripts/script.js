
//Get the button
var mybutton = document.getElementById("topButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

$(document).ready(function() {
  ///////// SURAH 2 /////////
  var surah2img = document.getElementsByClassName('surah2-image');
  var surah2imglist = ['2_128.png', '2_201.png', '2_250.png', '2_285.png', '2_286.png'];
  for(var i=0; i<surah2img.length; i++) {
    surah2img[i].src = "/quran/" + surah2imglist[i];
  }

  ///////// SURAH 3 /////////
  var surah3img = document.getElementsByClassName('surah3-image');
  var surah3imglist = ['3_8.png', '3_9.png', '3_16.png', '3_38.png', '3_53.png', '3_147.png', '3_191.png', '3_192.png', '3_193.png', '3_194.png'];
  for(var i=0; i<surah3img.length; i++) {
    surah3img[i].src = "/quran/" + surah3imglist[i];
  }

  ///////// SURAH 7 /////////
  var surah7img = document.getElementsByClassName('surah7-image');
  var surah7imglist = ['7_23.png', '7_47.png', '7_126.png'];
  for(var i=0; i<surah7img.length; i++) {
    surah7img[i].src = "/quran/" + surah7imglist[i];
  }

  ///////// SURAH 10 /////////
  var surah10img = document.getElementsByClassName('surah10-image');
  var surah10imglist = ['10_85.png', '10_86.png'];
  for(var i=0; i<surah10img.length; i++) {
    surah10img[i].src = "/quran/" + surah10imglist[i];
  }

  ///////// SURAH 14 /////////
  var surah14img = document.getElementsByClassName('surah14-image');
  var surah14imglist = ['14_35.png', '14_40.png', '14_41.png'];
  for(var i=0; i<surah14img.length; i++) {
    surah14img[i].src = "/quran/" + surah14imglist[i];
  }

  ///////// SURAH 17 /////////
  var surah17img = document.getElementsByClassName('surah17-image');
  var surah17imglist = ['17_24.png', '17_80.png'];
  for(var i=0; i<surah17img.length; i++) {
    surah17img[i].src = "/quran/" + surah17imglist[i];
  }

  ///////// SURAH 20 /////////
  var surah20img = document.getElementsByClassName('surah20-image');
  var surah20imglist = ['20_25.png', '20_26.png', '20_114.png'];
  for(var i=0; i<surah20img.length; i++) {
    surah20img[i].src = "/quran/" + surah20imglist[i];
  }

  ///////// SURAH 21 /////////
  var surah21img = document.getElementsByClassName('surah21-image');
  var surah21imglist = ['21_83.png', '21_87.png'];
  for(var i=0; i<surah21img.length; i++) {
    surah21img[i].src = "/quran/" + surah21imglist[i];
  }

  ///////// SURAH 23 /////////
  var surah23img = document.getElementsByClassName('surah23-image');
  var surah23imglist = ['23_29.png', '23_94.png', '23_97.png', '23_98.png', '23_109.png', '23_118.png'];
  for(var i=0; i<surah23img.length; i++) {
    surah23img[i].src = "/quran/" + surah23imglist[i];
  }

  ///////// SURAH 25 /////////
  var surah25img = document.getElementsByClassName('surah25-image');
  var surah25imglist = ['25_65.png', '25_74.png'];
  for(var i=0; i<surah25img.length; i++) {
    surah25img[i].src = "/quran/" + surah25imglist[i];
  }

  ///////// SURAH 26 /////////
  var surah26img = document.getElementsByClassName('surah26-image');
  var surah26imglist = ['26_80.png', '26_83.png', '26_84.png', '26_85.png', '26_86.png', '26_87.png', '26_88.png', '26_89.png'];
  for(var i=0; i<surah26img.length; i++) {
    surah26img[i].src = "/quran/" + surah26imglist[i];
  }

  ///////// SURAH 28 /////////
  var surah28img = document.getElementsByClassName('surah28-image');
  var surah28imglist = ['28_16.png', '28_17.png', '28_21.png', '28_24.png'];
  for(var i=0; i<surah28img.length; i++) {
    surah28img[i].src = "/quran/" + surah28imglist[i];
  }

  ///////// SURAH 40 /////////
  var surah40img = document.getElementsByClassName('surah40-image');
  var surah40imglist = ['40_7.png', '40_8.png', '40_9.png'];
  for(var i=0; i<surah40img.length; i++) {
    surah40img[i].src = "/quran/" + surah40imglist[i];
  }

  ///////// SURAH 60 /////////
  var surah60img = document.getElementsByClassName('surah60-image');
  var surah60imglist = ['60_4.png', '60_5.png'];
  for(var i=0; i<surah60img.length; i++) {
    surah60img[i].src = "/quran/" + surah60imglist[i];
  }

  ///////// SURAH 66 /////////
  var surah66img = document.getElementsByClassName('surah66-image');
  var surah66imglist = ['66_8.png', '66_9.png', '66_10.png', '66_11.png'];
  for(var i=0; i<surah66img.length; i++) {
    surah66img[i].src = "/quran/" + surah66imglist[i];
  }


  ////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////


  /// FILTERS ///
  $(':checkbox').change(function() {
    if($(this).attr('id') == 'surah_all') {
      if(this.checked) {
        $('.surahcard').show();
      } else {
        $('.surahcard').hide();
      }
    }

    if($(this).attr('id') == 'surah_1') {
      if(this.checked) {
        $('#surah1').show();
      } else {
        $('#surah1').hide();
      }
    }

    if($(this).attr('id') == 'surah_2') {
      if(this.checked) {
        $('#surah2').show();
      } else {
        $('#surah2').hide();
      }
    }

    if($(this).attr('id') == 'surah_3') {
      if(this.checked) {
        $('#surah3').show();
      } else {
        $('#surah3').hide();
      }
    }

    if($(this).attr('id') == 'surah_5') {
      if(this.checked) {
        $('#surah5').show();
      } else {
        $('#surah5').hide();
      }
    }
    
    if($(this).attr('id') == 'surah_7') {
      if(this.checked) {
        $('#surah7').show();
      } else {
        $('#surah7').hide();
      }
    }

    if($(this).attr('id') == 'surah_10') {
      if(this.checked) {
        $('#surah10').show();
      } else {
        $('#surah10').hide();
      }
    }

    if($(this).attr('id') == 'surah_11') {
      if(this.checked) {
        $('#surah11').show();
      } else {
        $('#surah11').hide();
      }
    }

    if($(this).attr('id') == 'surah_12') {
      if(this.checked) {
        $('#surah12').show();
      } else {
        $('#surah12').hide();
      }
    }

    if($(this).attr('id') == 'surah_14') {
      if(this.checked) {
        $('#surah14').show();
      } else {
        $('#surah14').hide();
      }
    }

    if($(this).attr('id') == 'surah_17') {
      if(this.checked) {
        $('#surah17').show();
      } else {
        $('#surah17').hide();
      }
    }

    if($(this).attr('id') == 'surah_18') {
      if(this.checked) {
        $('#surah18').show();
      } else {
        $('#surah18').hide();
      }
    }

    if($(this).attr('id') == 'surah_20') {
      if(this.checked) {
        $('#surah20').show();
      } else {
        $('#surah20').hide();
      }
    }

    if($(this).attr('id') == 'surah_21') {
      if(this.checked) {
        $('#surah21').show();
      } else {
        $('#surah21').hide();
      }
    }

    if($(this).attr('id') == 'surah_23') {
      if(this.checked) {
        $('#surah23').show();
      } else {
        $('#surah23').hide();
      }
    }

    if($(this).attr('id') == 'surah_25') {
      if(this.checked) {
        $('#surah25').show();
      } else {
        $('#surah25').hide();
      }
    }

    if($(this).attr('id') == 'surah_26') {
      if(this.checked) {
        $('#surah26').show();
      } else {
        $('#surah26').hide();
      }
    }

    if($(this).attr('id') == 'surah_27') {
      if(this.checked) {
        $('#surah27').show();
      } else {
        $('#surah27').hide();
      }
    }

    if($(this).attr('id') == 'surah_28') {
      if(this.checked) {
        $('#surah28').show();
      } else {
        $('#surah28').hide();
      }
    }

    if($(this).attr('id') == 'surah_29') {
      if(this.checked) {
        $('#surah29').show();
      } else {
        $('#surah29').hide();
      }
    }

    if($(this).attr('id') == 'surah_35') {
      if(this.checked) {
        $('#surah35').show();
      } else {
        $('#surah35').hide();
      }
    }

    if($(this).attr('id') == 'surah_37') {
      if(this.checked) {
        $('#surah37').show();
      } else {
        $('#surah37').hide();
      }
    }

    if($(this).attr('id') == 'surah_40') {
      if(this.checked) {
        $('#surah40').show();
      } else {
        $('#surah40').hide();
      }
    }

    if($(this).attr('id') == 'surah_44') {
      if(this.checked) {
        $('#surah44').show();
      } else {
        $('#surah44').hide();
      }
    }

    if($(this).attr('id') == 'surah_46') {
      if(this.checked) {
        $('#surah46').show();
      } else {
        $('#surah46').hide();
      }
    }

    if($(this).attr('id') == 'surah_59') {
      if(this.checked) {
        $('#surah59').show();
      } else {
        $('#surah59').hide();
      }
    }

    if($(this).attr('id') == 'surah_60') {
      if(this.checked) {
        $('#surah60').show();
      } else {
        $('#surah60').hide();
      }
    }

    if($(this).attr('id') == 'surah_66') {
      if(this.checked) {
        $('#surah66').show();
      } else {
        $('#surah66').hide();
      }
    }

    if($(this).attr('id') == 'surah_71') {
      if(this.checked) {
        $('#surah71').show();
      } else {
        $('#surah71').hide();
      }
    }

    if($(this).attr('id') == 'surah_112') {
      if(this.checked) {
        $('#surah112').show();
      } else {
        $('#surah112').hide();
      }
    }

    if($(this).attr('id') == 'surah_113') {
      if(this.checked) {
        $('#surah113').show();
      } else {
        $('#surah113').hide();
      }
    }

    if($(this).attr('id') == 'surah_114') {
      if(this.checked) {
        $('#surah114').show();
      } else {
        $('#surah114').hide();
      }
    }
    
  });
});
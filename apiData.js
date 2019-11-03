// Use request to make API Call
var request = require('request');
var async = require('async');
var rp = require('request-promise');

function getAllData() {
  return Promise.all([
    //////////////////////////////// Surah 1 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/surah/1/editions/en.sahih,ur.ahmedali'),
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 2 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/2:128/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/2:201/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/2:250/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/2:285/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/2:286/editions/en.sahih,ur.ahmedali'),
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 3 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/3:8/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/3:9/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/3:16/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/3:38/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/3:53/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/3:147/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/3:191/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/3:192/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/3:193/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/3:194/editions/en.sahih,ur.ahmedali'),
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 5 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/5:83/editions/en.sahih,ur.ahmedali'),
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 7 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/7:23/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/7:47/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/7:126/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 10 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/10:85/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/10:86/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 11 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/11:47/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 12 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/12:101/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 14 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/14:35/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/14:40/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/14:41/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 17 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/17:24/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/17:80/editions/en.sahih,ur.ahmedali'),
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 18 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/18:10/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 20 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/20:25/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/20:26/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/20:114/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 21 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/21:83/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/21:87/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 23 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/23:29/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/23:94/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/23:97/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/23:98/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/23:109/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/23:118/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 25 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/25:65/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/25:74/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 26 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/26:80/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/26:83/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/26:84/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/26:85/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/26:86/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/26:87/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/26:88/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/26:89/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 27 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/27:19/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 28 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/28:16/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/28:17/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/28:21/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/28:24/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 29 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/29:30/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 35 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/35:34/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 37 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/37:100/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 40 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/40:7/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/40:8/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/40:9/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 44 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/44:12/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 46 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/46:15/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 59 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/59:10/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 60 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/60:4/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/60:5/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 66 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/66:8/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/66:9/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/66:10/editions/en.sahih,ur.ahmedali'),
    rp('http://api.alquran.cloud/v1/ayah/66:11/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 71 /////////////////////////////////
    rp('http://api.alquran.cloud/v1/ayah/71:28/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 112 ////////////////////////////////
    rp('http://api.alquran.cloud/v1/surah/112/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 113 ////////////////////////////////
    rp('http://api.alquran.cloud/v1/surah/113/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Surah 114 ////////////////////////////////
    rp('http://api.alquran.cloud/v1/surah/114/editions/en.sahih,ur.ahmedali'),
    ///////////////////////////////////////////////////////////////////////////
  ]);
}


// Export functions
module.exports = {getAllData};
/**
 * @license
 * Copyright (C) 2010 The Libphonenumber Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function phoneNumberParser() {
  var phoneNumber = document.getElementById('phoneNumber').value;
  var regionCode = document.getElementById('defaultCountry').value;
  var carrierCode = document.getElementById('carrierCode').value;
  var output = "";
  
  try {
    var number = libphonenumber.parse(phoneNumber, regionCode);

    var isNumberValid = libphonenumber.isValidNumber(number);
    output += "Result from isValidNumber(): "+isNumberValid;
    output += "\nResult from isValidNumberForRegion("+(regionCode!=""?regionCode:"unknown")+"): "+libphonenumber.isValidNumberForRegion(number, regionCode);
    if(!regionCode || regionCode == 'ZZ') {
      regionCode = libphonenumber.getRegionCodeForNumber(number);
      output += "\nResult from isValidNumberForRegion("+regionCode+"): "+libphonenumber.isValidNumberForRegion(number, regionCode);
    }
    var countryCode = libphonenumber.getCountryCodeForRegion(regionCode);
    output += "\nResult from getCountryCodeForRegion("+regionCode+"): "+countryCode;
    output += "\nResult from getRegionCodeForCountryCode("+countryCode+"): "+libphonenumber.getRegionCodeForCountryCode(countryCode);
    output += "\nResult from getRegionCodeForNumber(): "+libphonenumber.getRegionCodeForNumber(number);
    
    var PNF = libphonenumber.PhoneNumberFormat;
    output += "\nResult from format(number, PNF.E164): "+libphonenumber.format(number, PNF.E164); // also returns invalid numbers
    output += "\nNumber in E164 format: "+(isNumberValid ? libphonenumber.format(number, PNF.E164) : "invalid");
  } catch (e) {
    output += "\n" + e;
  }
  document.getElementById('output').value = output.toString();
  return false;
}
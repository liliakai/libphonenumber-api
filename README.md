libphonenumber-api
==================

libphonenumber-api is a simple API to use libphonenumber's number verification without having to
include the whole closure-library. Therefore everything needed for number verification is compiled
into [one single file](javascript/i18n/phonenumbers/libphonenumber_api-compiled.js) using the
closure-compiler.


How to use:
===========
To use libphonenumber-api in your own project, simply refer to
[demo-libphonenumber-compiled.html](javascript/i18n/phonenumbers/demo-libphonenumber-compiled.html).

Please also refer to the [documentation of the original libphonenumber]
(https://libphonenumber.googlecode.com/svn/trunk/javadoc/index.html).


How to build
============

Information about building the minified version of libphonenumber_api.js from source can be found in
[libphonenumber's README](javascript/README). To build libphonenumber_api.js, use build-api.xml
instead of build.xml.
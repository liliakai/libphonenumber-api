libphonenumber-api
==================

libphonenumber-api is a simple API to use libphonenumber's number verification without having to
include the whole closure-library. Therefore everything needed for number verification is compiled
into [one single file](libphonenumber_api-compiled.js) using the closure-compiler.


How to use:
===========
To use libphonenumber-api in your own project, simply refer to
[demo-libphonenumber-compiled.html](demo-libphonenumber-compiled.html).

Please also refer to the [documentation of the original libphonenumber]
(https://libphonenumber.googlecode.com/svn/trunk/javadoc/index.html).


How to build
============

To build the minified version of libphonenumber_api.js from source simply execute [build.sh](build.sh).
More information about building can be found in [libphonenumber's README]
(deps/libphonenumber/javascript/README).

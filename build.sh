
# check if ant is installed
command -v ant >/dev/null 2>&1 || { echo >&2 "Apache Ant is required for building. Aborting."; exit 1; }

# clone/checkout dependencies
echo "Do you wish to update the dependencies (closure-library, closure-compiler, closure-linter and python-gflags)?"
select yn in "Yes" "No"; do
    case $yn in
        Yes)    echo "Cloning/Checking out dependencies..."
                rm -rf deps/closure-library
                rm -rf deps/closure-compiler
                rm -rf deps/closure-linter
                rm -rf deps/python-gflags
                git clone https://github.com/google/closure-library.git deps/closure-library
                git clone https://github.com/google/closure-compiler.git deps/closure-compiler
                svn checkout http://closure-linter.googlecode.com/svn/trunk/ deps/closure-linter
                svn checkout http://python-gflags.googlecode.com/svn/trunk/ deps/python-gflags
                break;;
        No )    break;;
        *)      echo "Please choose one of the options above, dude! ;)";
    esac
done

# update libphonenumber
echo "Do you wish to update 'deps/libphonenumber'?"
select yn in "Yes" "No"; do
    case $yn in
        Yes)    rm -rf deps/libphonenumber
                svn checkout http://libphonenumber.googlecode.com/svn/trunk/ deps/libphonenumber
                break;;
        No )    break;;
        *)      echo "Please choose one of the options above, dude! ;)";
    esac
done

echo "Building closure-compiler..."
ant -f deps/closure-compiler/build.xml

echo "Building libphonenumber-api..."
ant -f build-api.xml compile-libphonenumber_api

echo ""
echo "INFO: If build fails because of 'GetJavaVersion' in deps/closure-library/closure/bin/calcdeps.py,"
echo "change 'version_line' to 'version_line.decode('utf-8')'"
echo "INFO: If build fails because of 'Compile' in deps/closure-library/closure/bin/calcdeps.py,"
echo "change 'stdoutdata' to 'stdoutdata.decode('utf-8')'"

echo "The demo (of the complied version) can be found here:"
echo "$(pwd)/demo-libphonenumber-compiled.html"

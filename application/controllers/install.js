/**
 *
 *    _____ ___ _____  _    _   _ ___ ___  _   _ ____
 *   |_   _|_ _|_   _|/ \  | \ | |_ _/ _ \| | | / ___|
 *     | |  | |  | | / _ \ |  \| || | | | | | | \___ \
 *     | |  | |  | |/ ___ \| |\  || | |_| | |_| |___) |
 *     |_| |___| |_/_/   \_|_| \_|___\___/ \___/|____/
 *
 *
 * CONTROLLER FILE - installation
 *
 * @author Jimmy Aupperlee <jimmy@codeprogressive.com>
 * @copyright codeProgressive
 */

'use strict';

/*
 |--------------------------------------------------------------------------
 | Constructor
 |--------------------------------------------------------------------------
 */
var installController = function() {};

installController.prototype.repository = function(os, callback) {

    var self = this;

    self.exec("sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10", function(err, result){

        if(err) {

            var index, value, result;

            if(typeof err === 'object') {

                for (index = 0; index < err.length; ++index) {
                    value = err[index];
                    if (value.indexOf("processed: 1") !== -1) {
                        result = value;
                        break;
                    }
                }

            }

            if(typeof result === 'undefined') {
                callback(err);
            }
        }

        self.exec("echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list", function(err, result){

            if(err) {
                callback(err);
            }

            callback();
        });
    });
};

installController.prototype.installation = function(os, callback) {

    var self = this;

    self.exec("sudo apt-get update", function(err, result){

        if(err) {
            callback(err);
        }

        self.exec("echo 'Y' | sudo apt-get install mongodb-org", function(err, result){

            if(err) {
                callback(err);
            }

            callback();
        });
    });
};

installController.prototype.verification = function(os, callback) {

    var self = this;

    self.exec("mongo --version", function(err, result){

        if(err) {
            callback(err);
        }

        callback();
    });
};

// Export the module!
module.exports = installController;
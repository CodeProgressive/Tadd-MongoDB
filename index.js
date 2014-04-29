/**
 *
 *    _____ ___ _____  _    _   _ ___ ___  _   _ ____
 *   |_   _|_ _|_   _|/ \  | \ | |_ _/ _ \| | | / ___|
 *     | |  | |  | | / _ \ |  \| || | | | | | | \___ \
 *     | |  | |  | |/ ___ \| |\  || | |_| | |_| |___) |
 *     |_| |___| |_/_/   \_|_| \_|___\___/ \___/|____/
 *
 *
 * MONGODB TADD
 *
 * This is an addon built for Titanious for use with
 * MongoDB
 *
 * @author Jimmy Aupperlee <jimmy@codeprogressive.com>
 * @copyright codeProgressive
 */

'use strict';

// Constructor for the object
var tadd_mongodb = function(){};

tadd_mongodb.prototype.install = function(sessid, callback) {

    return this.configure('installation', {

//        preconfig : "install@config",
        install : [
            "install@repository",
            "install@installation",
            "install@verification"
        ]

    }, sessid, callback);
};

tadd_mongodb.prototype.remove = function() {

    return this.configure('remove', {

        remove : [
            "remove@installation",
            "remove@repository"
        ]
    });
};

tadd_mongodb.prototype.postInstall = function() {

    return this.configure('available', {

        menu : "menu"
    });
};

// Export the module!
module.exports = tadd_mongodb;
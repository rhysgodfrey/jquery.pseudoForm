// jQuery plugin to scope form postbacks https://github.com/rhysgodfrey/jquery.pseudoForm
// version 1.0, 5th May 2012 by Rhys Godfrey (http://www.rhysgodfrey.co.uk)
// This plugin is released under the FreeBSD License, see https://github.com/rhysgodfrey/jquery.pseudoForm/blob/master/License.txt for more information

// Based on jQuery Plugin Boilerplate version 1.1, May 14th, 2011 by Stefan Gabos

(function ($) {

    // here we go!
    $.pseudoForm = function (element, options) {

        // plugin's default options
        // this is private property and is  accessible only from inside the plugin
        var defaults = {
            postbackUrl: ''

        }

        // to avoid confusions, use "plugin" to reference the
        // current instance of the object
        var plugin = this;

        // this will hold the merged default, and user-provided options
        // plugin's properties will be available through this object like:
        // plugin.settings.propertyName from inside the plugin or
        // element.data('pseudoForm').settings.propertyName from outside the plugin,
        // where "element" is the element the plugin is attached to;
        plugin.settings = {}

        var $element = $(element), // reference to the jQuery version of DOM element
             element = element;    // reference to the actual DOM element

        // the "constructor" method that gets called when the object is created
        plugin.init = function () {

            // the plugin's final properties are the merged default and
            // user-provided options (if any)
            plugin.settings = $.extend({}, defaults, options);

            var self = this;

            $element.children(':submit').each(function () {
                $(this).click(function () {
                    var jqForm = $element.parents('form');

                    var externalnputs = jqForm.find(':input').not($element.find(':input'));
                    externalnputs.attr('disabled', 'disabled');

                    if (self.settings.postbackUrl != '') {
                        var form = jqForm.get(0);

                        form.action = self.settings.postbackUrl;
                    }
                });
            });
        }

        // fire up the plugin!
        // call the "constructor" method
        plugin.init();

    }

    // add the plugin to the jQuery.fn object
    $.fn.pseudoForm = function (options) {

        // iterate through the DOM elements we are attaching the plugin to
        return this.each(function () {

            // if plugin has not already been attached to the element
            if (undefined == $(this).data('pseudoForm')) {

                // create a new instance of the plugin
                // pass the DOM element and the user-provided options as arguments
                var plugin = new $.pseudoForm(this, options);

                // in the jQuery version of the element
                // store a reference to the plugin object
                // you can later access the plugin and its methods and properties like
                // element.data('pseudoForm').publicMethod(arg1, arg2, ... argn) or
                // element.data('pseudoForm').settings.propertyName
                $(this).data('pseudoForm', plugin);

            }

        });

    }

})(jQuery);
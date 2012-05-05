jquery.pseudoForm
=======================================

## Introduction ##

ASP.Net web forms limit developers to one form per page. There are techniques to work around this when
required, in particular the use of the PostBackUrl attribute on button controls. This works well, but all
inputs on the form are posted to the PostBackUrl, this plugin helps limit the form fields that are posted
to the target URL.

As this is a jQuery plugin this is not limited to ASP.Net web form sites, but in any similar situation.

## Usage ##

Copy the jquery.pseudoForm javascript file into your site, and add a reference to it on to your page,
after referencing jQuery:

``` html
<script type="text/javascript" src="/scripts/jquery.pseudoForm.js"></script>
```

Wrap the form elements you wish to post together in a div (or any other HTML element), for example

``` html
<form action="/test.aspx" method="POST" id="mainForm" name="mainForm">
    <div id="formAreaOne">
	    <input type="hidden" name="var1" id="var1" value="one" />
		<input type="text" name="var2" id="var2" value="two" />
		<textarea id="var3" name="var3"></textarea>
		<input type="submit" name="button1" id="button1" value="Button One" />
		<input type="submit" name="button2" id="button2" value="Button Two" />
	</div>

	<div id="formAreaTwo">
	    <input type="text" name="var4" id="var4" value="four" />
	    <input type="hidden" name="var5" id="var5" value="five" />
		<input type="submit" name="button3" id="button3" value="Button Three" />
	</div>
</form>
```

Currently clicking any of the 3 buttons will cause all form fields (var1-5) to be posted to test.aspx.

The pseudoForm jQuery plugin allows you to turn one of the div's into a standalone form, e.g. only posting
var4 and var5 after clicking button3:

``` html
<script type="text/javascript">
    $(document).ready(function () {
        $('#formAreaTwo').pseudoForm();
    });
</script>
```

The same can be applied to formAreaOne.

If you would like one of the 'forms' to post to a different URL specify the postbackUrl setting as below:

``` html
<script type="text/javascript">
    $(document).ready(function () {
        $('#formAreaTwo').pseudoForm({ postbackUrl : '/OtherPage.aspx' });
    });
</script>
```

## License ##

This plugin is released under the *FreeBSD License*, see **LICENSE.txt** for more information.

Blog: http://www.rhysgodfrey.co.uk
Twitter: @rhysgodfrey



CasperJS-IDE
===========

**Any phantom deserves a resurrection.**

CasperJS-IDE is a Chrome extension allowing to record a sequence of browser
actions and to produce the corresponding `CasperJS  <http://casperjs.org/>`_
script.

As **CasperJS evaluates JavaScript**, recorded sequences are not limited
to pure HTML interactions, targeted pages JavaScript-supported behaviors will
be accurately reproduced.

This extension also provides a way to produce **screenshots** alongside your test
scenario, and can export comments + screenshots in ReStructuredText format in
order to generate documentation automatically from the test sequences.

**Check also original plugin**

CasperJS-IDE based on Resurrectio (https://github.com/ebrehault/resurrectio) created by Makina Corpus <ebrehault@gmail.com>


Installation
============

CasperJS / PhantomJS
--------------------

Install `PhantomJS <http://code.google.com/p/phantomjs/wiki/Installation>`_,
be careful CasperJS requires PhantomJS >= 1.8.2.

Install `CasperJS <http://casperjs.org/installation.html>`_ version 1.1.

CasperJS-IDE installation
-------------------------

From Github sources::

    git clone git@github.com:MaximOrlovsky/CasperJS-IDE.git

It will produce a ./CasperJS-IDE folder.

Then, in Chrome:

    - go to **Tools / Extensions**,
    - expand **Developer mode**,
    - click **Load unpacked extension**,
    - select the ./CasperJS-IDE folder.

Usage
=====

Click on the extension icon.

Enter the start URL, and click Go.

Then execute your usage scenario, all the events will be recorded.

By right-clicking on the page, you might also record some assertion (about the
current url, about existing text, etc.).

You can request a **screenshot** at any moment (they will be produced everytime
you run the resulting test).

You might also record some comments (click again on the extension icon, and
click **Add comment**).

When you are done, click again on the extension icon, and
click **Stop recording**.

Now, generate the CasperJS test script by clicking **Export Casper test**.

You might copy/paste the resulting code into a local file, and run the test::

    casperjs test my_scenario.js

It will play your entire scenario and generate the screenshots.

Future features
===============

Implement more mouse events, like drag & drop and mousewheel.

Credits
=======

Author of changes
------
* Max Orlovsky <mailto:work@sattu.net>
* CasperJS-IDE event recorder is based on the Resurrectio tool, created by Eric BREHAULT <eric.brehault@makina-corpus.org>

Resurrectio Author
------
* Eric BREHAULT <eric.brehault@makina-corpus.org>
* Resurrectio event recorder is based on the zope.recorder tool, created by Brian Lloyd <brian@zope.com>

|makinacom|_

* `Resurrectio Author: Makina Corpus blog <http://makina-corpus.com/blog/metier/>`_
* `Contact Resurrectio author <mailto:python@makina-corpus.org>`_


.. |makinacom| image:: http://depot.makina-corpus.org/public/logo.gif
.. _makinacom:  http://www.makina-corpus.com



import React, { useEffect } from 'react';

const NewsletterForm = () => {
  useEffect(() => {
    // JavaScript 代碼
    (function ($) {
      $(document).ready(function () {
        function ValidateEmail(mail) {
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return true;
          }
          return false;
        }

        function checkform() {
          console.log(ValidateEmail(jQuery("#email").val()));
          if (!ValidateEmail(jQuery("#email").val())) {
            jQuery("#result").empty().append("Please enter a valid email address");
            $("#email").focus();
            return false;
          }
          return true;
        }

        function submitForm() {
          const successMessage = 'Thank you for your registration. Please check your email to confirm.';
          const data = jQuery('#subscribeform').serialize();

          jQuery.ajax({
            type: 'POST',
            data: data,
            url: 'https://news.hosted.phplist.com/lists/?p=asubscribe&id=2',
            success: function (data) {
              data = data.replace(/<script.*?>[\s\S]*?<\/script>/ig, "");
              data = data.replace('<link rel="stylesheet" href="admin/ui/phplist-ui-bootlist/css/style.css" />', '');
              jQuery("#result").empty().append(data !== '' ? data : successMessage);
              jQuery('#email').val('');
            },
            error: function (request, status, error) {
              alert('Sorry, we were unable to process your subscription.');
            }
          });
        }

        $('#subscribeform').submit(function (e) {
          e.preventDefault();
          if (checkform()) {
            submitForm();
          }
          return false;
        });
      });
    })(jQuery);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
          <form action="#" id="subscribeform">
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
              </div>
            </div>
            <div id="result" className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Action;

'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  it('should automatically redirect to /dashboard when location hash/fragment is empty', function() {
      //throw new error('foo')
    //browser.get('index.html');
    //expect(browser.getLocationAbsUrl()).toMatch("/dashboard");
  });

  describe('dashboard', function() {

    beforeEach(function() {
      //browser.get('/#!/dashboard');
      //browser.driver.manage().window().setSize(360, 640);
    });

    it('should render view1 when user navigates to /view1', function() {
      //expect(element.all(by.css('[ng-view] p')).first().getText()).toMatch(/partial for view 1/);
    });

    /*
     ### LOOKS
     - As we are mobile first, the app should be optimized for 360px x 640px, portrait mode.
     - For the purpose of this exercise it will only be judged at that size, so don't worry about a tablet or desktop version.
     - A screenshot of our current details page is provided for guidance. The dashboard is up to you.


     ### INSTRUCTIONS
     - Using the program_blueprints.json, construct a grid (2 or 3 columns per row, preferably using flexbox) of program icons using the blueprint's icon_url as the image, and the display_type as the unique identifier.
     - Use the blueprint's title attribute to display a name underneath the icon.
     - Pay special attention to the program's display order, and make sure to display them in order.

     ### THE MEAT

     - Each icon when clicked should go a details page, where we will be given:
     - The program's icon, title, and description (where available).
     - The program's "incentive_description", telling us what we can earn and how.
     - If the "incentive_description" is null, assume there are no rewards / earnings.
     - Check for any goals the program might have. To do this you must look in the goals array of the blueprint, and match up the GUID you find with a GUID in the goals.json. Inside these goals you will find an "incentive_value".

     YOU ARE HERE!!!

     - If the program has multiple goals, tally up the "incentive_value"s of all the goals.
     - If the program has one goal, use the incentive_value of that goal
     - Display the total incentive value in the details page. Bonus points if you also list the goals and their individual values.

     - A back button should let the user go back to the dashboard to pick other programs.

     */


  });


  describe('view2', function() {

    beforeEach(function() {
      //browser.get('index.html#!/details/');
    });


    it('should render view2 when user navigates to /view2', function() {
      //expect(element.all(by.css('[ng-view] p')).first().getText()).toMatch(/partial for view 2/);
    });

  });
});

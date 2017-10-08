Shree Ganesh 19 sep - Tuesday

Configure Providers
      :-SRC-https://codecraft.tv/courses/angular/dependency-injection-and-providers/providers/
        We can configure a provider to provide classes
        However, there are 4 types of dependencies providers can provide in Angular.

          1)useClass

            We can have a provider which maps a token to a class, like so:

            providers:[
              { provide: Car, useClass: Car },
            ];

          2)useExisting

            We can make two tokens map to the same thing via aliases, like so:
             provider: [
                { provide: GenericEmailService, useClass: GenericEmailService },
                { provide: MandrillService, useExisting: GenericEmailService },
                { provide: SendGridService, useExisting: GenericEmailService }
              ]
                let emailService1 = injector.get(SendGridService);
                  console.log(emailService1); // GenericEmailService {}
                let emailService2 = injector.get(MandrillService);
                  console.log(emailService2); // GenericEmailService {}
                let emailService3 = injector.get(GenericEmailService);
                  console.log(emailService3); // GenericEmailService {}


            The token GenericEmailService resolves to an instance of GenericEmailService.
            This provider maps the token MandrillService to whatever the existing GenericEmailService provider points to.
            This provider maps the token SendGridService to whatever the existing GenericEmailService provider points to.

          3) useValue

             We can also provide a simple value, like so:

             providers: [
               { provide: "APIKey", useValue: 'XYZ1234ABC' }
             ]
             let apiKey = injector.get("APIKey");
             console.log(apiKey); // "XYZ1234ABC"
          4)  useFactory

              We can also configure a provider to call a function every-time a token is requested, leaving it to the provider to figure out what to return, like so:

                const isProd = true;

                providers[{ provide: "EmailService",
                    useFactory: () => {
                      if (isProd) {
                        return new MandrillService();
                      } else {
                        return new SendGridService();
                      }
                    }
                  },
                ];

                let emailService1 = injector.get("EmailService");
                console.log(emailService1); // MandrillService {}

spyOn
  In Jasmine, mocks are referred to as spies.
    How many times the spied function was called.
    What was the value that the function returned to the caller.
    How many parameters the function was called with.

     There are two ways to create a spy in Jasmine:

       spyOn() can only be used when the method already exists on the object,
          //spyOn(object, methodName) where object.method() is a function
          spyOn(obj, 'myMethod')

       whereas jasmine.createSpy() will return a brand new function:
          //jasmine.createSpy(stubName);
          var myMockMethod = jasmine.createSpy('My Method');


1) spyOn- This is like adding a layer on built in function, tracking its calls
  can only be used when the method already exists on the object
    spyOn(testPerson, "getName");
    expect(testPerson.getName).toHaveBeenCalled();

2)jasmine.createSpy - This is like replicating original function, for the sake of tracking the original one
    The original one will never get invoked.

    :- creating spy
      describe("Person toString() Test with Fake getName() Method", function() {
          it("calls the fake getName() function", function() {
              var testPerson = new Person();
              testPerson.getName = jasmine.createSpy("getName() spy");
              testPerson.toString();
              expect(testPerson.getName).toHaveBeenCalled();
          });
      });
    :- return something on call
        testPerson.getName = jasmine.createSpy("getName() spy").andReturn("Bobby");

    :- creating fake body, that will invoke on call
        testPerson.getName = jasmine.createSpy("getName() spy").andCallFake(function() {

            console.log("Hello from getName()");
            return "Bobby";
        });

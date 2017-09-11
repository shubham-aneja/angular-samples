Shree Ganesh  7-Sep

Also there are some issue, those have been noted in issues file
  of this project

Get Form value
  <p>Form value: {{ heroForm.value | json }}</p>
  <p>Form status: {{ heroForm.status | json }}</p>

Inspect FormControl Properties
    You can use this technique to display any property of a FormControl
      such as one of the following:
        myControl.value
        myControl.status
        myControl.pristine
        myControl.untouched

    this.heroForm.get('name')
    this.heroForm.get('hiddenBlaBlaBla')
    <p>Street value: {{ heroForm.get('address.street').value}}</p>

SRC- Learn more about abstract contron properties
      https://angular.io/api/forms/AbstractControl


copying the data model properties to the form model with the patchValue and setValue methods.

    setValue
      With setValue, you assign every form control value at once by passing in a data object whose properties exactly match the form model behind the FormGroup.
        this.heroForm.setValue({
          name:    this.hero.name,
          address: this.hero.addresses[0] || new Address()
        });

      The setValue method checks the data object thoroughly before assigning any form control values.

      It will not accept a data object that doesn't match the FormGroup structure or is missing values for any control in the group. This way, it can return helpful error messages if you have a typo or if you've nested controls incorrectly. patchValue will fail silently.


    patchValue
      this.heroForm.patchValue({
        name: this.hero.name
      });
      With patchValue you have more flexibility to cope with wildly divergent data and form models. But unlike setValue, patchValue cannot check for missing control values and does not throw helpful errors.


When to set form model values (ngOnChanges)


Using FormBuilder
    FormBuilder.group is a factory method that creates a FormGroup.
    FormBuilder.group takes an object whose keys and values are FormControl names
      and their definitions. In this example, the name control is
       defined by its initial data value, an empty string.
    Eg. this.heroForm = this.fb.group({
          name: ['', Validators.required ],
        });


Points/notes

Observe control changes
  Angular does not call ngOnChanges when the user modifies the hero's name or secret lairs. Fortunately, you can learn about such changes by subscribing to one of the form control properties that raises a change event.

  These are properties, such as valueChanges, that return an RxJS Observable

      nameChangeLog: string[] = [];
      logNameChange() {
        const nameControl = this.heroForm.get('name');
        nameControl.valueChanges.forEach(
          (value: string) => this.nameChangeLog.push(value)
        );
      }
    **Call it in the constructor, after creating the form.

    When to use it

    An interpolation binding is the easier way to display a name change. Subscribing to an observable form control property is handy for triggering application logic within the component class

Create a new form. How to reset form in this case along with adding some default value/state.
    this.heroForm.reset({
      name: this.hero.name
    });
    //First argument is default value...


How to use FormArray
  The trick lies in knowing how to write the *ngFor. There are three key points:

    Add another wrapping <div>, around the <div> with *ngFor, and set its formArrayName directive to "secretLairs". This step establishes the secretLairs FormArray as the context for form controls in the inner, repeated HTML template.
    The source of the repeated items is the FormArray.controls, not the FormArray itself. Each control is an address FormGroup, exactly what the previous (now repeated) template HTML expected.
    Each repeated FormGroup needs a unique formGroupName which must be the index of the FormGroup in the FormArray. You'll re-use that index to compose a unique label for each address.


      <div formArrayName="secretLairs" class="well well-lg">
        <div *ngFor="let address of secretLairs.controls; let i=index" [formGroupName]="i" >
          <!-- The repeated address template -->
        </div>
      </div>

      Complete markup for one field
        <div formArrayName="secretLairs" class="well well-lg">
          <div *ngFor="let address of secretLairs.controls; let i=index" [formGroupName]="i" >
            <!-- The repeated address template -->
            <h4>Address #{{i + 1}}</h4>
            <div style="margin-left: 1em;">
              <div class="form-group">
                <label class="center-block">Street:
                  <input class="form-control" formControlName="street">
                </label>
              </div>





    How to create/update a groupArray**
       Use "setControl" to update value
          Also "js array" first need to converted into FormBuilder array, then
              assign to object.
          But can call push to add new group into an existing one. That is totally fine.
            Like this:     this.secretLairs.push(this.fb.group(new Address()));

      Example- ref- reactive form
      const addressFGs = addresses.map(address => this.fb.group(address));
      const addressFormArray = this.fb.array(addressFGs);
      this.heroForm.setControl('secretLairs', addressFormArray);


      this.secretLairs.push(this.fb.group(new Address()));

WHen to change the value
    You should reset the form when the hero changes so that control values from the previous hero are cleared and status flags are restored to the pristine state.





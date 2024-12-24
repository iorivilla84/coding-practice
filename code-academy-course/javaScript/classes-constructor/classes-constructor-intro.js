class Dog {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }
  
  
  const halley = new Dog('Halley');
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console
  halley.incrementBehavior(); // Add one to behavior
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console
  console.log(halley.behavior);
  halley.incrementBehavior();
  console.log(halley.behavior);


  // ---------------------- INSTANCES
  class SurgeonHand {
    constructor(name, department) {
      this.name = name;
      this.department = department;
    }
  }
  
  // New Instance
  const surgeonRomero = new SurgeonHand('Francisco Romero', 'Cardiovascular');

    // New Instance
  const surgeonJackson = new SurgeonHand('Ruth Jackson', 'Orthopedics');
  
  console.log(surgeonRomero.name + ', ' + 
   surgeonRomero.department);
  
  console.log(surgeonJackson.name + ', ' + 
   surgeonJackson.department);
  
// ---------------------- Methods

class Surgeon {
    constructor(name, department, vacations) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = vacations;
    }
  
    get name() {
      return this._name;
    }
  
    get department() {
      return this._department;
    }
  
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
  
    takeVacationDays(daysOff) {
      return this._remainingVacationDays = this._remainingVacationDays - daysOff;
    }
  }
  
  const MainSurgeon = new Surgeon('Francisco Romero', 'Cardiovascular', 25);
  const auxSurgeon = new Surgeon('Ruth Jackson', 'Orthopedics');
  
  const surgeonDetails = 
    `${MainSurgeon.name} belong to the ${MainSurgeon.department} department,
    he has ${MainSurgeon.remainingVacationDays} days of holydays but he has taken already 10,
    the remaining holydays are ${MainSurgeon.takeVacationDays(10)} days`
  
  console.log(surgeonDetails)

  // -----------------INHERITANCE CLASS AND SUBCLASS
  class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  
    static generatePassword() {
      const date = Date.now();
      return {
        random: Math.floor(Math.random() * 10.000),
        date: date,
        message: 'Hello Word of improvement'
      }
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    } 
    
    get certifications() {
      return this._certifications;
    }
    
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications);
  
  console.log(HospitalEmployee.generatePassword().random);
  console.log(HospitalEmployee.generatePassword().date);
  console.log(HospitalEmployee.generatePassword().message);
  
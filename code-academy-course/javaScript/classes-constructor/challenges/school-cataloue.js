class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    set numberOfStudents(students) { 
      if(typeof students === 'number' && !isNaN(students)) {
        this._numberOfStudents = students;
      } else {
        this._numberOfStudents = 'Invalid input: numberOfStudents must be set to a Number.'
      }
    }
  
    quickFatcs() {
      console.log(`${this._name} educates 
        ${this._numberOfStudents} students at the ${this._level} school level.
      `)
    }
  
    static pickSubstituteTeacher(substituteTeachers) {
      const randomTeacher = Math.floor(Math.random() * substituteTeachers.length);
  
      return substituteTeachers[randomTeacher]
    }
  }
  
  class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  console.log(lorraineHansbury)
  lorraineHansbury.quickFatcs();
  School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))
  
  class Middle extends School {
    constructor(name, numberOfStudents) {
      super(name, numberOfStudents);
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams() {
      console.log(this._sportsTeams);
      return this._sportsTeams;
    }
  }
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field', 'Tennis', 'Soccer', 'Gaming', 'Sweaming', 'Polo'])
  const theTeam = alSmith.sportsTeams;
  console.log('length is: ', theTeam.length)
  
  const teamRes = theTeam.filter(member => member.toLowerCase().startsWith('s'))
  console.log('team member', teamRes)
  
  class SchoolCatalog {
    constructor(primary, middle, high) {
      this._primary = primary;
      this._middle = middle;
      this._high = high;
    }
  
    get primary() {
      return this._primary;
    }
  
    get middle() {
      return this._middle;
    }
  
    get high() {
      return this._high;
    }
  }
  
  const elementarySchools = [
    'Greenwood Elementary',
    'Sunnyvale Primary School',
    'Oakridge Academy',
    'Meadowbrook Elementary',
    'Willow Creek School'
  ];
  
  const middleSchools = [
    'Riverview Middle School',
    'Hilltop Preparatory School',
    'Maple Valley Middle School',
    'Cedarwood Academy',
    'Lakeside Junior High'
  ];
  
  const highSchools = [
    'Summit High School',
    'Pine Valley High',
    'Westfield Academy',
    'Evergreen Senior High',
    'Brookstone High School'
  ];
  
  console.log("-------- schoolCatalog -------")
  const schoolCatalog = new SchoolCatalog(elementarySchools, middleSchools, highSchools)
  
  const allSchools = {
    Primary: elementarySchools,
    Middle: middleSchools,
    High: highSchools,
  };
  
  // Function to retrieve and prefix schools
  const infoSchools = (level) => {
    const schools = allSchools[level] ? allSchools[level] : allSchools['Primary'];
    return schools.map(school => `school: ${school}`);
  };
  
  const schoolDet = infoSchools('Middle'); // Get only high schools
  console.log('details: ', schoolDet);
  
  
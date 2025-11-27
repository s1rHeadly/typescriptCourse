

/** Combining Types*/

type TUser = {
  id: number;
  name: string; email: string;
  isLoggedIn: boolean;
};



type TAdmin = TUser & {
  role: 'admin';
};





/** Extending interfaces */

interface IUser {
  id: string | number;
  name: string;
  email: string;
}


interface IAdmin extends IUser {
  role: 'admin';
}


/** Interface can only describe an object, not a primitive type. It is used to describe the structure of an object.
 *  Type can describe a primitive type, an object, a function, a union, an intersection, etc.
*/


type TAddress = string | string[]; // correct string or array of strings
// Interface TAddress = string; // incorrect
let address: TAddress = "123 Main St, Anytown, Australia";
address = ["123 Main St, Anytown, Australia", "456 Main St, Anytown, Australia"];



// omitting properties
/**
 * Omit<T, K> creates a new type by removing properties K from type T.
 * This is useful when you want to create a new type that is similar to T but without certain properties.
 */

type TPublicUser = {
  name: string;
  email: string;
  id: number;
};


const publicUser: TPublicUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  id: 1,
};



// remove email property and create a new type PublicPerson
type PublicPerson = Omit<TPublicUser, "email">;


const publicUser2: PublicPerson = {
  name: "John Doe",
  id: 1,
};


// remove email property and and id property and create a new type StaffMember
type StaffMember = Omit<TPublicUser, "email" | "id">;


const staffMember: StaffMember = {
  name: "John Doe",
};



//we can do it with interface but its syntax is different
interface IGuestUser {
  name: string;
  email: string;
  id: number;
  role: string;
}

interface IPrivateUser extends Omit<IGuestUser, "email" | "id"> { };


const privateUser: IPrivateUser = {
  name: "John Doe",
  role: 'Secret Agent',
};




// tuples are used to describe an array with a fixed length and a specific type for each element 

// interface Tperson{  => with interface we can't describe the type of the array
//   0: string;
//   1: number;
// }

type TPerson = [string, number];
const personTuple: TPerson = ['John', 20];





// Extraction of properties from an object
type projectType = {
  building: string;
  title: string;
  specifications: {
    bedrooms: number;
    bathrooms: number;
    squareFootage: number;
    areaSize: number,
  };
};

const myProject: projectType = {
  building: '123 Main St',
  title: 'My Project',
  specifications: {
    bedrooms: 3,
    bathrooms: 2,
    squareFootage: 1500,
    areaSize: 1500,
  },
};

// create a type of the specifications only
type specificationsType = projectType['specifications'];


const mySpecifications: specificationsType = {
  bedrooms: 3,
  bathrooms: 2,
  squareFootage: 1500,
  areaSize: 1500,
};






// as const keyword is used when you want to make a value fully immutable and as literal as possible. ie Keep everything as it is.
const mySpecificationsUpdated: specificationsType = {
  bedrooms: 3,
  bathrooms: 2,
  squareFootage: 1500,
  areaSize: 1500,
} as const;




mySpecificationsUpdated.bedrooms = 5; // ❌ This would cause a TypeScript error - bedrooms is readonly
mySpecificationsUpdated.areaSize = 2500; // ❌ This would cause a TypeScript error - areaSize is readonly







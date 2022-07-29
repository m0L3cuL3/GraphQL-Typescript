
/**
 * This module will handle user commands. We will learn about resolvers later in this article.
 */

// Get all of the available data from our database.
import people from "./dataset"; 

const Resolvers = {
  Query: {
    // If the user runs the getAllPeople command:
    getAllPeople: () => people, 
    
    // If the user runs the getPerson command:
    getPerson: (_: any, args: any) => { 
      console.log(args);

      // Get the object that contains the specified ID.
      return people.find((person) => person.id === args.id);
    },
  },
  Mutation: {
    // Create our mutation:
    addPerson: (_: any, args: any) => {

      // New Person object.
      const newPerson = {
        id: people.length + 1, // Id Field.
        name: args.name, // Name Field.
      };

      people.push(newPerson);
      return newPerson; // Return the new object's result.
    },
  },
};
export default Resolvers;
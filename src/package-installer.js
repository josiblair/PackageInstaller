// ***IDEAS***
// if dependencies don't contain cycles, structure is a tree => traverse the tree postOrder and import each package in this order
// parse each package in array into array of objects --> "KittenService: CamelCaser" => [{package: 'KittenService', dependency: 'CamelCaser'}]
// topological sort
// should probably use a forEach()??

export function packageInstaller(packages) {
    
    // check for packages
    if(packages === null) {
        return "no packages";
    }
    if( !Array.isArray(packages) ) {
        return "packages is not array";
    }
    packages.forEach( val => {
        if(typeof val !== 'string') {
            return "packages data type is not string";
        }
    })


    // make packages array into object(s)
    const arrayToObject = () => {
        const objs = {};
    }

    
    
  }
  
  export default packageInstaller;
  
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


    // make packages array into object(s) --> goal => [ {pkg: 'KittenService', dep: 'CamelCaser'}, {pkg: 'CamelCaser: ', dep: ' '} ]
    const arrayToObject = () => {
        const objs = {};

        packages.forEach( val => {
            const vals = val.split(': ');
            console.log('values', vals); 
            
            const pkg = vals[0]; 
            const dep = vals[1];

            console.log('pkg', pkg);
            console.log('dep', dep);
        })
    }

    
    
  }
  
  export default packageInstaller;
  
// ***IDEAS***
// if dependencies don't contain cycles, structure is a tree => traverse the tree postOrder and import each package in this order
// parse each package in array into array of objects --> "KittenService: CamelCaser" => [{package: 'KittenService', dependency: 'CamelCaser'}]
// topological sort
// should probably use a forEach()??

export function packageInstaller(packages) {
    
    if (packages.length === 0) {
        return "";
    }
    else if (packages.length === 1) {
        const pack = packages[0].slice(0, -2);
        return pack;
    }

    // make packages array into object(s) --> goal => [ {pkg: 'KittenService', dep: 'CamelCaser'}, {pkg: 'CamelCaser: ', dep: ' '} ]
    const arrayToObject = () => {
        const objs = {};
// split each pkg/dep string and store to variables
        packages.forEach( val => {
            const vals = val.split(': ');
            console.log('values', vals); 
            
            const pkg = vals[0]; 
            const dep = vals[1];

            console.log('pkg', pkg);
            console.log('dep', dep);

// check if already in objs const => if not, store into object array
            if( !objs[pkg] ) objs[pkg] = [];

            if(dep.length > 0 && !objs[dep]) objs[dep] = [];
        });
        console.log(objs); // returning: { Kittenservice: [], Camelcaser: [] };
        return objs;
    }

    
    
  }
  
  export default packageInstaller;
  
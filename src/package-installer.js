// ***IDEAS***
// if dependencies don't contain cycles, structure is a tree => traverse the tree postOrder and import each package in this order
// parse each package in array into array of objects --> "KittenService: CamelCaser" => [{package: 'KittenService', dependency: 'CamelCaser'}]
// topological sort
// should probably use a forEach()??
// create dictionary then sort 

export function packageInstaller(packages) {
    if (packages.length === 0) {
        return "";
    }
    else if (packages.length === 1) {
        const pack = packages[0].slice(0, -2);
        return pack;
    }

    const arrayToObject = () => {
        const objs = {};

        packages.forEach( val => {
            const vals = val.split(':');

            const pkg = vals[0].trim(); // when given ["KittenService: CamelCaser", "CamelCaser: "]
            const dep = vals[1].trim(); // returns pkg=KittenService dep=CamelCaser   pkg=CamelCaser dep= 

            if( !objs[pkg] ) objs[pkg] = [];

            if( dep.length > 0 && !objs[dep] ) objs[dep] = [];

            if( dep.length > 0 ) 
                objs[pkg].push(dep);
        });

        return objs;  // returns { KittenService: [ 'CamelCaser' ], CamelCaser: [] }
    }
  }
  
  export default packageInstaller;
  
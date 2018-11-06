// ***IDEAS***
// if dependencies don't contain cycles, structure is a tree => traverse the tree postOrder and import each package in this order
// parse each package in array into array of objects --> "KittenService: CamelCaser" => [{package: 'KittenService', dependency: 'CamelCaser'}]
// topological sort
  // Kahn's 1962 topological sort
  // A map of the input data, with the keys as the packages, and the values as
  // and array of packages on which it depends.
// should probably use a forEach() 
// create dictionary then sort (recursively)
// *flat dependencies* *dependency hell*

export function packageInstaller(packages) {
    if (packages.length === 0) {
        return "";
    }
    else if (packages.length === 1) {
        const pack = packages[0].slice(0, -2);
        return pack;
    }

    const arrayToObject = () => {
        let objs = {};

        packages.forEach( val => {
            let vals = val.split(':');

            let pkg = vals[0].trim(); // when given ["KittenService: CamelCaser", "CamelCaser: "]
            let dep = vals[1].trim(); // returns pkg=KittenService dep=CamelCaser   pkg=CamelCaser dep= 

            if( !objs[pkg] ) objs[pkg] = [];

            if( dep.length > 0 && !objs[dep] ) objs[dep] = [];

            if( dep.length > 0 ) 
                objs[pkg].push(dep);
        });

        return objs;  
    }

    const parsed = arrayToObject();  // { KittenService: [ 'CamelCaser' ], CamelCaser: [] }

    const firstSort = (param) => {
        let final = [];
        let sorted = {};
        const pack = Object.keys(parsed); // ['KittenService', 'CamelCaser']

        pack.forEach( (val) => {
            secondSort(val, []);
        })
        
        function secondSort(val, arr) {
            if( sorted[val] ) {
                return;
            }
            arr.push(val);

            let pkg = param[val];

            pkg.forEach( (dep) => {  //max call stack -- looping?
                 (arr.indexOf(dep) >= 0) ? 'contains a cycle' : secondSort(dep, []);
            })

            final.push(val);
        }

        return final;
    }

    const installOrder = () => {
        return firstSort(parsed);
    }
    return installOrder();

  }
  
  export default packageInstaller;
  
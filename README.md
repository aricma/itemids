# ItemIds

![tests](https://github.com/aricma/itemids/workflows/tests/badge.svg)
[![codecov](https://codecov.io/gh/aricma/itemids/branch/master/graph/badge.svg)](https://codecov.io/gh/aricma/itemids)

*Be faster in creating and updating react state, with ItemIds.*

## Usage

with npm:
``npm install @aricma/itemids``

with yarn:
``yarn add @aricma/itemids``


example for react state:
```JSX
function Gallery({ images }) {
    // STATE HANDLER HOOK
    const { selection, toggle } = useGalleryState();
    
    return (
        <div>
            {
                images.map(({ id, name, src }) => {
                    const isSelected = selection.has(id)
                    return (
                        <Image
                            key={index}
                            isSelected={isSelected} // for styling in Image
                            alt={name}
                            src={src}
                            onClick={ toggle(id) }
                        />
                    )
                })
            }
        </div>
    )
}

function useGalleryState() {
    // STATE
    const [selection, setSelection] = useState(ItemIds()); // [] -> [1,2,3] the ids of the images
    
    // ACTIONS
    function toggle(id) {
        return function() {
            setSelection(prevSelection => prevSelection.toggle(id))
        }
    }
    
    return { selection, toggle }
}
```

example for react effects:
```JSX
function useGalleryState(initialSelection) {
    // STATE
    const [selection, setSelection] = useState(ItemIds(initialSelection));

    // ACTIONS
    // ...
    
    // EFFECTS
    useEffect(() => {
        if(!selection.isEqualTo(initialelection)) {
            setSelection(prevSelection => prevSelection.set(initialelection))
        }
    }, [initialSelection])
    
    return { selection, toggle }
}
```


## API

ItemIds is a function returning an array object. ItemIds has some "util" methods on it. The methods on the returned 
object however are extensions to the Js Array object. 
All methods on the returned object are returning "this" so they can be piped.


*Checkout the .test files to see in detail how the methods on ItemIds can be used.*

```javascript
// create a new ItemIds object
// ItemIds is an extended Array. so everything that you would do with Arrays can be done with ItemIds
let itemIds = ItemIds(); // []
itemIds = ItemIds([1,2,3]); // [1,2,3]


// constructor methods or utils
// these methods are helpful for validating the input of an ItemIds object

// every ItemIds object has a name="ItemIds" property
// ItemIds.isItemIds iss checking for that value
ItemIds.isItemIds([]); // false
ItemIds.isItemIds(itemIds); // true

// ids should either be string or number but not NaN
ItemIds.isItemId(1); // true
ItemIds.isItemId(true); // false

ItemIds.isItemIdList([1,"2",3]); // true
ItemIds.isItemIdList([1,2, {}]); // false

ItemIds.unify([1,2,2,3]); // [1,2,3]


// methods
// these methods are helpful setting and updating the "state"
ItemIds() // []

// set
// is good for custom actions and also for testing your state with e.g. jest
.set([2]) // [2]
.set(prev => [1,prev[0],3]) // [1,2,3]
.set() // [] reset
.set([1,2,3]) // [1,2,3]

// add
.add(1) // [1]
.add([2,3]) // [1,2,3]

// remove
.remove(1) // [2,3]
.remove([2,3]) // []

// toggle
// is a shortcut for when you want the logic to listen for a "click" event 
.toggle(1) // [1]
.toggle([1,2]) // [2]
.toggle([1,2,3]) // [1,3]

// toggleAll
// is taking all possible ids as argument
// is perfect for an "select all" button 
.toggleAll([1,2,3]) // [1,2,3]
.toggleAll([1,2,3]) // []

// has
// is especially helpful with styling the already selected
.set([1,2,3])
.has(1) // true
.has([1,2]) // true
.has([1,2,4]) // false

// isEqualTo
// is very helpful in useEffects when updating the state based on changes from the outside
.isEqualTo([1,2,3]) // true
.isEqualTo([1,2,3,4]) // false
```

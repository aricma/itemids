# ItemIds

![tests](https://github.com/aricma/itemids/workflows/tests/badge.svg)
[![codecov](https://codecov.io/gh/aricma/itemids/branch/master/graph/badge.svg)](https://codecov.io/gh/aricma/itemids)

*Be faster in creating and updating react state, with ItemIds.*

## Usage

### install

with npm:
``npm install @aricma/itemids``

with yarn:
``yarn add @aricma/itemids``

### examples

in react state:
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

in react effects:
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


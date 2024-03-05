
import { ErrorState } from "./static_Components"

export function VariantController({ instance, variant, fixedID }) {
    let _elem
    let variants = {}

    _elem = findNestedPropertyControls(instance)
    // Ensure _elem is valid before proceeding
    if (!_elem)
        return (
            <ErrorState>
                <b>Error:</b>Nested component for this trigger not found. Please
                make sure to connect a trigger that has a open and closed
                variant.
            </ErrorState>
        )

    variants = ExtractVariants(_elem) || {}

    // Ensure required variants are present
    if (variants == {})
        return <ErrorState>Required variants are missing.</ErrorState>

    // Initial state of variant
    const [variantState, setVariantState] = useState(variants[variant])

    //Handles changes to the variant
    useEffect(() => {
        setVariantState(variants[variant])
    }, [variant])

    // Clone the element with the updated variant prop
    const clonedElement = React.cloneElement(_elem, {
        layoutId: fixedID,
        id: fixedID,
        variant: variantState,
        tabIndex: -1, // Use the state that holds the current variant
        style: {
            ...element.props.style, // Safely spread original style props
            width: "100%",
        },
    })

    return clonedElement
}


/**
 * Recursively searches for a nested component that contains propertyControls.
 *
 * @param {Object} obj - The object or component to start the search from.
 * @returns The first nested component that contains propertyControls, or null if none is found.
 */
export function FindNestedPropertyControls(obj) {
    // Check if the current object has a 'children' property that meets the criteria.
    if (
        obj &&
        obj.children &&
        obj.children.props &&
        obj.children.type &&
        obj.children.type.propertyControls
    ) {
        return obj.children
    }

    // Continue the search recursively with 'props.children' if it exists.
    return obj.props ? findNestedPropertyControls(obj.props) : null
}
/**
 * Extracts variant mappings from an object's property controls.
 *
 * @param {Object} object - The object containing property controls with variant information.
 * @returns An object mapping variant titles to their corresponding hash keys, or null if no variants are found.
 */
export function ExtractVariants(object) {
    // Check if the object has a variant in its type property controls
    if (!object?.type?.propertyControls?.variant) {
        return null
    }

    // Destructure the options and optionTitles from the variant property
    const { options: hashTitles, optionTitles } =
        object.type.propertyControls.variant
    let variants = {}

    // Map each option title to its corresponding hash key
    for (let i = 0; i < hashTitles.length; i++) {
        variants[optionTitles[i]] = hashTitles[i]
    }

    // Return the mapped variants
    return variants
}
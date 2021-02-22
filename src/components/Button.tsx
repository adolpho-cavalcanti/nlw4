interface ButtonProps {
    color: string;
    children: string;
}

export default function Button(props: ButtonProps) {
    return (
        <button type="button" style={{backgroundColor:props.color}}>
            {props.children}
        </button>
    )
} 
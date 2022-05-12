const Input = (props) => {
    return (
        <input className="border-[#351dab] border text-[#351dab] w-1/2 p-2" {...props}>
            {props.children}
        </input>
    );
};

export default Input;
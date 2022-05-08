const Button = (props) => {
    return (
        <div className="cursor-pointer bg-[#351dab] text-white w-1/2 m-auto rounded p-2">
            {props.children}
        </div>
    );
};

export default Button;